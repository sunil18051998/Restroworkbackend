"use client";

import React from "react";
import { Users, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import '../../common.css';
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
      // ...other strings
    },
    de: {
      title: "Über ShopSmart",
      mission: "Unsere Mission ist es, Qualitätsprodukte mit Vertrauen und Sorgfalt zu Ihnen zu bringen.",
      // ...other strings
    },
    // Add more locales
  };

  const t = translations[locale] || translations.en;

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.mission}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide top-quality products with unbeatable value, backed by
              exceptional customer support.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in integrity, transparency, and putting our customers
              first in everything we do.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Community</h3>
            <p className="text-gray-600">
              Building a loyal customer base by delivering products that make
              everyday life easier and better.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://picsum.photos/200/300"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Aarav Sharma</h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://picsum.photos/200/300"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Priya Mehta</h3>
              <p className="text-gray-600 text-sm">Head of Marketing</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://picsum.photos/200/300"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Rohan Patel</h3>
              <p className="text-gray-600 text-sm">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Be a part of our growing community of smart shoppers. Discover products
          that bring joy, comfort, and value to your life.
        </p>
        <a
          href="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
    <Footer />
    </>
    
  );
}
