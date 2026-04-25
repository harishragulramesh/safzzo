// "use client";
// import { useState } from "react";
// import { Send, MapPin, Mail, Phone } from "lucide-react";

// export default function ContactSection() {
//   const [form, setForm] = useState({ name:"", email:"", company:"", message:"" });
//   const [sent, setSent] = useState(false);

//   return (
//     <section id="contact" className="py-32 relative overflow-hidden" style={{background:"#F7F8FF"}}>
//       <div className="absolute inset-0 grid-pattern opacity-50"/>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* CTA banner */}
//         <div className="rounded-3xl p-10 md:p-16 mb-20 text-center relative overflow-hidden bg-white" style={{border:"1.5px solid rgba(75,92,196,0.14)",boxShadow:"0 8px 48px rgba(75,92,196,0.10)"}}>
//           <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{background:"linear-gradient(90deg,#4B5CC4,#F5A623,#4B5CC4)"}}/>
//           <div className="tag-blue mb-6" style={{display:"inline-flex"}}>Start Today</div>
//           <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.8rem,4vw,3rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1rem"}}>
//             Ready to Transform
//             <br/><span className="text-gradient-blue">Your Business?</span>
//           </h2>
//           <p style={{color:"#777",marginBottom:"2.5rem",maxWidth:"32rem",margin:"0 auto 2.5rem"}}>
//             Join 50+ businesses across Tamil Nadu who trust Safzzo for mission-critical software.
//           </p>
//           <a href="#contact-form" className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-2xl text-sm transition-all" style={{background:"#4B5CC4",boxShadow:"0 8px 28px rgba(75,92,196,0.28)"}}>
//             Get a Free Demo
//           </a>
//         </div>

//         {/* form + info */}
//         <div id="contact-form" className="grid lg:grid-cols-2 gap-12">
//           {/* info */}
//           <div>
//             <h3 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.5rem,3vw,2.2rem)",color:"#0D0D0D",letterSpacing:"-0.02em",marginBottom:"1.2rem"}}>
//               Let&apos;s Build
//               <br/><span className="text-gradient-blue">Something Great</span>
//             </h3>
//             <p style={{color:"#666",lineHeight:1.72,marginBottom:"2.5rem"}}>
//               Tell us about your business challenges and we&apos;ll craft a SaaS solution that fits your exact needs.
//               Our Salem team is ready to partner with you.
//             </p>
//             <div className="space-y-4">
//               {[
//                 { icon:MapPin, label:"Office", value:"Salem, Tamil Nadu — 636001, India" },
//                 { icon:Mail,   label:"Email",  value:"hello@safzzo.com" },
//                 { icon:Phone,  label:"Phone",  value:"+91 9X00 XXX XXX" },
//               ].map(({icon:Icon,label,value}) => (
//                 <div key={label} className="flex gap-4 items-center">
//                   <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{background:"rgba(75,92,196,0.07)"}}>
//                     <Icon size={17} style={{color:"#4B5CC4"}}/>
//                   </div>
//                   <div>
//                     <div className="text-[10px] tracking-widest uppercase mb-0.5" style={{fontFamily:"'JetBrains Mono',monospace",color:"#bbb"}}>{label}</div>
//                     <div className="text-sm font-medium" style={{color:"#333"}}>{value}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* form */}
//           <div className="bg-white rounded-3xl p-8" style={{border:"1px solid rgba(75,92,196,0.10)",boxShadow:"0 4px 32px rgba(75,92,196,0.07)"}}>
//             {sent ? (
//               <div className="h-full flex items-center justify-center text-center py-10">
//                 <div>
//                   <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:"rgba(75,92,196,0.08)"}}>
//                     <Send size={24} style={{color:"#4B5CC4"}}/>
//                   </div>
//                   <h4 className="font-bold text-xl mb-2" style={{fontFamily:"'Clash Display',sans-serif",color:"#0D0D0D"}}>Message Sent!</h4>
//                   <p className="text-sm" style={{color:"#888"}}>Our team will reach out within 24 hours.</p>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="space-y-4">
//                 <div className="grid grid-cols-2 gap-3">
//                   {[{key:"name",label:"Your Name",placeholder:"Rajesh Kumar",type:"text"},{key:"email",label:"Email",placeholder:"you@company.com",type:"email"}].map(f => (
//                     <div key={f.key}>
//                       <label className="block mb-1.5 text-[10px] tracking-widest uppercase" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.55)"}}>{f.label}</label>
//                       <input type={f.type} required value={(form as Record<string,string>)[f.key]}
//                         onChange={e=>setForm({...form,[f.key]:e.target.value})}
//                         placeholder={f.placeholder}
//                         className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
//                         style={{border:"1.5px solid rgba(75,92,196,0.12)",color:"#0D0D0D",background:"#F7F8FF"}}
//                         onFocus={e=>e.currentTarget.style.borderColor="#4B5CC4"}
//                         onBlur={e=>e.currentTarget.style.borderColor="rgba(75,92,196,0.12)"}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div>
//                   <label className="block mb-1.5 text-[10px] tracking-widest uppercase" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.55)"}}>Company</label>
//                   <input type="text" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
//                     placeholder="Your Company Pvt. Ltd."
//                     className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
//                     style={{border:"1.5px solid rgba(75,92,196,0.12)",color:"#0D0D0D",background:"#F7F8FF"}}
//                     onFocus={e=>e.currentTarget.style.borderColor="#4B5CC4"}
//                     onBlur={e=>e.currentTarget.style.borderColor="rgba(75,92,196,0.12)"}
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1.5 text-[10px] tracking-widest uppercase" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.55)"}}>Message</label>
//                   <textarea rows={4} required value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
//                     placeholder="Tell us about your project..."
//                     className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
//                     style={{border:"1.5px solid rgba(75,92,196,0.12)",color:"#0D0D0D",background:"#F7F8FF"}}
//                     onFocus={e=>e.currentTarget.style.borderColor="#4B5CC4"}
//                     onBlur={e=>e.currentTarget.style.borderColor="rgba(75,92,196,0.12)"}
//                   />
//                 </div>
//                 <button type="submit" className="w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm transition-all" style={{background:"#4B5CC4",boxShadow:"0 6px 24px rgba(75,92,196,0.25)"}}
//                   onMouseEnter={e=>e.currentTarget.style.background="#3345A8"}
//                   onMouseLeave={e=>e.currentTarget.style.background="#4B5CC4"}>
//                   Send Message <Send size={15}/>
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState, FormEvent } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  // Added FormEvent type to 'e' and Error type for 'error'
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Replace this with your Google Script URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyhWsTuzhcWJ7spZC5K-BJRnvZ_ZZhK_BZFcUg7KiJlRP2saazsxlom6WIy6MVSKi7W/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Reset form and show success UI
      setSent(true);
      setForm({ name: "", email: "", company: "", message: "" });

    } catch (error: any) {
      console.error("Error!", error.message);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ background: "#F7F8FF" }}>
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA banner */}
        <div className="rounded-3xl p-10 md:p-16 mb-20 text-center relative overflow-hidden bg-white" style={{ border: "1.5px solid rgba(75,92,196,0.14)", boxShadow: "0 8px 48px rgba(75,92,196,0.10)" }}>
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg,#4B5CC4,#F5A623,#4B5CC4)" }} />
          <div className="tag-blue mb-6" style={{ display: "inline-flex" }}>Start Today</div>
          <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,3rem)", color: "#0D0D0D", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Ready to Transform
            <br /><span className="text-gradient-blue">Your Business?</span>
          </h2>
          <p style={{ color: "#777", marginBottom: "2.5rem", maxWidth: "32rem", margin: "0 auto 2.5rem" }}>
            Join 50+ businesses across Tamil Nadu who trust Safzzo for mission-critical software.
          </p>
          <a href="#contact-form" className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-2xl text-sm transition-all" style={{ background: "#4B5CC4", boxShadow: "0 8px 28px rgba(75,92,196,0.28)" }}>
            Get a Free Demo
          </a>
        </div>

        {/* form + info */}
        <div id="contact-form" className="grid lg:grid-cols-2 gap-12">
          {/* info */}
          <div>
            <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#0D0D0D", letterSpacing: "-0.02em", marginBottom: "1.2rem" }}>
              Let&apos;s Build
              <br /><span className="text-gradient-blue">Something Great</span>
            </h3>
            <p style={{ color: "#666", lineHeight: 1.72, marginBottom: "2.5rem" }}>
              Tell us about your business challenges and we&apos;ll craft a SaaS solution that fits your exact needs.
              Our Salem team is ready to partner with you.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Office", value: "Salem, Tamil Nadu — 636001, India" },
                { icon: Mail, label: "Email", value: "safzzoswp@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 8072029539" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(75,92,196,0.07)" }}>
                    <Icon size={17} style={{ color: "#4B5CC4" }} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "'JetBrains Mono',monospace", color: "#bbb" }}>{label}</div>
                    <div className="text-sm font-medium" style={{ color: "#333" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* form */}
          <div className="bg-white rounded-3xl p-8" style={{ border: "1px solid rgba(75,92,196,0.10)", boxShadow: "0 4px 32px rgba(75,92,196,0.07)" }}>
            {sent ? (
              <div className="h-full flex items-center justify-center text-center py-10">
                <div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(75,92,196,0.08)" }}>
                    <Send size={24} style={{ color: "#4B5CC4" }} />
                  </div>
                  <h4 className="font-bold text-xl mb-2" style={{ fontFamily: "'Clash Display',sans-serif", color: "#0D0D0D" }}>Message Sent!</h4>
                  <p className="text-sm" style={{ color: "#888" }}>Our team will reach out within 24 hours.</p>
                </div>
              </div>
            ) : (
              // Updated to use the handleSubmit function we defined above
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "name", label: "Your Name", placeholder: "Rajesh Kumar", type: "text" },
                    { key: "email", label: "Email", placeholder: "you@company.com", type: "email" }
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block mb-1.5 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(75,92,196,0.55)" }}>{f.label}</label>
                      <input
                        type={f.type}
                        required
                        value={(form as any)[f.key]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: "1.5px solid rgba(75,92,196,0.12)", color: "#0D0D0D", background: "#F7F8FF" }}
                        onFocus={e => e.currentTarget.style.borderColor = "#4B5CC4"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(75,92,196,0.12)"}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block mb-1.5 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(75,92,196,0.55)" }}>Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="Your Company Pvt. Ltd."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{ border: "1.5px solid rgba(75,92,196,0.12)", color: "#0D0D0D", background: "#F7F8FF" }}
                    onFocus={e => e.currentTarget.style.borderColor = "#4B5CC4"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(75,92,196,0.12)"}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-[10px] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono',monospace", color: "rgba(75,92,196,0.55)" }}>Message</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
                    style={{ border: "1.5px solid rgba(75,92,196,0.12)", color: "#0D0D0D", background: "#F7F8FF" }}
                    onFocus={e => e.currentTarget.style.borderColor = "#4B5CC4"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(75,92,196,0.12)"}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm transition-all"
                  style={{ background: "#4B5CC4", boxShadow: "0 6px 24px rgba(75,92,196,0.25)" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#3345A8"}
                  onMouseLeave={e => e.currentTarget.style.background = "#4B5CC4"}
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}