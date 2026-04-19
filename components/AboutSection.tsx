"use client";
import { MapPin, Award, Target, Rocket } from "lucide-react";

const milestones = [
  { year:"2023", title:"Founded in Salem",       desc:"Started with a vision to build world-class SaaS from Tamil Nadu" },
  { year:"2024", title:"First Enterprise Client", desc:"Onboarded our first ₹30L+ MS enterprise customer" },
  { year:"2025", title:"Series A Ready",          desc:"Reached 20 clients and launched our flagship ERP platform" },
  { year:"2026", title:"50+ Clients",             desc:"Serving enterprises across Salem, Chennai, Bengaluru & beyond" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden" style={{background:"#F7F8FF"}}>
      <div className="absolute inset-0 grid-pattern opacity-50"/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* left */}
          <div>
            <div className="tag-blue mb-6" style={{display:"inline-flex"}}>Our Story</div>
            {/* <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1.2rem"}}>
              Built in Salem,
              <br/><span className="text-gradient-blue">Serving India</span>
            </h2> */}
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1.2rem"}}>
              Built with Excellence,
              <br/><span className="text-gradient-blue">Serving the World</span>
            </h2>
            <p style={{color:"#666",lineHeight:1.72,marginBottom:"1rem"}}>
              Safzzo was born from a simple belief: enterprise-grade software shouldn&apos;t require
              enterprise-sized budgets. Based in Salem, Tamil Nadu, we build SaaS platforms that
              give growing Indian businesses the same technological edge as Fortune 500 companies.
            </p>
            <p style={{color:"#666",lineHeight:1.72,marginBottom:"2.5rem"}}>
              Our team of engineers, designers, and domain experts craft solutions that scale with
              your ambitions — from a local manufacturer in Salem to a pan-India distribution network.
            </p>

            {/* location card */}
            {/* <div className="flex items-center gap-4 p-5 rounded-2xl bg-white w-fit shadow-sm" style={{border:"1.5px solid rgba(75,92,196,0.14)"}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:"#4B5CC4"}}>
                <MapPin size={20} color="white"/>
              </div>
              <div>
                <div className="font-semibold text-sm" style={{color:"#0D0D0D"}}>Salem, Tamil Nadu</div>
                <div className="text-xs mt-0.5" style={{color:"#999"}}>636302, India · Serving Pan-India</div>
              </div>
            </div> */}
          </div>

          {/* right timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{background:"linear-gradient(to bottom,#4B5CC4,rgba(75,92,196,0.1))"}}/>
            <div className="space-y-6">
              {milestones.map((m,i) => (
                <div key={m.year} className="flex gap-6 items-start group">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow" style={{border:"2px solid rgba(75,92,196,0.20)"}}>
                    <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",color:"#4B5CC4",fontWeight:600}}>{m.year.slice(2)}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm group-hover:shadow-md transition-shadow" style={{border:"1px solid rgba(75,92,196,0.08)"}}>
                    <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"rgba(245,166,35,0.8)",letterSpacing:"0.12em",marginBottom:"4px"}}>{m.year}</div>
                    <div className="font-bold text-sm mb-1" style={{fontFamily:"'Clash Display',sans-serif",color:"#0D0D0D"}}>{m.title}</div>
                    <div className="text-xs" style={{color:"#888"}}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* values */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {[
            { icon:Target, label:"Mission", text:"Make enterprise software accessible to every ambitious Indian business, regardless of size." },
            { icon:Award,  label:"Values",  text:"Quality, reliability, and long-term partnership over short-term transactions." },
            { icon:Rocket, label:"Vision",  text:"Become India's most trusted B2B SaaS company, built from Tamil Nadu." },
          ].map(({icon:Icon,label,text}) => (
            <div key={label} className="bg-white text-center p-8 rounded-3xl group hover:shadow-lg transition-shadow" style={{border:"1px solid rgba(75,92,196,0.10)"}}>
              <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{background:"rgba(75,92,196,0.07)"}}>
                <Icon size={22} style={{color:"#4B5CC4"}}/>
              </div>
              <h3 className="font-bold mb-3" style={{fontFamily:"'Clash Display',sans-serif",color:"#0D0D0D"}}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{color:"#777"}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
