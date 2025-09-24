

import "../../common.css";
//import Navbar from "@/components/Navbar";
import Navbar from "../../../components/Navbar";
//import Footer from "@/components/Footer";
import Footer from "../../../components/Footer";
import Productssection from "./products";

async function getProducts(locale: string = "en") {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products?locale=${locale}&limit=20`,
  //   { cache: "no-store" }
  // );
  // const data = await res.json();
  // return data.docs;
  return [];
}

export default async function ProductsPage() {
  const products = await getProducts("en");

  return (
    <>
      <Navbar />
      <Productssection products={products} />
      <Footer />
    </>
  );
}
