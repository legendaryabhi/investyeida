import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white w-full relative overflow-hidden">
      {/* Background Pattern */}
      
      <Header />
<div className="absolute inset-0 bg-[url('/image.svg')] opacity-50 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="w-full px-20 pt-20 text-black text-start">
        <h1 className="text-5xl font-extrabold tracking-tight">Contact InvestYeida</h1>
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
      <section className=" mx-auto py-10 px-20 text-black">
        <h2 className="text-3xl font-bold mb-5">Terms & Conditions</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          InvestYeida is a private real estate investment advisory firm offering guidance on
          projects under YEIDA. All information presented is for advisory and informational
          purposes. We do not influence land allotment or government decisions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          By using our website or contacting us, you agree that InvestYeida is not responsible
          for any investment decisions or financial outcomes. All decisions must be made at your
          own discretion.
        </p>

        <h2 className="text-3xl font-bold mb-5">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          We respect your privacy. Any information shared with InvestYeida will be kept
          confidential and used only to assist with your inquiry. We do not share personal data
          with third parties.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For any data-related concerns, contact us at hello@investyeida.in.
        </p>
      </section>

      <Footer />
    </div>
  );
}
