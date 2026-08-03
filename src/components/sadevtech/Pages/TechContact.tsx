/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  MapPin, Phone, Mail, Globe, 
  Send, ShieldCheck, Building2, 
  ArrowRight, MessageSquare, Clock,
  CheckCircle2
} from "lucide-react";

// Animation Variants for smooth scrolling
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TechContact() {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap API ya Email service (like EmailJS) connect kar sakte hain
    alert("Thank you! Your request has been submitted. Our team will contact you shortly.");
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#002D62] selection:text-white overflow-x-hidden pt-[76px] lg:pt-[88px]">
      
      {/* =========================================
          1. HERO SECTION (Dark Corporate)
      ========================================= */}
      <section className="relative w-full pt-20 pb-32 px-6 md:px-12 lg:px-24 bg-[#001730] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Network" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-transparent to-[#001730]/80"></div>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-[#00A3E0] text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 backdrop-blur-md"
          >
            <Globe className="w-3 h-3 text-[#00A3E0]" /> Global Connectivity
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-heading leading-[1.1] mb-6 tracking-tight"
          >
            Let's Engineer Your <br className="hidden md:block" />
            <span className="text-[#00A3E0]">Digital Future.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} 
            className="text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-2xl"
          >
            Whether you need to modernize your legacy ERP, secure your cloud infrastructure, or deploy AI on your construction site—our elite engineering architects are ready to assist.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          2. MAIN CONTACT SECTION (Form + Info)
      ========================================= */}
      <section className="px-6 md:px-12 lg:px-24 relative z-30 -mt-20 mb-24">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: Contact Information & Offices */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:w-2/5 flex flex-col gap-6">
            
            {/* Direct Connect Card */}
            <motion.div variants={fadeUp} className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,45,98,0.06)] border border-slate-100">
              <h3 className="text-2xl font-bold text-[#002D62] font-heading mb-6">Direct Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-[#E1F0FF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#002D62] transition-colors">
                    <Building2 className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Enterprise Sales</p>
                    <a href="mailto:enterprise@sadevtech.com" className="text-sm font-semibold text-[#002D62] hover:text-[#00A3E0] transition-colors">enterprise@sadevtech.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-[#E1F0FF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#002D62] transition-colors">
                    <MessageSquare className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">IT Support & Maintenance</p>
                    <a href="mailto:support@sadevtech.com" className="text-sm font-semibold text-[#002D62] hover:text-[#00A3E0] transition-colors">support@sadevtech.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-[#E1F0FF] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#002D62] transition-colors">
                    <Globe className="w-5 h-5 text-[#00A3E0] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Careers & HR</p>
                    <a href="mailto:careers@sadevtech.com" className="text-sm font-semibold text-[#002D62] hover:text-[#00A3E0] transition-colors">careers@sadevtech.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Global Offices Card */}
            <motion.div variants={fadeUp} className="bg-[#002D62] p-8 md:p-10 rounded-2xl shadow-xl border border-[#002D62] text-white">
              <h3 className="text-2xl font-bold font-heading mb-6">Global Presence</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[#00A3E0] pl-4">
                  <h4 className="text-sm font-bold mb-1">Global Headquarters</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed flex items-start gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-[#00A3E0] shrink-0" />
                    Sadev Tech Park, Cyber City,<br />Mumbai, India 400081
                  </p>
                  <p className="text-xs text-slate-300 font-light flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4 text-[#00A3E0] shrink-0" /> +91 22 4567 8900
                  </p>
                </div>

                <div className="border-l-2 border-[#00A3E0] pl-4">
                  <h4 className="text-sm font-bold mb-1">MENA Region</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed flex items-start gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-[#00A3E0] shrink-0" />
                    Dubai Internet City,<br />Dubai, UAE
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT: Premium Contact Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-3/5 bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-[0_20px_50px_rgba(0,45,98,0.08)] border border-slate-100">
            <h2 className="text-3xl font-bold text-[#002D62] font-heading mb-2">Request an IT Consultation</h2>
            <p className="text-slate-500 text-sm font-light mb-10">Please fill out the form below. A senior solutions architect will contact you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="relative border-b border-slate-300 group focus-within:border-[#00A3E0] transition-colors">
                  <input 
                    type="text" 
                    id="firstName"
                    required
                    className="w-full bg-transparent pt-4 pb-2 text-sm text-[#002D62] font-medium outline-none peer" 
                    placeholder=" "
                  />
                  <label htmlFor="firstName" className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-slate-400 pointer-events-none peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#00A3E0] peer-valid:-top-2 peer-valid:text-[9px] transition-all">
                    First Name *
                  </label>
                </div>

                {/* Last Name */}
                <div className="relative border-b border-slate-300 group focus-within:border-[#00A3E0] transition-colors">
                  <input 
                    type="text" 
                    id="lastName"
                    required
                    className="w-full bg-transparent pt-4 pb-2 text-sm text-[#002D62] font-medium outline-none peer" 
                    placeholder=" "
                  />
                  <label htmlFor="lastName" className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-slate-400 pointer-events-none peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#00A3E0] peer-valid:-top-2 peer-valid:text-[9px] transition-all">
                    Last Name *
                  </label>
                </div>

                {/* Corporate Email */}
                <div className="relative border-b border-slate-300 group focus-within:border-[#00A3E0] transition-colors">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent pt-4 pb-2 text-sm text-[#002D62] font-medium outline-none peer" 
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-slate-400 pointer-events-none peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#00A3E0] peer-valid:-top-2 peer-valid:text-[9px] transition-all">
                    Corporate Email *
                  </label>
                </div>

                {/* Company Name */}
                <div className="relative border-b border-slate-300 group focus-within:border-[#00A3E0] transition-colors">
                  <input 
                    type="text" 
                    id="company"
                    className="w-full bg-transparent pt-4 pb-2 text-sm text-[#002D62] font-medium outline-none peer" 
                    placeholder=" "
                  />
                  <label htmlFor="company" className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-slate-400 pointer-events-none peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#00A3E0] peer-valid:-top-2 peer-valid:text-[9px] transition-all">
                    Company Name
                  </label>
                </div>
              </div>

              {/* Inquiry Type Dropdown */}
              <div className="relative border-b border-slate-300 group focus-within:border-[#00A3E0] transition-colors pt-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  Area of Interest *
                </label>
                <select required className="w-full bg-transparent pb-2 text-sm text-[#002D62] font-medium outline-none cursor-pointer appearance-none">
                  <option value="" disabled selected>Select an option...</option>
                  <option value="erp">Custom ERP Solutions</option>
                  <option value="bim">5D BIM & Digital Twins</option>
                  <option value="ai">Industrial AI & IoT</option>
                  <option value="security">Cloud Security</option>
                  <option value="careers">Careers / HR</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              {/* Message Area */}
              <div className="relative border-b border-slate-300 group focus-within:border-[#00A3E0] transition-colors pt-4">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent pt-4 pb-2 text-sm text-[#002D62] font-medium outline-none peer resize-none" 
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-slate-400 pointer-events-none peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#00A3E0] peer-valid:-top-2 peer-valid:text-[9px] transition-all">
                  How can our engineering team help you? *
                </label>
              </div>

              {/* Submit & Privacy Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
                  100% Confidential Data
                </div>
                <button type="submit" className="w-full sm:w-auto bg-[#002D62] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#00A3E0] transition-colors rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Submit Request <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          3. WHAT HAPPENS NEXT? (Process Banner)
      ========================================= */}
      <section className="w-full py-20 px-6 bg-white border-t border-slate-200">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002D62] font-heading mb-12">What happens after you submit?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-slate-200 z-0"></div>

            <div className="relative z-10 flex flex-col items-center bg-white p-4">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                <Clock className="w-5 h-5 text-[#00A3E0]" />
              </div>
              <h4 className="font-bold text-[#002D62] text-sm mb-2">1. Rapid Review</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed px-4">Your inquiry is instantly routed to the relevant technical department for review.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center bg-white p-4">
              <div className="w-12 h-12 bg-[#E1F0FF] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                <Phone className="w-5 h-5 text-[#00A3E0]" />
              </div>
              <h4 className="font-bold text-[#002D62] text-sm mb-2">2. Discovery Call</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed px-4">A senior solutions architect will contact you within 24 hours to understand your exact needs.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center bg-white p-4">
              <div className="w-12 h-12 bg-[#002D62] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" />
              </div>
              <h4 className="font-bold text-[#002D62] text-sm mb-2">3. Solution Blueprint</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed px-4">We provide a high-level technical blueprint and project timeline customized for your enterprise.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}