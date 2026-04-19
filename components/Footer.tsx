// import Link from "next/link";
// import { Twitter, Linkedin, Github, MapPin } from "lucide-react";

// function SafzzoMark() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M22 34 Q18 75 62 88 Q106 75 102 34 Q82 20 62 22 Q42 20 22 34Z" fill="#4B5CC4"/>
//       <path d="M22 34 Q10 10 36 8 Q42 20 30 30Z" fill="#4B5CC4"/>
//     </svg>
//   );
// }

// const footerLinks = {
//   Products: [
//     { label:"Safzzo ERP",      href:"/products" },
//     { label:"Safzzo CRM",      href:"/products" },
//     { label:"Analytics Suite", href:"/products" },
//     { label:"Cloud Platform",  href:"/products" },
//   ],
//   Company: [
//     { label:"About Us",    href:"#about" },
//     { label:"Services",    href:"#services" },
//     { label:"Clients",     href:"#testimonials" },
//     { label:"Contact",     href:"#contact" },
//   ],
//   Legal: [
//     { label:"Privacy Policy",   href:"/" },
//     { label:"Terms of Service", href:"/" },
//     { label:"SLA",              href:"/sla" },
//   ],
// };

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden" style={{background:"#0D0D0D",color:"white"}}>
//       {/* top rainbow bar */}
//       <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:"linear-gradient(90deg,#4B5CC4,#F5A623,#4B5CC4)"}}/>

//       <div className="relative max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-5 gap-12 mb-16">
//           {/* brand */}
//           <div className="md:col-span-2">
//             <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
//               <SafzzoMark/>
//               <div>
//                 <div style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"1.2rem",letterSpacing:"-0.01em"}}>
//                   <span style={{color:"#fff"}}>SAF</span><span style={{color:"#F5A623"}}>Z</span><span style={{color:"#fff"}}>ZO</span>
//                 </div>
//                 <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"8px",letterSpacing:"0.2em",color:"rgba(75,92,196,0.6)",textTransform:"uppercase",marginTop:"2px"}}>
//                   Design &amp; Technologies
//                 </p>
//               </div>
//             </Link>
//             <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{color:"rgba(255,255,255,0.38)"}}>
//               Enterprise SaaS solutions built in Salem, Tamil Nadu. Powering Indian businesses with intelligent software.
//             </p>
//             <div className="flex items-center gap-2 mb-6 text-xs" style={{color:"rgba(75,92,196,0.55)"}}>
//               <MapPin size={12}/> Salem, Tamil Nadu 636001, India
//             </div>
//             <div className="flex gap-3">
//               {[Twitter, Linkedin, Github].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.3)] hover:border-[rgba(75,92,196,0.5)] hover:text-[#6B7FE3]"
//               >
//                 <Icon size={15} />
//               </a>
//             ))}
//             </div>
//           </div>

//           {Object.entries(footerLinks).map(([section, links]) => (
//             <div key={section}>
//               <div className="mb-5 text-[10px] tracking-widest uppercase" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(245,166,35,0.6)"}}>{section}</div>
//               <ul className="space-y-3">
//                 {/* {links.map(link => (
//                   <li key={link.label}>
//                     <Link href={link.href} className="text-sm transition-colors" style={{color:"rgba(255,255,255,0.38)"}}
//                       onMouseEnter={e=>e.currentTarget.style.color="#6B7FE3"}
//                       onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.38)"}>
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))} */}
//                 {links.map(link => (
//                   <li key={link.label}>
//                     <Link 
//                       href={link.href} 
//                       className="text-sm transition-colors text-[rgba(255,255,255,0.38)] hover:text-[#6B7FE3]"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{borderTop:"1px solid rgba(255,255,255,0.06)"}}>
//           <p className="text-xs" style={{color:"rgba(255,255,255,0.2)"}}>
//             © {new Date().getFullYear()} Safzzo Software as a Service Pvt. Ltd. Salem, Tamil Nadu.
//           </p>
//           <p className="text-xs" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(255,255,255,0.15)"}}>
//             Made with ❤️ in Salem, Tamil Nadu, India
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";
import Link from "next/link";
import { Twitter, Linkedin, Github, MapPin,Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image"; // Add this line
function SafzzoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 34 Q18 75 62 88 Q106 75 102 34 Q82 20 62 22 Q42 20 22 34Z" fill="#4B5CC4"/>
      <path d="M22 34 Q10 10 36 8 Q42 20 30 30Z" fill="#4B5CC4"/>
    </svg>
  );
}

const footerLinks = {
  Products: [
    { label: "Safzzo ERP", href: "/products" },
    { label: "Safzzo CRM", href: "/products" },
    { label: "Analytics Suite", href: "/products" },
    { label: "Cloud Platform", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "SLA", href: "/" },
  ],
};

// Social Links Configuration
const socialLinks = [
  { icon: Mail, href: "mailto:safzzoswp@gmail.com" },
  { icon: Linkedin, href: "https://linkedin.com/company/safzzo" },
  // { icon: Github, href: "https://github.com/yourhandle" },
  { icon: FaInstagram, href: "https://www.instagram.com/safzzo" },

];

export default function Footer() {
  return (
    // <footer className="relative overflow-hidden" style={{ background: "#0D0D0D", color: "white" }}>
    //   <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#4B5CC4,#F5A623,#4B5CC4)" }} />

    //   <div className="relative max-w-7xl mx-auto px-6 py-20">
    //     <div className="grid md:grid-cols-5 gap-12 mb-16">
    //       <div className="md:col-span-2">
    //         <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
    //           {/* <SafzzoMark /> */}
    //             <Image 
    //               src="/safzzo-design-swp-w.png"          // Path to your logo in the public folder
    //               alt="Safzzo Logo" 
    //               width={36}               // Matches your previous SVG width
    //               height={36}              // Matches your previous SVG height
    //               className="object-contain"
    //               priority                 // Loads the logo immediately (good for LCP)
    //             />
    //           <div>

    //             <div style={{ fontFamily: "'Clash Display',sans-serif", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>
    //               <span style={{ color: "#fff" }}>SAF</span><span style={{ color: "#F5A623" }}>ZZ</span><span style={{ color: "#fff" }}>O</span>
    //             </div>
    //             <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "8px", letterSpacing: "0.2em", color: "rgba(75,92,196,0.6)", textTransform: "uppercase", marginTop: "2px" }}>
    //               Design &amp; Technologies
    //             </p>
    //           </div>
    //         </Link>
    //         <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
    //           Enterprise SaaS solutions designed for the world. Powering global businesses with intelligent, mission-critical software.
    //         </p>
    //         <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "rgba(75,92,196,0.55)" }}>
    //           <MapPin size={12} /> Salem, India
    //         </div>
            
    //         {/* Functional Social Icons */}
    //         <div className="flex gap-3">
    //           {socialLinks.map((social, i) => (
    //             <a
    //               key={i}
    //               href={social.href}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.3)] hover:border-[rgba(75,92,196,0.5)] hover:text-[#6B7FE3]"
    //             >
    //               <social.icon size={15} />
    //             </a>
    //           ))}
    //         </div>
    //       </div>

    //       {Object.entries(footerLinks).map(([section, links]) => (
    //         <div key={section}>
    //           <div className="mb-5 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(245,166,35,0.6)" }}>{section}</div>
    //           <ul className="space-y-3">
    //             {links.map(link => (
    //               <li key={link.label}>
    //                 <Link
    //                   href={link.href}
    //                   className="text-sm transition-colors text-[rgba(255,255,255,0.38)] hover:text-[#6B7FE3]"
    //                 >
    //                   {link.label}
    //                 </Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    //       <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
    //         © {new Date().getFullYear()} Safzzo Software as a Service. All rights reserved.
    //       </p>
    //       <p className="text-xs" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(255,255,255,0.15)" }}>
    //         Built in Salem, India.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="relative overflow-hidden" style={{ background: "#000000", color: "white" }}>
  {/* Top Gradient Line */}
  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#4B5CC4,#F5A623,#4B5CC4)" }} />

  {/* Background Watermark Text */}
  <div 
    className="absolute bottom-[-10%] right-[-3] select-none pointer-events-none z-0 opacity-10"
    style={{ 
      fontFamily: "'Clash Display', sans-serif", 
      fontSize: "20vw", 
      fontWeight: 900, 
      color: "#ff9100", // Very subtle gray
      lineHeight: 1,
      whiteSpace: "nowrap"
    }}
  >
    SAFZZO
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-5 gap-12 mb-16">
      <div className="md:col-span-2">
        <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
          <Image 
            src="/safzzo-design-swp-b.png" 
            alt="Safzzo Logo" 
            width={36} 
            height={36} 
            className="object-contain"
            priority 
          />
          <div>
            <div style={{ fontFamily: "'Clash Display',sans-serif", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>
              {/* <span style={{ color: "#fff" }}>SAF</span><span style={{ color: "#F5A623" }}>ZZ</span><span style={{ color: "#fff" }}>O</span> */}
            <Image 
            src="/safzzo-design-swp-test-w.png" 
            alt="Safzzo Logo" 
            width={100} 
            height={100} 
            className="object-contain"
            priority 
          />
            </div>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "8px", letterSpacing: "0.2em", color: "rgba(75,92,196,0.6)", textTransform: "uppercase", marginTop: "2px" }}>
              Design &amp; Technologies
            </p>
          </div>
        </Link>
        <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
          Enterprise SaaS solutions designed for the world. Powering global businesses with intelligent, mission-critical software.
        </p>
        <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: "rgba(75,92,196,0.55)" }}>
          <MapPin size={12} /> Salem, India
        </div>
        
        <div className="flex gap-3">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.3)] hover:border-[rgba(75,92,196,0.5)] hover:text-[#6B7FE3]"
            >
              <social.icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {Object.entries(footerLinks).map(([section, links]) => (
        <div key={section} className="relative z-10">
          <div className="mb-5 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(245,166,35,0.6)" }}>{section}</div>
          <ul className="space-y-3">
            {links.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors text-[rgba(255,255,255,0.38)] hover:text-[#6B7FE3]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        © {new Date().getFullYear()} Safzzo Software as a Service. All rights reserved.
      </p>
      <p className="text-xs" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(255,255,255,0.15)" }}>
        Built in Salem, India.
      </p>
    </div>
  </div>
</footer>
  );
}