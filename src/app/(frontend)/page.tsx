import React from "react";
import { Star, ShoppingCart, Truck, ShieldCheck } from "lucide-react";
import '../common.css';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '@/payload.config'

export default async function HomePage() {
  //  const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // console.log("headers = ", headers);
  // console.log("payload = ", payload);
  // console.log("user = ", user);

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Shop Smarter, Live Better
          </h1>
          <p className="text-gray-600 mb-6">
            Discover our exclusive collection of high-quality products designed
            to make your life easier and more stylish.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Start Shopping
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://picsum.photos/seed/hero/600/400"
            alt="Shopping"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white shadow rounded-xl hover:shadow-md transition">
            <ShoppingCart className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
            <p className="text-sm text-gray-600">
              Explore a diverse range of products to suit every need.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow rounded-xl hover:shadow-md transition">
            <Truck className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Get your orders delivered quickly and safely.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow rounded-xl hover:shadow-md transition">
            <ShieldCheck className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
            <p className="text-sm text-gray-600">
              Your privacy and payment safety are our top priorities.
            </p>
          </div>
          <div className="text-center p-6 bg-white shadow rounded-xl hover:shadow-md transition">
            <Star className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Trusted Reviews</h3>
            <p className="text-sm text-gray-600">
              See what our happy customers say about us.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Aarav Sharma",
              feedback:
                "Amazing shopping experience! The products are top-notch and delivery was super fast.",
              img: "https://i.pravatar.cc/100?img=1",
            },
            {
              name: "Priya Singh",
              feedback:
                "I love the quality and variety available here. Definitely my go-to shopping site!",
              img: "https://i.pravatar.cc/100?img=2",
            },
            {
              name: "Rahul Verma",
              feedback:
                "Customer service was excellent, and the products exceeded my expectations.",
              img: "https://i.pravatar.cc/100?img=3",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="font-semibold">{t.name}</h3>
              </div>
              <p className="text-gray-600 italic">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Upgrade Your Shopping?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of happy customers who found their perfect products
          here.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Shop Now
        </button>
      </section>
    </div>
    <Footer />
    </>
    
  );
}
