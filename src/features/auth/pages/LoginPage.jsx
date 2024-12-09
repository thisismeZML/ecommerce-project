import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="h-[90dvh] flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 shadow-md rounded-lg border border-gray-300">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6 text-black tracking-wider">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-500"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              placeholder="Enter your username"
              className={`w-full border ${
                errors.username ? "border-red-500" : "border-black"
              } px-4 py-2 mt-1 text-black focus:outline-none focus:ring focus:ring-black rounded`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-black"
              } px-4 py-2 mt-1 text-black focus:outline-none focus:ring focus:ring-black rounded`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
                className="h-4 w-4 text-black border-gray-300 focus:ring-black rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-500"
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-black hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg text-lg uppercase tracking-widest hover:bg-gray-800 transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link 
              to="/register"
              className="font-medium text-black hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
