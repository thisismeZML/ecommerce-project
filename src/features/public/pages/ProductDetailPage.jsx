import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { useUserStore } from "../../../stores/useUserStore";
import toast from "react-hot-toast";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // For redirection
  const { userInfo } = useUserStore();
  const { mutate } = useSWRConfig();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useSWR(
    `https://fakestoreapi.com/products/${id}`,
    fetcher
  );

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  const addToCart = async (userId, productId, productQuantity) => {
    if (!userId) {
      toast.error("Please log in to add products to the cart.");
      navigate("/login"); // Redirect to login page
      return;
    }

    // Existing Add to Cart Logic
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${userId}`);
      const existingCart = response.ok
        ? await response.json()
        : { products: [] };

      const existingProduct = existingCart.products.find(
        (item) => item.productId === productId
      );

      const updatedProducts = existingCart.products.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + productQuantity }
          : item
      );

      if (!existingProduct) {
        updatedProducts.push({ productId, quantity: productQuantity });
      }

      const updatedCart = {
        userId,
        date: new Date().toISOString().split("T")[0],
        products: updatedProducts,
      };

      const method = response.ok ? "PATCH" : "POST";
      const url = response.ok
        ? `https://fakestoreapi.com/carts/${userId}`
        : `https://fakestoreapi.com/carts`;

      const updateResponse = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCart),
      });

      if (updateResponse.ok) {
        toast.success("Product added to cart!");
        mutate(`https://fakestoreapi.com/carts/${userId}`);
      } else {
        const errorResponse = await updateResponse.json();
        toast.error("Failed to update the cart.");
        console.error("Cart update error:", errorResponse);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("An error occurred while adding the product.");
    }
  };

  if (isLoading || !product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <span className="ml-4 text-gray-700 font-medium">Loading product...</span>
      </div>
    );
  }

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-8">
          {/* Product Image */}
          <div className="relative group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md mx-auto object-contain rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Category: <span className="font-medium">{product.category}</span>
              </p>
              <p className="text-2xl font-bold text-green-500">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mt-4">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-yellow-500 text-lg">
                  {"★".repeat(Math.round(product.rating.rate)) +
                    "☆".repeat(5 - Math.round(product.rating.rate))}
                </span>
                <span className="text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-800">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(userInfo?.id, product.id, quantity)}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
