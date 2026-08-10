import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse({ onNavigate }: { onNavigate: (view: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 selection:bg-[#053282] selection:text-white">
      <header className="bg-[#050B14] text-white py-6 px-6 md:px-12 sticky top-0 z-50 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.webp" alt="Cestrix Group" className="h-8 md:h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wide leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cestrix Group</h1>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Terms of Use</span>
          </div>
        </div>
        <button onClick={() => onNavigate("gateway")} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white bg-white/10 px-5 py-2.5 rounded-full transition-colors outline-none">
          <ArrowLeft className="w-4 h-4" /> Back to Gateway
        </button>
      </header>
      <main className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700">
         <h2 className="text-3xl font-bold text-[#053282] mb-8 border-b border-slate-100 pb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Terms of Use</h2>
         <div className="space-y-6">
            <p className="text-sm leading-relaxed">By accessing the Cestrix Group website and its sub-domains (Cestrix Infra, Cestrix Tech), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our platforms.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">1. Intellectual Property</h4>
            <p className="text-sm leading-relaxed">All content, including software architectures, architectural blueprints, digital twin models, text, graphics, and logos, is the exclusive property of Cestrix Group. Unauthorized reproduction, distribution, or reverse-engineering of our digital assets is strictly prohibited.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">2. Acceptable Use</h4>
            <p className="text-sm leading-relaxed">Our digital portals are intended for legitimate B2B inquiries, vendor registrations, and project evaluations. Any attempt to breach the security of our network, deploy malicious scripts, or scrape data will result in immediate legal action.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">3. Limitation of Liability</h4>
            <p className="text-sm leading-relaxed">While we strive for extreme precision, the data provided by our online "Scale Evaluators" and estimation tools are for conceptual planning only. They do not constitute a legally binding EPC contract or software SLA until formally signed by Cestrix Group directors.</p>
         </div>
      </main>
    </div>
  );
}