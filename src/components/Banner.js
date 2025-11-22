
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Banner() {
  const images = [
    "/banner/1.webp",
    "/banner/2.webp",
    "/banner/4.avif",
    "/banner/5.webp",
  ];


const router = useRouter();
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Title appears ONLY ONCE when component loads
  useEffect(() => {
    setTimeout(() => setShowTitle(true), 400);
  }, []);

  return (
    <>
    <div className="w-full h-[70vh] overflow-hidden relative select-none">
      {/* IMAGE */}
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt="banner"
        className={`w-full h-full object-cover transition-all duration-700 ${
          fade ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
        }`}
      />

      {/* STATIC CENTER TITLE — only animates once */}
      <h1
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-white text-4xl md:text-5xl font-extrabold tracking-wide 
          ${showTitle ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        YEIDA
      </h1>

      {/* DOTS */}
      
    </div>
    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between bg-black py-2 px-10 gap-3">
  <p className="text-white text-sm leading-tight">
    InvestYeida is a private real estate investment advisory firm providing guidance on projects under the YEIDA. We are not affiliated with the UP Government or YEIDA.
  </p>

  <div className=" hidden md:flex gap-3">

      <button
        onClick={() => router.push("/projects/residential")}
        className="bg-orange-400 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-orange-600"
      >
        See Residential Projects
      </button>

      <button
        onClick={() => router.push("/projects/commercial")}
        className="bg-orange-400 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-orange-600"
      >
        See Commercial Projects
      </button>

      
    </div>

</div>

    </>
  );
}
