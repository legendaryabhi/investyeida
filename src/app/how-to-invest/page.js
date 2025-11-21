"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
    CheckCircle,
    Landmark,
    FileCheck,
    BarChart3,
    Wallet
} from "lucide-react";

export default function HowToInvest() {
    const [submitted, setSubmitted] = useState(false);
    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <div className="w-full bg-gradient-to-br from-green-100 to-green-200 px-6 py-10 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-green-300 rounded-full opacity-20" />
                <div className="absolute top-40 -left-20 w-72 h-72 bg-black/10 rounded-full opacity-20" />

                <h1 className="text-4xl font-bold text-center">How to Invest in YEIDA</h1>
                <p className="text-center text-gray-700 mt-2 text-lg">
                    Rough Investment Roadmap for YEIDA Properties
                </p>
            </div>

            {/* PAGE GRID 2/3 - 1/3 */}
            <div className="w-full bg-white  bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:25px_25px] md:px-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-16">

                {/* LEFT COLUMN — 2/3 (ROADMAP) */}
                <div className="md:col-span-2 relative ">


                    {/* Vertical Dashed Line */}
                    <div className="absolute left-6 top-0 h-full border-l-2 border-dashed border-green-400"></div>

                    <div className="space-y-20">

                        {/* STEP COMPONENT */}
                        <div className="relative pl-16">
                            {/* Dot on line */}
                            <div className="absolute left-4 top-3 w-4 h-4 bg-green-500 rounded-full"></div>

                            <div className="bg-white p-8 rounded-xl shadow border">
                                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                                    <Landmark className="text-green-700" /> Step 1: Choose the Right Investment Sector
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex gap-2"><CheckCircle className="text-green-600" /> Residential Plots</li>
                                    <li className="flex gap-2"><CheckCircle className="text-green-600" /> Semi Commercial Properties</li>
                                    <li className="flex gap-2"><CheckCircle className="text-green-600" /> Industrial Land</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-16">
                            <div className="absolute left-4 top-3 w-4 h-4 bg-green-500 rounded-full"></div>

                            <div className="bg-white p-8 rounded-xl shadow border">
                                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                                    <Wallet className="text-green-700" /> Step 2: Contact Us for Latest YEIDA Plot
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>Semi Commercial – 30k per sq.m</li>
                                    <li>Residential – 65k to 1 Lakh per sq.m</li>
                                    <li>Industrial – 50k to 80k per sq.m</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-16">
                            <div className="absolute left-4 top-3 w-4 h-4 bg-green-500 rounded-full"></div>

                            <div className="bg-white p-8 rounded-xl shadow border">
                                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                                    <FileCheck className="text-green-700" /> Step 3: Verify Documentation
                                </h2>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✔ Ensure YEIDA approval</li>
                                    <li>✔ Confirm land use (Residential / Industrial)</li>
                                    <li>✔ Check clear land title</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative pl-16">
                            <div className="absolute left-4 top-3 w-4 h-4 bg-green-500 rounded-full"></div>

                            <div className="bg-white p-8 rounded-xl shadow border">
                                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                                    <Wallet className="text-green-700" /> Step 4: Secure Financing
                                </h2>
                                <p className="text-gray-700">
                                    Loans available from SBI, HDFC, ICICI, Axis, PNB (only registered plots).
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative pl-16">
                            <div className="absolute left-4 top-3 w-4 h-4 bg-green-500 rounded-full"></div>

                            <div className="bg-white p-8 rounded-xl shadow border">
                                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                                    <BarChart3 className="text-green-700" /> Step 5: Monitor Market Trends
                                </h2>

                                <p>Track infrastructure developments and real estate price trends.
                                    Consider a long-term investment of 5-10 years for maximum returns.
                                    Explore rental opportunities for steady passive income.</p>

                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT COLUMN — 1/3 (FORM) */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-2xl shadow-xl  h-fit">
                    <h2 className="text-3xl font-bold mb-3 text-center text-green-700">
                        Register Your Interest
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        Fill this form to get the latest YEIDA property deals.
                    </p>

                    {/* SUCCESS MESSAGE */}
                    {submitted && (
                        <div className="p-4 mb-6 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center animate-fade-in">
                            ✔ Thank you! Your details were submitted successfully.
                            <br />
                            Our team will contact you shortly.
                        </div>
                    )}

                    {/* HIDDEN IFRAME TO PREVENT PAGE REDIRECT */}
                    <iframe
                        name="hidden_iframe"
                        style={{ display: "none" }}
                        onLoad={() => {
                            // Google form redirects AFTER submission → detect that event
                            if (!submitted) return;
                        }}
                    />

                    <form
                        action="https://docs.google.com/forms/d/e/1FAIpQLSduR27R0FsJm7I3cNCvpKvD4CuqUXtv-JHpkiy6EvIzgelAmg/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={() => setSubmitted(true)}
                        className="space-y-6"
                    >
                        {/* Investment Budget */}
                        <div className="space-y-1">
                            <label className="font-semibold text-gray-800">Investment Budget</label>
                            <select
                                name="entry.757034752"
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition"
                            >
                                <option value="">Select Budget</option>
                                <option value="Below 20 Lakhs">Below 20 Lakhs</option>
                                <option value="20–40 Lakhs">20–40 Lakhs</option>
                                <option value="40–80 Lakhs">40–80 Lakhs</option>
                                <option value="80 Lakhs – 1.5 Cr">80 Lakhs – 1.5 Cr</option>
                                <option value="1.5 Cr+">1.5 Cr+</option>
                            </select>
                        </div>

                        {/* Full Name */}
                        <div className="space-y-1">
                            <label className="font-semibold text-gray-800">Full Name</label>
                            <input
                                type="text"
                                name="entry.1484546625"
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1">
                            <label className="font-semibold text-gray-800">Phone Number</label>
                            <input
                                type="tel"
                                name="entry.727063651"
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition"
                                placeholder="Your phone number"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <label className="font-semibold text-gray-800">Email</label>
                            <input
                                type="email"
                                name="entry.1005730132"
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition"
                                placeholder="Your email address"
                            />
                        </div>

                        {/* Preferred Plot Size */}
                        <div className="space-y-1">
                            <label className="font-semibold text-gray-800">
                                Preferred Plot Size
                            </label>
                            <select
                                name="entry.1252665187"
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition"
                            >
                                <option value="">Select Size</option>
                                <option value="50 Sq.m">50 Sq.m</option>
                                <option value="100 Sq.m">100 Sq.m</option>
                                <option value="120 Sq.m">120 Sq.m</option>
                                <option value="200 Sq.m">200 Sq.m</option>
                                <option value="300 Sq.m">300 Sq.m</option>
                                <option value="500 Sq.m">500 Sq.m</option>
                                <option value="1000 Sq.m">1000 Sq.m</option>
                                <option value="Industrial Plot">Industrial Plot</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                            <label className="font-semibold text-gray-800">
                                Anything you want to say?
                            </label>
                            <textarea
                                name="entry.1421249829"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 transition"
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition active:scale-95"
                        >
                            Submit
                        </button>
                    </form>
                </div>


            </div>

            <Footer />
        </>
    );
}
