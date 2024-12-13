import React, { useState, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import { FaPlus, FaEye } from "react-icons/fa6";
import { Link, useSearchParams, useNavigate } from "react-router-dom"; // Added useNavigate
import { useUserStore } from "../../../stores/useUserStore";
import toast from "react-hot-toast";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ShopPage = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate(); // To redirect to login page
  const categoryParam = params.get("category") || "";
  const sortParam = params.get("sort") || "asc";
  const [cat, setCat] = useState(categoryParam);
  const [sort, setSort] = useState(sortParam);

  const { userInfo } = useUserStore();

  const { data: categories, isValidating: categoriesLoading } = useSWR(
    `https://fakestoreapi.com/products/categories`,
    fetcher
  );

  const { data: products, isValidating: productsLoading } = useSWR(
    `https://fakestoreapi.com/products${
      cat ? `/category/${cat}` : ""
    }?sort=${sort}`,
    fetcher
  );

  const { mutate } = useSWRConfig();

  const addToCart = async (userId, productId) => {
    if (!userId) {
      toast.error("Please log in to add products to the cart.");
      navigate("/login");
      return;
    }
  
    try {
      // Fetch the user's existing cart
      const response = await fetch(`https://fakestoreapi.com/carts/${userId}`);
      const existingCart = response.ok
        ? await response.json()
        : { products: [] }; // Create a new cart object if no cart exists
  
      // Check if the product is already in the cart
      const existingProduct = existingCart.products.find(
        (item) => item.productId === productId
      );
  
      let updatedProducts;
      if (existingProduct) {
        // Increase quantity if product exists
        updatedProducts = existingCart.products.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to the cart
        updatedProducts = [...existingCart.products, { productId, quantity: 1 }];
      }
  
      // Update the cart payload
      const updatedCart = {
        userId,
        date: new Date().toISOString().split("T")[0],
        products: updatedProducts,
      };
  
      // Decide whether to use POST or PATCH
      const method = response.ok ? "PATCH" : "POST";
      const url = response.ok
        ? `https://fakestoreapi.com/carts/${userId}`
        : `https://fakestoreapi.com/carts`;
  
      // Send the updated cart to the API
      const updateResponse = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCart),
      });
  
      if (updateResponse.ok) {
        const updatedCartData = await updateResponse.json();
        console.log("Updated cart:", updatedCartData); // Debugging log
        toast.success("Product added to cart!");
        mutate(`https://fakestoreapi.com/carts/${userId}`); // Revalidate cart data
      } else {
        const errorResponse = await updateResponse.json();
        console.error("Cart update error:", errorResponse);
        toast.error("Failed to update the cart.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("An error occurred while adding the product.");
    }
  };
  

  const catSkes = Array.from({ length: 5 }, (_, index) => index + 1);

  useEffect(() => {
    const updatedParams = { sort };
    if (cat) updatedParams.category = cat;
    setParams(updatedParams);
  }, [cat, sort, setParams]);

  return (
    <div className="my-[80px]">
      <div className="container">
        <div className="grid grid-cols-4 gap-5">
          {/* Category Sidebar */}
          <div className="col-span-1">
            <h1 className="text-xl uppercase tracking-wide font-semibold">
              Category
            </h1>
            <ul className="flex flex-col gap-7 mt-5 p-2">
              <li
                onClick={() => setCat("")}
                className={`cursor-pointer capitalize tracking-wide custom-underline ${
                  cat === "" ? "text-blue-500" : ""
                }`}
              >
                All Products
              </li>
              {categoriesLoading
                ? catSkes.map((_, index) => (
                    <li
                      key={index}
                      className="animate-pulse h-4 bg-gray-300 rounded-md"
                    ></li>
                  ))
                : categories.map((category, index) => (
                    <li
                      onClick={() => setCat(category)}
                      key={index}
                      className={`cursor-pointer capitalize tracking-wide custom-underline ${
                        cat === category ? "text-blue-500" : ""
                      }`}
                    >
                      {category}
                    </li>
                  ))}
            </ul>
          </div>

          {/* Products Section */}
          <div className="col-span-3">
            <div className="mb-4">
              <label htmlFor="sort" className="mr-2">
                Sort By:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 border rounded bg-white text-gray-700"
              >
                <option value="asc">ID: Ascending</option>
                <option value="desc">ID: Descending</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {productsLoading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[280px] bg-gray-300 animate-pulse rounded-md"
                    ></div>
                  ))
                : products?.map(({ id, category, image, price, title }) => (
                    <div key={id}>
                      <div className="flex items-center justify-center border h-[280px] relative group overflow-hidden">
                        <img
                          src={image}
                          alt={title}
                          className="w-28 h-28 object-contain"
                        />

                        <div className="absolute top-2 right-2 flex flex-col gap-4 items-center shadow-md p-3 translate-x-[120%] group-hover:translate-x-0 duration-200">
                          <button
                            onClick={() => addToCart(userInfo?.id, id)}
                            className="size-7 bg-white flex items-center justify-center border border-gray-300 rounded-full hover:shadow-lg"
                          >
                            <FaPlus className="text-black" />
                          </button>

                          <Link to={`${id}`}>
                            <button className="size-7 bg-blue-500 flex items-center justify-center border border-blue-500 rounded-full hover:shadow-lg">
                              <FaEye className="text-white" />
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 py-3">
                        <p className="text-slate-500 text-sm">{category}</p>
                        <h1>{title}</h1>
                        <p>${price}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
