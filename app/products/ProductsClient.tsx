"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Star, Zap, ArrowRight, Shield, Clock, Users, Database, BarChart3, Cloud, X, CreditCard, Lock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

/* ── Brand tokens ─────────────────────────────────────── */
const B = { blue:"#4B5CC4", blueDark:"#3345A8", blueLight:"#6B7FE3", orange:"#F5A623", orangeDark:"#D4891A", ink:"#0D0D0D", muted:"#666", faint:"#EEF0FF" };

/* ── Products ─────────────────────────────────────────── */
const products = [
  {
    id:"erp", name:"Safzzo ERP", tagline:"Complete Enterprise Resource Planning",
    icon:Database, accentBg:"rgba(75,92,196,0.08)", accentBorder:"rgba(75,92,196,0.18)", accentColor:B.blue,
    popular:true, badge:"Most Popular", rating:4.9, reviews:128,
    features:["Inventory & Warehouse Mgmt","Financial Accounting & GST","HR & Payroll Automation","Purchase & Sales Orders","Multi-branch Support","Real-time Dashboards","API Integrations","Mobile App Access"],
    plans:[
      {name:"Starter",price:2999,users:5,     storage:"10 GB",support:"Email"},
      {name:"Growth", price:7999,users:25,    storage:"50 GB",support:"Priority"},
      {name:"Enterprise",price:19999,users:"Unlimited",storage:"500 GB",support:"Dedicated"},
    ],
  },
  {
    id:"crm", name:"Safzzo CRM", tagline:"AI-Powered Customer Relationship Management",
    icon:Users, accentBg:"rgba(245,166,35,0.08)", accentBorder:"rgba(245,166,35,0.22)", accentColor:B.orangeDark,
    popular:false, badge:"AI Powered", rating:4.8, reviews:94,
    features:["Lead Scoring & Qualification","Pipeline Visualisation","Email & WhatsApp Integration","Sales Forecasting AI","Customer 360° View","Automated Follow-ups","Team Collaboration","Custom Reports & KPIs"],
    plans:[
      {name:"Starter",price:999, users:3,     storage:"5 GB", support:"Email"},
      {name:"Growth", price:3499,users:15,    storage:"25 GB",support:"Priority"},
      {name:"Enterprise",price:9999,users:"Unlimited",storage:"200 GB",support:"Dedicated"},
    ],
  },
  {
    id:"analytics", name:"Analytics Suite", tagline:"Business Intelligence & Reporting Engine",
    icon:BarChart3, accentBg:"rgba(75,92,196,0.07)", accentBorder:"rgba(75,92,196,0.15)", accentColor:B.blueLight,
    popular:false, badge:"New", rating:4.7, reviews:61,
    features:["Real-time Data Pipelines","Custom Dashboard Builder","Automated Reports & Alerts","Multi-source Connectors","Predictive Analytics","Export CSV/PDF/Excel","Role-based Access","White-label Reports"],
    plans:[
      {name:"Starter",price:1499,users:3,     storage:"20 GB", support:"Email"},
      {name:"Growth", price:4999,users:10,    storage:"100 GB",support:"Priority"},
      {name:"Enterprise",price:12999,users:"Unlimited",storage:"1 TB",support:"Dedicated"},
    ],
  },
  {
    id:"cloud", name:"Cloud Platform", tagline:"Scalable Multi-tenant Cloud Infrastructure",
    icon:Cloud, accentBg:"rgba(75,92,196,0.06)", accentBorder:"rgba(75,92,196,0.14)", accentColor:B.blue,
    popular:false, badge:null, rating:4.9, reviews:77,
    features:["Auto-scaling Infrastructure","99.9% Uptime SLA","Custom Domain + SSL","CI/CD Pipelines","Containerised Deployments","Daily Backups","DDoS Protection","24/7 Monitoring"],
    plans:[
      {name:"Starter",price:3999,users:10,    storage:"50 GB", support:"Email"},
      {name:"Growth", price:9999,users:50,    storage:"200 GB",support:"Priority"},
      {name:"Enterprise",price:24999,users:"Unlimited",storage:"2 TB",support:"Dedicated"},
    ],
  },
];

type Plan    = { name:string; price:number; users:number|string; storage:string; support:string };
type Product = typeof products[0];

/* ── 3-step checkout modal ────────────────────────────── */
function CheckoutModal({ product, plan, onClose }: { product:Product; plan:Plan; onClose:()=>void }) {
  const [step,       setStep]      = useState<1|2|3>(1);
  const [billing,    setBilling]   = useState<"monthly"|"annual">("monthly");
  const [form,       setForm]      = useState({ name:"", email:"", company:"", phone:"", gst:"" });
  const [payMethod,  setPayMethod] = useState<"razorpay"|"card">("razorpay");
  const [loading,    setLoading]   = useState(false);
  const [done,       setDone]      = useState(false);

  const Icon     = product.icon;
  const price    = billing === "annual" ? Math.round(plan.price * 10) : plan.price;
  const savings  = billing === "annual" ? plan.price * 2 : 0;
  const gst18    = Math.round(price * 0.18);
  const total    = price + gst18;

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm outline-none bg-[#F7F8FF] text-[#0D0D0D] placeholder:text-[#bbb] transition-all";
  const inputStyle = {border:"1.5px solid rgba(75,92,196,0.12)"};
  const inputFocus = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => e.currentTarget.style.borderColor="#4B5CC4";
  const inputBlur  = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => e.currentTarget.style.borderColor="rgba(75,92,196,0.12)";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}/>

      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[rgba(75,92,196,0.12)] max-h-[90vh] overflow-y-auto" style={{boxShadow:"0 24px 80px rgba(75,92,196,0.18)"}}>
        {/* top bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:"linear-gradient(90deg,#4B5CC4,#F5A623)"}}/>

        {/* header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(75,92,196,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:product.accentBg,border:`1.5px solid ${product.accentBorder}`}}>
              <Icon size={18} style={{color:product.accentColor}}/>
            </div>
            <div>
              <div className="font-bold text-sm" style={{fontFamily:"'Clash Display',sans-serif",color:B.ink}}>{product.name}</div>
              <div className="text-xs" style={{color:"#888"}}>{plan.name} Plan</div>
            </div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors" style={{background:"#F7F8FF",color:"#999"}}
            onMouseEnter={e=>e.currentTarget.style.background="#EEF0FF"}
            onMouseLeave={e=>e.currentTarget.style.background="#F7F8FF"}>
            <X size={17}/>
          </button>
        </div>

        {done ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background:"rgba(75,92,196,0.08)",border:"2px solid rgba(75,92,196,0.15)"}}>
              <Check size={34} style={{color:B.blue}}/>
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{fontFamily:"'Clash Display',sans-serif",color:B.ink}}>Order Confirmed! 🎉</h3>
            <p className="text-sm mb-1" style={{color:"#666"}}>Thank you for choosing Safzzo.</p>
            <p className="text-sm mb-8" style={{color:"#999"}}>Our Salem team will contact you within 2 hours to set up your {product.name} account.</p>
            <div className="rounded-2xl p-5 text-left mb-8" style={{background:"#F7F8FF",border:"1px solid rgba(75,92,196,0.10)"}}>
              {[["Product",`${product.name} — ${plan.name}`],["Billing",billing],["Amount",`₹${total.toLocaleString("en-IN")} (incl. GST)`]].map(([k,v])=>(
                <div key={k} className="flex justify-between text-sm py-1.5 last:border-0" style={{borderBottom:"1px solid rgba(75,92,196,0.06)"}}>
                  <span style={{color:"#888"}}>{k}</span>
                  <span className="font-medium" style={{color:k==="Amount"?B.blue:B.ink}}>{v}</span>
                </div>
              ))}
            </div>
            <button onClick={onClose} className="px-8 py-3 text-white font-bold rounded-xl text-sm" style={{background:B.blue}}>Back to Products</button>
          </div>
        ) : (
          <>
            {/* steps */}
            <div className="flex items-center px-6 py-4 gap-2 border-b border-[rgba(75,92,196,0.07)]">
              {["Plan","Details","Payment"].map((label,i)=>(
                <div key={label} className="flex items-center gap-2 flex-1">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all" style={{
                    background: step > i+1 ? "#4B5CC4" : step === i+1 ? "#4B5CC4" : "#F0F0F0",
                    color:      step >= i+1 ? "white" : "#aaa",
                    boxShadow:  step === i+1 ? "0 0 0 4px rgba(75,92,196,0.12)" : "none"
                  }}>
                    {step > i+1 ? <Check size={11}/> : i+1}
                  </div>
                  <span className="text-xs hidden sm:block" style={{fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.08em",color:step===i+1?B.blue:"#ccc"}}>{label.toUpperCase()}</span>
                  {i < 2 && <div className="flex-1 h-px" style={{background:step>i+1?"rgba(75,92,196,0.3)":"#eee"}}/>}
                </div>
              ))}
            </div>

            <div className="p-6">
              {/* ── Step 1 ── */}
              {step === 1 && (
                <div>
                  <h3 className="font-bold mb-1" style={{fontFamily:"'Clash Display',sans-serif",fontSize:"1.1rem",color:B.ink}}>Choose Billing Cycle</h3>
                  <p className="text-sm mb-6" style={{color:"#888"}}>Annual billing gives you 2 months free.</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {(["monthly","annual"] as const).map(b=>(
                      <button key={b} onClick={()=>setBilling(b)} className="relative p-4 rounded-2xl text-left transition-all"
                        style={{border:`1.5px solid ${billing===b?B.blue:"rgba(75,92,196,0.12)"}`, background:billing===b?"rgba(75,92,196,0.05)":"white"}}>
                        <div className="font-semibold text-sm capitalize" style={{color:B.ink}}>{b}</div>
                        <div className="text-xs mt-0.5" style={{color:"#888"}}>
                          {b==="monthly" ? `₹${plan.price.toLocaleString("en-IN")}/month` : `₹${Math.round(plan.price*10).toLocaleString("en-IN")}/year`}
                        </div>
                        {b==="annual" && <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{background:"rgba(245,166,35,0.12)",color:B.orangeDark}}>2 months FREE</span>}
                        {billing===b && <div className="absolute top-3 right-3 w-4 h-4 rounded-full flex items-center justify-center" style={{background:B.blue}}><Check size={9} color="white"/></div>}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-2xl p-5 mb-6" style={{background:"#F7F8FF",border:"1px solid rgba(75,92,196,0.10)"}}>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm" style={{color:"#888"}}>Selected Plan</span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{background:B.blue,color:"white"}}>{plan.name}</span>
                    </div>
                    {[["Users", typeof plan.users==="number"?`${plan.users} seats`:plan.users], ["Storage",plan.storage], ["Support",`${plan.support} Support`]].map(([k,v])=>(
                      <div key={k} className="flex justify-between text-sm py-1.5" style={{borderBottom:"1px solid rgba(75,92,196,0.06)"}}>
                        <span style={{color:"#888"}}>{k}</span><span style={{color:B.ink,fontWeight:500}}>{v}</span>
                      </div>
                    ))}
                    <div className="flex justify-between mt-4 pt-4" style={{borderTop:"1px solid rgba(75,92,196,0.10)"}}>
                      <span className="font-bold" style={{color:B.ink}}>Total</span>
                      <div className="text-right">
                        <div className="text-xl font-bold" style={{fontFamily:"'Clash Display',sans-serif",color:B.blue}}>₹{price.toLocaleString("en-IN")}</div>
                        <div className="text-xs" style={{color:"#aaa"}}>{billing==="annual"?"per year":"per month"}</div>
                        {savings>0 && <div className="text-xs font-semibold" style={{color:"#15803D"}}>Saving ₹{savings.toLocaleString("en-IN")}</div>}
                      </div>
                    </div>
                  </div>

                  <button onClick={()=>setStep(2)} className="w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm" style={{background:B.blue,boxShadow:`0 8px 24px rgba(75,92,196,0.25)`}}>
                    Continue to Details <ArrowRight size={15}/>
                  </button>
                </div>
              )}

              {/* ── Step 2 ── */}
              {step === 2 && (
                <div>
                  <h3 className="font-bold mb-1" style={{fontFamily:"'Clash Display',sans-serif",fontSize:"1.1rem",color:B.ink}}>Your Details</h3>
                  <p className="text-sm mb-6" style={{color:"#888"}}>A few details to set up your account.</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {[{k:"name",l:"Full Name",p:"Rajesh Kumar",t:"text"},{k:"email",l:"Email",p:"you@company.com",t:"email"}].map(f=>(
                        <div key={f.k}>
                          <label className="block mb-1.5 text-[10px] uppercase tracking-widest" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.5)"}}>{f.l}</label>
                          <input type={f.t} required value={(form as Record<string,string>)[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.p} className={inputCls} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}/>
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block mb-1.5 text-[10px] uppercase tracking-widest" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.5)"}}>Company Name</label>
                      <input type="text" required value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Your Company Pvt. Ltd." className={inputCls} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}/>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[{k:"phone",l:"Phone",p:"+91 9X00 XXX XXX",t:"tel"},{k:"gst",l:"GST (optional)",p:"29ABCDE1234F1Z5",t:"text"}].map(f=>(
                        <div key={f.k}>
                          <label className="block mb-1.5 text-[10px] uppercase tracking-widest" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.5)"}}>{f.l}</label>
                          <input type={f.t} value={(form as Record<string,string>)[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.p} className={inputCls} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}/>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button onClick={()=>setStep(1)} className="px-5 py-3.5 rounded-xl text-sm font-semibold transition-all" style={{border:"1.5px solid rgba(75,92,196,0.15)",color:"#666"}}>Back</button>
                    <button onClick={()=>{ if(form.name&&form.email&&form.company&&form.phone) setStep(3); }} className="flex-1 py-3.5 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm" style={{background:B.blue}}>
                      Continue to Payment <ArrowRight size={15}/>
                    </button>
                  </div>
                </div>
              )}

              {/* ── Step 3 ── */}
              {step === 3 && (
                <div>
                  <h3 className="font-bold mb-1" style={{fontFamily:"'Clash Display',sans-serif",fontSize:"1.1rem",color:B.ink}}>Secure Payment</h3>
                  <p className="text-sm mb-6" style={{color:"#888"}}>Your payment is encrypted and secure.</p>

                  <div className="rounded-2xl p-4 mb-5" style={{background:"#F7F8FF",border:"1px solid rgba(75,92,196,0.10)"}}>
                    <div className="text-[10px] uppercase tracking-widest mb-3" style={{fontFamily:"'JetBrains Mono',monospace",color:"rgba(75,92,196,0.5)"}}>Order Summary</div>
                    {[[`${product.name} — ${plan.name}`,`₹${price.toLocaleString("en-IN")}`],["GST (18%)",`₹${gst18.toLocaleString("en-IN")}`]].map(([k,v])=>(
                      <div key={k} className="flex justify-between text-sm mb-1.5"><span style={{color:"#888"}}>{k}</span><span style={{color:B.ink}}>{v}</span></div>
                    ))}
                    <div className="flex justify-between font-bold mt-2 pt-2" style={{borderTop:"1px solid rgba(75,92,196,0.10)"}}>
                      <span style={{color:B.ink}}>Total</span>
                      <span style={{fontFamily:"'Clash Display',sans-serif",fontSize:"1.15rem",color:B.blue}}>₹{total.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {(["razorpay","card"] as const).map(m=>(
                      <button key={m} onClick={()=>setPayMethod(m)} className="p-4 rounded-2xl text-left transition-all" style={{border:`1.5px solid ${payMethod===m?B.blue:"rgba(75,92,196,0.10)"}`,background:payMethod===m?"rgba(75,92,196,0.04)":"white"}}>
                        <div className="flex items-center gap-2 mb-0.5">
                          {m==="razorpay" ? <Zap size={13} style={{color:B.blue}}/> : <CreditCard size={13} style={{color:B.blue}}/>}
                          <span className="font-semibold text-sm" style={{color:B.ink}}>{m==="razorpay"?"Razorpay":"Card"}</span>
                        </div>
                        <div className="text-xs" style={{color:"#aaa"}}>{m==="razorpay"?"UPI, NetBanking, Wallets":"Visa / MC / Amex"}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-xs" style={{color:"#bbb"}}>
                    <Lock size={11} style={{color:B.blue}}/> 256-bit SSL encryption. Payment data never stored by Safzzo.
                  </div>

                  <div className="flex gap-3">
                    <button onClick={()=>setStep(2)} className="px-5 py-3.5 rounded-xl text-sm font-semibold" style={{border:"1.5px solid rgba(75,92,196,0.15)",color:"#666"}}>Back</button>
                    <button onClick={()=>{setLoading(true);setTimeout(()=>{setLoading(false);setDone(true);},2000);}} disabled={loading}
                      className="flex-1 py-3.5 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm disabled:opacity-60"
                      style={{background:B.blue,boxShadow:`0 6px 20px rgba(75,92,196,0.25)`}}>
                      {loading ? <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"/>Processing…</> : <><Lock size={13}/>Pay ₹{total.toLocaleString("en-IN")}</>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Product card ─────────────────────────────────────── */
function ProductCard({ product }: { product:Product }) {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const Icon = product.icon;
  const plan = product.plans[selectedPlan];

  return (
    <>
      <div className={`card-3d bg-white rounded-3xl overflow-hidden relative ${product.popular?"ring-2 ring-[#4B5CC4]/20":""}`} style={{border:"1px solid rgba(75,92,196,0.10)",boxShadow:"0 4px 24px rgba(75,92,196,0.07)"}}>
        {product.popular && <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{background:"linear-gradient(90deg,#4B5CC4,#F5A623)"}}/>}

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm" style={{background:product.accentBg,border:`1.5px solid ${product.accentBorder}`}}>
              <Icon size={24} style={{color:product.accentColor}}/>
            </div>
            {product.badge && (
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{background:product.popular?"rgba(75,92,196,0.08)":"rgba(245,166,35,0.10)",color:product.popular?B.blue:B.orangeDark,border:`1px solid ${product.popular?"rgba(75,92,196,0.18)":"rgba(245,166,35,0.22)"}`}}>
                {product.badge}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold mb-1" style={{fontFamily:"'Clash Display',sans-serif",color:B.ink}}>{product.name}</h3>
          <p className="text-sm mb-5" style={{color:"#888"}}>{product.tagline}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_,i)=><Star key={i} size={12} style={{color:i<Math.floor(product.rating)?"#F5A623":"#eee",fill:i<Math.floor(product.rating)?"#F5A623":"#eee"}}/>)}
            </div>
            <span className="font-bold text-sm" style={{color:B.ink}}>{product.rating}</span>
            <span className="text-xs" style={{color:"#bbb"}}>({product.reviews} reviews)</span>
          </div>

          <ul className="space-y-2 mb-8">
            {product.features.slice(0,6).map(f=>(
              <li key={f} className="flex items-center gap-2.5 text-sm" style={{color:"#555"}}>
                <Check size={13} style={{color:B.blue,flexShrink:0}}/>{f}
              </li>
            ))}
            {product.features.length>6 && <li className="text-xs pl-5" style={{color:"rgba(75,92,196,0.5)"}}>+{product.features.length-6} more features</li>}
          </ul>

          {/* plan tabs */}
          <div className="flex rounded-xl overflow-hidden mb-6" style={{border:"1.5px solid rgba(75,92,196,0.12)"}}>
            {product.plans.map((p,i)=>(
              <button key={p.name} onClick={()=>setSelectedPlan(i)} className="flex-1 py-2 text-xs font-bold transition-all" style={{background:selectedPlan===i?B.blue:"transparent",color:selectedPlan===i?"white":"#aaa"}}>
                {p.name}
              </button>
            ))}
          </div>

          <div className="flex items-end gap-2 mb-1">
            <span className="text-3xl font-bold" style={{fontFamily:"'Clash Display',sans-serif",color:B.ink}}>₹{plan.price.toLocaleString("en-IN")}</span>
            <span className="text-sm mb-1" style={{color:"#bbb"}}>/month</span>
          </div>
          <div className="flex gap-3 text-xs mb-7" style={{color:"#bbb"}}>
            <span>{typeof plan.users==="number"?`${plan.users} users`:plan.users}</span><span>·</span><span>{plan.storage}</span><span>·</span><span>{plan.support}</span>
          </div>

          <button onClick={()=>setCheckoutOpen(true)} className="w-full py-4 text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-sm transition-all"
            style={{background:B.blue,boxShadow:"0 6px 22px rgba(75,92,196,0.22)"}}
            onMouseEnter={e=>e.currentTarget.style.background=B.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=B.blue}>
            Get {product.name} <ArrowRight size={15}/>
          </button>
        </div>
      </div>

      {checkoutOpen && <CheckoutModal product={product} plan={plan} onClose={()=>setCheckoutOpen(false)}/>}
    </>
  );
}

/* ── Main page ────────────────────────────────────────── */
const guarantees = [
  { icon: Shield, label: "Risk-Free Trial", desc: "Evaluate our full suite for 14 days" },
  { icon: Lock, label: "Enterprise Security", desc: "Bank-grade encryption & data privacy" },
  { icon: Clock, label: "Rapid Deployment", desc: "Operational within 24-48 hours" },
  { icon: Zap, label: "Seamless Migration", desc: "White-glove data transfer service" },
];

export default function ProductsClient() {
  return (
    <>
      <CustomCursor/>
      <Navbar/>
      <main style={{background:"white",minHeight:"100vh"}}>

        {/* hero */}
        <section className="pt-40 pb-24 relative overflow-hidden bg-animated grid-pattern">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full blur-3xl pointer-events-none" style={{background:"rgba(75,92,196,0.06)"}}/>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="tag-blue mb-6" style={{display:"inline-flex"}}>Safzzo Products</div>
            <h1 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(2.4rem,5vw,4rem)",color:B.ink,letterSpacing:"-0.025em",marginBottom:"1.2rem"}}>
              Enterprise Software
              <br/><span className="text-gradient-blue">That Actually Works</span>
            </h1>
            <p style={{color:"#777",fontSize:"1.05rem",maxWidth:"36rem",margin:"0 auto 2.5rem"}}>
              Transparent pricing, no hidden fees, cancel anytime. Built for Indian businesses by a Salem team.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {guarantees.map(({icon:Icon,label,desc})=>(
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:"rgba(75,92,196,0.08)"}}>
                    <Icon size={15} style={{color:B.blue}}/>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold" style={{color:B.ink}}>{label}</div>
                    <div className="text-xs" style={{color:"#aaa"}}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* products */}
        <section className="py-20" style={{background:"#F7F8FF"}}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-7">
              {products.map(p=><ProductCard key={p.id} product={p}/>)}
            </div>
          </div>
        </section>

        {/* comparison table */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.7rem,3vw,2.5rem)",color:B.ink,letterSpacing:"-0.02em",marginBottom:"0.7rem"}}>
                Why Choose <span className="text-gradient-blue">Safzzo?</span>
              </h2>
              <p style={{color:"#888"}}>See how we compare to in-house builds or foreign SaaS.</p>
            </div>
            <div className="rounded-3xl overflow-hidden" style={{border:"1.5px solid rgba(75,92,196,0.12)", boxShadow:"0 4px 32px rgba(75,92,196,0.07)"}}>
              {/* Wrap the grid in a div that allows horizontal scrolling on small screens */}
              <div className="overflow-x-auto">
                {/* Set a min-width so the columns don't squish on mobile */}
                <div className="grid grid-cols-4 min-w-[700px] md:min-w-full">
                  
                  {["Feature","Safzzo","In-house Build","Foreign SaaS"].map((h,i)=>(
                    <div key={h} className="p-4 text-sm font-bold" style={{
                      background: i === 1 ? "rgba(75,92,196,0.06)" : "#F7F8FF",
                      color: i === 1 ? "#4B5CC4" : "#888", // Replaced B.blue with your hex for safety
                      borderBottom: "1.5px solid rgba(75,92,196,0.08)",
                      fontFamily: i > 0 ? "'Clash Display',sans-serif" : "'DM Sans',sans-serif"
                    }}>
                      {h}
                    </div>
                  ))}

                  {[
                    ["GST/Global Tax Ready", "✅", "⚠️ Custom dev", "❌ No"],
                    ["Multi-Language Support", "✅", "⚠️ Custom dev", "❌ Limited"],
                    ["Local & Global Payments", "✅", "⚠️ Custom dev", "❌ Limited"],
                    ["Setup Time", "Same day", "6–12 months", "1–3 months"],
                    ["Data Compliance", "✅ Regional", "Depends", "❌ Global only"],
                    ["Price", "Scalable", "High upfront", "Premium USD"],
                    ["Expert Support", "24/7 Priority", "Varies", "Email only"],
                  ].map((row, ri) => row.map((cell, ci) => (
                    <div key={`${ri}-${ci}`} className="p-4 text-sm" style={{
                      background: ci === 1 ? "rgba(75,92,196,0.03)" : ri % 2 === 0 ? "white" : "#FAFBFF",
                      color: ci === 1 ? "#4B5CC4" : "#555",
                      fontWeight: ci === 1 ? 600 : 400,
                      borderBottom: "1px solid rgba(75,92,196,0.06)"
                    }}>
                      {cell}
                    </div>
                  )))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{background:"#F7F8FF"}}>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-center mb-10" style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.7rem,3vw,2.5rem)",color:B.ink}}>
              Frequently Asked <span className="text-gradient-blue">Questions</span>
            </h2>
            <div className="space-y-3">
              {[
                {q:"Is my data stored in India?",a:"Yes. All Safzzo customer data is stored on AWS Mumbai (ap-south-1) servers, ensuring your data never leaves India's jurisdiction."},
                {q:"Can I cancel anytime?",a:"Absolutely. No long-term contracts. Cancel monthly plans anytime; annual plans receive a pro-rated refund within 30 days."},
                {q:"Do you support Tamil and regional languages?",a:"Yes. Our products support Tamil, Hindi, and English interfaces with more regional languages coming soon."},
                {q:"Is a GST invoice provided?",a:"Yes. All purchases receive a proper GST invoice from Safzzo Software Private Limited, Salem, Tamil Nadu."},
                {q:"What onboarding support is included?",a:"All plans include live onboarding from our Salem team. Enterprise plans get a dedicated account manager and free data migration."},
              ].map(({q,a},i)=>(
                <details key={i} className="bg-white rounded-2xl group" style={{border:"1px solid rgba(75,92,196,0.10)"}}>
                  <summary className="p-5 text-sm font-semibold flex items-center justify-between list-none" style={{color:B.ink}}>
                    {q}
                    <span style={{color:"rgba(75,92,196,0.5)",fontSize:"1.2rem",transition:"transform 0.2s"}} className="group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{color:"#777"}}>{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* bottom CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="rounded-3xl p-10 relative overflow-hidden" style={{background:"linear-gradient(135deg,rgba(75,92,196,0.06),rgba(245,166,35,0.05))",border:"1.5px solid rgba(75,92,196,0.14)"}}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{background:"linear-gradient(90deg,#4B5CC4,#F5A623)"}}/>
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin size={14} style={{color:B.blue}}/>
                <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",color:B.blue,letterSpacing:"0.15em",textTransform:"uppercase"}}>India</span>
              </div>
              <h2 className="mb-4" style={{fontFamily:"'Clash Display',sans-serif",fontWeight:800,fontSize:"clamp(1.6rem,3vw,2.4rem)",color:B.ink}}>
                Not Sure Which Plan?
              </h2>
              <p className="mb-8" style={{color:"#777"}}>Book a free 30-minute demo with our Salem team.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contact" className="px-8 py-4 text-white font-bold rounded-2xl text-sm" style={{background:B.blue,boxShadow:"0 8px 24px rgba(75,92,196,0.25)"}}>Book Free Demo</Link>
                <Link href="/" className="px-8 py-4 font-bold rounded-2xl text-sm border" style={{color:B.blue,border:"1.5px solid rgba(75,92,196,0.22)"}}>Back to Home</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
