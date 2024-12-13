import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:underline">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:underline">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:underline">
                Press
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="hover:underline">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/new-arrivals" className="hover:underline">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/sales" className="hover:underline">
                Sales
              </Link>
            </li>
            <li>
              <Link to="/gift-cards" className="hover:underline">
                Gift Cards
              </Link>
            </li>
            <li>
              <Link to="/stores" className="hover:underline">
                Store Locator
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaYoutube size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2024 YourShop. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
