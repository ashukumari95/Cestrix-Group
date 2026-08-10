/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface InfraFooterProps {
  onPageChange: (page: "home" | "projects" | "fleet" | "sustainability" | "tender") => void;
  // 🔥 FIX: Added the 4 new dynamic routes here
  onNavigate: (view: "gateway" | "infra" | "tech" | "privacy" | "terms" | "disclaimer" | "cookies") => void;
}

export default function InfraFooter({ onPageChange, onNavigate }: InfraFooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ==========================================
  // 🔑 YAHAN APNI WEB3FORMS ACCESS KEY DAALEIN
  // ==========================================
  const WEB3FORMS_ACCESS_KEY = "aa320ee2-92bd-42bd-ae13-eb96cb0d9778"; 

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            email: email,
            subject: "🔔 New Newsletter Subscription - Cestrix Infra",
            message: `New user subscribed to newsletter: ${email}`,
            from_name: "Cestrix Website Portal"
          }),
        });
        
        setIsSubscribed(true);
        setEmail(""); 
        
        setTimeout(() => {
          setIsSubscribed(false);
        }, 4000);
      } catch (error) {
        console.error("Subscription Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <footer className="w-full font-sans selection:bg-[#4CA6FF] selection:text-white" role="contentinfo">
      
      {/* 1. TOP CALL TO ACTION / NEWSLETTER STRIP */}
      <div className="bg-[#004B87] py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white space-y-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold font-heading uppercase tracking-wide">
              Global Procurement & Insights
            </h3>
            <p className="text-sm text-white/80 font-light">
              Subscribe to receive updates on active mega-projects and vendor opportunities.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex w-full md:w-[450px] h-12 md:h-14 bg-white shadow-lg rounded-sm overflow-hidden">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Official Email Address"
              placeholder="Official Email Address" 
              className="flex-1 px-6 text-slate-800 text-sm outline-none disabled:bg-slate-50" 
              disabled={isSubscribed || isLoading}
            />
            <button 
              type="submit" 
              disabled={isSubscribed || isLoading}
              aria-label="Subscribe to newsletter"
              className={`h-full px-8 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center min-w-[140px] gap-2 ${
                isSubscribed 
                  ? "bg-green-600 text-white cursor-default" 
                  : "bg-[#0A192F] hover:bg-black text-white"
              }`}
            >
              {isLoading ? "Sending..." : isSubscribed ? <><CheckCircle2 className="w-4 h-4" /> Subscribed</> : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* 2. MAIN FOOTER GRID */}
      <div className="bg-[#0A192F] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4CA6FF 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <div 
              onClick={() => onPageChange("home")}
              className="flex items-center cursor-pointer inline-flex"
              role="button"
              tabIndex={0}
              aria-label="Cestrix Infra Home"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="text-xl md:text-2xl font-semibold text-white leading-none">
                Cestrix
              </span>
              <span className="text-xl md:text-2xl font-light text-[#4CA6FF] leading-none ml-1.5">
                Infra
              </span>
            </div>

            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Engineering the nation's most critical sovereign infrastructure. From deepwater ports to high-altitude defense corridors, we execute with absolute precision and unyielding integrity.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/Cestrix-infra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#004B87] hover:border-[#004B87] transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="https://x.com/Cestrixinfra" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#004B87] hover:border-[#004B87] transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/share/17nJJee7Tq" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#004B87] hover:border-[#004B87] transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Sectors */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#4CA6FF] uppercase tracking-[0.2em] font-heading mb-8">Business Sectors</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li><button onClick={() => onPageChange("projects")} className="hover:text-[#4CA6FF] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#4CA6FF] transition-colors" /> Aviation & Terminals</button></li>
              <li><button onClick={() => onPageChange("projects")} className="hover:text-[#4CA6FF] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#4CA6FF] transition-colors" /> Marine & Seaports</button></li>
              <li><button onClick={() => onPageChange("projects")} className="hover:text-[#4CA6FF] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#4CA6FF] transition-colors" /> Defense Infrastructure</button></li>
              <li><button onClick={() => onPageChange("projects")} className="hover:text-[#4CA6FF] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#4CA6FF] transition-colors" /> Highways & Tunnels</button></li>
              <li><button onClick={() => onPageChange("projects")} className="hover:text-[#4CA6FF] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#4CA6FF] transition-colors" /> Water & Energy Grids</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#4CA6FF] uppercase tracking-[0.2em] font-heading mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li><button onClick={() => onPageChange("home")} className="hover:text-[#4CA6FF] transition-colors">Corporate Overview</button></li>
              <li><button onClick={() => onPageChange("fleet")} className="hover:text-[#4CA6FF] transition-colors">Heavy Fleet Setup</button></li>
              <li><button onClick={() => onPageChange("sustainability")} className="hover:text-[#4CA6FF] transition-colors">ESG Governance</button></li>
              <li><button onClick={() => onPageChange("tender")} className="hover:text-[#4CA6FF] transition-colors">Vendor Registration</button></li>
              <li className="pt-2"><button onClick={() => onNavigate("tech")} className="hover:text-white transition-colors text-[#4CA6FF] font-medium border-b border-[#4CA6FF]/30 pb-1">Cestrix Tech Ecosystem</button></li>
              <li><button onClick={() => onNavigate("gateway")} className="hover:text-white transition-colors text-[#4CA6FF] font-medium border-b border-[#4CA6FF]/30 pb-1">Global Gateway</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#4CA6FF] uppercase tracking-[0.2em] font-heading mb-8">Corporate Desk</h4>
            <div className="space-y-6 text-sm text-slate-300 font-light">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4CA6FF] shrink-0" aria-hidden="true" />
                <a href="tel:+918955957893" className="hover:text-white transition-colors">+91 89559 57893</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4CA6FF] shrink-0" aria-hidden="true" />
                <a href="mailto:info@cestrixgroup.com" className="hover:text-white transition-colors">info@cestrixgroup.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM LEGAL BAR (🔥 FIX: Har button apne sahi naye page par point karega) */}
      <div className="bg-[#050D1A] py-6 px-6 md:px-12 lg:px-24 border-t border-slate-800/80">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© {new Date().getFullYear()} Cestrix Group Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button onClick={() => onNavigate("privacy")} className="hover:text-[#4CA6FF] transition-colors cursor-pointer outline-none">Privacy Policy</button>
            <button onClick={() => onNavigate("terms")} className="hover:text-[#4CA6FF] transition-colors cursor-pointer outline-none">Terms of Use</button>
            <button onClick={() => onNavigate("disclaimer")} className="hover:text-[#4CA6FF] transition-colors cursor-pointer outline-none">Disclaimer</button>
            <button onClick={() => onNavigate("cookies")} className="hover:text-[#4CA6FF] transition-colors cursor-pointer outline-none">Cookies Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}