/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

export default function Disclaimer({ onNavigate }: { onNavigate?: (view: string) => void }) {
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
          {/* Engineering Blueprint / Abstract Corporate Background */}
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
            alt="Corporate Disclaimer" 
            className="w-full h-full object-cover grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-[#001730]/30"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] w-full mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-white mb-2">
            Legal Disclaimer
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
              <rect x="50" y="50" width="300" height="100" stroke="#002D62" strokeWidth="2" fill="none" />
              <line x1="50" y1="50" x2="350" y2="150" stroke="#00A3E0" strokeWidth="1" />
              <line x1="350" y1="50" x2="50" y2="150" stroke="#00A3E0" strokeWidth="1" />
           </svg>
        </div>

        <div className="text-slate-700 font-light leading-relaxed text-sm md:text-base space-y-10 max-w-4xl">
          
          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">1. General Information Purpose</h2>
            <p className="mb-4">
              The information provided by Cestrix Group Limited ("we," "us," or "our") on our digital portals, enterprise applications, and official websites is for general informational and corporate evaluation purposes only. All information on our platforms is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the absolute accuracy, adequacy, validity, reliability, or completeness of any data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">2. Engineering & Technical Estimates</h2>
            <p className="mb-4">
              Our portals may feature automated commercial estimators, 3D/5D BIM integrations, and structural material calculators (e.g., concrete volume, steel tonnage projections). These tools are designed to provide <strong>indicative baseline metrics only</strong>. 
            </p>
            <p>
              Under no circumstances should the outputs of our digital estimators be construed as final, binding engineering advice or formal execution blueprints. Actual material deployment, timelines, and costs are strictly subject to formal site surveys, geotechnical auditing, and final EPC (Engineering, Procurement, and Construction) contract ratification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">3. Professional Advice Disclaimer</h2>
            <p>
              The content published on Cestrix Group portals cannot substitute for independent, professional engineering, legal, or financial advice. We highly recommend that all corporate entities consult with their respective technical and legal professionals before making infrastructure investment decisions or finalizing technology integration strategies based on the information provided on our platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">4. Third-Party Links & External Affiliations</h2>
            <p className="mb-4">
              Our enterprise ecosystems may contain links to third-party websites, government regulatory portals, or partner technologies. Such external links are not investigated, monitored, or checked for accuracy or reliability by us. 
            </p>
            <p>
              We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through our platforms. Cestrix Group will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">5. "As-Is" Operational Baseline</h2>
            <p className="mb-4">
              All digital services, software modules, and information on the Cestrix Group platforms are provided on an "as-is" and "as-available" basis. We disclaim all warranties, whether express or implied, including the implied warranties of merchantability, fitness for a specific industrial purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">6. Corporate Contact</h2>
            <p className="mb-4">
              Should you require clarification regarding this Disclaimer or wish to proceed with a formalized engineering consultation, please contact our Corporate Legal Desk:
            </p>
            <div className="bg-[#F8FAFC] p-6 border-l-4 border-[#002D62] text-sm text-slate-800">
              <strong className="block mb-2 font-heading uppercase tracking-widest text-xs text-[#00A3E0]">Corporate Legal Desk</strong>
              Email: <a href="mailto:legal@cestrixgroup.com" className="text-[#002D62] font-semibold hover:underline">legal@cestrixgroup.com</a> <br/>
              Entity: Cestrix Group Limited - Governance & Compliance Division
            </div>
          </section>

        </div>

        <div className="mt-20 pt-8 pb-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
           <span>Document Ref: CTX-DSC-2026-08 (Effective: August 2026)</span>
           <span className="mt-2 md:mt-0">© {new Date().getFullYear()} Cestrix Group Limited. All Rights Reserved.</span>
        </div>
      </div>
      
    </div>
  );
}