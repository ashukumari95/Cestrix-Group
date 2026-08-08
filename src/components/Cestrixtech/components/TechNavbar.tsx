/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Mail, Globe, ChevronDown, 
  ChevronRight, Menu, X, ArrowRight 
} from "lucide-react";

interface TechNavbarProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
  onNavigate?: (view: "gateway" | "infra" | "tech" | "governance") => void; // 🔥 FIX: Added 'governance' to match App.tsx
}

export default function TechNavbar({ currentPage, onPageChange, onNavigate }: TechNavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Apna WhatsApp Number Yahan Dalein (e.g., 919876543210)
  const WHATSAPP_LINK = "https://wa.me/918955957893?text=Hello%20Cestrix%20Tech,%20I%20need%20software%20solutions.";

  // Bina reload kiye page change karne ka function
  const handlePageChange = (e: React.MouseEvent, pageKey: string) => {
    e.preventDefault();
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    if (onPageChange) {
      onPageChange(pageKey);
    }
  };

  const handleInfraClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("infra"); // Direct Infra website par bhej dega
    }
  };

  const navItems = [
    { name: 'Industry', key: 'industry' },
    { name: 'Services', key: 'services' },
    { name: 'Insights', key: 'insights' },
    { name: 'About Us', key: 'about-us' }
  ];

  const menuData = {
    industry: [
      { title: "Construction & Infrastructure", desc: "Software for Mega Projects", key: "industry" },
      { title: "Transport & Aviation", desc: "Airports and Highways Tech", key: "industry" },
      { title: "Marine & Seaports", desc: "Smart Solutions for Ports", key: "industry" },
      { title: "Power Grids & Energy", desc: "Securing Solar & Power Grids", key: "industry" },
      { title: "Defense & Government", desc: "High-Security Defense Tech", key: "industry" }
    ],
    services: [
      { title: "Construction ERPs", desc: "Manage Sites & Finances", key: "services" },
      { title: "5D Digital Twins", desc: "BIM & Spatial Simulation", key: "services" },
      { title: "Industrial Telematics", desc: "Live IoT Fleet Tracking", key: "services" },
      { title: "Industrial AI", desc: "Predictive Analytics & Vision", key: "services" },
      { title: "Cybersecurity", desc: "Zero-Trust Cloud Protection", key: "services" }
    ],
    insights: [
      { title: "Global Reports", desc: "In-depth Research", key: "insights" },
      { title: "Client Case Studies", desc: "Real-world Success Stories", key: "insights" },
      { title: "Expert POVs", desc: "Insights from IT Architects", key: "insights" },
      { title: "Webinars & Podcasts", desc: "Tech Discussions & Demos", key: "insights" }
    ],
    "about-us": [
      { title: "Corporate Profile", desc: "Our Vision, Mission & Values", key: "about-us" },
      { title: "Leadership Team", desc: "The minds behind the code", key: "about-us" },
      { title: "Technology Stack", desc: "Future-Proof Technologies", key: "about-us" },
      { title: "Contact Us", desc: "Start Your Digital Transition", key: "whatsapp" } // Updated to point to whatsapp logic
    ]
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-[100] shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 h-[76px] lg:h-[88px] flex items-center justify-between">
          
          {/* LOGO + Cestrix Tech TEXT (🔥 UPDATED: Title Case & Normal Spacing) */}
          <a href="#overview" onClick={(e) => handlePageChange(e, 'overview')} className="flex items-center gap-3 cursor-pointer select-none outline-none">
            <img 
              src="/logo.webp" 
              alt="Cestrix Logo" 
              className="h-10 md:h-11 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <div className="flex items-center pt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <span className="text-xl md:text-2xl font-semibold text-[#002D62] leading-none">
                Cestrix
              </span>
              <span className="text-xl md:text-2xl font-light text-slate-400 leading-none ml-1.5">
                Tech
              </span>
            </div>
          </a>

          {/* DESKTOP MEGA MENU DROPDOWNS */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <div 
                key={item.key}
                className="h-full flex items-center relative group"
                onMouseEnter={() => setActiveMenu(item.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a 
                  href={`#${item.key}`}
                  onClick={(e) => handlePageChange(e, item.key)}
                  className={`text-[13px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors py-6 outline-none ${currentPage === item.key || activeMenu === item.key ? 'text-[#00A3E0]' : 'text-[#002D62] hover:text-[#00A3E0]'}`}
                >
                  {item.name} 
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.key ? 'rotate-180 text-[#00A3E0]' : ''}`} />
                </a>

                {/* MEGA MENU PANEL */}
                <AnimatePresence>
                  {activeMenu === item.key && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,45,98,0.12)] rounded-b-md overflow-hidden z-[110]"
                    >
                      <div className="w-full h-1 bg-[#00A3E0]"></div>
                      
                      <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                        {menuData[item.key as keyof typeof menuData]?.map((link, idx) => (
                          <a 
                            key={idx} 
                            href={link.key === 'whatsapp' ? WHATSAPP_LINK : `#${link.key}`}
                            target={link.key === 'whatsapp' ? "_blank" : "_self"}
                            rel={link.key === 'whatsapp' ? "noopener noreferrer" : ""}
                            onClick={(e) => {
                              if (link.key === 'whatsapp') return; // WhatsApp direct link open hone dega
                              handlePageChange(e, link.key);
                            }}
                            className="group/link block cursor-pointer p-1 rounded-sm hover:bg-slate-50 transition-colors outline-none"
                          >
                            <h4 className="text-sm font-bold text-[#002D62] mb-1 group-hover/link:text-[#00A3E0] transition-colors flex items-center gap-1">
                              {link.title} 
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all text-[#00A3E0]" />
                            </h4>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest">{link.desc}</p>
                          </a>
                        ))}
                      </div>
                      
                      <a 
                        href={`#${item.key}`}
                        onClick={(e) => handlePageChange(e, item.key)}
                        className="bg-[#F8FAFC] px-8 py-4 border-t border-slate-100 flex justify-between items-center hover:bg-slate-100/80 transition-colors cursor-pointer outline-none"
                      >
                        <span className="text-xs font-semibold text-[#002D62]">Explore All {item.name} Solutions</span>
                        <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden lg:flex items-center gap-6 h-full">
            
            <div className="flex items-center gap-4 text-[#002D62] h-full">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#00A3E0] transition-colors flex items-center h-full outline-none">
                <Search className="w-4 h-4" />
              </a>
              
              <a 
                href="mailto:info@cestrixgroup.com" 
                title="Email Us"
                className="hover:text-[#00A3E0] transition-colors flex items-center h-full outline-none"
              >
                <Mail className="w-4 h-4" />
              </a>
              
              <div 
                className="relative flex items-center gap-1 cursor-pointer hover:text-[#00A3E0] transition-colors h-full px-2"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <Globe className="w-4 h-4 text-[#002D62]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#002D62]">EN</span>
                <ChevronDown className={`w-3 h-3 text-[#002D62] transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-[76px] lg:top-[88px] right-0 w-36 bg-white border border-slate-200 shadow-xl rounded-b-md overflow-hidden z-[120]"
                    >
                      <div className="flex flex-col py-1">
                        <button className="px-5 py-2.5 text-left text-xs font-bold text-[#002D62] hover:bg-slate-50 hover:text-[#00A3E0] transition-colors outline-none">English (EN)</button>
                        <button className="px-5 py-2.5 text-left text-xs font-bold text-[#002D62] hover:bg-slate-50 hover:text-[#00A3E0] transition-colors outline-none">Hindi (HI)</button>
                        <button className="px-5 py-2.5 text-left text-xs font-bold text-[#002D62] hover:bg-slate-50 hover:text-[#00A3E0] transition-colors outline-none">Arabic (AR)</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="w-[1px] h-6 bg-slate-200"></div>

            {/* Cestrix Infra Link (🔥 UPDATED: Title Case & Normal Spacing) */}
            <a 
              href="mailto:info@cestrixgroup.com" 
              onClick={handleInfraClick} 
              className="text-[13px] md:text-sm font-semibold text-[#002D62] hover:text-[#00A3E0] transition-colors outline-none"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Cestrix Infra
            </a>

            {/* DIRECT WHATSAPP CONTACT BUTTON (DESKTOP) */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none block"
            >
              <button className="bg-[#002D62] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#00A3E0] transition-colors rounded-sm shadow-md cursor-pointer outline-none">
                Contact <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[#002D62] outline-none">
              <Search className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-[#002D62] outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE SLIDE-DOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[76px] left-0 right-0 bg-white border-b border-slate-200 z-[90] lg:hidden overflow-hidden shadow-xl"
          >
            <div className="p-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <a 
                  key={item.key} 
                  href={`#${item.key}`}
                  onClick={(e) => handlePageChange(e, item.key)}
                  className="flex items-center justify-between py-3 border-b border-slate-100 text-sm font-bold text-[#002D62] uppercase tracking-widest hover:text-[#00A3E0] outline-none"
                >
                  {item.name} <ChevronRight className="w-4 h-4 text-[#00A3E0]" />
                </a>
              ))}
              
              {/* MOBILE: Cestrix Infra Link (🔥 UPDATED) */}
              <a 
                href="#"
                onClick={handleInfraClick}
                className="flex items-center justify-between py-3 border-b border-slate-100 text-sm font-bold text-[#002D62] uppercase tracking-widest hover:text-[#00A3E0] outline-none"
              >
                Cestrix Infra <ArrowRight className="w-4 h-4 text-[#00A3E0]" />
              </a>

              {/* DIRECT WHATSAPP CONTACT BUTTON (MOBILE) */}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block outline-none mt-3"
              >
                <button className="w-full bg-[#002D62] text-white py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#00A3E0] transition-colors shadow-md">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}