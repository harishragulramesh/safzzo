"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name:"Rajesh Kumar",   role:"CEO, TamilTech Industries",  location:"Coimbatore, TN", review:"Safzzo transformed our operations in under a month. Their ERP replaced 5 disconnected tools and team productivity jumped 40%. The Salem team was phenomenal.", rating:5, avatar:"RK", accent:"#4B5CC4" },
  { name:"Priya Sundaram", role:"Founder, SpiceRoute Commerce",location:"Salem, TN",       review:"As a local Salem business, choosing Safzzo was an easy decision. Their SaaS platform gave us enterprise features at a price that made sense. We scaled 3× in 6 months.", rating:5, avatar:"PS", accent:"#F5A623" },
  { name:"Vikram Nair",    role:"CTO, BrightManufacture",     location:"Chennai, TN",     review:"The technical depth of the Safzzo team is remarkable. Our custom ERP handles 50,000 transactions daily without a hiccup. 99.9% uptime every single month.", rating:5, avatar:"VN", accent:"#4B5CC4" },
  { name:"Kavitha Rajan",  role:"Director, NovaBuild Infra",  location:"Madurai, TN",     review:"Implementation was lightning fast — 3 days vs the 3 months our previous vendor quoted. Safzzo understood our construction business domain deeply.", rating:5, avatar:"KR", accent:"#F5A623" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern opacity-40"/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="tag-orange mb-6" style={{display:"inline-flex"}}>Client Voices</div>
          <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.8rem,4vw,3rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1rem"}}>
            {/* Trusted by Tamil Nadu&apos;s */}
            {/* <br/> */}
            <span className="text-gradient-blue">Best Businesses</span>
          </h2>
          <p style={{color:"#777",fontSize:"1.05rem",maxWidth:"34rem",margin:"0 auto"}}>
            Empowering businesses across every time zone. Safzzo provides the tools for global growth and local excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="card-3d bg-white rounded-3xl p-8 relative overflow-hidden group" style={{border:"1px solid rgba(75,92,196,0.09)",boxShadow:"0 2px 20px rgba(75,92,196,0.06)"}}>
              {/* top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{background:`linear-gradient(90deg,${t.accent},transparent)`}}/>

              <Quote size={28} style={{color:"rgba(75,92,196,0.12)",marginBottom:"1rem"}}/>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_,i) => <Star key={i} size={13} style={{color:"#F5A623",fill:"#F5A623"}}/>)}
              </div>

              <p className="leading-relaxed mb-6 text-sm" style={{color:"#555"}}>
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{background:t.accent}}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{color:"#0D0D0D"}}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{color:"#999"}}>{t.role}</div>
                </div>
                <div className="ml-auto text-xs" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.4)"}}>{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* logo bar */}
        <div className="mt-20 text-center">
          <div className="mb-8 text-xs tracking-widest uppercase" style={{fontFamily:"'JetBrains Mono',monospace",color:"#ccc"}}>Powering Companies Across India</div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["MS Mappillai","","Vision Leads","MACRO WEALTH","YMK","SS TECH","E-TIEUPS","Unique Creation"].map(b => (
              <div key={b} className="font-bold text-sm transition-colors hover:text-[#4B5CC4]" style={{fontFamily:"'Clash Display',sans-serif",color:"#ccc"}}>{b}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
