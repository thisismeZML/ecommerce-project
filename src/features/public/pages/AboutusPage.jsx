import React from "react";
import Image from "../../../assets/group.jpg";
const AboutusPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            Discover our story, values, and commitment to exceptional quality.
          </p>
        </div>
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Established in 2024, <strong>RAYY</strong> is dedicated to
              delivering stylish and affordable fashion that empowers
              individuals. Our mission is to inspire confidence through timeless
              designs and exceptional service.
            </p>
          </div>
          <div>
            <img
              src={Image}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We prioritize creativity and forward-thinking to stay ahead of
                trends.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Our commitment to eco-friendly practices ensures a better
                future.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Building lasting connections with our customers and partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;
