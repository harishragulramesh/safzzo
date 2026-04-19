"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Image from "next/image"; // Add this line
const WORDS = ["Enterprise SaaS", "Cloud ERP", "Smart CRM", "AI Analytics", "Custom Platforms"];

export default function HeroSection() {
  const [wordIdx, setWordIdx]       = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Typewriter ── */
  useEffect(() => {
    const word = WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (displayText.length < word.length) {
        t = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
      } else {
        t = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setWordIdx(i => (i + 1) % WORDS.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayText, isDeleting, wordIdx]);

  /* ── Canvas dot-field ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const pts = Array.from({ length: 70 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#ff9100";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(75,92,196,${0.055 * (1 - d/130)})`;
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated grid-pattern">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"/>

      {/* soft blobs */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full blur-3xl" style={{background:"rgba(75,92,196,0.07)"}}/>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full blur-3xl" style={{background:"rgba(245,166,35,0.08)"}}/>

      {/* ── 3-D floating orb (right side) ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block" style={{perspective:"1000px"}}>
        <div className="w-64 h-64 relative animate-float">
          {/* rings */}
          <div className="absolute inset-0 rounded-full border border-[rgba(75,92,196,0.15)] animate-spin-slow"/>
          <div className="absolute inset-4 rounded-full border border-[rgba(245,166,35,0.12)]" style={{animation:"spin-slow 14s linear infinite reverse"}}/>
          {/* core */}
          <div className="absolute inset-10 rounded-full flex items-center justify-center" style={{
            background:"linear-gradient(135deg,rgba(75,92,196,0.12),rgba(245,166,35,0.08))",
            border:"1.5px solid rgba(75,92,196,0.20)",
            backdropFilter:"blur(12px)",
            boxShadow:"0 0 60px rgba(75,92,196,0.12), inset 0 0 30px rgba(75,92,196,0.05)"
          }}>
            <div className="text-center">
              <div style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"1.6rem"}}>
                {/* <span style={{color:"#4B5CC4"}}>SAF</span><span style={{color:"#F5A623"}}>Z</span><span style={{color:"#4B5CC4"}}>ZO</span> */}
            <Image 
            src="/safzzo-design-swp-test-b.png" 
            alt="Safzzo Logo" 
            width={100} 
            height={100} 
            className="object-contain"
            priority 
          />
              </div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"8px",letterSpacing:"0.2em",color:"#ff9100",textTransform:"uppercase",marginTop:"4px"}}>SaaS</div>
            </div>
          </div>
          {/* orbit dot — blue */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="orbit-1 w-3 h-3 rounded-full shadow-lg" style={{background:"#000000",boxShadow:"0 0 10px rgba(75,92,196,0.7)"}}/>
          </div>
          {/* orbit dot — orange */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="orbit-2 w-2.5 h-2.5 rounded-full shadow-lg" style={{background:"#F5A623",boxShadow:"0 0 8px rgba(245,166,35,0.7)"}}/>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">

          {/* badge */}
          {/* <div className="tag-blue mb-8 animate-slide-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4B5CC4] animate-pulse"/>
            Based in Salem, Tamil Nadu, India
          </div> */}

          {/* headline */}
          <h1 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(2.6rem,5vw,4.2rem)",lineHeight:1.08,letterSpacing:"-0.02em",color:"#0D0D0D",marginBottom:"1.25rem"}}>
            Build Smarter.<br/>
            Scale Faster with<br/>
            <span className="text-gradient-blue">{displayText}</span>
            <span className="typewriter"/>
          </h1>

          {/* sub */}
          <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"1.05rem",color:"#555",lineHeight:1.72,marginBottom:"2.5rem",maxWidth:"30rem"}}>
            Safzzo delivers enterprise-grade SaaS platforms, ERP, CRM, and cloud solutions
            tailored for ambitious enterprise businesses — from Salem to the world.
          </p>

          {/* stats */}
          <div className="flex flex-wrap gap-10 mb-10">
            {[["12+","Enterprise Clients"],["100%","Uptime SLA"],["5×","Faster Deployment"]].map(([v,l])=>(
              <div key={l}>
                <div style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"2rem",background:"linear-gradient(135deg,#4B5CC4,#F5A623)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{v}</div>
                <div style={{fontSize:"11px",color:"#888",letterSpacing:"0.06em",marginTop:"2px"}}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-2xl text-sm transition-all"
              style={{background:"#4B5CC4",boxShadow:"0 8px 28px rgba(75,92,196,0.32)"}}
              onMouseEnter={e=>(e.currentTarget.style.background="#3345A8")}
              onMouseLeave={e=>(e.currentTarget.style.background="#4B5CC4")}>
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link href="/products" className="group inline-flex items-center gap-3 px-8 py-4 font-bold rounded-2xl text-sm border transition-all"
              style={{color:"#4B5CC4",border:"1.5px solid rgba(75,92,196,0.25)",background:"white",boxShadow:"0 2px 12px rgba(75,92,196,0.08)"}}>
              <Play size={15} className="group-hover:scale-110 transition-transform"/>
              See Our Products
            </Link>
          </div>

          {/* orange accent line */}
          <div className="mt-12 flex items-center gap-4">
            <div style={{width:40,height:3,borderRadius:2,background:"linear-gradient(90deg,#F5A623,#FFB940)"}}/>
            {/* <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"#888",letterSpacing:"0.15em",textTransform:"uppercase"}}>Salem · Tamil Nadu · India</span> */}
            <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"#888",letterSpacing:"0.15em",textTransform:"uppercase"}}>India</span>

          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{color:"rgba(75,92,196,0.35)"}}>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",letterSpacing:"0.2em",textTransform:"uppercase"}}>Scroll</span>
        <ChevronDown size={15} className="animate-bounce"/>
      </div>
    </section>
  );
}
