/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

export default function CookiesPolicy({ onNavigate }: { onNavigate?: (view: string) => void }) {
  
  useEffect(() => { 
    window.scrollTo(0, 0); 

    document.title = "Cookies Policy | Cestrix Group";

    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Read the Cestrix Group Cookies Policy to understand how we use cookies to improve your enterprise digital experience.";

    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = "https://cestrixgroup.com/tech/cookies";
  }, []);

  return (
    <div className="w-full bg-white font-sans selection:bg-[#002D62] selection:text-white pb-0">
      
      {/* =========================================
          L&T STYLE CORPORATE HERO BANNER
      ========================================= */}
      <div className="relative w-full h-[300px] md:h-[350px] flex items-end pb-12 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          {/* Digital Network / Tech Corporate Background */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" 
            alt="Cookies Policy Corporate" 
            className="w-full h-full object-cover grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-[#001730]/30"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] w-full mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-white mb-2">
            Cookies Framework
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
              <circle cx="200" cy="100" r="80" stroke="#002D62" strokeWidth="2" fill="none" strokeDasharray="5 5" />
              <circle cx="200" cy="100" r="40" stroke="#00A3E0" strokeWidth="1" fill="none" />
           </svg>
        </div>

        <div className="text-slate-700 font-light leading-relaxed text-sm md:text-base space-y-10 max-w-4xl">
          
          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              As is common practice with almost all professional enterprise websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This Cookies Policy explains what information they gather, how we use it, and why we sometimes need to store these cookies.
            </p>
            <p>
              We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">2. How We Utilize Cookies</h2>
            <p className="mb-4">
              We utilize cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry-standard options for disabling cookies without completely disabling the functionality and features they add to our portals. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service you utilize.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">3. Categories of Cookies Deployed</h2>
            <ul className="list-disc pl-6 space-y-4 marker:text-[#002D62]">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are essential for enabling user movement around our portals, managing secure sessions, and ensuring that B2B inquiry forms function correctly. Without these, core enterprise features cannot be delivered.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> We utilize trusted analytics tools (such as Google Analytics) to measure visitor interactions, understand how engineering partners navigate our platforms, and identify areas for digital optimization. These cookies aggregate data anonymously.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These remember choices you make (such as your preferred domain interest or language settings) to provide enhanced, personalized corporate features.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">4. Disabling & Managing Cookies</h2>
            <p className="mb-4">
              You can prevent the setting of cookies by adjusting the settings on your browser (consult your browser's "Help" section for instructions). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will typically result in also disabling certain features and functionalities of our digital portals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#002D62] font-heading mb-4">5. Corporate Compliance & Inquiries</h2>
            <p className="mb-4">
              If you require further clarification regarding our deployment of cookies or data tracking frameworks, please reach out to our Governance Desk:
            </p>
            <div className="bg-[#F8FAFC] p-6 border-l-4 border-[#002D62] text-sm text-slate-800">
              <strong className="block mb-2 font-heading uppercase tracking-widest text-xs text-[#00A3E0]">Governance & Compliance Desk</strong>
              Email: <a href="mailto:privacy@cestrixgroup.com" className="text-[#002D62] font-semibold hover:underline">privacy@cestrixgroup.com</a> <br/>
              Entity: Cestrix Group Limited - Digital Integration Division
            </div>
          </section>

        </div>

        <div className="mt-20 pt-8 pb-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
           <span>Document Ref: CTX-CKS-2026-08 (Effective: August 2026)</span>
           <span className="mt-2 md:mt-0">© {new Date().getFullYear()} Cestrix Group Limited. All Rights Reserved.</span>
        </div>
      </div>
      
    </div>
  );
}