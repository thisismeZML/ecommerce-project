import React, { useState, useEffect } from "react";
import { useUserStore } from "../../../stores/useUserStore";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const CartPage = () => {
  const { userInfo } = useUserStore();
  const [cartProducts, setCartProducts] = useState([]);
  const TAX_RATE = 0.1; // 10% tax rate

  const { data: cart, isLoading: isCartLoading } = useSWR(
    userInfo ? `https://fakestoreapi.com/carts/${userInfo.id}` : null,
    fetcher
  );

  useEffect(() => {
    const fetchProducts = async () => {
      if (cart?.products?.length) {
        const productRequests = cart.products.map(({ productId }) =>
          axios.get(`https://fakestoreapi.com/products/${productId}`)
        );
        const products = await Promise.all(productRequests);
        setCartProducts(
          products.map((res, idx) => ({
            ...res.data,
            quantity: cart.products[idx].quantity,
          }))
        );
      }
    };

    fetchProducts();
  }, [cart]);

  const handleQuantityChange = (productId, increment) => {
    setCartProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity + increment) }
          : product
      )
    );
  };

  const handleRemoveProduct = (productId) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const calculateSubtotal = () =>
    cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const calculateTax = (subtotal) => subtotal * TAX_RATE;

  const calculateNetTotal = (subtotal, tax) => subtotal + tax;

  if (isCartLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-4 text-gray-700 font-medium">Loading cart...</span>
      </div>
    );
  }
  

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const netTotal = calculateNetTotal(subtotal, tax);

  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Cart Table */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
          {cartProducts.length ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                      #
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                      Product
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                      Total
                    </th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product, index) => (
                    <tr
                      key={product.id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="py-4 px-6 text-sm text-gray-700">{index + 1}</td>
                      <td className="py-4 px-6 flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-12 h-12 object-contain rounded-md"
                        />
                        <span className="truncate text-gray-800 font-medium">
                          {product.title}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                            onClick={() => handleQuantityChange(product.id, -1)}
                          >
                            -
                          </button>
                          <span className="font-medium text-gray-800">{product.quantity}</span>
                          <button
                            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        ${(product.price * product.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-700">
                        <button
                          className="text-red-500 hover:text-red-600 hover:underline transition"
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Checkout Section */}
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-700">Tax (10%)</span>
            <span className="font-medium text-gray-800">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-lg font-bold text-gray-800">Net Total</span>
            <span className="text-lg font-bold text-green-600">${netTotal.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
