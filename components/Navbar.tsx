"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Add this line

// 1. ADD THE FORWARD SLASH (/) TO ALL ANCHORS
const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#features", label: "Features" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Clients" },
  { href: "/products", label: "Products" },
];

function SafzzoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 34 Q18 75 62 88 Q106 75 102 34 Q82 20 62 22 Q42 20 22 34Z" fill="#4B5CC4"/>
      <path d="M22 34 Q10 10 36 8 Q42 20 30 30Z" fill="#4B5CC4"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
      scrolled
        ? "bg-white/92 backdrop-blur-xl shadow-[0_2px_32px_rgba(75,92,196,0.09)] border-b border-[rgba(75,92,196,0.08)]"
        : "bg-transparent"
    } bg-white`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <Link href="/" className="flex items-center gap-3 group">
          <SafzzoMark />
          <div>
            <div style={{ fontFamily:"'Clash Display',sans-serif", fontWeight:800, fontSize:"1.25rem", letterSpacing:"-0.01em", lineHeight:1 }}>
              <span style={{color:"#0D0D0D"}}>SAF</span><span style={{color:"#F5A623"}}>ZZ</span><span style={{color:"#0D0D0D"}}>O</span>
            </div>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.22em", color:"rgba(75,92,196,0.55)", textTransform:"uppercase", marginTop:"2px" }}>
              Design &amp; Technologies
            </p>
          </div>
        </Link> */}
        <Link href="/" className="flex items-center gap-3 group">
        {/* Replace SafzzoMark with this Image component */}
        <Image 
          src="/safzzo-design-swp-b.png"          // Path to your logo in the public folder
          alt="Safzzo Logo" 
          width={36}               // Matches your previous SVG width
          height={36}              // Matches your previous SVG height
          className="object-contain"
          priority                 // Loads the logo immediately (good for LCP)
        />
        
        <div>
          <div style={{ fontFamily:"'Clash Display',sans-serif", fontWeight:800, fontSize:"1.25rem", letterSpacing:"-0.01em", lineHeight:1 }}>
            {/* <span style={{color:"#0D0D0D"}}>SAF</span><span style={{color:"#F5A623"}}>ZZ</span><span style={{color:"#0D0D0D"}}>O</span> */}
            <Image 
            src="/safzzo-design-swp-test-b.png" 
            alt="Safzzo Logo" 
            width={100} 
            height={100} 
            className="object-contain"
            priority 
          />
          </div>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"9px", letterSpacing:"0.22em", color:"rgba(75,92,196,0.55)", textTransform:"uppercase", marginTop:"2px" }}>
            Design &amp; Technologies
          </p>
        </div>
      </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="px-4 py-2 text-sm text-[#555] hover:text-[#4B5CC4] transition-colors rounded-lg hover:bg-[rgba(75,92,196,0.05)] relative group">
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-[#F5A623] group-hover:w-4 transition-all duration-300"/>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/products" className="px-5 py-2.5 text-sm font-semibold text-[#4B5CC4] border border-[rgba(75,92,196,0.22)] rounded-xl hover:border-[#4B5CC4] hover:bg-[rgba(75,92,196,0.04)] transition-all">
            View Products
          </Link>
          <Link href="#contact" className="px-5 py-2.5 text-sm font-bold bg-[#4B5CC4] text-white rounded-xl hover:bg-[#3345A8] transition-all shadow-[0_4px_18px_rgba(75,92,196,0.28)]">
            Get Started
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 flex flex-col gap-[5px]" aria-label="menu">
          <span className={`block h-0.5 w-5 bg-[#4B5CC4] rounded transition-all ${mobileOpen?"rotate-45 translate-y-[7px]":""}`}/>
          <span className={`block h-0.5 w-5 bg-[#4B5CC4] rounded transition-all ${mobileOpen?"opacity-0":""}`}/>
          <span className={`block h-0.5 w-5 bg-[#4B5CC4] rounded transition-all ${mobileOpen?"-rotate-45 -translate-y-[7px]":""}`}/>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(75,92,196,0.08)] px-6 py-4 shadow-xl">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-[#555] hover:text-[#4B5CC4] hover:bg-[rgba(75,92,196,0.04)] rounded-xl transition-all">{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <Link href="/products" className="text-center py-3 text-[#4B5CC4] border border-[rgba(75,92,196,0.22)] rounded-xl font-semibold text-sm">View Products</Link>
            <Link href="#contact" className="text-center py-3 bg-[#4B5CC4] text-white rounded-xl font-bold text-sm">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
