
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "YEIDA Master Plan & Maps - InvestYeida",
  description:
    "Explore the official YEIDA Master Plan and detailed maps. Understand the development layout and future growth prospects of the Yamuna Expressway region.",
};

export default function YeidaMapPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />

      <div className="w-full flex flex-col items-start px-20 py-12">
        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2 text-center">
          YEIDA Master Plan & Maps
        </h1>

        <p className="text-gray-400 text-center mb-16 ">
          View the official YEIDA Master Plan along with a detailed explanation. Below,
          explore the full-width live Google Map showing the exact location of YEIDA.
        </p>

        <h2 className="text-2xl text-black underline underline-offset-3 mb-2">OVERVIEW</h2>
       <div className="relative w-full">
  {/* Background BIG TEXT */}
  <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 
                 -translate-y-1/2 text-[100px] md:text-[170px] font-extrabold 
                 text-gray-200 tracking-tight opacity-30 whitespace-nowrap 
                 pointer-events-none select-none">
YEIDA
  </h1>

  {/* Your Text Content */}
  <div className="relative z-10">
    <p className="text-gray-600 leading-relaxed mb-4">
      The YEIDA Master Plan outlines the long-term development structure of the
      Yamuna Expressway region, covering residential, industrial, commercial,
      institutional, and recreational zones. This plan aims to transform the area
      into a globally competitive investment and development hub.
    </p>

    <p className="text-gray-600 leading-relaxed mb-4">
      The map illustrates the allocation of land parcels, future township clusters,
      metro connectivity proposals, airport-linked regions, and high-growth
      industrial sectors. YEIDA is planned across a massive land bank extending
      from Greater Noida to Agra.
    </p>

    <p className="text-gray-600 mb-20 leading-relaxed">
      This strategic plan predicts rapid economic expansion due to the Noida
      International Airport, Film City, logistics hubs, data centers, and
      industry-ready infrastructure.
    </p>
  </div>
</div>

        {/* MASTER PLAN SECTION */}
        <div className="w-full bg-white  rounded-2xl md:p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT side - Map Image */}
          <div className="w-full flex justify-center items-start">
            <img
              src="/map/1.jpg" // replace with real map
              alt="YEIDA Master Plan Map"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* RIGHT side - Description */}
          <div className="flex flex-col justify-center">
            <img
              src="/map/2.jpg" // replace with real map
              alt="YEIDA Master Plan Map"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
            
          </div>
        </div>
        <Link href="https://www.yamunaexpresswayauthority.com/web/about-us/master-plan/" target="_blank" rel="noopener noreferrer">
                        <button className="
        relative px-6 py-3 font-semibold mb-20 text-black bg-yellow-400
         overflow-hidden group transition-all duration-300
        hover:text-yellow-400
      ">
                            <span className="
          absolute inset-0 bg-black scale-0 group-hover:scale-100 
          transition-transform duration-300 origin-start
        "></span>

                            <span className="relative z-10">
                                See Draft Master Plan 2041 on YEIDA Official Site
                            </span>
                        </button>
                    </Link>
        <div className="w-full mb-20 relative">

  {/* Background BIG TEXT */}
  <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 
                 -translate-y-1/2 text-[90px] md:text-[150px] font-extrabold 
                 text-gray-200 opacity-20 tracking-tight whitespace-nowrap 
                 pointer-events-none select-none">
    YEIDA MASTER PLAN
  </h1>

  {/* Foreground Content */}
  <div className="relative z-10">
    <h2 className="text-2xl text-black underline underline-offset-3 mb-2">
      YEIDA MASTER PLAN 
    </h2>

    <ul className="list-disc list-inside text-gray-600 leading-relaxed">
      <li className="mb-2">
        Extensive Land Use: The plan designates zones for residential, industrial,
        commercial, institutional, and recreational purposes to ensure balanced development.
      </li>
      <li className="mb-2">
        Township Clusters: Future townships are planned with modern amenities, green spaces,
        and connectivity to promote sustainable living.
      </li>
      <li className="mb-2">
        Metro Connectivity: Proposals for metro lines connecting YEIDA to Greater Noida and
        Delhi NCR aim to enhance accessibility.
      </li>
      <li className="mb-2">
        Airport-Linked Development: Areas surrounding the upcoming Noida International Airport
        are earmarked for high-growth commercial and hospitality sectors.
      </li>
      <li className="mb-2">
        Industrial Hubs: Dedicated zones for manufacturing, IT parks, and logistics centers to
        attract investment and generate employment.
      </li>
      <li>
        Infrastructure: Plans include wide roads, efficient public transport, water management
        systems, and power supply to support large-scale development.
      </li>
    </ul>
  </div>
</div>


        {/* GOOGLE MAP FULL WIDTH */}
        <div className="w-full bg-white shadow-2xl rounded-2xl p-4 mb-20 max-w-7xl">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            YEIDA Location on Google Map
          </h2>

          <div className="w-full h-[550px] rounded-2xl overflow-hidden  ">
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
  );
}
