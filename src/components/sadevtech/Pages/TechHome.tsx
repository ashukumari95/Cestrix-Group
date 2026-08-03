/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Brain, ChevronRight, Monitor, Box, RadioTower, 
  ShieldCheck, Zap, PlayCircle, Building2, Plane, Ship, 
  Leaf, Bot, Rocket, Globe, Train
} from "lucide-react";

export default function TechHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5 Slides 
  const slides = [
    {
      num: "01",
      title: "Heavy Civil Engineering ERP.",
      desc: "Software built for mega construction, bridges, and concrete structures. Manage materials, contractor bills, and site progress in real-time.",
      img: "./public/image38.png" 
    },
    {
      num: "02",
      title: "Applied Industrial Intelligence.",
      desc: "Deploy AI algorithms to analyze volumetric data, manage contract summary risks, and automate site safety audits.",
      img: "./public/image39.png" 
    },
    {
      num: "03",
      title: "Global Network Infrastructure.",
      desc: "Seamlessly connect and manage geographically dispersed projects, airports, ports, and transit networks with our IoT architecture.",
      img: "./public/image40.png" 
    },
    {
      num: "04",
      title: "Mission Critical Data Systems.",
      desc: "Robust server-side software powering national energy grids, deepwater port telemetry, and linear transport assets.",
      img: "./public/image41.png" 
    },
    {
      num: "05",
      title: "Sovereign Cyber Defense.",
      desc: "Protect critical national infrastructure. We engineer air-gapped, zero-trust digital walls to defend sovereign data against threats.",
      img: "./public/image42.png" 
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("main-scroll-view")?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#002D62] selection:text-white overflow-x-hidden pt-[76px] lg:pt-[88px]">
      
      {/* =========================================
          1. FULL SCREEN HERO SLIDER (Watercolor Transparency & No Blur)
      ========================================= */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-gradient-to-br from-[#001730] via-[#002D62] to-[#00A3E0] overflow-hidden flex items-center">
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].img} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover opacity-50 mix-blend-overlay" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001730] via-[#001730]/40 to-transparent opacity-90"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content Aligned to the LEFT SIDE */}
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-start text-left">
          
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-white font-heading leading-[1.05] mb-6 tracking-tight drop-shadow-md">
                  {slides[currentSlide].title.split('.')[0]}
                </h1>
                
                <p className="text-slate-200 text-sm md:text-lg font-light leading-relaxed mb-10 min-h-[80px] drop-shadow-sm">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* TATA Style Button Area */}
            <div className="flex w-full mt-2">
              <button 
                onClick={() => navigateTo('contact')} 
                className="px-8 py-3.5 bg-white text-[#002D62] text-sm md:text-base font-semibold hover:bg-slate-100 transition-colors rounded-sm flex items-center gap-3 shadow-md w-fit"
              >
                Connect with our specialists <ArrowRight className="w-5 h-5 text-[#002D62]" />
              </button>
            </div>
          </div>
        </div>

        {/* Numbered Pagination (01 to 05) at the Bottom */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-24 z-20 flex items-center gap-6">
          {slides.map((slide, index) => (
            <button 
              key={slide.num}
              onClick={() => setCurrentSlide(index)}
              className="group flex flex-col items-start gap-2 outline-none"
            >
              <span className={`text-[11px] font-bold font-heading transition-colors ${currentSlide === index ? "text-[#00A3E0]" : "text-white/50 group-hover:text-white"}`}>
                {slide.num}
              </span>
              <div className={`h-1 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-[#00A3E0]" : "w-2 bg-white/30 group-hover:bg-white"}`}></div>
            </button>
          ))}
        </div>
      </section>

      {/* =========================================
          2. WHAT WE DO TODAY (Services)
      ========================================= */}
      <section id="current-services" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-4 block">ENTERPRISE SOLUTIONS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading mb-6 leading-tight">
              Intelligent Systems for <br /> Heavy Engineering.
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
              We architect purpose-built, secure software ecosystems designed to eliminate bottlenecks and automate workflows in the most demanding industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#00A3E0] transition-all group flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6 text-[#002D62]" />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] font-heading mb-3 leading-snug">Business Software (ERP)</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Manage your entire project, materials, and finances from one simple dashboard.
              </p>
              <button onClick={() => navigateTo('services')} className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] flex items-center gap-1 mt-auto">
                Explore ERP <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#00A3E0] transition-all group flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6 text-[#002D62]" />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] font-heading mb-3 leading-snug">3D Digital Models</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Build it virtually before pouring concrete. Integrate time and cost into BIM models.
              </p>
              <button onClick={() => navigateTo('services')} className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] flex items-center gap-1 mt-auto">
                Explore BIM <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#00A3E0] transition-all group flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RadioTower className="w-6 h-6 text-[#002D62]" />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] font-heading mb-3 leading-snug">Industrial Telematics</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Connect physical assets to the cloud. Deploy IoT sensors for live fleet monitoring.
              </p>
              <button onClick={() => navigateTo('services')} className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] flex items-center gap-1 mt-auto">
                Explore IoT <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#00A3E0] transition-all group flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-[#002D62]" />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] font-heading mb-3 leading-snug">Industrial AI</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Predictive machine learning and computer vision to automate safety and maintenance.
              </p>
              <button onClick={() => navigateTo('services')} className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] flex items-center gap-1 mt-auto">
                Explore AI <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#00A3E0] transition-all group flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#002D62]" />
              </div>
              <h3 className="text-lg font-bold text-[#002D62] font-heading mb-3 leading-snug">Cybersecurity</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Protect sensitive data. We architect zero-trust cloud environments for absolute safety.
              </p>
              <button onClick={() => navigateTo('services')} className="text-[10px] font-bold uppercase tracking-widest text-[#00A3E0] flex items-center gap-1 mt-auto">
                Explore Security <ChevronRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. INDUSTRIES WE SERVE TODAY
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-slate-200">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 pb-6 gap-6">
            <div>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">GLOBAL REACH</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] font-heading leading-tight">Powering Critical Infrastructure</h2>
            </div>
            <p className="text-sm text-slate-500 font-light max-w-md hidden md:block text-right">
              Our digital architectures serve as the operational backbone for the world's most complex and high-stakes physical assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div onClick={() => navigateTo('industry')} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 relative h-72">
              <img src="./public/image43.png" alt="Construction" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-[#001730]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Building2 className="w-6 h-6 text-[#00A3E0] mb-3" />
                <h3 className="text-xl font-bold text-white font-heading">Mega Construction</h3>
                <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Sites & Tunnels</p>
              </div>
            </div>

            <div onClick={() => navigateTo('industry')} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 relative h-72">
              <img src="./public/image44.png" alt="Aviation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-[#001730]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Plane className="w-6 h-6 text-[#00A3E0] mb-3" />
                <h3 className="text-xl font-bold text-white font-heading">Aviation Hubs</h3>
                <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Terminal BIM & Logistics</p>
              </div>
            </div>

            <div onClick={() => navigateTo('industry')} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 relative h-72">
              <img src="./public/image45.png" alt="Marine" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-[#001730]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Ship className="w-6 h-6 text-[#00A3E0] mb-3" />
                <h3 className="text-xl font-bold text-white font-heading">Marine & Ports</h3>
                <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Deepwater Telemetry</p>
              </div>
            </div>

            <div onClick={() => navigateTo('industry')} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 relative h-72">
              <img src="./public/image46.png" alt="Energy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-[#001730]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Zap className="w-6 h-6 text-[#00A3E0] mb-3" />
                <h3 className="text-xl font-bold text-white font-heading">Energy Grids</h3>
                <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Sovereign SCADA Systems</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. THE VISION (Future Mega-Trends)
      ========================================= */}
      <section id="mega-trends" className="py-24 px-6 md:px-12 lg:px-24 bg-[#001730] text-white">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.3em] mb-4 block">THE NEXT 100 YEARS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6 leading-tight">
              Solving the Era's <br /> Greatest Challenges.
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              We execute in the present to fund the future. Sadev Tech is actively investing its engineering capital into the mega-trends that will define the next century of human progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mega Trend 1 */}
            <div className="bg-[#0A192F] p-12 rounded-2xl shadow-2xl border border-white/5 hover:border-[#00A3E0]/50 transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Brain className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-4">AI & Deep Tech</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                Building foundational infrastructure that allows AI to analyze volumetric earthwork, optimize legal frameworks, and automate predictive engineering.
              </p>
            </div>

            {/* Mega Trend 2 */}
            <div className="bg-[#0A192F] p-12 rounded-2xl shadow-2xl border border-white/5 hover:border-[#00A3E0]/50 transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Leaf className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-4">Climate Tech</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                The next conglomerates will be green. Our software powers smart grid analytics, carbon-capture telemetry, and next-gen battery deployment pipelines.
              </p>
            </div>

            {/* Mega Trend 3 */}
            <div className="bg-[#0A192F] p-12 rounded-2xl shadow-2xl border border-white/5 hover:border-[#00A3E0]/50 transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Bot className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-4">Advanced Robotics</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                Solving the global labor crisis. We build the cloud architectures for autonomous earthmovers, drone fleets, and intelligent manufacturing systems.
              </p>
            </div>

            {/* Mega Trend 4 */}
            <div className="bg-[#0A192F] p-12 rounded-2xl shadow-2xl border border-white/5 hover:border-[#00A3E0]/50 transition-all group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="w-7 h-7 text-[#00A3E0]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-4">Space Tech & Sovereign</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
                The new frontier requires absolute security. We engineer zero-trust data lakes and satellite telemetry pipelines for orbital logistics and defense.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. THE DNA PHILOSOPHY (REWORDED TO ENGINEERING EXCELLENCE) ✅
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#E1F0FF] text-[#002D62]">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight">
              The DNA of <br /> Engineering Excellence.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              We don't just write software; we architect digital foundations for the physical world. Our philosophy is rooted in precision, absolute reliability, and engineering technology that solves genuine industrial bottlenecks.
            </p>
            
            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#00A3E0] shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold font-heading">Mission-Critical Reliability</h4>
                  <p className="text-xs text-slate-600 font-light mt-1">Our systems are engineered with zero margin for error, ensuring uninterrupted operations for global infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 text-[#00A3E0] shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold font-heading">Visionary Innovation</h4>
                  <p className="text-xs text-slate-600 font-light mt-1">We continuously invest in next-generation AI and digital twins to keep your enterprise decades ahead of the curve.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Changed image to a high-tech corporate engineering/tech team */}
              <img src="./public/image47.png" alt="Engineering Excellence DNA" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          6. CLIENT TESTIMONIALS 
      ========================================= */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white border-y border-slate-200">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002D62] font-heading">Backed by Industry Leaders</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-10 rounded-2xl border border-slate-200">
              <p className="text-slate-600 italic mb-8 leading-relaxed font-light">
                "Sadev Tech's software actually understands how construction works. Their new ERP system saved us countless hours in material tracking and completely eliminated subcontractor billing fraud."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#002D62] text-sm">Director of Infrastructure</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#00A3E0] mt-1">National EPC Firm</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-10 rounded-2xl border border-slate-200">
              <p className="text-slate-600 italic mb-8 leading-relaxed font-light">
                "The 5D Digital Twin simulation provided by their team for our new aviation hub allowed us to catch structural clashes before execution. It saved us millions in potential rework."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#002D62] text-sm">VP of Operations</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#00A3E0] mt-1">Global Aviation Authority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. CALL TO ACTION
      ========================================= */}
      <section className="w-full py-24 px-6 bg-[#002D62] text-center text-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">Partner in the Next Empire.</h2>
          <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
            Whether you need custom ERP software to digitize your operations today, or are a visionary seeking to solve the problems of tomorrow—your journey starts here.
          </p>
          <button onClick={() => navigateTo('contact')} className="mt-4 px-10 py-4 bg-white text-[#002D62] text-xs font-bold uppercase tracking-widest hover:bg-[#00A3E0] hover:text-white transition-colors rounded-full shadow-xl inline-flex items-center gap-2">
            Talk to our Experts <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}