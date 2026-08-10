/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  ArrowRight, Monitor, Box, RadioTower, ShieldCheck, 
  CheckCircle2, ChevronRight, Server, Database, Cloud, 
  Cog, Activity, Cpu, Briefcase, Users, Lock, Zap, Brain, Sparkles, Bot
} from "lucide-react";

// Animation Variants for smooth scrolling
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TechServices() {
  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#002D62] selection:text-white overflow-x-hidden pt-[76px] lg:pt-[88px]">

      {/* =========================================
          1. HERO SECTION (Background Image + Left Aligned Clean Content)
      ========================================= */}
      <section className="relative w-full h-[75vh] min-h-[550px] flex items-center overflow-hidden bg-[#001730] border-b border-slate-200">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
            alt="Engineering Infrastructure" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Dark gradient on the left side so the white text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-transparent"></div>
        </div>

        {/* Content Aligned to the LEFT */}
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-start text-left">
          
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold text-white font-heading leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
            >
              Software Engineered for <br className="hidden sm:block" />
              <span className="text-[#00A3E0]">Physical Execution</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-lg mb-10 drop-shadow-md"
            >
              Generic IT solutions break under the immense scale and complexity of heavy civil engineering and manufacturing. Cestrix Tech architects highly specialized, enterprise-grade software ecosystems that deliver absolute operational control, from the boardroom to the construction site.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================
          2. STICKY SUB-NAVIGATION 
      ========================================= */}
      <div className="w-full sticky top-[72px] md:top-[85px] z-40 hidden lg:block px-6">
        <div className="max-w-[1100px] mx-auto bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,45,98,0.08)] border border-slate-200 rounded-full mt-[-28px] px-8 py-2.5 flex items-center justify-between">
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#erp" className="hover:text-[#002D62] transition-colors py-2">Construction ERP</a>
            <a href="#bim" className="hover:text-[#002D62] transition-colors py-2">5D Digital Twins</a>
            <a href="#iot" className="hover:text-[#002D62] transition-colors py-2">Telematics & IoT</a>
            <a href="#ai-data" className="text-[#00A3E0] hover:text-[#002D62] transition-colors py-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3"/> Enterprise AI
            </a>
            <a href="#cyber" className="hover:text-[#002D62] transition-colors py-2">Cybersecurity</a>
          </div>
          <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="text-[10px] font-bold text-white bg-[#002D62] px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-[#00A3E0] transition-colors shadow-md">
            Request Demo
          </button>
        </div>
      </div>

      {/* =========================================
          3. SERVICE 1: CONSTRUCTION ERP
      ========================================= */}
      <section id="erp" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:w-1/2 w-full sticky top-40">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="/image48.webp" alt="ERP Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white text-3xl font-bold font-heading mb-2 drop-shadow-md">Command Center ERP</h3>
                <p className="text-slate-300 text-sm font-light">Unifying finances, supply chains, and site execution into a single pane of glass.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 space-y-8">
            <motion.div variants={fadeUp} className="w-16 h-16 bg-[#E1F0FF] rounded-2xl flex items-center justify-center shadow-sm border border-[#00A3E0]/20">
              <Monitor className="w-8 h-8 text-[#00A3E0]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">ENTERPRISE RESOURCE PLANNING</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading leading-tight">
                Software that masters the chaos of heavy construction.
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              Standard accounting software fails on massive engineering projects because it doesn't understand the physical reality of a site. We engineer bespoke, modular ERP systems that handle everything from multi-tier subcontractor billing to predictive material procurement.
            </motion.p>
            
            <motion.h4 variants={fadeUp} className="text-lg font-bold text-[#002D62] font-heading pt-4 border-t border-slate-100">Core ERP Modules</motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Database, title: "Supply Chain & Inventory", desc: "Real-time tracking of steel, cement, and specialized materials across multiple geographies." },
                { icon: Briefcase, title: "Contractor & BOQ Billing", desc: "Automated Bill of Quantities (BOQ) calculation and transparent ledger systems for payments." },
                { icon: Activity, title: "Financial Forecasting", desc: "Dynamic cash-flow modeling predicting cost overruns before they happen." },
                { icon: Users, title: "Mobile Site Diaries", desc: "Offline-first mobile applications allowing site engineers to log daily progress." }
              ].map((mod, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200 hover:border-[#00A3E0]/50 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <mod.icon className="w-6 h-6 text-[#00A3E0] mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-[#002D62] text-sm mb-2">{mod.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          4. SERVICE 2: 5D BIM
      ========================================= */}
      <section id="bim" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] scroll-mt-24 border-b border-slate-200">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row-reverse items-start gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:w-1/2 w-full sticky top-40">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="/image49.webp" alt="BIM Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white text-3xl font-bold font-heading mb-2 drop-shadow-md">Spatial Intelligence</h3>
                <p className="text-slate-300 text-sm font-light">Executing perfect structural alignment in the digital realm before physical deployment.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 space-y-8">
            <motion.div variants={fadeUp} className="w-16 h-16 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center">
              <Box className="w-8 h-8 text-[#00A3E0]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">SPATIAL SIMULATION</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading leading-tight">
                5D Digital Twins & BIM Architectures.
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              Rework is the silent killer of mega-projects. By integrating precise 3D spatial models with time (4D) and cost (5D) dimensions, we allow EPC contractors to virtually construct, test, and validate their entire project in the cloud before pouring concrete.
            </motion.p>

            <motion.h4 variants={fadeUp} className="text-lg font-bold text-[#002D62] font-heading pt-4 border-t border-slate-200">Digital Twin Capabilities</motion.h4>
            <ul className="space-y-6">
              {[
                { id: "01", title: "Automated Clash Detection", desc: "Identifying structural and MEP collisions mathematically before execution begins." },
                { id: "02", title: "Drone Photogrammetry Integration", desc: "Ingesting point-cloud data from aerial drones to automatically calculate volumetric earthwork progress." },
                { id: "03", title: "Asset Lifecycle Handover", desc: "Delivering a fully interactive, data-rich digital replica of the finished asset to the client." }
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm mt-1 group-hover:border-[#00A3E0] transition-colors">
                    <span className="text-[#00A3E0] font-bold text-xs">{item.id}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#002D62] text-sm mb-1 group-hover:text-[#00A3E0] transition-colors">{item.title}</h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          5. SERVICE 3: IoT & TELEMATICS
      ========================================= */}
      <section id="iot" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white scroll-mt-24 border-b border-slate-100">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:w-1/2 w-full sticky top-40">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="/image50.webp" alt="IoT Telematics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white text-3xl font-bold font-heading mb-2 drop-shadow-md">Connected Operations</h3>
                <p className="text-slate-300 text-sm font-light">Transforming silent physical assets into highly communicative data nodes.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 space-y-8">
            <motion.div variants={fadeUp} className="w-16 h-16 bg-[#E1F0FF] rounded-2xl flex items-center justify-center shadow-sm border border-[#00A3E0]/20">
              <RadioTower className="w-8 h-8 text-[#00A3E0]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">INDUSTRIAL NETWORKS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading leading-tight">
                IoT & Edge-to-Cloud Telematics.
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              You cannot manage what you cannot measure. Our Industrial IoT (IIoT) solutions wire up your entire fleet, batching plants, and workforce, feeding real-time telemetry into centralized cloud dashboards.
            </motion.p>

            <motion.h4 variants={fadeUp} className="text-lg font-bold text-[#002D62] font-heading pt-4 border-t border-slate-100">Telemetry Value Drivers</motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Engine Diagnostics", desc: "Live tracking of RPMs and fuel drops to instantly identify pilferage in remote fleets." },
                { icon: Cpu, title: "Plant Automation", desc: "Integration with batching plants to log mix ratios and ensure strict QA/QC tolerances." }
              ].map((mod, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200 hover:border-[#00A3E0]/50 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <mod.icon className="w-6 h-6 text-[#00A3E0] mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-[#002D62] text-sm mb-2">{mod.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{mod.desc}</p>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="sm:col-span-2 bg-[#F8FAFC] p-6 rounded-xl border border-slate-200 hover:border-[#00A3E0]/50 hover:shadow-lg transition-all hover:-translate-y-1 flex items-start gap-4 group">
                <ShieldCheck className="w-8 h-8 text-[#00A3E0] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                   <h5 className="font-bold text-[#002D62] text-sm mb-2">Smart Safety & Geofencing</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-light">Deploying RFID smart helmets and digital geofences around hazardous operations to prevent accidents and ensure OSHA compliance.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          6. SERVICE 4: INDUSTRIAL AI & ML
      ========================================= */}
      <section id="ai-data" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#E6F3FF] scroll-mt-24 border-b border-slate-200">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row-reverse items-start gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:w-1/2 w-full sticky top-40">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="/image51.webp" alt="Artificial Intelligence" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/40 to-transparent flex flex-col justify-end p-10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6 text-[#FFC000]" />
                  <h3 className="text-white text-3xl font-bold font-heading drop-shadow-md">Cognitive Computing</h3>
                </div>
                <p className="text-slate-300 text-sm font-light">Replacing human guesswork with predictive, autonomous algorithms.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 space-y-8">
            <motion.div variants={fadeUp} className="w-16 h-16 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-[#00A3E0]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">DATA INTELLIGENCE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading leading-tight">
                Industrial AI & <br /> Predictive Analytics.
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              Data is the new steel. We deploy highly specialized Artificial Intelligence (AI) and Machine Learning (ML) models that digest millions of data points from your sites, transforming raw information into proactive, automated decision-making frameworks.
            </motion.p>

            <motion.h4 variants={fadeUp} className="text-lg font-bold text-[#002D62] font-heading pt-4 border-t border-slate-200">Core AI Offerings</motion.h4>
            <div className="space-y-4">
              {[
                { icon: Bot, title: "Computer Vision & Drone AI", desc: "We train neural networks to analyze live CCTV and drone feeds, autonomously identifying safety violations and volumetric earthwork changes." },
                { icon: Activity, title: "Predictive Machine Maintenance", desc: "ML algorithms that analyze acoustic and vibration data from heavy machinery to predict engine failures weeks before they happen." },
                { icon: Database, title: "Generative AI for Legal & Contracts", desc: "Deploying sovereign Large Language Models (LLMs) to instantly scan tender documents, extract risk clauses, and automate agreements." }
              ].map((mod, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-5 shadow-sm hover:border-[#00A3E0] hover:shadow-lg transition-all group">
                  <div className="bg-[#E6F3FF] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <mod.icon className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#002D62] text-sm mb-1">{mod.title}</h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          7. SERVICE 5: CYBERSECURITY
      ========================================= */}
      <section id="cyber" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#001730] text-white scroll-mt-24">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:w-1/2 w-full sticky top-40">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,163,224,0.1)] border border-white/10 group">
              <img src="/image52.webp" alt="Cybersecurity" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-transparent to-transparent"></div>
              
              <div className="absolute top-8 right-8 bg-[#001730]/80 backdrop-blur-md border border-[#00A3E0]/50 p-4 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Military Grade Encrypted</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 space-y-8">
            <motion.div variants={fadeUp} className="w-16 h-16 bg-[#00A3E0]/10 border border-[#00A3E0]/30 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#00A3E0]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">CYBER-PHYSICAL SECURITY</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight">
                Sovereign Cybersecurity & Cloud.
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
              Critical national infrastructure requires military-grade protection. We secure SCADA systems, power grids, and defense corridors using advanced zero-trust architectures to prevent catastrophic cyber-physical attacks.
            </motion.p>
            <motion.div variants={staggerContainer} className="space-y-4 pt-4">
              {[
                "Zero-trust cloud architectures for sovereign intelligence.",
                "End-to-end encryption for SCADA and plant automation systems.",
                "Automated threat hunting and real-time vulnerability patching.",
                "Compliance with stringent ISO and national security protocols."
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#00A3E0]/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          8. ENGAGEMENT MODELS
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1300px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-4 block">PARTNERSHIP ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] font-heading mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-slate-600 font-light text-sm md:text-base">
              We structure our engineering partnerships to align perfectly with your enterprise procurement protocols, scale requirements, and capital expenditure strategies.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-10 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 hover:border-[#00A3E0]/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#002D62] font-heading mb-2">Dedicated Offshore Teams</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] mb-6">Staff Augmentation</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Scale your internal IT capabilities rapidly. We provide dedicated, domain-hardened software architects, AI engineers, and DevOps specialists who work exclusively as an extension of your own company.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-10 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 hover:border-[#00A3E0]/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#002D62] font-heading mb-2">Turnkey Product Build</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] mb-6">Fixed-Scope Delivery</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Got a specific software requirement? We take complete end-to-end ownership. From blueprinting and architecture to writing code and deploying the MVP. Delivered on a fixed timeline and strict budget.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-10 rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 hover:border-[#00A3E0]/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-[#002D62] font-heading mb-2">Digital Transformation</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] mb-6">Long-term Partnership</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Ideal for legacy enterprises undergoing multi-year modernization. We act as your fractional CTO and engineering arm, continuously upgrading your tech stack, migrating servers, and integrating AI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          9. CALL TO ACTION
      ========================================= */}
      <section className="w-full py-32 px-6 bg-gradient-to-b from-[#E1F0FF] to-[#F4F9FF] text-center relative overflow-hidden">
        {/* Soft glowing orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3E0]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00A3E0]/10 rounded-full blur-[120px]"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[#002D62] font-heading tracking-tight leading-tight">Digitize Your Enterprise Today.</h2>
          <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Schedule a confidential consultation with our senior technical architects. Let us blueprint a custom software ecosystem that eliminates inefficiencies across your organization.
          </p>
          <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 px-12 py-5 bg-[#002D62] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#00A3E0] transition-colors shadow-2xl rounded-full inline-flex items-center gap-3">
            Speak To An AI Expert <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

    </div>
  );
}