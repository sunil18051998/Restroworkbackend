"use client";

import React from "react";
import { Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import "../../common.css";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

export default function AboutUs() {
  const params = useParams();
  const localeParam = params?.locale;
  const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam || "en";

  const translations: { [key: string]: { title: string; mission: string } } = {
    en: {
      title: "About ShopSmart",
      mission: "Our mission is to bring quality products to your doorstep with trust and care.",
    },
    de: {
      title: "Über ShopSmart",
      mission: "Unsere Mission ist es, Qualitätsprodukte mit Vertrauen und Sorgfalt zu Ihnen zu bringen.",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="bg-white py-20 shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.title}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.mission}
            </motion.p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
                title: "Our Mission",
                desc: "To provide top-quality products with unbeatable value, backed by exceptional customer support.",
              },
              {
                icon: <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />,
                title: "Our Values",
                desc: "We believe in integrity, transparency, and putting our customers first in everything we do.",
              },
              {
                icon: <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />,
                title: "Our Community",
                desc: "Building a loyal customer base by delivering products that make everyday life easier and better.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <motion.section
          className="bg-white py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {["Aarav Sharma", "Priya Mehta", "Rohan Patel"].map((name, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="https://picsum.photos/200/300"
                    alt="Team Member"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-gray-600 text-sm">
                    {i === 0 ? "Founder & CEO" : i === 1 ? "Head of Marketing" : "Lead Developer"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-16 bg-blue-600 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Be a part of our growing community of smart shoppers. Discover products
            that bring joy, comfort, and value to your life.
          </p>
          <motion.a
            href={`/${locale}/products`}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.a>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}
