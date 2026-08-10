import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function CookiesPolicy({ onNavigate }: { onNavigate: (view: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 selection:bg-[#053282] selection:text-white">
      <header className="bg-[#050B14] text-white py-6 px-6 md:px-12 sticky top-0 z-50 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.webp" alt="Cestrix Group" className="h-8 md:h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wide leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cestrix Group</h1>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Cookies Policy</span>
          </div>
        </div>
        <button onClick={() => onNavigate("gateway")} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white bg-white/10 px-5 py-2.5 rounded-full transition-colors outline-none">
          <ArrowLeft className="w-4 h-4" /> Back to Gateway
        </button>
      </header>
      <main className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700">
         <h2 className="text-3xl font-bold text-[#053282] mb-8 border-b border-slate-100 pb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cookies Policy</h2>
         <div className="space-y-6">
            <p className="text-sm leading-relaxed">Cestrix Group utilizes cookies and similar tracking technologies across our digital portals to enhance user experience, ensure system security, and analyze website traffic.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">1. What Are Cookies?</h4>
            <p className="text-sm leading-relaxed">Cookies are small text files placed on your device when you visit our website. They help us remember your preferences (such as language or region) and understand how you interact with our platforms.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">2. Types of Cookies We Use</h4>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2">
              <li><strong>Essential Cookies:</strong> Strictly necessary for the website to function (e.g., security, network management, accessibility).</li>
              <li><strong>Analytics Cookies:</strong> We use Google Analytics to measure how users interact with our content, helping us improve our services.</li>
              <li><strong>Functional Cookies:</strong> Remember your choices to provide a more personalized experience.</li>
            </ul>
            <h4 className="text-lg font-bold text-slate-900 mt-6">3. Managing Your Preferences</h4>
            <p className="text-sm leading-relaxed">You can manage or disable cookies through your browser settings. However, please note that disabling essential cookies may impact the functionality of our B2B portals and estimation tools.</p>
         </div>
      </main>
    </div>
  );
}