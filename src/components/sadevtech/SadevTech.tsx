/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TechNavbar from "./components/TechNavbar";
import TechFooter from "./components/TechFooter";

// VERCEL FIX: "pages" ki jagah "Pages" (Capital P) use kiya hai ✅
import TechHome from "./Pages/TechHome";
import TechIndustry from "./Pages/TechIndustry";
import TechServices from "./Pages/TechServices";
import TechInsights from "./Pages/TechInsights";
import TechAbout from "./Pages/TechAbout";

interface SadevTechProps {
  onNavigate: (view: "gateway" | "infra" | "tech") => void;
}

// URL routes (Contact hata diya gaya hai kyunki ab direct WhatsApp use ho raha hai)
type TechPage = "overview" | "industry" | "services" | "insights" | "about-us";
const VALID_PAGES: TechPage[] = ["overview", "industry", "services", "insights", "about-us"];

export default function SadevTech({ onNavigate }: SadevTechProps) {
  
  const [currentPage, setCurrentPage] = useState<TechPage>(() => {
    const hash = window.location.hash.replace("#", "") as TechPage;
    return VALID_PAGES.includes(hash) ? hash : "overview";
  });

  useEffect(() => {
    if (currentPage === "overview") {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    } else if (window.location.hash !== `#${currentPage}`) {
      window.history.pushState(null, "", `#${currentPage}`);
    }

    const scrollContainer = document.getElementById("main-scroll-view");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "") as TechPage;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("overview");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <TechHome />;
      case "industry":
        return <TechIndustry />;
      case "services":
        return <TechServices />;
      case "insights":
         return <TechInsights />;
      case "about-us":
        return <TechAbout />;
      default:
        // Coming Soon Screen naye sections ke liye
        return (
          <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#F4F6F8] pt-24 pb-12 px-6">
            <div className="w-16 h-16 bg-[#002D62] text-white flex items-center justify-center font-heading font-bold text-3xl rounded-sm mb-6 shadow-md">
              S
            </div>
            <h1 className="text-3xl md:text-5xl text-[#002D62] font-bold font-heading uppercase tracking-widest text-center mb-4">
              {currentPage.replace("-", " ")}
            </h1>
            <p className="text-slate-500 font-light text-center max-w-md">
              This module is currently under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-900 bg-[#F4F6F8] relative overflow-x-hidden font-sans selection:bg-[#4CA6FF] selection:text-white pb-0 flex flex-col justify-between">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700;800&display=swap');
        .font-body { font-family: 'Inter', sans-serif; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
      `}} />

      {/* NAVBAR */}
      <TechNavbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onNavigate={onNavigate} 
      />

      {/* MAIN DYNAMIC VIEWPORT */}
      <main className="relative z-10 w-full flex-1 flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex-1 flex flex-col"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <TechFooter onNavigate={onNavigate} />

    </div>
  );
}
