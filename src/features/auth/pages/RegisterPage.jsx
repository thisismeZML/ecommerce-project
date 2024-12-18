import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      username: data.username,
      password: data.password,
      name: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      address: {
        city: data.city,
        street: data.street,
        number: parseInt(data.number, 10),
        zipcode: data.zipcode,
        geolocation: {
          lat: data.lat,
          long: data.long,
        },
      },
      phone: data.phone,
    };

    console.log("Payload:", payload);

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User registered successfully:", result);
        navigate(`/login`);
        toast.success("Registration successful!");
      } else {
        console.error("Error during registration:", response.statusText);
        toast.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="h-[90dvh] flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-10 shadow-lg rounded-lg border border-gray-200 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black tracking-wider">
          Create an Account
        </h2>

        <form
          className="grid grid-cols-2 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* First Name */}
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-500"
            >
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              {...register("firstname", { required: "First name is required" })}
              placeholder="Enter your first name"
              className={`w-full border ${
                errors.firstname ? "border-red-500" : "border-gray-300"
              } px-4 py-2 mt-1 text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded`}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstname.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-500"
            >
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              {...register("lastname", { required: "Last name is required" })}
              placeholder="Enter your last name"
              className={`w-full border ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              } px-4 py-2 mt-1 text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded`}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastname.message}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="col-span-2">
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
              placeholder="Choose a username"
              className={`w-full border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } px-4 py-2 mt-1 text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } px-4 py-2 mt-1 text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Create a password"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } px-4 py-2 mt-1 text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Additional Fields for Address */}
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-500"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city", { required: "City is required" })}
              placeholder="Enter city"
              className={`w-full border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } px-4 py-2 mt-1 text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded`}
            />
          </div>
          {/* Add similar fields for `street`, `zipcode`, `lat`, and `long` */}

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg text-lg uppercase tracking-widest hover:bg-black transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
