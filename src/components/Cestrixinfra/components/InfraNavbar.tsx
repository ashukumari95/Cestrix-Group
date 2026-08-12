/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { InfraPage } from "../types";

interface InfraNavbarProps {
  currentPage: InfraPage;
  onPageChange: (page: InfraPage) => void;
  onNavigate: (view: "gateway" | "infra" | "tech" | "governance") => void;
}

export default function InfraNavbar({ 
  currentPage, 
  onPageChange, 
  onNavigate 
}: InfraNavbarProps) {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-view");
    
    const handleScroll = () => {
      if (scrollContainer) {
        setScrolled(scrollContainer.scrollTop > 20);
      }
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navItems = [
    { id: "home", label: "Corporate Overview" },
    { id: "projects", label: "Sectors" },
    { id: "fleet", label: "Capabilities" },
    { id: "sustainability", label: "ESG Governance" },
    { id: "tender", label: "Partner With Us" },
  ] as const;

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-10 flex justify-between items-center bg-white ${
        scrolled ? "py-4 shadow-md" : "py-6 shadow-sm"
      }`}
    >
      
      {/* Left: 'Cestrix Infra' Logo Identity (Normal Spacing & Title Case) */}
      <button 
        type="button" 
        onClick={() => onNavigate("gateway")} 
        className="group text-left cursor-pointer outline-none focus:outline-none flex flex-col shrink-0"
      >
        <div className="flex items-center gap-3">
          <img 
            src="/logo.webp" 
            alt="Cestrix Group" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {/* Typography Fixed */}
          <div className="flex items-center pt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span className="text-xl md:text-[24px] font-semibold text-[#004B87] leading-none">
              Cestrix
            </span>
            <span className="text-xl md:text-[24px] font-light text-[#64748B] leading-none ml-1.5">
              Infra
            </span>
          </div>
        </div>
      </button>

      {/* Center Tabs */}
      <nav className="hidden xl:flex items-center gap-6">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              type="button"
              className="relative py-2 outline-none group cursor-pointer"
            >
              <span className={`text-[11px] 2xl:text-xs font-heading uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                isActive ? "text-[#004B87] font-bold" : "text-slate-500 hover:text-[#004B87]"
              }`}>
                {item.label}
              </span>
              
              <span 
                className={`absolute bottom-0 left-0 h-[2px] bg-[#004B87] transition-all duration-300 ease-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} 
              />
            </button>
          );
        })}
      </nav>

      {/* Right Action Menu: Cestrix Tech + Social Links */}
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        
        {/* Cestrix Tech Link (Normal Spacing & Title Case) */}
        <button 
          type="button" 
          onClick={() => onNavigate("tech")} 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="hidden md:flex items-center gap-2 text-[13px] md:text-sm text-[#004B87] font-semibold hover:text-[#4CA6FF] transition-colors duration-300 cursor-pointer whitespace-nowrap mr-1 md:mr-2"
        >
          Cestrix Tech
        </button>

        {/* Vertical Divider for clean separation */}
        <div className="hidden md:block w-px h-6 bg-slate-200"></div>

        {/* Social Links */}
        <a 
          href="https://www.linkedin.com/company/cestrix-group/?viewAsMember=true" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#004B87] border border-slate-200 hover:border-[#004B87] rounded-sm transition-all duration-300 shadow-sm"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a 
          href="https://x.com/Cestrixinfra" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#004B87] border border-slate-200 hover:border-[#004B87] rounded-sm transition-all duration-300 shadow-sm"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=61593369562397" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#004B87] border border-slate-200 hover:border-[#004B87] rounded-sm transition-all duration-300 shadow-sm"
        >
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}