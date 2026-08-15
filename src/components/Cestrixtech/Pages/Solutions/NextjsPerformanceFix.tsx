/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { ArrowLeft, MonitorX, Zap, ArrowRight } from "lucide-react";

export default function NextjsPerformanceFix({ onNavigate }: { onNavigate?: (view: string) => void }) {
  
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:info@cestrixgroup.com?subject=Urgent:%20Next.js%20Hydration%20&%20Core%20Web%20Vitals%20Audit";
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F7FA] font-sans selection:bg-[#002D62] selection:text-white">
      
      {/* Hero Section */}
      <div className="bg-[#001730] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight mt-8">
            Next.js Hydration Error & Core Web Vitals Expert
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Are Next.js Hydration mismatches breaking your UI? Is a poor Core Web Vitals score tanking your Google SEO rankings? We urgently debug rendering errors and optimize your React architecture for 90+ Lighthouse performance scores.
          </p>
          <button 
            onClick={handleContact}
            className="px-8 py-4 bg-[#00A3E0] hover:bg-white hover:text-[#001730] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-3 mx-auto"
          >
            Request Performance Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Problem vs Solution Section */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002D62] mb-4">Why US/UK Founders Need This Urgently</h2>
          <div className="w-16 h-1 bg-[#00A3E0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The Pain */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-red-500">
            <MonitorX className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Frontend Breakdown</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• "Text content did not match server-rendered HTML" — Hydration errors freezing the client's browser.</li>
              <li>• Cumulative Layout Shift (CLS) causing users to accidentally click the wrong buttons.</li>
              <li>• Google actively penalizing your search rankings due to a sluggish Largest Contentful Paint (LCP).</li>
            </ul>
          </div>

          {/* The Fix */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-green-500">
            <Zap className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Architecture Optimization</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Strict SSR (Server-Side Rendering) and Client Component isolation to eliminate Hydration mismatches.</li>
              <li>• Dynamic Import and Code Splitting strategies to drastically reduce your initial JavaScript bundle size.</li>
              <li>• Guaranteeing "Pass" status on Google Search Console's Core Web Vitals metrics to restore your SEO traffic.</li>
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