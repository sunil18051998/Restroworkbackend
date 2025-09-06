

import "../../common.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Productssection from "./products";

async function getProducts(locale: string = "en") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products?locale=${locale}&limit=20`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.docs;
}

export default async function ProductsPage() {
  const products = await getProducts("en");

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
    <>
      <Navbar />
      <Productssection products={products} />
      <Footer />
    </>
  );
}
