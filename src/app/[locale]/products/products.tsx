"use client";

import React from "react";
import "../../common.css";
import { motion } from "framer-motion";
import Image from "next/image";

type Product = {
    image: string;
    name: string;
    description: string;
    category: string;
    price: number;
    inStock: boolean;
};

type ProductsSectionProps = {
    products: Product[];
};

export default function ProductsSection({ products }: ProductsSectionProps) {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6 text-center"
            >
                Our Products
            </motion.h1>

            {/* Products Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
                    >
                        <Image
                            width={300}
                            height={300}
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {product.description}
                        </p>
                        <p className="text-gray-500 text-xs mb-2">{product.category}</p>
                        <div className="mt-auto flex justify-between items-center">
                            <span className="text-xl font-bold text-blue-600">
                                ₹{product.price}
                            </span>
                            {product.inStock ? (
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                                    In Stock
                                </span>
                            ) : (
                                <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">
                                    Out of Stock
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
