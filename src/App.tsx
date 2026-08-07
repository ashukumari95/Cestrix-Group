/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HardHat, 
  Cpu,
  Mouse
} from "lucide-react";
import { HelmetProvider } from "react-helmet-async";

// LAZY LOADING (🔥 Added Governance Page)
const SadevInfra = lazy(() => import("./components/sadevinfra/SadevInfra"));
const SadevTech = lazy(() => import("./components/sadevtech/SadevTech"));
const CorporateGovernance = lazy(() => import("./components/CorporateGovernance"));

// 🔥 Added "governance" to the view types
type AppView = "gateway" | "infra" | "tech" | "governance";

export default function App() {
  
  const [view, setView] = useState<AppView>(() => {
    const path = window.location.pathname;
    if (path.startsWith("/infra")) return "infra";
    if (path.startsWith("/tech")) return "tech";
    if (path.startsWith("/governance")) return "governance";
    return "gateway";
  });

  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  const handleNavigate = (targetView: AppView) => {
    let newPath = "/";
    if (targetView === "infra") newPath = "/infra";
    if (targetView === "tech") newPath = "/tech";
    if (targetView === "governance") newPath = "/governance";
    
    window.history.pushState(null, "", newPath);
    setView(targetView);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith("/infra")) setView("infra");
      else if (path.startsWith("/tech")) setView("tech");
      else if (path.startsWith("/governance")) setView("governance");
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
        className={`relative w-full h-screen font-sans selection:bg-[#4CA6FF] selection:text-[#050B14] bg-white select-none overflow-x-hidden ${
          view === "gateway" ? "overflow-y-hidden" : "overflow-y-auto"
        }`}
      >

      <AnimatePresence mode="wait">
        
        {view === "gateway" && (
          <motion.div
            key="portal-gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col justify-between relative"
          >
            {/* FLOATING LOGO PILL */}
            <header className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center bg-white/95 backdrop-blur-xl px-8 py-3 md:px-10 md:py-4 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-200/50 transition-all duration-700 hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center justify-center gap-3">
                <img 
                  src="/logo.webp" 
                  alt="CG" 
                  className="h-8 md:h-10 w-auto object-contain drop-shadow-sm"
                />
                <div className="flex items-center pt-1">
                  <span className="text-xl md:text-[24px] font-semibold tracking-widest font-heading text-[#053282] uppercase leading-none">
                    CESTRIX
                  </span>
                  <span className="text-xl md:text-[24px] font-light tracking-widest font-heading text-[#64748B] uppercase leading-none ml-2">
                    GROUP
                  </span>
                </div>
              </div>
            </header>

            {/* MAIN AREA */}
            <main className="relative flex flex-col md:flex-row w-full h-full flex-1 bg-slate-900">
              
              {/* --- LEFT SIDE (INFRASTRUCTURE) --- */}
              <div 
                onMouseEnter={() => setHoveredSide("left")}
                onMouseLeave={() => setHoveredSide(null)}
                className="relative flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full overflow-hidden transition-all duration-700 group cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: "url('/heavy-engineering-infrastructure-cestrix.webp')" }}
                onClick={() => handleNavigate("infra")}
              >
                <div className="absolute inset-0 bg-white/60 transition-opacity duration-700" />
                <div 
                  className="absolute inset-0 bg-white/30 transition-opacity duration-700"
                  style={{ opacity: hoveredSide === "left" ? 1 : 0 }}
                />
                <div className="relative z-10 w-full max-w-lg px-8 pb-8 pt-24 md:pt-12 md:p-12 text-center flex flex-col items-center justify-center h-full mx-auto">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
                    <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] font-heading text-[#053282] mb-4 md:mb-8 bg-white/80 px-3 py-1 rounded-full shadow-sm">
                      <HardHat className="w-4 h-4 md:w-5 md:h-5" /> Heavy Engineering
                    </span>
                  </motion.div>
                  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-[4rem] font-light tracking-tight text-slate-900 leading-[1.1] font-heading mb-4 md:mb-6 drop-shadow-md"
                  >
                    Physical <br />
                    <span className="font-semibold">Execution.</span>
                  </motion.h2>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xs md:text-sm lg:text-base text-slate-800 font-medium leading-relaxed max-w-md font-body mb-8 md:mb-12 drop-shadow-sm"
                  >
                    Pioneering the future of global infrastructure. From visionary marine and aviation hubs to monumental civil structures, we deliver unprecedented scale with uncompromising precision.
                  </motion.p>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                    <button className="inline-flex items-center justify-center gap-3 bg-[#053282] border border-[#053282] text-white px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#031d4d] transition-all duration-300 rounded-full shadow-lg shadow-blue-900/40 w-auto">
                      <span>Explore Infra</span>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* --- RIGHT SIDE (TECHNOLOGY) --- */}
              <div 
                onMouseEnter={() => setHoveredSide("right")}
                onMouseLeave={() => setHoveredSide(null)}
                className="relative flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full overflow-hidden transition-all duration-700 group cursor-pointer border-t md:border-t-0 md:border-l border-white/20 bg-cover bg-center"
                style={{ backgroundImage: "url('/digital-technology-integration-cestrix.webp')" }}
                onClick={() => handleNavigate("tech")}
              >
                <div className="absolute inset-0 bg-[#0B1121]/65 transition-opacity duration-700" />
                <div 
                  className="absolute inset-0 bg-[#053282]/40 transition-opacity duration-700"
                  style={{ opacity: hoveredSide === "right" ? 1 : 0 }}
                />
                <div className="relative z-10 w-full max-w-lg px-8 py-10 pt-16 md:pt-12 md:p-12 text-center flex flex-col items-center justify-center h-full mx-auto">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
                    <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] font-heading text-[#4CA6FF] mb-4 md:mb-8 bg-[#0B1121]/80 px-3 py-1 rounded-full shadow-sm">
                      <Cpu className="w-4 h-4 md:w-5 md:h-5" /> Software & Tech
                    </span>
                  </motion.div>
                  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-[4rem] font-light tracking-tight text-white leading-[1.1] font-heading mb-4 md:mb-6 drop-shadow-lg"
                  >
                    Digital <br />
                    <span className="font-semibold">Integration.</span>
                  </motion.h2>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xs md:text-sm lg:text-base text-slate-200 font-light leading-relaxed max-w-md font-body mb-8 md:mb-12 drop-shadow-md"
                  >
                    Transforming heavy industries through advanced digital ecosystems. We integrate predictive AI, real-time spatial computing, and autonomous systems to engineer the infrastructure of tomorrow.
                  </motion.p>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                    <button className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/40 text-white px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-[#0B1121] transition-all duration-300 rounded-full w-auto shadow-lg">
                      <span>Explore Tech</span>
                    </button>
                  </motion.div>
                </div>
              </div>
              
              <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-bounce opacity-90 hidden md:flex pointer-events-none drop-shadow-xl text-white">
                 <Mouse className="w-5 h-5" />
                 <span className="text-[8px] tracking-[0.3em] font-heading uppercase font-bold drop-shadow-md">Scroll</span>
              </div>
            </main>

            <footer className="w-full py-3 md:py-4 px-6 md:px-12 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400 flex flex-col md:flex-row justify-between items-center gap-2 bg-[#050B14] z-50 relative border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-center md:text-left">© {new Date().getFullYear()} Cestrix Group.</span>
              {/* 🔥 UPDATED LINK: Now opens the Corporate Governance page */}
              <span 
                onClick={() => handleNavigate("governance")}
                className="text-center md:text-right hover:text-[#4CA6FF] transition-colors cursor-pointer font-semibold text-slate-300"
              >
                Governance
              </span>
            </footer>
          </motion.div>
        )}

        {/* --- ROUTES --- */}
        {view === "infra" && (
          <motion.div key="infra-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Suspense fallback={<div className="w-full h-screen bg-[#F8FAFC] flex items-center justify-center font-heading text-[#053282] font-semibold tracking-widest uppercase text-xs">Loading Infra...</div>}>
              <SadevInfra onNavigate={handleNavigate} />
            </Suspense>
          </motion.div>
        )}

        {view === "tech" && (
          <motion.div key="tech-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Suspense fallback={<div className="w-full h-screen bg-[#0B1121] flex items-center justify-center font-heading text-[#4CA6FF] font-semibold tracking-widest uppercase text-xs">Loading Tech...</div>}>
              <SadevTech onNavigate={handleNavigate} />
            </Suspense>
          </motion.div>
        )}

        {/* 🔥 NEW ROUTE: CORPORATE GOVERNANCE */}
        {view === "governance" && (
          <motion.div key="gov-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Suspense fallback={<div className="w-full h-screen bg-[#F8FAFC] flex items-center justify-center font-heading text-[#053282] font-semibold tracking-widest uppercase text-xs">Loading Legal...</div>}>
              <CorporateGovernance onNavigate={handleNavigate} />
            </Suspense>
          </motion.div>
        )}

      </AnimatePresence>
      </div>
    </HelmetProvider>
  );
}