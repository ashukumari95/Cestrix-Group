/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Linkedin, Twitter, Facebook, ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";

interface TechFooterProps {
  onNavigate: (view: "gateway" | "infra" | "tech") => void;
}

export default function TechFooter({ onNavigate }: TechFooterProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const WEB3FORMS_ACCESS_KEY = "74647f40-ca2f-49c1-ab13-baddadd2cd7e";
  
  // Aapka WhatsApp Link yahan set kiya gaya hai
  const WHATSAPP_LINK = "https://wa.me/918955957893?text=Hello%20Sadev%20Tech,%20I%20would%20like%20to%20discuss%20an%20enterprise%20software%20project.";

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "📢 SADEV TECH - EXPERT HELP REQUEST");

    try {
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      alert("✅ Thank you! Our engineering team will contact you shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      alert("❌ Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateTo = (page: string) => {
    window.location.hash = page;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("main-scroll-view")?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full font-sans flex flex-col">
      
      {/* =========================================
          1. PRE-FOOTER CONTACT FORM (Premium Dark Corporate UI)
      ========================================= */}
      <section id="contact-form" className="w-full bg-[#001730] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00A3E0]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Side: Contact Info & WhatsApp */}
            <div className="w-full lg:w-5/12 text-white">
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-4 block">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-6">
                Ready to Upgrade Your Enterprise?
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed mb-10 max-w-md">
                Whether you need a full-scale ERP deployment or a secure data architecture, our engineers are ready to blueprint your digital transformation.
              </p>
              
              <div className="space-y-6 text-sm font-semibold">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <span>+91 89559 57893</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <span>sadevinfra@gmail.com</span>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">Need immediate assistance?</p>
                <button 
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  className="px-8 py-3.5 bg-green-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg rounded-full flex items-center gap-2 w-fit"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="w-full lg:w-7/12 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-[6px] border-[#00A3E0] rounded-2xl">
              <h3 className="text-2xl font-bold text-[#002D62] font-heading mb-8">Send an Official Inquiry</h3>
              <form onSubmit={handleContactSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" name="First_Name" required placeholder="First Name *" className="w-full border-b border-slate-300 pb-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00A3E0] transition-colors bg-transparent" />
                  <input type="text" name="Last_Name" required placeholder="Last Name *" className="w-full border-b border-slate-300 pb-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00A3E0] transition-colors bg-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="email" name="Email" required placeholder="Official Email *" className="w-full border-b border-slate-300 pb-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00A3E0] transition-colors bg-transparent" />
                  <input type="text" name="Company" placeholder="Company / Organization" className="w-full border-b border-slate-300 pb-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00A3E0] transition-colors bg-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <select name="Interest" required className="w-full border-b border-slate-300 pb-3 text-sm outline-none focus:border-[#00A3E0] text-slate-500 bg-transparent transition-colors cursor-pointer">
                    <option value="" className="text-slate-400">Select Domain of Interest *</option>
                    <option value="Business ERP" className="text-slate-800">Business Software (ERP)</option>
                    <option value="3D Models" className="text-slate-800">3D Digital Models</option>
                    <option value="Live Tracking" className="text-slate-800">Live IoT Tracking</option>
                    <option value="Smart AI" className="text-slate-800">Smart AI Systems</option>
                    <option value="Cybersecurity" className="text-slate-800">Cybersecurity</option>
                    <option value="General Inquiry" className="text-slate-800">General Inquiry</option>
                  </select>
                  <input type="tel" name="Phone" placeholder="Phone Number" className="w-full border-b border-slate-300 pb-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00A3E0] transition-colors bg-transparent" />
                </div>
                <textarea name="Message" rows={3} placeholder="Tell us about your requirements..." className="w-full border-b border-slate-300 pb-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00A3E0] transition-colors resize-none bg-transparent"></textarea>
                
                <button type="submit" disabled={isSubmitting} className="px-10 py-4 bg-[#002D62] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#00A3E0] transition-colors disabled:opacity-70 flex items-center justify-center gap-3 rounded-full shadow-xl w-full sm:w-auto">
                  {isSubmitting ? "Submitting Request..." : "Submit Request"} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. MEGA FOOTER (Integrated & Fixed WhatsApp Links)
      ========================================= */}
      <footer className="w-full bg-[#002D62] pt-20 pb-8 px-6 md:px-12 lg:px-24 text-white border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
            <div className="space-y-6 lg:col-span-2 pr-8">
               <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('overview')}>
                  <img src="./public/logo.png" alt="Sadev Tech Logo" className="h-10 w-auto object-contain brightness-0 invert" onError={(e) => { (e.target as HTMLElement).style.display = "none"; }} />
                  <span className="text-xl font-bold tracking-[0.1em] font-heading uppercase text-white">SADEV <span className="font-light text-slate-400">TECH</span></span>
               </div>
               <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm">
                 Sadev Tech provides easy-to-use, secure, and powerful software solutions tailored specifically for heavy engineering, transportation, energy, and defense sectors.
               </p>
               <div className="flex items-center gap-4">
                 <a href="https://www.linkedin.com/company/sadev-infra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A3E0] transition-colors"><Linkedin className="w-4 h-4" /></a>
                 <a href="https://x.com/Sadevinfra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A3E0] transition-colors"><Twitter className="w-4 h-4" /></a>
                 <a href="https://www.facebook.com/share/17nJJee7Tq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00A3E0] transition-colors"><Facebook className="w-4 h-4" /></a>
               </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold font-heading mb-6 text-[#00A3E0] uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Business ERP</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">3D Digital Models</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Live IoT Tracking</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Data Security</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold font-heading mb-6 text-[#00A3E0] uppercase tracking-widest">Industries</h4>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                <li><button onClick={() => navigateTo('industry')} className="hover:text-white transition-colors">Mega Construction</button></li>
                <li><button onClick={() => navigateTo('industry')} className="hover:text-white transition-colors">Transport & Ports</button></li>
                <li><button onClick={() => navigateTo('industry')} className="hover:text-white transition-colors">Defense & Gov</button></li>
                <li><button onClick={() => navigateTo('industry')} className="hover:text-white transition-colors">Power Grids</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold font-heading mb-6 text-[#00A3E0] uppercase tracking-widest">Company</h4>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                <li><button onClick={() => navigateTo('about-us')} className="hover:text-white transition-colors">About Us</button></li>
                {/* Fixed Contact Us Link to open WhatsApp */}
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><button onClick={() => onNavigate("infra")} className="hover:text-white transition-colors">Sadev Infra Division</button></li>
                <li><button onClick={() => onNavigate("gateway")} className="hover:text-white transition-colors">Global Gateway</button></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6 text-xs text-slate-400 font-light">
            <p>© {new Date().getFullYear()} Sadev Group Limited. All Rights Reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Disclaimer</button>
              <button className="hover:text-white transition-colors">Terms of Use</button>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}