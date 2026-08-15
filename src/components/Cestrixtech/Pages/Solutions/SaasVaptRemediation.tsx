/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { ArrowLeft, Lock, ShieldCheck, ArrowRight } from "lucide-react";

export default function SaasVaptRemediation({ onNavigate }: { onNavigate?: (view: string) => void }) {
  
  useEffect(() => { 
    window.scrollTo(0, 0); 

    document.title = "SaaS VAPT Critical Vulnerability Remediation | Cestrix Tech";

    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Rapidly patch critical VAPT vulnerabilities, SQL injections, and broken authentications so you can achieve compliance and close major enterprise contracts.";

    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = "https://cestrixgroup.com/tech/solutions/saas-vapt-remediation";
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:info@cestrixgroup.com?subject=Urgent:%20VAPT%20Remediation%20&%20Security%20Patch";
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F7FA] font-sans selection:bg-[#002D62] selection:text-white">
      
      {/* Hero Section */}
      <div className="bg-[#001730] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight mt-8">
            SaaS VAPT Critical Vulnerability Remediation
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Are enterprise deals stalled due to a failed security audit? We rapidly patch critical VAPT vulnerabilities, SQL injections, and broken authentications so you can achieve compliance and close major contracts without delay.
          </p>
          <button 
            onClick={handleContact}
            className="px-8 py-4 bg-[#00A3E0] hover:bg-white hover:text-[#001730] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-3 mx-auto"
          >
            Request Urgent Security Patch <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Problem vs Solution Section */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002D62] mb-4">Why Founders Need This Immediately</h2>
          <div className="w-16 h-1 bg-[#00A3E0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The Pain */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-red-500">
            <Lock className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Compliance Block</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Enterprise clients refusing to sign contracts due to failed penetration testing reports.</li>
              <li>• Critical security loopholes (like XSS, CSRF, or exposed API keys) threatening client data.</li>
              <li>• In-house developers lacking the deep cybersecurity expertise to permanently seal backdoors.</li>
            </ul>
          </div>

          {/* The Fix */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-green-500">
            <ShieldCheck className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Remediation Solution</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Urgent code-level patching within 48-72 hours to fix all Critical and High-level flags.</li>
              <li>• Implementation of enterprise-grade encryption and Zero-Trust architecture rules.</li>
              <li>• A clean, fully remediated security report ready to be presented to your enterprise clients.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Corporate Footer / Back Navigation */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <button 
          onClick={() => onNavigate && onNavigate("services")} 
          className="flex items-center gap-3 text-slate-500 hover:text-[#002D62] text-xs font-bold uppercase tracking-widest transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Tech Services
        </button>
      </div>

    </div>
  );
}