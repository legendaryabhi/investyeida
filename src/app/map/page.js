import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "YEIDA Master Plan & Maps - InvestYeida",
  description:
    "Explore the official YEIDA Master Plan and detailed maps. Understand the development layout and future growth prospects of the Yamuna Expressway region.",
  keywords: [
    "YEIDA Master Plan",
    "Yamuna Expressway Maps",
    "YEIDA Development Plan",
    "Yamuna Expressway Real Estate",
    "InvestYeida YEIDA Maps",
    "YEIDA Zoning Map",
    "YEIDA Land Use Plan",
    "Yamuna Expressway Investment",
    "YEIDA Residential Areas",
    "YEIDA Commercial Zones",
    "YEIDA Industrial Sectors",
    "Noida International Airport",
    "Yamuna Expressway Growth Zone"
  ],
};

export default function YeidaMapPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />

      {/* MAIN CONTAINER - PREMIUM CENTERED */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start px-4 md:px-10 py-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2 text-center w-full">
          YEIDA Master Plan & Maps
        </h1>

        <p className="text-gray-500 text-center mb-16 w-full">
          View the official YEIDA Master Plan along with detailed explanation. Below,
          explore the full-width live Google Map showing the exact location of YEIDA.
        </p>

        {/* OVERVIEW SECTION */}
        <h2 className="text-2xl text-black underline underline-offset-4 mb-2">
          OVERVIEW
        </h2>

        <div className="relative w-full overflow-hidden">

          {/* BACKGROUND TEXT */}
          <h1 className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-[80px] sm:text-[120px] md:text-[160px]
            font-extrabold text-gray-200 tracking-tight opacity-20
            pointer-events-none select-none
          ">
            YEIDA
          </h1>

          {/* FOREGROUND TEXT */}
          <div className="relative z-10">
            <p className="text-gray-600 leading-relaxed mb-4">
              The YEIDA Master Plan outlines the long-term development structure of
              the Yamuna Expressway region, covering residential, industrial,
              commercial, institutional, and recreational zones. This plan aims to
              transform the area into a globally competitive investment hub.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              The map illustrates the allocation of land parcels, future township
              clusters, metro connectivity proposals, airport-linked regions, and
              high-growth industrial sectors.
            </p>

            <p className="text-gray-600 leading-relaxed mb-16">
              This strategic plan predicts rapid growth due to the Noida
              International Airport, Film City, logistics hubs, data centers, and
              world-class industrial zones.
            </p>
          </div>
        </div>

        {/* MASTER PLAN IMAGES SECTION */}
        <div className="w-full flex justify-center items-start mt-4">

          {/* Mobile Image */}
          <div className="block md:hidden w-full">
            <img
              src="/map/1.jpg"
              alt="YEIDA Mobile Map"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block w-full max-w-5xl">
            <img
              src="/map/1.jpg"
              alt="YEIDA Master Plan Map"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="w-full flex flex-col items-start mt-10">
          <Link
            href="https://www.yamunaexpresswayauthority.com/web/about-us/master-plan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="
              relative px-6 py-3 mb-4 font-semibold text-black bg-yellow-400
              overflow-hidden group transition-all duration-300 hover:text-yellow-400
            ">
              <span className="
                absolute inset-0 bg-black scale-0 group-hover:scale-100 
                transition-transform duration-300 origin-left
              "></span>

              <span className="relative z-10">
                See Draft Master Plan 2041 on YEIDA Official Site
              </span>
            </button>
          </Link>

          <Link
            href="https://www.yamunaexpresswayauthority.net/images/Master-Plan-2031.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="
              relative px-6 py-3 mb-16 font-semibold text-black bg-yellow-400
              overflow-hidden group transition-all duration-300 hover:text-yellow-400
            ">
              <span className="
                absolute inset-0 bg-black scale-0 group-hover:scale-100 
                transition-transform duration-300 origin-left
              "></span>

              <span className="relative z-10">
                MASTER PLAN FOR YAMUNA EXPRESSWAY INDUSTRIAL 2031
              </span>
            </button>
          </Link>
        </div>

        {/* SECOND SECTION */}
        <div className="w-full mb-20 relative overflow-hidden">

          {/* BACKGROUND TEXT */}
          <h1 className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-[70px] sm:text-[110px] md:text-[150px]
            font-extrabold text-gray-200 opacity-20 tracking-tight
            pointer-events-none select-none
          ">
            YEIDA MASTER PLAN
          </h1>

          {/* FOREGROUND */}
          <div className="relative z-10">
            <h2 className="text-2xl text-black underline underline-offset-4 mb-4">
              YEIDA MASTER PLAN
            </h2>

            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li className="mb-2">Balanced zoning for residential, commercial, and industrial sectors.</li>
              <li className="mb-2">Modern township clusters with green spaces and amenities.</li>
              <li className="mb-2">Proposed metro connectivity linking YEIDA to NCR.</li>
              <li className="mb-2">Airport-linked development zones around Noida International Airport.</li>
              <li className="mb-2">Dedicated industrial hubs for manufacturing, IT, and logistics.</li>
              <li>Strong infrastructure including wide roads and efficient utilities.</li>
            </ul>
          </div>
        </div>

        {/* GOOGLE MAP SECTION */}
        <div className="w-full bg-white shadow-2xl rounded-2xl p-4 mb-24">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            YEIDA Location on Google Map
          </h2>

          <div className="w-full h-[550px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121752.58960197166!2d77.55630636808257!3d28.29058424084322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc78eee63261b%3A0xf470949c6ba3bad1!2sYEIDA!5e0!3m2!1sen!2sin!4v1763704343230!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );q
}
