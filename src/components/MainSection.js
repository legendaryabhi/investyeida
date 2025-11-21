"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link"


// Lucide Icons
import { Factory, Home, Building2, Plane, Clapperboard, Cpu } from "lucide-react";

export default function MainSection() {
    const [flipIndex, setFlipIndex] = useState(null);
    const handleFlip = (index) => {
        setFlipIndex((prev) => (prev === index ? null : index)); // toggle flip
    };
    const [activeIndex, setActiveIndex] = useState(null);
    const cards = [
        { title: "Residential", image: "/opportunities_images/res.jpg" },
        { title: "Commercial", image: "/opportunities_images/com.jpg" },
        { title: "Industrial", image: "/opportunities_images/ind.jpg" },
        { title: "EV Zone", image: "/opportunities_images/ev.webp" },
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                if (prev === null) return 0;
                return (prev + 1) % cards.length;
            });
        }, 2000); // 2 seconds per card

        return () => clearInterval(interval);
    }, []);

    const cardData = [
        { title: "Industrial Plots", icon: <Factory size={68} />, desc: "YEIDA offers industrial plots suitable for factories, warehouses, and mega-projects." },
        { title: "Residential Plots", icon: <Home size={68} />, desc: "Prime residential plots with world-class infrastructure and rapid development." },
        { title: "Commercial Spaces", icon: <Building2 size={68} />, desc: "High-growth commercial zones ideal for malls, retail, offices and business hubs." },
        { title: "Jewar Airport", icon: <Plane size={68} />, desc: "Asia's future biggest airport driving massive economic and real estate growth." },
        { title: "Film City", icon: <Clapperboard size={68} />, desc: "Upcoming international Film City boosting entertainment, tourism, and investments." },
        { title: "Tech Zone", icon: <Cpu size={68} />, desc: "A modern IT/Tech hub attracting global companies and startups." }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start py-14  bg-white">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-black text-center"
            >
                India's Most Promising
                Growth Zone
            </motion.h1>

            <div className="w-full max-w-7xl mt-2 flex flex-col md:flex-row gap-8 justify-center items-start">

                {/* Left Main Card */}
                <div className="w-full md:w-1/2 mt-11 bg-white shadow-2xl rounded-2xl p-6 relative overflow-hidden">

                    {/* Semi-transparent Left Image */}
                    <img
                        src="/bgimages/plan.jpeg"
                        alt="YEIDA Logo"
                        className="absolute left-0 top-72 -translate-y-1/2 opacity-20 w-60 pointer-events-none"
                    />

                    {/* Main Content */}
                    <div className="relative z-10 p-2">
                        <img
                            src="/YEIDA.webp"
                            alt="YEIDA Logo"
                            height={180}
                            width={180}
                            className="object-contain mx-auto p-2 mb-10"
                        />

                        <p className="text-gray-900 text-sm leading-relaxed text-center md:text-left">
                            Yamuna Expressway Industrial Development Authority is the nodal agency responsible
                            for implementing the Yamuna Expressway Project and regional development.
                            <br /><br />
                            "Yamuna City" is a new planned city initiative by YEIDA and the third in the
                            Gautam Budh Nagar district, following Noida and Greater Noida. It is situated on a
                            25,000-hectare expanse along the Yamuna Expressway in Uttar Pradesh.
                        </p>
                    </div>
                </div>


                {/* Right Side Cards with Flip */}
                <div className="w-full px-4 md:px-0 md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-full h-48 cursor-pointer [perspective:1000px]"
                            onClick={() => handleFlip(index)} // ← MOBILE TAP SUPPORT
                            onMouseEnter={() => setFlipIndex(index)} // desktop hover
                            onMouseLeave={() => setFlipIndex(null)}
                        >
                            <div
                                className={`relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d]
                            ${flipIndex === index ? "[transform:rotateY(180deg)]" : ""}
                        `}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 bg-white shadow-xl rounded-xl flex flex-col gap-2 items-center justify-center text-gray-800 font-semibold text-lg [backface-visibility:hidden]">
                                    <div className="text-blue-400">
                                        {card.icon}
                                    </div>
                                    {card.title}
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 bg-green-600 text-white shadow-xl rounded-xl flex items-center justify-center p-4 text-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    {card.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link href="/how-to-invest">
                        <button className="
        relative px-6 py-3 font-semibold text-black bg-yellow-400
         overflow-hidden group transition-all duration-300
        hover:text-yellow-400
      ">
                            <span className="
          absolute inset-0 bg-black scale-0 group-hover:scale-100 
          transition-transform duration-300 origin-start
        "></span>

                            <span className="relative z-10">
                                How to Invest?
                            </span>
                        </button>
                    </Link>
                </div>

            </div>


            <div className="relative px-4 md:px-0 w-full mt-10 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:25px_25px]">
                <div className="max-w-7xl mx-auto py-16">
                    <h2 className="flex text-3xl font-bold text-start mb-2">
                        INVESTMENT OPPORTUNITIES IN YEIDA
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        The Yamuna Expressway Industrial Development Authority (YEIDA) has become
                        a prime destination for investors seeking high returns in real estate,
                        commercial, and industrial properties.
                    </p>

                    <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {cards.map((card, i) => (
                            <div
                                key={i}
                                className="relative group h-60 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                                onMouseEnter={() => setActiveIndex(i)}   // stop auto + manual hover
                                onMouseLeave={() => setActiveIndex(null)} // resume auto
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className={`w-full h-full object-cover transition-all duration-500
                                    ${activeIndex === i ? "scale-110" : ""}
                                `}
                                />

                                <div
                                    className={`absolute inset-0 bg-black/50 transition-all duration-500 
                                    flex items-center justify-center 
                                    ${activeIndex === i ? "opacity-100" : "opacity-0"}
                                `}
                                >
                                    <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        </div>
    );
}
