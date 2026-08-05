/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HardHat, 
  Cpu,
  ArrowRight
} from "lucide-react";
import { HelmetProvider } from "react-helmet-async";

// LAZY LOADING
const SadevInfra = lazy(() => import("./components/sadevinfra/SadevInfra"));
const SadevTech = lazy(() => import("./components/sadevtech/SadevTech"));

type AppView = "gateway" | "infra" | "tech";

export default function App() {
  
  const [view, setView] = useState<AppView>(() => {
    const path = window.location.pathname;
    if (path.startsWith("/infra")) return "infra";
    if (path.startsWith("/tech")) return "tech";
    return "gateway";
  });

  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  const handleNavigate = (targetView: AppView) => {
    let newPath = "/";
    if (targetView === "infra") newPath = "/infra";
    if (targetView === "tech") newPath = "/tech";
    
    window.history.pushState(null, "", newPath);
    setView(targetView);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith("/infra")) setView("infra");
      else if (path.startsWith("/tech")) setView("tech");
      else setView("gateway");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollContainer = document.getElementById("main-scroll-view");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [view]);

  return (
    <HelmetProvider>
      <div 
        id="main-scroll-view"
        className={`relative w-full h-screen font-sans selection:bg-[#004B87] selection:text-white bg-white select-none ${
          view === "gateway" ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        
      {/* FONTS ONLY (Removed complex media queries) */}
      <style dangerouslySetInnerHTML={{__html: `
        .font-body { font-family: 'Inter', sans-serif; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
      `}} />

      <AnimatePresence mode="wait">
        
        {view === "gateway" && (
          <motion.div
            key="portal-gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col justify-between"
          >
            <header className="absolute top-8 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md px-8 py-4 shadow-2xl border border-slate-200 flex items-center gap-4 transition-all duration-700 rounded-sm">
              <img 
                src="/logo.png" 
                alt="Sadev Group" 
                width="200"
                height="50"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-[0.2em] font-heading text-[#0A192F] uppercase whitespace-nowrap leading-none mt-1">
                SADEV <span className="font-light text-slate-500">GROUP</span>
              </span>
            </header>

            <main className="relative flex flex-col md:flex-row w-full h-full flex-1">
              
              {/* --- LEFT SIDE --- */}
              <div 
                onMouseEnter={() => setHoveredSide("left")}
                onMouseLeave={() => setHoveredSide(null)}
                className="relative flex items-center justify-center h-1/2 md:h-full overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer"
                style={{ flex: hoveredSide === "left" ? 1.4 : hoveredSide === "right" ? 0.6 : 1 }}
                onClick={() => handleNavigate("infra")}
              >
                {/* 🔥 GOLDEN RATIO BACKGROUND */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out grayscale-[20%]"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=50&fm=webp&w=1200')",
                    transform: hoveredSide === "left" ? "scale(1.05)" : "scale(1)" 
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30 transition-colors duration-700 ${hoveredSide === "left" ? "bg-white/60" : ""}`} />

                <div className="relative z-10 w-full max-w-2xl px-8 py-12 md:p-16 lg:p-24 text-left flex flex-col justify-end h-full mt-10 md:mt-0">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
                    <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-heading text-[#004B87] mb-6">
                      <HardHat className="w-5 h-5" /> Heavy Engineering Division
                    </span>
                  </motion.div>

                  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className={`text-4xl md:text-6xl lg:text-[5rem] font-light tracking-tight text-slate-900 uppercase leading-[1.1] font-heading transition-colors duration-500 mb-6 ${hoveredSide === "left" ? "text-[#004B87]" : ""}`}
                  >
                    Physical <br />
                    <span className="font-bold">Execution.</span>
                  </motion.h2>

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-sm md:text-base text-slate-700 font-medium leading-relaxed max-w-md font-body mb-10"
                  >
                    End-to-end EPC contracting for monumental marine, aviation, and structural mega-projects. Powered by our 100% owned heavy fleet.
                  </motion.p>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                    <button className={`inline-flex items-center gap-3 bg-[#004B87] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all duration-300 shadow-lg ${hoveredSide === "left" ? "pr-6" : ""}`}>
                      <span>Enter Infrastructure</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredSide === "left" ? "translate-x-2" : ""}`} />
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* --- RIGHT SIDE --- */}
              <div 
                onMouseEnter={() => setHoveredSide("right")}
                onMouseLeave={() => setHoveredSide(null)}
                className="relative flex items-center justify-center h-1/2 md:h-full overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group cursor-pointer border-t md:border-t-0 md:border-l border-white/10"
                style={{ flex: hoveredSide === "right" ? 1.4 : hoveredSide === "left" ? 0.6 : 1 }}
                onClick={() => handleNavigate("tech")}
              >
                {/* 🔥 GOLDEN RATIO BACKGROUND */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=50&fm=webp&w=1200')",
                    transform: hoveredSide === "right" ? "scale(1.05)" : "scale(1)" 
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0A192F]/95 via-[#004B87]/80 to-[#0A192F]/60 transition-colors duration-700 ${hoveredSide === "right" ? "bg-[#0A192F]/70" : ""}`} />

                <div className="relative z-10 w-full max-w-2xl px-8 py-12 md:p-16 lg:p-24 text-left flex flex-col justify-end h-full mt-10 md:mt-0">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
                    <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-heading text-[#4CA6FF] mb-6">
                      <Cpu className="w-5 h-5" /> Software & Technology Division
                    </span>
                  </motion.div>

                  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className={`text-4xl md:text-6xl lg:text-[5rem] font-light tracking-tight text-white uppercase leading-[1.1] font-heading transition-colors duration-500 mb-6 ${hoveredSide === "right" ? "text-[#4CA6FF]" : ""}`}
                  >
                    Digital <br />
                    <span className="font-bold">Integration.</span>
                  </motion.h2>

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-md font-body mb-10"
                  >
                    Advanced Building Information Modeling (BIM-5D), live IoT fleet telematics, and digital twin ecosystems that engineer predictability.
                  </motion.p>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                    <button className={`inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#4CA6FF] hover:border-[#4CA6FF] hover:text-[#0A192F] transition-all duration-300 ${hoveredSide === "right" ? "pr-6" : ""}`}>
                      <span>Enter Sadev Tech</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredSide === "right" ? "translate-x-2" : ""}`} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </main>

            <footer className="w-full py-5 px-6 md:px-12 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0A192F] z-50 relative shadow-[0_-10px_30px_rgba(0,0,0,0.3)] border-t border-white/10">
              <span className="text-center md:text-left">© {new Date().getFullYear()} Sadev Group. All rights reserved.</span>
              <span className="text-center md:text-right hover:text-[#4CA6FF] transition-colors cursor-pointer font-bold text-white">Corporate Governance</span>
            </footer>
          </motion.div>
        )}

        {/* --- ROUTES WITH SUSPENSE (LAZY LOADING) --- */}
        {view === "infra" && (
          <motion.div key="infra-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Suspense fallback={<div className="w-full h-screen bg-white flex items-center justify-center font-heading text-[#004B87] font-bold tracking-widest uppercase text-sm">Loading Infra...</div>}>
              <SadevInfra onNavigate={handleNavigate} />
            </Suspense>
          </motion.div>
        )}

        {view === "tech" && (
          <motion.div key="tech-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Suspense fallback={<div className="w-full h-screen bg-[#F4F6F8] flex items-center justify-center font-heading text-[#002D62] font-bold tracking-widest uppercase text-sm">Loading Tech...</div>}>
              <SadevTech onNavigate={handleNavigate} />
            </Suspense>
          </motion.div>
        )}

      </AnimatePresence>
      </div>
    </HelmetProvider>
  );
}