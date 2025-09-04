import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopSmart</h2>
          <p className="text-sm text-gray-400">
            Shop smarter, live better. Your trusted online store for
            quality products at the best prices.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
}
