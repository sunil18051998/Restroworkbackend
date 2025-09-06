import React from 'react'
import { Star, ShoppingCart, Truck, ShieldCheck } from 'lucide-react'
import '../common.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';


type Feature = {
  icon: React.ReactElement
  title: string
  desc: string
}

type Testimonial = {
  name: string
  feedback: string
  img: string
}

type Translation = {
  heroTitle: string
  heroDesc: string
  cta: string
  whyTitle: string
  features: Feature[]
  testimonialsTitle: string
  testimonials: Testimonial[]
  ctaTitle: string
  ctaDesc: string
  ctaBtn: string
}

type Translations = {
  [key: string]: Translation
  en: Translation
  de: Translation
  // Add more locales as needed
}

const translations: Translations = {
  en: {
    heroTitle: 'Shop Smarter, Live Better',
    heroDesc:
      'Discover our exclusive collection of high-quality products designed to make your life easier and more stylish.',
    cta: 'Start Shopping',
    whyTitle: 'Why Choose Us?',
    features: [
      {
        icon: <ShoppingCart className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Wide Selection',
        desc: 'Explore a diverse range of products to suit every need.',
      },
      {
        icon: <Truck className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Fast Delivery',
        desc: 'Get your orders delivered quickly and safely.',
      },
      {
        icon: <ShieldCheck className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Secure Shopping',
        desc: 'Your privacy and payment safety are our top priorities.',
      },
      {
        icon: <Star className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Trusted Reviews',
        desc: 'See what our happy customers say about us.',
      },
    ],
    testimonialsTitle: 'What Our Customers Say',
    testimonials: [
      {
        name: 'Aarav Sharma',
        feedback:
          'Amazing shopping experience! The products are top-notch and delivery was super fast.',
        img: 'https://i.pravatar.cc/100?img=1',
      },
      {
        name: 'Priya Singh',
        feedback:
          'I love the quality and variety available here. Definitely my go-to shopping site!',
        img: 'https://i.pravatar.cc/100?img=2',
      },
    ],
    ctaTitle: 'Ready to Upgrade Your Shopping?',
    ctaDesc: 'Join thousands of happy customers who found their perfect products here.',
    ctaBtn: 'Shop Now',
  },
  de: {
    heroTitle: 'Clever einkaufen, besser leben',
    heroDesc:
      'Entdecken Sie unsere exklusive Kollektion hochwertiger Produkte, die Ihr Leben einfacher und stilvoller machen.',
    cta: 'Jetzt einkaufen',
    whyTitle: 'Warum uns wählen?',
    features: [
      {
        icon: <ShoppingCart className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Große Auswahl',
        desc: 'Entdecken Sie eine Vielzahl von Produkten für jeden Bedarf.',
      },
      {
        icon: <Truck className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Schnelle Lieferung',
        desc: 'Erhalten Sie Ihre Bestellungen schnell und sicher.',
      },
      {
        icon: <ShieldCheck className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Sicheres Einkaufen',
        desc: 'Ihre Privatsphäre und Zahlungssicherheit sind unsere oberste Priorität.',
      },
      {
        icon: <Star className="mx-auto w-10 h-10 text-blue-600 mb-4" />,
        title: 'Vertrauenswürdige Bewertungen',
        desc: 'Lesen Sie, was unsere zufriedenen Kunden sagen.',
      },
    ],
    testimonialsTitle: 'Was unsere Kunden sagen',
    testimonials: [
      {
        name: 'Aarav Sharma',
        feedback:
          'Tolles Einkaufserlebnis! Die Produkte sind erstklassig und die Lieferung war super schnell.',
        img: 'https://i.pravatar.cc/100?img=1',
      },
      {
        name: 'Priya Singh',
        feedback: 'Ich liebe die Qualität und Vielfalt hier. Definitiv meine Lieblingsseite!',
        img: 'https://i.pravatar.cc/100?img=2',
      },
      {
        name: 'Rahul Verma',
        feedback:
          'Der Kundenservice war ausgezeichnet und die Produkte haben meine Erwartungen übertroffen.',
        img: 'https://i.pravatar.cc/100?img=3',
      },
    ],
    ctaTitle: 'Bereit für ein besseres Einkaufserlebnis?',
    ctaDesc:
      'Schließen Sie sich Tausenden zufriedener Kunden an, die hier ihre perfekten Produkte gefunden haben.',
    ctaBtn: 'Jetzt shoppen',
  },
  // Add more locales as needed
}

export default async function HomePage(props: {
  params: Promise<{ locale: keyof typeof translations }>
}) {
  const { locale } = await props.params

  const selectedLocale = locale in translations ? locale : 'en'
  const t = translations[selectedLocale]

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
