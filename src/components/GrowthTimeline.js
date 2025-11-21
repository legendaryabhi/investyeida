"use client";
import { useState } from "react";

export default function GrowthTimeline() {
    const [activeTab, setActiveTab] = useState("year");

    const yearData = [
        { year: "2024-2025", desc: "Initial price hikes due to Noida Airport's near completion." },
        { year: "2026-2028", desc: "Industrialization and commercial expansion push demand higher." },
        { year: "2029-2030", desc: "YEIDA becomes a top-tier investment and business destination." }
    ];

    const sectorData = [
        { year: "Residential Plots", desc: "150-250% appreciation by 2030." },
        { year: "Commercial Properties", desc: "High rental yield and 200-300% value growth." },
        { year: "Industrial Land", desc: "Strong long-term appreciation with steady demand." }
    ];

    let activeData = activeTab === "year" ? yearData : sectorData;

    return (
        <div
    className="w-full flex justify-center relative bg-no-repeat bg-bottom bg-center py-16"
    style={{
        backgroundImage: "url('/bgimages/buildings.png')",
        backgroundSize: "cover",

    }}
>
    {/* Overlay to reduce BG visibility */}
    <div className="absolute inset-0 bg-white/70 "></div>

    {/* MAIN CONTENT */}
    <div className="max-w-5xl w-full px-4 relative z-10">


                {/* Heading */}
                <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
                    Future Growth Predictions, ROI 2025 – 2030
                </h2>

                {/* Centered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

                    {/* LEFT: CARDS - CENTERED */}
                    <div className="md:col-span-3 space-y-6">
                        {activeData.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 border-2 border-dashed border-green-500 
                                rounded-xl bg-white/90 backdrop-blur-sm shadow-sm mx-auto"
                            >
                                <h3 className="text-lg font-bold text-green-700 mb-1 text-center">
                                    {item.year}
                                </h3>
                                <p className="text-gray-600 text-sm text-center">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: VERTICAL CENTERED TABS */}
                    <div className="flex flex-col gap-4 items-center">

                        <button
                            onClick={() => setActiveTab("year")}
                            className={`w-40 p-4 rounded-xl border-2 transition-all text-center
                            ${activeTab === "year"
                                ? "bg-green-600 text-white border-green-700 shadow-lg scale-105"
                                : "bg-white border-gray-200 hover:border-green-400"}
                            `}
                        >
                            Per Year
                        </button>

                        <button
                            onClick={() => setActiveTab("sector")}
                            className={`w-40 p-4 rounded-xl border-2 transition-all text-center
                            ${activeTab === "sector"
                                ? "bg-green-600 text-white border-green-700 shadow-lg scale-105"
                                : "bg-white border-gray-200 hover:border-green-400"}
                            `}
                        >
                            Per Sector
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}
