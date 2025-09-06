"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useStore } from "../../store";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const bears = useStore((state) => state.bears);
  const params = useParams();
  const locale = params?.locale || "en";

  const toggleMenu = () => setIsOpen(!isOpen);

  // Variants for desktop links animation
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0"
          >
            <a href="/" className="text-2xl font-bold text-gray-900">
              ShopSmart
            </a>
          </motion.div>

          {/* Centered Menu (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {["Home", "Products", "About", "Contact"].map((text, i) => (
              <motion.a
                key={text}
                href={`/${locale}/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                className="text-gray-700 hover:text-black relative group"
              >
                {text}
                {/* Underline hover animation */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

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

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="space-y-2 px-4 pt-4 pb-6">
              {["Home", "Products", "About", "Contact"].map((text) => (
                <a
                  key={text}
                  href={`/${locale}/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                  className="block text-gray-700 hover:text-black"
                >
                  {text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
