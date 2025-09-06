"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useStore } from "../../store";
import { useParams } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const bears = useStore((state) => state.bears);
  const params = useParams();
  const locale = params?.locale || 'en';

  console.log("Locale in Navbar:", locale);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">
              ShopSmart
            </a>
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href={`/${locale}/products`} className="text-gray-700 hover:text-black">
              Products
            </a>
            <a href={`/${locale}/about`} className="text-gray-700 hover:text-black">
              About
            </a>
            <a href={`/${locale}/contact`} className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>

          {/* Cart (Right Side) */}
          {/* <div className="hidden md:flex items-center">
            <a
              href="/cart"
              className="flex items-center space-x-1 text-gray-700 hover:text-black"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 px-4 pt-4 pb-6">
            <a href="/" className="block text-gray-700 hover:text-black">
              Home
            </a>
            <a href={`/${locale}/products`} className="block text-gray-700 hover:text-black">
              Products
            </a>
            <a href={`/${locale}/about`} className="block text-gray-700 hover:text-black">
              About
            </a>
            <a href={`/${locale}/contact`} className="block text-gray-700 hover:text-black">
              Contact
            </a>
            {/* <a
              href="/cart"
              className="flex items-center space-x-1 text-gray-700 hover:text-black"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
}

