"use client";
import { CheckCircle2, TrendingUp, Users, Server, Lock, Headphones } from "lucide-react";

const features = [
  { icon: TrendingUp,   label: "Revenue Tracking",    desc: "Live dashboards for financial performance" },
  { icon: Users,        label: "Team Collaboration",  desc: "Multi-role access with audit trails" },
  { icon: Server,       label: "99.9% Uptime",        desc: "Distributed cloud with auto-failover" },
  { icon: Lock,         label: "Bank-Grade Security", desc: "AES-256 + SOC 2 ready" },
  { icon: CheckCircle2, label: "Rapid Deployment",    desc: "Live in days, not months" },
  { icon: Headphones,   label: "24/7 Support",        desc: "Dedicated account managers & SLA" },
];

const techStack = ["Next.js","Go Lang","Flutter","PostgreSQL","Redis","Docker","Kubernetes","AWS","GraphQL","Prisma","Stripe","Razorpay","Twilio"];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{background:"rgba(75,92,196,0.04)"}}/>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:"rgba(245,166,35,0.05)"}}/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Visual card ── */}
          <div className="relative" style={{perspective:"1200px"}}>
            <div className="relative w-full max-w-md mx-auto">

              {/* main code card */}
              <div className="relative rounded-3xl p-7 bg-white" style={{border:"1.5px solid rgba(75,92,196,0.14)",boxShadow:"0 12px 48px rgba(75,92,196,0.10)",transform:"rotateY(-4deg) rotateX(3deg)"}}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-red-400/70"/>
                  <span className="w-3 h-3 rounded-full bg-amber-400/70"/>
                  <span className="w-3 h-3 rounded-full bg-emerald-400/70"/>
                  <span className="ml-2 text-xs" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.4)"}}>safzzo.dashboard.tsx</span>
                </div>
                <div className="space-y-2.5 text-sm" style={{fontFamily:"'JetBrains Mono',monospace"}}>
                  <div><span style={{color:"#7C3AED"}}>const</span> <span style={{color:"#4B5CC4"}}>revenue</span> <span style={{color:"#555"}}>=</span> <span style={{color:"#D4891A"}}>₹12.4L</span></div>
                  <div><span style={{color:"#7C3AED"}}>const</span> <span style={{color:"#4B5CC4"}}>clients</span> <span style={{color:"#555"}}>=</span> <span style={{color:"#15803D"}}>50</span></div>
                  <div><span style={{color:"#7C3AED"}}>const</span> <span style={{color:"#4B5CC4"}}>uptime</span> <span style={{color:"#555"}}>=</span> <span style={{color:"#D4891A"}}>&apos;99.9%&apos;</span></div>
                  <div className="pt-1 text-xs" style={{color:"rgba(0,0,0,0.2)"}}>// safzzo — Salem, TN</div>
                  <div><span style={{color:"#7C3AED"}}>export default</span> <span style={{color:"#4B5CC4"}}>Platform</span><span style={{color:"#555"}}>()</span></div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
                    <span style={{fontSize:"11px",color:"#15803D"}}>All systems operational</span>
                  </div>
                </div>
              </div>

              {/* floating badge — users */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[rgba(75,92,196,0.12)] animate-float">
                <div className="text-xs text-[#888] mb-0.5">Active Users</div>
                <div style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"1.5rem",color:"#0D0D0D"}}>12,400</div>
                <div className="text-xs font-semibold" style={{color:"#15803D"}}>↑ 24% this month</div>
              </div>

              {/* floating badge — deploy */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[rgba(245,166,35,0.20)] animate-float-delayed">
                <div className="text-xs text-[#888] mb-0.5">Deployment Time</div>
                <div style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"1.5rem",color:"#0D0D0D"}}>3 Days</div>
                <div className="text-xs font-semibold" style={{color:"#D4891A"}}>⚡ vs 3 months avg</div>
              </div>
            </div>
          </div>

          {/* ── Text side ── */}
          <div>
            <div className="tag-blue mb-6" style={{display:"inline-flex"}}>Platform Capabilities</div>
            <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.8rem,3.5vw,2.8rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1.1rem"}}>
              Everything You Need
              <br/>
              <span className="text-gradient-blue">In One Platform</span>
            </h2>
            <p style={{color:"#666",lineHeight:1.72,marginBottom:"2.2rem"}}>
              Built with modern architecture from day one. Safzzo&apos;s platform handles millions of transactions
              while staying fast, secure, and maintainable.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex gap-3 items-start p-4 rounded-2xl group hover:bg-[rgba(75,92,196,0.04)] transition-colors" style={{border:"1px solid rgba(75,92,196,0.07)"}}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{background:"rgba(75,92,196,0.08)"}}>
                      <Icon size={15} style={{color:"#4B5CC4"}}/>
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{color:"#0D0D0D"}}>{f.label}</div>
                      <div className="text-xs mt-0.5" style={{color:"#999"}}>{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="mb-3" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:"#aaa",letterSpacing:"0.18em",textTransform:"uppercase"}}>Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {techStack.map(t => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full transition-all hover:border-[#4B5CC4] hover:text-[#4B5CC4]" style={{fontFamily:"'JetBrains Mono',monospace",color:"#777",border:"1px solid rgba(0,0,0,0.08)"}}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
