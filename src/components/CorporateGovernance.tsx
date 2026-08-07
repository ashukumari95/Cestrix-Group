/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Scale, FileText } from "lucide-react";
import { useEffect } from "react";

export default function CorporateGovernance({ onNavigate }: { onNavigate: (view: any) => void }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#053282] selection:text-white pb-20">
      
      {/* 🚀 PREMIUM HEADER */}
      <header className="w-full bg-white border-b border-slate-200 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate("gateway")}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-[#053282] transition-colors" />
          </button>
          <div className="flex items-center gap-3">
            <img src="/logo.webp" alt="CG" className="h-6 md:h-8 w-auto object-contain grayscale opacity-80" />
            <div className="flex items-center pt-1 border-l-2 border-slate-200 pl-3">
              <span className="text-lg md:text-xl font-bold tracking-widest font-heading text-slate-800 uppercase leading-none">
                Cestrix
              </span>
              <span className="text-lg md:text-xl font-light tracking-widest font-heading text-slate-500 uppercase leading-none ml-2">
                Governance
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 🚀 MAIN CONTENT AREA */}
      <main className="max-w-4xl mx-auto px-6 mt-12 md:mt-20">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight font-heading text-[#053282] mb-4">
            Legal & <span className="font-bold">Compliance.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-body mb-12 max-w-2xl leading-relaxed">
            As a global leader in Heavy EPC Infrastructure and Digital Technology Integration, Cestrix Group adheres to the highest standards of international corporate governance, data security, and operational compliance.
          </p>
        </motion.div>

        {/* SECTION 1: TERMS & CONDITIONS */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-16 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-[#4CA6FF]" />
            <h2 className="text-xl md:text-2xl font-bold font-heading text-slate-900 uppercase tracking-wider">1. Terms of Operations</h2>
          </div>
          <div className="space-y-4 text-sm text-slate-600 font-body leading-relaxed">
            <p>
              <strong>1.1 Execution Liability:</strong> All heavy engineering, structural, and civil EPC (Engineering, Procurement, and Construction) contracts undertaken by Cestrix Group are governed by the specific Service Level Agreements (SLAs) signed prior to project initiation. General website information does not constitute a binding operational contract.
            </p>
            <p>
              <strong>1.2 Intellectual Property:</strong> All architectural blueprints, 5D BIM models, IoT telematics architectures, and digital twin ecosystems showcased or developed by Cestrix Tech Division are the exclusive intellectual property of Cestrix Group unless legally transferred.
            </p>
          </div>
        </motion.section>

        {/* SECTION 2: PRIVACY POLICY */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-16 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-[#4CA6FF]" />
            <h2 className="text-xl md:text-2xl font-bold font-heading text-slate-900 uppercase tracking-wider">2. Data & Privacy Policy</h2>
          </div>
          <div className="space-y-4 text-sm text-slate-600 font-body leading-relaxed">
            <p>
              <strong>2.1 Telematics & IoT Data:</strong> Cestrix Group utilizes advanced IoT sensors and live telematics across its heavy fleet and project sites. We maintain strict ISO 27001-compliant protocols to ensure that all spatial, structural, and operational data remains encrypted and strictly confidential.
            </p>
            <p>
              <strong>2.2 Digital Twin Security:</strong> Data collected for the creation of Digital Twin ecosystems is processed solely for predictive engineering and project lifecycle management. We do not sell, distribute, or compromise client infrastructure data to third-party entities.
            </p>
          </div>
        </motion.section>

        {/* SECTION 3: DISCLAIMER */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mb-16 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-[#4CA6FF]" />
            <h2 className="text-xl md:text-2xl font-bold font-heading text-slate-900 uppercase tracking-wider">3. Forward-Looking Disclaimer</h2>
          </div>
          <div className="space-y-4 text-sm text-slate-600 font-body leading-relaxed">
            <p>
              Information contained within this digital gateway may include forward-looking statements regarding project timelines, technological capabilities, and financial projections. These statements are based on current infrastructural models and market dynamics, which are subject to inherent risks and macroeconomic uncertainties. Cestrix Group holds no obligation to publicly update or revise any forward-looking projections.
            </p>
          </div>
        </motion.section>

      </main>
    </div>
  );
}