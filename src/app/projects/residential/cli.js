"use client";
import { useState } from "react";
import { MapPin, Calendar, IndianRupee, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResidentialProjectscli() {
  const [selected, setSelected] = useState(null);

  const govProjects = [
    {
      title: "Residential Plot Scheme 2025 (RPS-09/2025)",
      location: "Sector 18, Pocket-9B",
      status: "Ongoing",
      img:"/projects/yeida.png",
      price: "₹35,000 per sq.m.",
      desc: "276 plots of 200 sq.m. each. Categories: General (77.5%), Farmers (17.5%), FIUs (5%). Draw held in July 2025.",
      details: `Expected Completion: 2025-2026  
Allotment and possession in progress.`
    },
    
  ];

  const privateProjects = [
    {
      title: "Ace Verde – Sector 22A",
      location: "Sector 22A",
      img:"/projects/ace.jpeg",
      status: "Under Construction",
      price: "Starting ₹1.2 Cr",
      desc: "8-acre luxury township with 540 apartments and top-class amenities.",
      details: `Developer: Ace Group  
Units: 3BHK, 3.5BHK  
RERA: UPRERAPRJ913692/03/2025  
Possession: 2029  
Amenities: Clubhouse, pools, gyms, yoga lawns`
    },
    {
      title: "Eldeco Ballads of Bliss – Sector 22D",
      location: "Sector 22D",
      img:"/projects/eldeco.jpg",
      status: "Upcoming",
      price: "Premium Category",
      desc: "Ultra-luxury low-density flats with green buffers.",
      details: `Developer: Eldeco  
Low-density project with exclusive amenities.`
    },
   
    {
      title: "Purvanchal Group – Sector 22A",
      location: "Sector 22A",
      img:"/projects/pur.webp",
      status: "Planning Stage",
      price: "₹1.15–₹1.25 lakh per sq. yard",
      desc: "Jacuzzis in every unit. RERA approval in 3 months.",
      details: `302 units  
Payment Plan: 30:70  
Luxury-focused project`
    },
    {
      title: "Wave City's Airport Meadows",
      location: "Near Jewar Airport",
      status: "Pre-launch",
      img:"/projects/wave.jpg",
      price: "From ₹12,000/sq. yard",
      desc: "250-acre mega township with plots, villas & retail.",
      details: `Integrated township  
Schools, hospitals, retail hubs included.`
    },
    {
      title: "Gaur Yamuna City (Multiple Projects)",
      location: "Sector 19",
      status: "Multiple Ongoing Projects",
        img:"/projects/gaur.webp",
      price: "Varies by phase",
      desc: "Multiple villas, plots, apartments across various phases.",
      details: `2nd, 6th, 16th, 32nd Parkview  
Plots + Villas + Apartments`
    }
  ];

  const ProjectCard = ({ item }) => (
    <div
      onClick={() => setSelected(item)}
      className="cursor-pointer rounded-xl p-5  hover:scale-[1.03] transition-all duration-300 flex flex-col gap-2"
    >
      <img
  src={item.img || "/placeholder.jpg"}
  className="w-full h-40 object-cover rounded-lg mb-3"
  alt={item.title}
/>

      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="text-gray-600 text-sm flex items-center gap-1">
        <MapPin size={16} /> {item.location}
      </p>
      <p className="text-sm text-green-600 flex items-center gap-1">
        <Info size={16} /> {item.status}
      </p>
      <p className="text-sm text-yellow-600 flex items-center gap-1">
        <IndianRupee size={16} /> {item.price}
      </p>
      <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
    </div>
  );

  return (
    <>
      <Header />
      <div className="w-full py-10 px-4 md:px-16 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Residential Projects in YEIDA
        </h1>

        {/* Government Section */}
        <h2 className="text-2xl font-semibold mb-4">Government Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {govProjects.map((i, idx) => (
            <ProjectCard key={idx} item={i} />
          ))}
        </div>

        {/* Private Section */}
        <h2 className="text-2xl font-semibold mb-4">Private Residential Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          {privateProjects.map((i, idx) => (
            <ProjectCard key={idx} item={i} />
          ))}
        </div>

        {/* Popup Modal */}
        {selected && (
  <div
    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelected(null)}
  >
    <div
      className="bg-white rounded-xl shadow-xl p-6 w-auto max-w-md animate-[fadeIn_0.3s_ease]"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>

      <p className="text-gray-700 whitespace-pre-line">
        {selected.details}
      </p>

      <button
        onClick={() => setSelected(null)}
        className="mt-5 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

      </div>
      <Footer />
    </>
  );
}
