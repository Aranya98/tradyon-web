import Head from "next/head";
import CompanyInfo from "../components/CompanyInfo";
import Navigation from "../components/Navigation";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);



  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>KMG Robust</title>
        <meta name="description" content="KMG Robust Company" />
      </Head>
      <CompanyInfo />
      <Navigation />
      <ProductCard/>

    </div>
  );
}