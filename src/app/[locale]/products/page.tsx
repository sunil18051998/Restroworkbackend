
import Image from "next/image";
import '../../common.css';
import { JsonObject } from "payload";
import Navbar from "@/components/Navbar";

async function getProducts(locale: string = "en") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products?locale=${locale}&limit=20`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.docs;
}

async function createProduct(params: JsonObject) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/products`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(params),
});
const data = await res.json();  
}

export default async function ProductsPage() {
  let product1 = {
    name: "Product 2",
    description: "A great product",
    price: 99.99,
    category: "Sample Category",
    inStock: true,
    // image: <mediaId> // if you have an uploaded image
  };

  //createProduct(product1);
  const products = await getProducts("en");
  //console.log(products);

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any, index: any) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            <img
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
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

