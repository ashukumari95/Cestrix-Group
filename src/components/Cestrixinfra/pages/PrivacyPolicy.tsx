import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy({ onNavigate }: { onNavigate: (view: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 selection:bg-[#053282] selection:text-white">
      <header className="bg-[#050B14] text-white py-6 px-6 md:px-12 sticky top-0 z-50 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.webp" alt="Cestrix Group" className="h-8 md:h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold uppercase tracking-wide leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cestrix Group</h1>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Privacy Policy</span>
          </div>
        </div>
        <button onClick={() => onNavigate("gateway")} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white bg-white/10 px-5 py-2.5 rounded-full transition-colors outline-none">
          <ArrowLeft className="w-4 h-4" /> Back to Gateway
        </button>
      </header>
      <main className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700">
         <h2 className="text-3xl font-bold text-[#053282] mb-8 border-b border-slate-100 pb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Privacy Policy</h2>
         <div className="space-y-6">
            <p className="text-sm leading-relaxed">At Cestrix Group, we are committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">1. Information We Collect</h4>
            <p className="text-sm leading-relaxed">We collect professional data necessary for B2B operations, including names, corporate email addresses, job titles, and company details when you submit forms, request estimations, or contact our corporate desk. We do not collect sensitive personal data.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">2. How We Use Your Data</h4>
            <p className="text-sm leading-relaxed">Your data is strictly used for enterprise communications, processing vendor evaluations, delivering requested software specifications, and managing heavy engineering project bids. Cestrix Group does not sell, rent, or trade your data to third-party advertisers.</p>
            <h4 className="text-lg font-bold text-slate-900 mt-6">3. Data Security & ISO Compliance</h4>
            <p className="text-sm leading-relaxed">All data transmitted through our digital portals is encrypted using industry-standard protocols. Our technology divisions adhere to strict cybersecurity frameworks to ensure military-grade protection of your corporate infrastructure data.</p>
         </div>
      </main>
    </div>
  );
}