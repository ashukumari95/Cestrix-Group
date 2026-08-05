/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 

import TechNavbar from "./components/TechNavbar";
import TechFooter from "./components/TechFooter";

import TechHome from "./Pages/TechHome";
import TechIndustry from "./Pages/TechIndustry";
import TechServices from "./Pages/TechServices";
import TechInsights from "./Pages/TechInsights";
import TechAbout from "./Pages/TechAbout";

interface SadevTechProps {
  onNavigate: (view: "gateway" | "infra" | "tech") => void;
}

// Clean URL routes
type TechPage = "overview" | "industry" | "services" | "insights" | "about-us";
const VALID_PAGES: TechPage[] = ["overview", "industry", "services", "insights", "about-us"];

export default function SadevTech({ onNavigate }: SadevTechProps) {
  
  // 1. URL Path check karke page decide karna (Hash ki jagah Path use kiya hai)
  const [currentPage, setCurrentPage] = useState<TechPage>(() => {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const page = (pathParts[1] || "overview") as TechPage;
    return VALID_PAGES.includes(page) ? page : "overview";
  });

  // 2. Naya page aane par URL ko Clean format mein update karna
  useEffect(() => {
    const newPath = currentPage === "overview" ? "/tech" : `/tech/${currentPage}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }

    const scrollContainer = document.getElementById("main-scroll-view");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  // 3. Browser Back/Forward button ko handle karna
  useEffect(() => {
    const handlePopState = () => {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      if (pathParts[0] === "tech") {
        const page = (pathParts[1] || "overview") as TechPage;
        if (VALID_PAGES.includes(page)) {
          setCurrentPage(page);
        } else {
          setCurrentPage("overview");
        }
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 4. TechHome aur TechFooter ke buttons ke clicks sun-na
  useEffect(() => {
    const handleCustomNav = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (VALID_PAGES.includes(customEvent.detail)) {
        setCurrentPage(customEvent.detail);
      } else if (customEvent.detail === 'overview') {
        setCurrentPage('overview');
      }
    };
    window.addEventListener("tech-navigate", handleCustomNav);
    return () => window.removeEventListener("tech-navigate", handleCustomNav);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "overview": return <TechHome />;
      case "industry": return <TechIndustry />;
      case "services": return <TechServices />;
      case "insights": return <TechInsights />;
      case "about-us": return <TechAbout />;
      default:
        return (
          <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#F4F6F8] pt-24 pb-12 px-6">
            <div className="w-16 h-16 bg-[#002D62] text-white flex items-center justify-center font-heading font-bold text-3xl rounded-sm mb-6 shadow-md">S</div>
            <h1 className="text-3xl md:text-5xl text-[#002D62] font-bold font-heading uppercase tracking-widest text-center mb-4">
              {currentPage.replace("-", " ")}
            </h1>
            <p className="text-slate-500 font-light text-center max-w-md">This module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-900 bg-[#F4F6F8] relative overflow-x-hidden font-sans selection:bg-[#4CA6FF] selection:text-white pb-0 flex flex-col justify-between">
      
     {/* GLOBAL FONTS */}
      <style dangerouslySetInnerHTML={{__html: `
        .font-body { font-family: 'Inter', sans-serif; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
      `}} />

      <TechNavbar currentPage={currentPage} onPageChange={setCurrentPage} onNavigate={onNavigate} />

      <main className="relative z-10 w-full flex-1 flex flex-col justify-start">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-1 flex flex-col"
        >
          {renderPage()}
        </motion.div>
      </main>

      <TechFooter onNavigate={onNavigate} />

    </div>
  );
}