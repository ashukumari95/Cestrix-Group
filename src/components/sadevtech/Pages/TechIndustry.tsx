/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Plane, Ship, Zap, ShieldCheck, 
  ArrowRight, CheckCircle2, BarChart3, 
  Cpu, Layers, Globe, PhoneCall, Database, ChevronRight
} from "lucide-react";

export default function TechIndustry() {
  
  const industries = [
    {
      id: "construction",
      category: "Construction & Infrastructure",
      icon: Building2,
      title: "Software for Mega Construction Projects",
      subtitle: "Manage Sites, Materials & Contractors",
      desc: "Managing massive construction sites is difficult. We build simple, powerful software that helps you track building materials, manage worker attendance, and monitor project progress in real-time.",
      capabilities: [
        "Track cement, steel, and inventory easily",
        "Automate contractor billing and payments",
        "Mobile app for site workers to log daily work",
        "Catch design errors before actual construction"
      ],
      impact: "Save 30% on material costs",
      img: "./public/image43.png"
    },
    {
      id: "transport",
      category: "Transport & Aviation",
      icon: Plane,
      title: "Technology for Airports and Highways",
      subtitle: "Keep People and Goods Moving",
      desc: "Keep people and goods moving without delays. Our software helps airports manage passenger flow and highway authorities track heavy vehicles to ensure everything runs on time.",
      capabilities: [
        "Smart dashboards for airport terminals",
        "Live GPS tracking for heavy trucks",
        "Automated toll and logistics software",
        "Maintenance alerts for railway tracks"
      ],
      impact: "Save 22% on fuel and maintenance",
      img: "./public/image44.png"
    },
    {
      id: "marine",
      category: "Marine & Seaports",
      icon: Ship,
      title: "Smart Solutions for Shipping Ports",
      subtitle: "Manage Ships, Cranes, and Containers",
      desc: "Seaports handle thousands of containers daily. We provide technology that helps port authorities track ships, automate heavy cranes, and load/unload cargo much faster.",
      capabilities: [
        "Live tracking of ships and fuel usage",
        "Smart software to arrange containers",
        "Complete management software for Ports",
        "Temperature tracking for sensitive cargo"
      ],
      impact: "Load containers 40% faster",
      img: "./public/image45.png"
    },
    {
      id: "energy",
      category: "Power Grids & Energy",
      icon: Zap,
      title: "Securing Solar Plants and Power Grids",
      subtitle: "Prevent Blackouts and Monitor Health",
      desc: "Power cuts can cost millions. Our monitoring tools keep a close eye on your solar panels, wind turbines, and power grids to detect problems before they cause a blackout.",
      capabilities: [
        "Live dashboards to monitor national grids",
        "Early warning system for machine failures",
        "Software to track green energy",
        "Secure networks against hackers"
      ],
      impact: "Zero sudden power cuts",
      img: "./public/image46.png"
    },
    {
      id: "defense",
      category: "Defense & Government",
      icon: ShieldCheck,
      title: "High-Security Defense Technology",
      subtitle: "100% Private and Secure Systems",
      desc: "National security projects need absolute privacy. We build highly secure, private data systems for government and defense agencies where data never leaks to the outside internet.",
      capabilities: [
        "100% private cloud networks",
        "Military-grade data encryption",
        "AI cameras to detect security threats",
        "Strict compliance with global laws"
      ],
      impact: "100% safe and secure data",
      img: "./public/image10.png"
    }
  ];

  const [activeInd, setActiveInd] = useState(industries[0]);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("main-scroll-view")?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#00A3E0] selection:text-white pt-[76px] lg:pt-[88px] overflow-x-hidden">
      
      {/* =========================================
          1. HERO SECTION (Clean Text + Background Image)
      ========================================= */}
      <section className="relative w-full h-[75vh] min-h-[550px] flex items-center overflow-hidden bg-[#001730]">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="./public/image38.png" 
            alt="Sadev Tech Real World Software" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Dark gradient on the left side so the white text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-transparent"></div>
        </div>

        {/* Content Aligned to the LEFT */}
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-start text-left">
          
          <div className="max-w-2xl">
            {/* Main Heading (Size reduced, elements removed) */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold text-white font-heading leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
            >
              Software Built for the <br className="hidden sm:block" />
              <span className="text-[#00A3E0]">Real World</span>
            </motion.h1>
            
            {/* Subheading Paragraph (Size reduced) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-lg mb-10 drop-shadow-md"
            >
              We build simple, powerful, and highly secure software solutions tailored specifically for heavy engineering, transportation, energy, and defense sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================
          2. INTERACTIVE SPLIT-SCREEN (Simple Content)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT: Interactive Sidebar */}
            <div className="lg:w-1/3 flex flex-col gap-3">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 ml-4">Select an Industry</h3>
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveInd(ind)}
                  className={`w-full text-left px-6 py-5 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
                    activeInd.id === ind.id 
                      ? "bg-white border-[#00A3E0]/30 shadow-[0_10px_30px_rgba(0,163,224,0.1)] translate-x-2" 
                      : "bg-transparent border-transparent hover:bg-slate-100/50 hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeInd.id === ind.id ? "bg-[#E1F0FF] text-[#00A3E0]" : "bg-slate-200 text-slate-400"}`}>
                      <ind.icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold font-heading text-sm md:text-base transition-colors ${activeInd.id === ind.id ? "text-[#002D62]" : "text-slate-500"}`}>
                      {ind.category}
                    </span>
                  </div>
                  {activeInd.id === ind.id && <ChevronRight className="w-4 h-4 text-[#00A3E0]" />}
                </button>
              ))}
            </div>

            {/* RIGHT: Dynamic Content Card */}
            <div className="lg:w-2/3 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInd.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,45,98,0.06)] border border-slate-100 flex flex-col h-full"
                >
                  {/* Dynamic Image Header */}
                  <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[#001730]">
                    <img 
                      src={activeInd.img} 
                      alt={activeInd.title} 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <BarChart3 className="w-3 h-3" /> Result: {activeInd.impact}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold text-white font-heading leading-tight max-w-xl">
                        {activeInd.title}
                      </h2>
                    </div>
                  </div>

                  {/* Dynamic Content Body */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                      {activeInd.desc}
                    </p>

                    <h4 className="text-xs font-bold text-[#002D62] uppercase tracking-[0.1em] mb-5 border-b border-slate-100 pb-3">
                      How we can help:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                      {activeInd.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                          <span className="text-xs md:text-sm font-medium text-slate-700">{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <button 
                        onClick={() => {
                          window.location.hash = "contact";
                          window.dispatchEvent(new HashChangeEvent("hashchange"));
                        }}
                        className="bg-[#002D62] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#00A3E0] transition-colors rounded-full flex items-center gap-2 w-fit shadow-md"
                      >
                        Discuss Your Project <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. "BENTO GRID" WHY CHOOSE US (Simple Content)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#001730] text-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
             <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-4 block">WHY CHOOSE SADEV TECH</span>
             <h2 className="text-3xl md:text-5xl font-bold font-heading">Built for the Real World.</h2>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Big Card (Spans 2 columns on desktop) */}
            <div className="md:col-span-2 bg-gradient-to-br from-white/10 to-transparent p-10 rounded-[2rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A3E0]/20 rounded-full blur-[80px] group-hover:bg-[#00A3E0]/30 transition-colors"></div>
              <Cpu className="w-12 h-12 text-[#00A3E0] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold font-heading mb-4 relative z-10">Engineers Who Understand Your Business</h3>
              <p className="text-slate-300 font-light leading-relaxed max-w-lg relative z-10 text-sm md:text-base">
                Our software developers work directly with civil, marine, and mechanical engineers. This means we actually understand how your business works on the ground, not just on a computer screen.
              </p>
            </div>

            {/* Small Card 1 */}
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
              <Database className="w-8 h-8 text-[#00A3E0] mb-6" />
              <h3 className="text-xl font-bold font-heading mb-3">No Internet? No Problem</h3>
              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                Our software works even without an internet connection. Remote construction sites and deep-sea ports will never lose data if the network drops.
              </p>
            </div>

            {/* Small Card 2 */}
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
              <Layers className="w-8 h-8 text-[#00A3E0] mb-6" />
              <h3 className="text-xl font-bold font-heading mb-3">Connects with Old Systems</h3>
              <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                You don't need to throw away your old software. We can connect our new tools to your existing SAP or Oracle systems easily.
              </p>
            </div>

            {/* Big Horizontal Card */}
            <div className="md:col-span-2 bg-[#00A3E0]/10 p-8 md:p-10 rounded-[2rem] border border-[#00A3E0]/30 flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                 <h3 className="text-2xl font-bold font-heading mb-2">Military-Grade Security</h3>
                 <p className="text-sm text-slate-300 font-light">Your data is completely safe with us. We follow the strictest global security laws like ISO 27001 and SOC2.</p>
               </div>
               <ShieldCheck className="w-16 h-16 text-[#00A3E0] shrink-0 opacity-80" />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. CTA (Simple Text)
      ========================================= */}
      <section className="w-full py-28 px-6 bg-[#E1F0FF] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md mb-6">
            <PhoneCall className="w-7 h-7 text-[#002D62]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading tracking-tight leading-tight mb-6">
            Ready to Upgrade Your Business?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free call with our experts today. We will understand your problems and build a custom software plan for you.
          </p>
          <button 
            onClick={() => {
              window.location.hash = "contact";
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }} 
            className="px-10 py-4 bg-[#002D62] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#00A3E0] transition-colors rounded-full shadow-xl inline-flex items-center gap-3"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}