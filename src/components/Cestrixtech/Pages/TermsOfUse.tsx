/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

export default function TermsOfUse({ onNavigate }: { onNavigate?: (view: string) => void }) {
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="w-full bg-white font-sans selection:bg-[#002D62] selection:text-white pb-0">
      
      {/* =========================================
          L&T STYLE CORPORATE HERO BANNER
      ========================================= */}
      <div className="relative w-full h-[300px] md:h-[350px] flex items-end pb-12 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          {/* Heavy Engineering / Infrastructure Corporate Background */}
          <img 
            src="https://images.unsplash.com/photo-1541888086225-b6c33c306d15?auto=format&fit=crop&q=80" 
            alt="Corporate Infrastructure" 
            className="w-full h-full object-cover grayscale-[40%]"
          />
          {/* Dark Overlay gradient for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-[#001730]/30"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] w-full mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-white mb-2">
            Terms of Operations
          </h1>
          <div className="w-16 h-1 bg-[#00A3E0]"></div>
        </div>
      </div>

      {/* =========================================
          L&T STYLE CLEAN DOCUMENT LAYOUT
      ========================================= */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 pt-16 relative">
        
        {/* Subtle background abstract graphic */}
        <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden md:block">
           <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="100" stroke="#002D62" strokeWidth="2" fill="none" strokeDasharray="10 5" />
              <circle cx="200" cy="100" r="50" stroke="#00A3E0" strokeWidth="1" fill="none" />
           </svg>
        </div>

        <div className="text-slate-700 font-light leading-relaxed text-sm md:text-base space-y-10 max-w-4xl">
          
          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              These Terms of Operations ("Terms") constitute a legally binding corporate agreement between you (whether personally or on behalf of a corporate entity) and Cestrix Group Limited ("Cestrix Group", "we", "us", or "our"). By accessing our digital portals, enterprise software, or engaging with our EPC (Engineering, Procurement, and Construction) frameworks, you agree that you have read, understood, and agreed to be bound by all of these Terms.
            </p>
            <p>
              If you do not agree with all of these Terms, you are expressly prohibited from using our corporate portals and enterprise ecosystems, and you must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">2. Enterprise Services & Digital Portals</h2>
            <p className="mb-4">
              Cestrix Group provides B2B technological integration, heavy infrastructure execution protocols, and specialized software modules (including ERP, IoT telemetry, and 5D BIM models). 
            </p>
            <p>
              The technical specifications, project estimations, and architectural blueprints available through our Commercial Estimating Desk and Tech divisions are indicative. Final binding execution is subject to formal offline corporate contracts, sovereign agreements, and rigorous site audits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-4">
              Unless otherwise indicated, the Site and our enterprise software are our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
            </p>
            <p>
              No part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written corporate permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">4. Limitation of Corporate Liability</h2>
            <p className="mb-4">
              In no event will we or our directors, employees, or engineering agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of our digital platforms or reliance on our commercial estimators.
            </p>
            <p>
              The execution of physical infrastructure and software integration carries inherent industrial risks. All actual deployments are governed by distinct, project-specific liability frameworks outlined in formal EPC contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">5. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms and your use of our enterprise ecosystems are governed by and construed in accordance with the corporate laws applicable in the jurisdiction of Cestrix Group’s headquarters, without regard to its conflict of law principles. Any legal action or corporate dispute shall be resolved through binding international arbitration or within designated sovereign courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">6. Official Legal Communications</h2>
            <p className="mb-4">
              For any legal notices, contract administration inquiries, or clarifications regarding these Terms of Operations, please direct your communications to our Corporate Legal Desk at:
            </p>
            <div className="bg-[#F8FAFC] p-6 border-l-4 border-[#002D62] text-sm text-slate-800">
              <strong className="block mb-2 font-heading uppercase tracking-widest text-xs text-[#00A3E0]">Corporate Legal Desk</strong>
              Email: <a href="mailto:legal@cestrixgroup.com" className="text-[#002D62] font-semibold hover:underline">legal@cestrixgroup.com</a> <br/>
              Entity: Cestrix Group Limited - Governance & Compliance Division
            </div>
          </section>

        </div>

        <div className="mt-20 pt-8 pb-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
           <span>Document Ref: CTX-TRM-2026-08 (Effective: August 2026)</span>
           <span className="mt-2 md:mt-0">© {new Date().getFullYear()} Cestrix Group Limited. All Rights Reserved.</span>
        </div>
      </div>
      
    </div>
  );
}