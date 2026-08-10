import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function Disclaimer({ onNavigate }: { onNavigate: (view: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 selection:bg-[#053282] selection:text-white">
      <header className="bg-[#050B14] text-white py-6 px-6 md:px-12 sticky top-0 z-50 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.webp" alt="Cestrix Group" className="h-8 md:h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wide leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cestrix Group</h1>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Legal Disclaimer</span>
          </div>
        </div>
        <button onClick={() => onNavigate("gateway")} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white bg-white/10 px-5 py-2.5 rounded-full transition-colors outline-none">
          <ArrowLeft className="w-4 h-4" /> Back to Gateway
        </button>
      </header>
      <main className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700">
         <h2 className="text-3xl font-bold text-[#053282] mb-8 border-b border-slate-100 pb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Legal Disclaimer</h2>
         <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 mt-6">1. Forward-Looking Statements</h4>
            <p className="text-sm leading-relaxed">This website may contain forward-looking statements regarding Cestrix Group's future projects, revenue projections, and technological developments. These statements are based on current management expectations and are subject to market risks, geopolitical shifts, and material availability. Actual results may differ materially.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">2. No Warranties</h4>
            <p className="text-sm leading-relaxed">The information on this website is provided "as is" without any representations or warranties, express or implied. Cestrix Group makes no representations or warranties in relation to the completeness or accuracy of the information provided on this domain.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">3. External Links</h4>
            <p className="text-sm leading-relaxed">Our portals may contain links to external government bodies, regulatory authorities, or technology partners. Cestrix Group is not responsible for the privacy practices or the content of such external websites.</p>
         </div>
      </main>
    </div>
  );
}