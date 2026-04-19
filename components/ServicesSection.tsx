"use client";
import { Database, Cloud, BarChart3, Shield, Cpu, Globe } from "lucide-react";

const services = [
  { icon: Database, title: "Enterprise ERP",       desc: "End-to-end ERP that unifies inventory, HR, finance and operations for total business control.",   accent:"#4B5CC4", bg:"rgba(75,92,196,0.06)",  tag:"Most Popular" },
  { icon: Cloud,    title: "Cloud SaaS Platform",   desc: "Multi-tenant cloud platforms with auto-scaling, real-time sync and 99.9% uptime SLA.",            accent:"#6B7FE3", bg:"rgba(107,127,227,0.06)", tag:null },
  { icon: BarChart3,title: "Smart CRM",             desc: "AI-driven lead scoring, pipeline automation and predictive sales analytics.",                      accent:"#F5A623", bg:"rgba(245,166,35,0.07)",  tag:null },
  { icon: Cpu,      title: "AI & Automation",       desc: "Intelligent process automation, ML pipelines and AI integrations that eliminate manual work.",      accent:"#3345A8", bg:"rgba(51,69,168,0.06)",  tag:"New" },
  { icon: Shield,   title: "Security & Compliance", desc: "ISO-ready frameworks, audit trails, RBAC and data sovereignty for regulated industries.",           accent:"#4B5CC4", bg:"rgba(75,92,196,0.06)",  tag:null },
  { icon: Globe,    title: "Custom Web Platforms",  desc: "Full-stack SaaS portals, marketplaces and enterprise dashboards with real-time capabilities.",      accent:"#F5A623", bg:"rgba(245,166,35,0.07)",  tag:null },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden" style={{background:"#F7F8FF"}}>
      <div className="absolute inset-0 grid-pattern opacity-60"/>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-20">
          <div className="tag-blue mb-6" style={{display:"inline-flex"}}>What We Build</div>
          <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(2rem,4vw,3.2rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1rem"}}>
            Enterprise Solutions
            <br/>
            <span className="text-gradient-blue">Built for Scale</span>
          </h2>
          <p style={{color:"#777",fontSize:"1.05rem",maxWidth:"36rem",margin:"0 auto"}}>
            We craft SaaS products and platforms that power businesses from Salem across India and beyond.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-3d group relative bg-white rounded-3xl p-8 overflow-hidden" style={{border:"1px solid rgba(75,92,196,0.10)", boxShadow:"0 2px 18px rgba(75,92,196,0.06)", animationDelay:`${i*0.08}s`}}>
                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background:`linear-gradient(90deg,${s.accent},transparent)`}}/>

                {/* tag */}
                {s.tag && (
                  <div className="absolute top-5 right-5 text-xs font-bold px-2.5 py-1 rounded-full" style={{background:"rgba(75,92,196,0.08)",color:"#4B5CC4",border:"1px solid rgba(75,92,196,0.15)"}}>
                    {s.tag}
                  </div>
                )}

                {/* icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md" style={{background:s.bg,border:`1.5px solid ${s.accent}20`}}>
                  <Icon size={24} style={{color:s.accent}}/>
                </div>

                <h3 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:700,fontSize:"1.1rem",color:"#0D0D0D",marginBottom:"0.6rem"}}>{s.title}</h3>
                <p style={{color:"#777",fontSize:"0.875rem",lineHeight:1.65}}>{s.desc}</p>

                {/* hover orange underline */}
                <div className="absolute bottom-0 left-8 w-0 group-hover:w-12 h-[2px] rounded transition-all duration-500" style={{background:"#F5A623"}}/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
