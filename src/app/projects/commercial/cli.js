"use client";
import { useState } from "react";
import { MapPin, Calendar, IndianRupee, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommercialProjectscli() {
  const [selected, setSelected] = useState(null);

  const govProjects = [
  {
    title: "YEIDA Designated Commercial Zones",
    location: "Sectors 14 & 15 (Primary), Small pockets in all sectors",
    status: "Ongoing",
    img:"/projects/yeida.png",
    price: "Based on YEIDA auctions",
    desc: "YEIDA has designated core commercial zones in Sectors 14 and 15, with smaller commercial pockets planned in every sector.",
    details: `Primary commercial sectors: 14 & 15  
Secondary commercial pockets: In almost all YEIDA sectors  
Status: Ongoing plot allotments through YEIDA auctions  
Ideal for: Retail, offices, hospitality, corporate spaces`
  }
];

  const privateProjects = [
  {
    title: "Gaur Aerocity Yamuna – Sector 19",
    location: "Sector 19",
    img:"/projects/gaur.webp",
    status: "Ready to Move",
    price: "Commercial Plot Pricing (Varies)",
    desc: "828 commercial plots in a high-demand commercial hub close to the airport.",
    details: `Developer: Gaurs Group  
RERA: UPRERAPRJ342117  
Configuration: 100% ground coverage commercial plots  
Amenities: Security, power backup, parking, food court, banquet hall  
Completion: Ready to Move  
Ideal for: Shops, offices, restaurants, showrooms`
  },
  {
    title: "Uniwest Aero Hub – Sector 22D",
    img:"/projects/aero.webp",
    location: "Sector 22D",
    status: "Newly Launched",
    price: "Premium Retail Category",
    desc: "Retail + studio apartments in a G+6 modern commercial tower.",
    details: `Developer: Uniwest Group  
Size: 1,804 sq.m.  
Configuration: Retail shops & studio apartments  
RERA: UPRERAPRJ621735  
Near: 30 mins from Jewar Airport  
Expected Completion: September 2028`
  },
  {
    title: "Ace Hive – Commercial Tower",
    location: "100-acre Township",
    status: "Under Development",
      img:"/projects/ace.webp",
    price: "Premium Commercial",
    desc: "A G+17 commercial tower by Ace offering retail + studio apartments.",
    details: `Developer: Ace Group  
Size: 5 acres  
Floors: G+17  
RERA: UPRERAPRJ939595  
Expected Completion: September 2028`
  },
  
  {
    title: "Saviour Group – Commercial Developments",
    location: "Within Gaur Yamuna City",
    status: "Ongoing",
    img:"/projects/saviour.jpg",
    price: "Retail & Workspace Pricing",
    desc: "Retail, food courts, and workspace-oriented commercial development.",
    details: `Developer: Saviour Group  
Focus: High-street retail, food courts, mixed-use workspaces  
Market Demand: Strong interest from brands targeting airport-linked growth`
  }
];

const anchorProjects = [
  {
    title: "International Film City – Sector 21",
    location: "Sector 21, YEIDA",
    status: "Under Construction",
    img:"/projects/filmcity.jpg",
    price: "₹1,510 crore (Phase 1 Investment)",
    desc: "India’s biggest Film City project spread across 1,000 acres.",
    details: `Developer: Bayview Bhutani Film City (Boney Kapoor + Bhutani Group)  
Phase 1: 230 acres  
Completion Timeline: 18 months from June 2025  
Components:  
• Film studios & sound stages (155 acres)  
• Commercial center (75 acres)  
• Film institute, production units  
• Runway & helipad  
Expected: Shooting to begin within 18 months (from June 2025)`
  },
  {
    title: "Noida International Airport (Jewar Airport)",
    location: "Jewar, YEIDA",
    status: "Near Completion",
    img:"/projects/airport.png",
    price: "International Airport Project",
    desc: "India’s most awaited international airport — key growth driver for YEIDA.",
    details: `Expected Operational: November 2025  
Infrastructure: Terminal, runway, ATC complete  
Distance: 4 km from Film City  
Impact: Major boost to commercial + residential demand`
  },
  {
    title: "Multimodal Logistics Park (MMLP) – Tappal Bajna",
    location: "Tappal Bajna",
    img:"/projects/park.png",
    status: "Under Development",
    price: "Government Infrastructure Project",
    desc: "A major logistics park integrating road + rail connectivity.",
    details: `Connectivity: Integrated rail & road logistics  
Purpose: Enhance supply chain & industrial movement  
Impact: Huge demand driver for commercial plots nearby`
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
          Commercial Projects in YEIDA
        </h1>

        {/* Government Section */}
        <h2 className="text-2xl font-semibold mb-4">Government Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {govProjects.map((i, idx) => (
            <ProjectCard key={idx} item={i} />
          ))}
        </div>

        {/* Private Section */}
        <h2 className="text-2xl font-semibold mb-4">Private Commercial Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {privateProjects.map((i, idx) => (
            <ProjectCard key={idx} item={i} />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Anchor Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {anchorProjects.map((i, idx) => (
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
