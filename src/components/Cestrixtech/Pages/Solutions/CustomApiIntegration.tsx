/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { ArrowLeft, Webhook, Cable, ArrowRight } from "lucide-react";

export default function CustomApiIntegration({ onNavigate }: { onNavigate?: (view: string) => void }) {
  
  useEffect(() => { 
    window.scrollTo(0, 0); 

    document.title = "Custom API Development & 3rd-Party Integrations | Cestrix Tech";

    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Data silos kill businesses. We build robust custom APIs and seamlessly integrate third-party enterprise services like Stripe, Twilio, and Salesforce.";

    let canonicalTag = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = "https://cestrixgroup.com/tech/solutions/custom-api-integration";
  }, []);

  const handleContact = () => {
    window.location.href = "mailto:info@cestrixgroup.com?subject=Urgent:%20API%20Development%20&%20Integration";
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F7FA] font-sans selection:bg-[#002D62] selection:text-white">
      
      {/* Hero Section */}
      <div className="bg-[#001730] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-luminosity"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight mt-8">
            Custom API Development & 3rd-Party Integrations
          </h1>
          <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Data silos kill businesses. We build robust, highly secure custom APIs and seamlessly integrate third-party enterprise services like Stripe, Twilio, and Salesforce to fully automate your business operations.
          </p>
          <button 
            onClick={handleContact}
            className="px-8 py-4 bg-[#00A3E0] hover:bg-white hover:text-[#001730] text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center gap-3 mx-auto"
          >
            Request Integration Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Problem vs Solution Section */}
      <div className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002D62] mb-4">Why Founders Need Expert API Integration</h2>
          <div className="w-16 h-1 bg-[#00A3E0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The Pain */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-red-500">
            <Webhook className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The "Disconnected Data" Problem</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Your team wastes hours manually moving data between your app, CRM, and accounting software.</li>
              <li>• Failed webhooks resulting in lost Stripe payments, missing user notifications, and broken syncs.</li>
              <li>• Previous attempts to integrate complex 3rd-party tools resulted in messy, unmaintainable "spaghetti code."</li>
            </ul>
          </div>

          {/* The Fix */}
          <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-green-500">
            <Cable className="w-12 h-12 text-green-500 mb-6" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">The Automation Solution</h3>
            <ul className="space-y-4 text-sm text-slate-600 font-light">
              <li>• Development of flawless, secure REST and GraphQL APIs that let your tools talk to each other instantly.</li>
              <li>• Rock-solid enterprise integrations with Stripe, Twilio, Salesforce, HubSpot, and AWS services.</li>
              <li>• Implementation of automated retry-mechanisms and error logging so a payment or sync never gets dropped.</li>
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