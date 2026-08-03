/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { InfraPage } from "../../types"; 
import InfraNavbar from "./components/InfraNavbar";
import InfraFooter from "./components/InfraFooter"; 
import InfraHome from "./pages/InfraHome";
import InfraProjects from "./pages/InfraProjects";
import InfraFleet from "./pages/InfraFleet";
import InfraSustainability from "./pages/InfraSustainability";
import InfraTender from "./pages/InfraTender";

interface SadevInfraProps {
  onNavigate: (view: "gateway" | "infra" | "tech") => void;
}

const VALID_PAGES: InfraPage[] = ["home", "projects", "fleet", "sustainability", "tender"];

export default function SadevInfra({ onNavigate }: SadevInfraProps) {
  
  // 1. URL HASH LOGIC: Page load hote hi URL check karega
  const [currentPage, setCurrentPage] = useState<InfraPage>(() => {
    const hash = window.location.hash.replace("#", "") as InfraPage;
    return VALID_PAGES.includes(hash) ? hash : "home";
  });

  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [modalTitle, setModalTitle] = useState<string>("");

  // 2. SYNC STATE TO URL (FIXED FOR HOME PAGE)
  useEffect(() => {
    if (currentPage === "home") {
      // Agar Home page hai, toh URL se hash (#) hata do
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    } else if (window.location.hash !== `#${currentPage}`) {
      // Baaki pages ke liye hash add karo
      window.history.pushState(null, "", `#${currentPage}`);
    }

    // Scroll to top smoothly
    const scrollContainer = document.getElementById("main-scroll-view");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  // 3. BROWSER BACK BUTTON FIX
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "") as InfraPage;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openVideoModal = (url: string, title: string) => {
    setVideoUrl(url);
    setModalTitle(title);
    setShowVideoModal(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <InfraHome onNavigateToPage={setCurrentPage} openVideoModal={openVideoModal} onSwitchDivision={onNavigate} />;
      case "projects":
        return <InfraProjects openVideoModal={openVideoModal} />;
      case "fleet":
        return <InfraFleet />;
      case "sustainability":
        return <InfraSustainability />;
      case "tender":
        return <InfraTender />;
      default:
        return <InfraHome onNavigateToPage={setCurrentPage} openVideoModal={openVideoModal} onSwitchDivision={onNavigate} />;
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-900 bg-white relative overflow-x-hidden font-sans selection:bg-[#004B87] selection:text-white pb-0 flex flex-col justify-between">
      
      {/* FONTS */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600;700;800&display=swap');
        
        .font-body { font-family: 'Inter', sans-serif; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
      `}} />

      {/* NAVBAR */}
      <InfraNavbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onNavigate={onNavigate} 
      />

      {/* MAIN VIEWPORT */}
      <main className="relative z-10 w-full flex-1 flex flex-col justify-start pt-[88px] md:pt-[104px]">
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
      <InfraFooter 
        onPageChange={setCurrentPage} 
        onNavigate={onNavigate} 
      />

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/90 z-[9999] flex flex-col items-center justify-center p-4 md:p-10"
          >
            <div className="w-full max-w-5xl bg-white flex flex-col shadow-2xl">
              <div className="p-5 flex justify-between items-center border-b border-slate-200">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#004B87] font-heading">
                  {modalTitle}
                </span>
                <button 
                  onClick={() => setShowVideoModal(false)}
                  className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors cursor-pointer outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative pt-[56.25%] w-full bg-black">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src={videoUrl}
                  title={modalTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}