/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { ArrowLeft, AlertTriangle, Rocket, ArrowRight } from "lucide-react";

export default function LegacyAngularMigration({ onNavigate }: { onNavigate?: (view: string) => void }) {
  
  useEffect(() => { 
    window.scrollTo(0, 0); 

    document.title = "Legacy Angular Migration & Modernization Expert | Cestrix Tech";

    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Seamlessly migrate legacy enterprise frontends from deprecated AngularJS to the latest Angular or React architectures with zero downtime.";

    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = "https://cestrixgroup.com/tech/solutions/legacy-angular-migration";
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:info@cestrixgroup.com?subject=Urgent:%20Legacy%20Angular%20Migration%20Consultation";
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F7FA] font-sans selection:bg-[#002D62] selection:text-white">
      
      {/* Hero Section */}
      <div className="bg-[#001730] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight mt-8">
            Legacy Angular Migration & Modernization Expert
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Trapped in deprecated AngularJS or outdated Angular versions? We seamlessly migrate legacy enterprise frontends to the latest Angular or React architectures with zero downtime, ensuring future-proof security and lightning-fast load times.
          </p>
          <button 
            onClick={handleContact}
            className="px-8 py-4 bg-[#00A3E0] hover:bg-white hover:text-[#001730] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-3 mx-auto"
          >
            Request Migration Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Problem vs Solution Section */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002D62] mb-4">Why CTOs Need This Upgrade Immediately</h2>
          <div className="w-16 h-1 bg-[#00A3E0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The Pain */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-red-500">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Legacy Tech-Debt Problem</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Outdated versions (AngularJS / Angular 8) are officially deprecated and receive no security patches.</li>
              <li>• Heavy bundle sizes causing extremely slow page load times and terrible SEO performance.</li>
              <li>• Impossible to find new talent; developers refuse to work on tangled, outdated legacy codebases.</li>
            </ul>
          </div>

          {/* The Fix */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-green-500">
            <Rocket className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Modernization Solution</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Phased, component-by-component migration strategy ensuring 100% operational continuity.</li>
              <li>• Upgrade to modern Next.js/React or Angular 17+ for drastically improved Core Web Vitals.</li>
              <li>• Complete codebase refactoring, implementing strict TypeScript and modular architecture.</li>
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