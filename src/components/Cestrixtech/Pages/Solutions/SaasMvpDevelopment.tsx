/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { ArrowLeft, Hourglass, Rocket, ArrowRight } from "lucide-react";

export default function SaasMvpDevelopment({ onNavigate }: { onNavigate?: (view: string) => void }) {
  
  useEffect(() => { 
    window.scrollTo(0, 0); 

    document.title = "SaaS MVP Development for Seed-Stage Startups | Cestrix Tech";

    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Stop wasting 6 months on a prototype. We architect and launch production-ready SaaS MVPs in weeks, helping you secure your next round of funding faster.";

    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = "https://cestrixgroup.com/tech/solutions/saas-mvp-development";
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:info@cestrixgroup.com?subject=Urgent:%20SaaS%20MVP%20Strategy%20&%20Development";
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F7FA] font-sans selection:bg-[#002D62] selection:text-white">
      
      {/* Hero Section */}
      <div className="bg-[#001730] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9ce7b5fda016?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight mt-8">
            SaaS MVP Development for Seed-Stage Startups
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop wasting 6 months on a prototype. We architect and launch production-ready SaaS MVPs in weeks, not months, helping you secure your next round of funding faster with a flawless investor pitch.
          </p>
          <button 
            onClick={handleContact}
            className="px-8 py-4 bg-[#00A3E0] hover:bg-white hover:text-[#001730] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-3 mx-auto"
          >
            Request MVP Strategy Call <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Problem vs Solution Section */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002D62] mb-4">Why Seed-Stage Founders Need Us Now</h2>
          <div className="w-16 h-1 bg-[#00A3E0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The Pain */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-red-500">
            <Hourglass className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The "Endless Development" Trap</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Spending 6-8 months building a prototype while competitors launch and capture your market.</li>
              <li>• Running out of runway (startup capital) before even getting the product to beta users.</li>
              <li>• Building a fragile, unscalable MVP that breaks the moment actual investors or users test it.</li>
            </ul>
          </div>

          {/* The Fix */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-green-500">
            <Rocket className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Fast-Track Launch</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Rapid architecture planning to build core features (the true "Minimum Viable Product") in weeks.</li>
              <li>• Production-ready React/Node.js stack so you don't have to rewrite the app after getting funded.</li>
              <li>• Flawless UX/UI design engineered to impress VCs and secure your Series-A funding round.</li>
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