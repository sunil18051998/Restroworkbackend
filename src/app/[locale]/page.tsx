import React from 'react'
import { Star, ShoppingCart, Truck, ShieldCheck } from 'lucide-react'
import '../common.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';


export default async function HomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params

  const selectedLocale = locale ? locale : 'en'

  let apiurl = '';
  if (selectedLocale === 'de') {
    apiurl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/homepage/68bbd0e3362edf032683830e`
  } else {
    apiurl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/homepage/68bbcf87362edf03268382a9`
  }

  const homepgdata = await fetch(
    apiurl,
    { cache: 'no-store' }
  ).then((res) => res.json())

  let t = homepgdata;

  homepgdata.features.map((feature, index) => {
    if (feature.icon === 'star') {
      feature.icon = <Star className="mx-auto w-10 h-10 text-blue-600 mb-4" />
    } else if (feature.icon === 'shopping-cart') {
      feature.icon = <ShoppingCart className="mx-auto w-10 h-10 text-blue-600 mb-4" />
    } else if (feature.icon === 'truck') {
      feature.icon = <Truck className="mx-auto w-10 h-10 text-blue-600 mb-4" />
    } else if (feature.icon === 'shield-check') {
      feature.icon = <ShieldCheck className="mx-auto w-10 h-10 text-blue-600 mb-4" />
    }
  })

  t.features = homepgdata.features;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{t.heroTitle}</h1>
            <p className="text-gray-600 mb-6">{t.heroDesc}</p>
            <a href={`/${locale}/products`} className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              {t.cta}
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="https://picsum.photos/seed/hero/600/400"
              alt="Shopping"
              className="rounded-2xl shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">{t.whyTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {t.features.map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white shadow rounded-xl hover:shadow-md transition"
              >
                {feature.icon}
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">{t.testimonialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.img}
                    width={48}
                    height={48}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">“{testimonial.feedback}”</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-600 mb-6">{t.ctaDesc}</p>
          <a href={`/${locale}/products`} target='_blank' className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            {t.ctaBtn}
          </a>
        </section>
      </div>
      <Footer />
    </>
  )
}
