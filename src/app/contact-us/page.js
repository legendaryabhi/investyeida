import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BelowSection from "@/components/BelowSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white w-full relative overflow-hidden">
      {/* Background Pattern */}
      
      <Header />
<div className="absolute inset-0 bg-[url('/image.svg')] opacity-50 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="w-full px-20 pt-20 text-black text-start">
        <h1 className="text-4xl font-medium tracking-tight">Contact InvestYeida</h1>
        <p className="mt-3 text-lg max-w-xl opacity-80">
          Professional guidance for real estate investments under YEIDA.
        </p>
      </div>

      {/* Contact Cards */}
      <section className="w-full flex justify-center py-20 px-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl w-full place-items-center">
          {[{
            title: "General Queries",
            email: "hello@investyeida.in",
          }, {
            title: "Investment Related",
            email: "invest@investyeida.in",
          }, {
            title: "CEO Contact",
            email: "abhi@investyeida.in",
          }].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 w-64 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h2>
              <p className="text-gray-700 text-md">{item.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Terms & Policy Section */}
 

      <BelowSection />

      <Footer />
    </div>
  );
}
