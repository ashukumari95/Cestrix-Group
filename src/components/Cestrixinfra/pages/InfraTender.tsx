/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Handshake, 
  Calculator, 
  ShieldCheck, 
  Lock,
  AlertCircle,
  CheckCircle2,
  FileX,
  BellRing,
  X 
} from "lucide-react";

export default function InfraTender() {
  const [estimateCalculated, setEstimateCalculated] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔑 Aapki Web3Forms Access Key
  const WEB3FORMS_ACCESS_KEY = "74647f40-ca2f-49c1-ab13-baddadd2cd7e";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimateCalculated(true);
    setTimeout(() => setEstimateCalculated(false), 5000);
  };

  const scrollToPreRegister = () => {
    const element = document.getElementById('partner-steps');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Vendor Form Submit Handler (To send data to your Gmail)
  const handleVendorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Getting form data
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "📢 NEW VENDOR REGISTRATION - Cestrix Infra");
    formData.append("from_name", "Vendor Portal");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      alert("✅ Registration request submitted successfully! Our commercial team will contact you shortly.");
      setShowRegisterModal(false);
    } catch(err) {
      alert("❌ Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#004B87] selection:text-white pb-0">
      
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-50 grayscale-[10%]"
          style={{ backgroundImage: "url('/PWU.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-black/40 to-[#FAFAFA]" />
        
        <div className="relative z-10 text-center px-6 pt-10">
          <span className="text-[#4CA6FF] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-4 drop-shadow-md">
            Supply Chain & Strategic Partners
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight font-heading drop-shadow-xl">
            Partner With <br /><span className="font-bold text-white">Cestrix Group.</span>
          </h1>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA] pt-12 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Handshake className="w-12 h-12 text-[#004B87] mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-light text-[#0A192F] font-heading leading-snug">
            "Building reliable, long-term <br/><span className="font-bold text-[#004B87]">industry partnerships.</span>"
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed font-body mt-8">
            Executing large infrastructure projects requires a dependable supply chain. Cestrix Group invites material suppliers, engineering sub-contractors, and equipment providers to register with our procurement network.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#004B87] text-white shadow-inner relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {[
            { metric: "Proven Scale", label: "Annual Procurement", detail: "Material & Fleet Volume" },
            { metric: "Qualified", label: "Registered Vendors", detail: "Quality Certified Network" },
            { metric: "Transparent", label: "Payment Terms", detail: "Timely Settlement Cycles" },
            { metric: "Audited", label: "Procurement Portal", detail: "ISO Quality Standards" }
          ].map((stat, idx) => (
            <div key={idx} className="p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight mb-4 uppercase">{stat.metric}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4CA6FF] block mb-3">{stat.label}</span>
              <div className="w-6 h-[2px] bg-white/30 mb-3" />
              <span className="text-xs font-body text-slate-200 font-light">{stat.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center md:text-left">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-2 border-b-2 border-[#004B87] inline-block pb-1">
              LIVE PROCUREMENT PORTAL
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading">
              Active <span className="font-bold text-[#004B87]">Opportunities.</span>
            </h2>
          </div>

          <div className="w-full bg-slate-50 border border-slate-200 rounded-sm p-12 text-center flex flex-col items-center justify-center space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-[#004B87]/10 text-[#004B87] rounded-full flex items-center justify-center">
              <FileX className="w-8 h-8" />
            </div>
            <div className="max-w-md space-y-2">
              <h3 className="text-xl font-bold font-heading text-slate-900 uppercase tracking-wide">No Active Tenders At Present</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                All procurement contracts for ongoing project phases are currently finalized. New tender opportunities for upcoming project packages will be published here.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 w-full max-w-lg flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-2 text-[#004B87]"><BellRing className="w-4 h-4" /> Register for future tender alerts</span>
              <button 
                onClick={scrollToPreRegister} 
                className="px-6 py-2.5 bg-[#004B87] text-white font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors rounded-sm"
              >
                Pre-Register Vendor
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="partner-steps" className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ShieldCheck className="w-12 h-12 text-[#004B87] mx-auto mb-6" />
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-4">ONBOARDING PROCESS</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">Vendor <span className="font-bold text-[#004B87]">Pre-Qualification.</span></h2>
            <p className="text-sm md:text-base text-slate-600 font-light mt-6 leading-relaxed">We onboard vendors through a transparent, step-by-step verification process focusing on financial stability, safety compliance, and technical capability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {[
               { step: "01", title: "Financial Verification", desc: "Review of audited financial statements, credit standing, and execution solvency." },
               { step: "02", title: "Safety & ISO Audit", desc: "Verification of ISO quality standards and site safety records to meet site requirements." },
               { step: "03", title: "Technical Review", desc: "Assessment of machinery ownership, production capacity, and past project performance." }
             ].map((item, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#004B87] transition-all duration-300">
                  <div className="w-16 h-16 bg-[#004B87] text-white flex items-center justify-center font-heading font-bold text-2xl mb-6 shadow-md rounded-full">{item.step}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="px-10 py-5 bg-[#004B87] text-white hover:bg-slate-900 text-xs font-bold uppercase tracking-widest transition-colors shadow-md rounded-sm"
            >
               Register As Partner Vendor
            </button>
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A192F] text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-bold text-[#4CA6FF] uppercase tracking-[0.3em] block border-l-2 border-[#4CA6FF] pl-3">COMMERCIAL PLANNING</span>
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight font-heading leading-snug">Execution Scope <br /><span className="font-bold text-[#4CA6FF]">Estimator.</span></h2>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">Select basic project parameters to receive a high-level conceptual evaluation of civil material requirements and fleet scale.</p>
          </div>

          <div className="bg-white rounded-sm p-8 md:p-12 shadow-2xl text-slate-900">
             <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-6">
                <Calculator className="w-8 h-8 text-[#004B87]" />
                <h3 className="text-xl font-bold font-heading uppercase tracking-wide text-slate-900">Scale Evaluator</h3>
             </div>

             {estimateCalculated ? (
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-6">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-slate-900">Evaluation Generated</h4>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-sm space-y-4">
                     <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Structural Footprint</span>
                        <span className="font-bold text-slate-900 font-heading">Heavy Civil Package</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Material Requirement</span>
                        <span className="font-bold text-slate-900 font-heading">High Volume Batching</span>
                     </div>
                  </div>
                  <button onClick={() => setEstimateCalculated(false)} className="mt-4 text-xs font-bold text-[#004B87] uppercase hover:underline">Calculate Another Scope</button>
               </motion.div>
             ) : (
               <form onSubmit={handleEstimate} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sector</label>
                     <select className="w-full bg-slate-50 border border-slate-300 p-3 text-sm text-slate-800 outline-none focus:border-[#004B87]">
                       <option>Aviation Terminal</option>
                       <option>Marine Deepwater Berth</option>
                       <option>Hydro-Power Dam</option>
                       <option>Highway & Tunnel</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Terrain Profile</label>
                     <select className="w-full bg-slate-50 border border-slate-300 p-3 text-sm text-slate-800 outline-none focus:border-[#004B87]">
                       <option>Urban / Flat</option>
                       <option>Coastal / Saline</option>
                       <option>Alpine / Hard Rock</option>
                     </select>
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Proposed Execution Scope</label>
                   <input type="text" placeholder="e.g., Concrete Paving or Terminal Structure" className="w-full bg-slate-50 border border-slate-300 p-3 text-sm text-slate-800 outline-none focus:border-[#004B87]" required />
                 </div>
                 <button type="submit" className="w-full bg-[#004B87] text-white hover:bg-slate-900 font-bold text-xs uppercase tracking-widest py-4 transition-colors shadow-md mt-4">Generate Estimation</button>
               </form>
             )}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6 md:px-12 bg-white flex justify-center text-center border-b border-slate-200">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <Lock className="w-10 h-10 text-[#004B87] mb-6" />
          <h3 className="text-xl font-bold font-heading text-slate-900 uppercase tracking-wide mb-4">Transparent Vendor Evaluation</h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">All vendor selections are conducted transparently based on merit, capability, and compliance with anti-bribery standards.</p>
        </div>
      </section>

      {/* VENDOR REGISTRATION POPUP (MODAL) */}
      <AnimatePresence>
        {showRegisterModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-2xl shadow-2xl overflow-hidden rounded-sm relative"
            >
              <div className="bg-[#0A192F] p-6 flex justify-between items-center text-white">
                <div>
                  <span className="text-[10px] font-bold text-[#4CA6FF] tracking-[0.2em] uppercase block mb-1">Corporate Portal</span>
                  <h3 className="text-xl font-heading font-light tracking-wide">Vendor Registration</h3>
                </div>
                <button onClick={() => setShowRegisterModal(false)} className="text-white/60 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Data is sent to your Gmail via Web3Forms */}
              <div className="p-8 md:p-10">
                <form onSubmit={handleVendorSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Company Name</label>
                      <input type="text" name="Company_Name" required className="w-full border border-slate-300 p-3 text-sm focus:border-[#004B87] outline-none" placeholder="Enter legal entity name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Registration ID (CIN/GST)</label>
                      <input type="text" name="Registration_ID" required className="w-full border border-slate-300 p-3 text-sm focus:border-[#004B87] outline-none" placeholder="Tax/Corp ID" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Official Email</label>
                      <input type="email" name="Email" required className="w-full border border-slate-300 p-3 text-sm focus:border-[#004B87] outline-none" placeholder="contact@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Supply Category</label>
                      <select name="Category" required className="w-full border border-slate-300 p-3 text-sm focus:border-[#004B87] outline-none bg-white">
                        <option value="">Select Category...</option>
                        <option value="Raw Materials & Aggregates">Raw Materials & Aggregates</option>
                        <option value="Heavy Machinery Supply">Heavy Machinery Supply</option>
                        <option value="Engineering Sub-contracting">Engineering Sub-contracting</option>
                        <option value="Haulage & Logistics">Haulage & Logistics</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#004B87] text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors disabled:opacity-70">
                      {isSubmitting ? "Submitting Data..." : "Submit Pre-Qualification Request"}
                    </button>
                    <p className="text-center text-[10px] text-slate-500 mt-4">By submitting, you agree to the Cestrix Group's strict anti-corruption and evaluation policies.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}