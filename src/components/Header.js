"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [investOpen, setInvestOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Timers so dropdown stays for 2 sec
  const projectsTimer = useRef(null);
  const investTimer = useRef(null);

  // OPEN PROJECTS — close invest immediately
  const handleProjectsEnter = () => {
    clearTimeout(projectsTimer.current);
    clearTimeout(investTimer.current);
    setInvestOpen(false);
    setProjectsOpen(true);
  };

  // CLOSE PROJECTS AFTER 2 SEC
  const handleProjectsLeave = () => {
    projectsTimer.current = setTimeout(() => {
      setProjectsOpen(false);
    }, 2000);
  };

  // OPEN INVEST — close projects immediately
  const handleInvestEnter = () => {
    clearTimeout(projectsTimer.current);
    clearTimeout(investTimer.current);
    setProjectsOpen(false);
    setInvestOpen(true);
  };

  // CLOSE INVEST AFTER 2 SEC
  const handleInvestLeave = () => {
    investTimer.current = setTimeout(() => {
      setInvestOpen(false);
    }, 2000);
  };

  return (


    <header className="w-full shadow-md z-50 bg-white">
      <div className="mx-auto flex justify-between items-center py-3 px-6">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="InvestYeida Logo"
            height={70}
            width={70}
            className="object-contain"
          />

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">InvestYeida</h1>
            <p className="text-sm hidden md:block text-gray-600 -mt-1">
              Gateway to India&apos;s Most Promising Growth Zone
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-xl font-semibold relative">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/map" className="hover:text-blue-600 transition">
            Map
          </Link>

          {/* PROJECTS */}
          <div
            className="relative"
            onMouseEnter={handleProjectsEnter}
            onMouseLeave={handleProjectsLeave}
          >
            <button className="hover:text-blue-600 transition">Projects</button>

            {projectsOpen && (
<div className="absolute top-8 right-0 bg-white shadow-xl rounded-md w-44 py-2 animate-fadeIn z-[9999]">

                <Link href="/projects/residential" className="block px-4 py-2 hover:bg-gray-100">Residential</Link>
                <Link href="/projects/commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial</Link>
              </div>
            )}
          </div>

          {/* INVEST */}
          <div
            className="relative"
            onMouseEnter={handleInvestEnter}
            onMouseLeave={handleInvestLeave}
          >
            <button className="hover:text-blue-600 transition">Invest</button>

            {investOpen && (
<div className="absolute top-8 right-0 bg-white shadow-xl rounded-md w-44 py-2 animate-fadeIn z-[9999]">

                <Link href="/how-to-invest" className="block px-4 py-2 hover:bg-gray-100">How to Invest</Link>
                <Link href="/tools" className="block px-4 py-2 hover:bg-gray-100">Tools</Link>
              </div>
            )}
          </div>

          <Link href="/contact-us" className="hover:text-blue-600 transition">
            Contact Us
          </Link>
        </nav>

        {/* MOBILE ICON */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white shadow-inner animate-slideDown">
          <Link href="/" className="block py-2 text-lg font-medium " onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/map" className="block py-2 text-lg font-medium " onClick={() => setMobileMenuOpen(false)}>
            Map
          </Link>

          <div className=" py-2">
            <p className="font-medium mb-2">Projects</p>
            <Link href="/projects/residential" className="block pl-4 py-1 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Residential
            </Link>
            <Link href="/projects/commercial" className="block pl-4 py-1 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Commercial
            </Link>
          </div>

          <div className=" py-2">
            <p className="font-medium mb-2">Invest</p>
            <Link href="/invest/how-to-invest" className="block pl-4 py-1 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              How to Invest
            </Link>
            <Link href="/invest/tools" className="block pl-4 py-1 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              Tools
            </Link>
          </div>

          <Link href="/contact-us" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>

  );
}
