/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  Leaf, 
  Heart, 
  ShieldCheck, 
  Globe2, 
  Wind, 
  Droplets, 
  Recycle, 
  HardHat, 
  Users, 
  Scale,
  FileCheck,
  ArrowRight,
  Activity
} from "lucide-react";

export default function InfraSustainability() {
  
  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#004B87] selection:text-white pb-0">
      
      {/* 1. CINEMATIC HERO BANNER */}
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-60 grayscale-[10%]"
          style={{ backgroundImage: "url('/ESG.webp')" }}
        />
        {/* Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#FAFAFA]" />
        
        <div className="relative z-10 text-center px-6 pt-10">
          <span className="text-[#4CA6FF] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-4 drop-shadow-md">
            ESG & Corporate Responsibility
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight font-heading drop-shadow-xl">
            Engineering a <br /><span className="font-bold text-white">Sustainable Future.</span>
          </h1>
        </div>
      </section>

      {/* 2. THE ESG DOCTRINE (Overview) */}
      <section className="w-full bg-[#FAFAFA] pt-12 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Globe2 className="w-12 h-12 text-[#004B87] mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-light text-[#0A192F] font-heading leading-snug">
            "Growth is only sovereign if it is <br/><span className="font-bold text-[#004B87]">equitable and sustainable.</span>"
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed font-body mt-8">
            At Cestrix Group, Environmental, Social, and Governance (ESG) principles are not an afterthought; they are hard-coded into our core engineering blueprint. We recognize that mega-infrastructure reshapes the earth. Our mandate is to ensure that this transformation minimizes ecological disruption, maximizes human capital safety, and enforces absolute financial transparency.
          </p>
        </div>
      </section>

      {/* 3. AT A GLANCE IMPACT STATS (Corporate Blue Band) */}
      <section className="w-full bg-[#004B87] text-white shadow-inner relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {[
            { metric: "45%", label: "Carbon Footprint", label2: "Reduction", detail: "Via M80 Green Concrete" },
            { metric: "2.5M", label: "Safe Man-Hours", detail: "Zero-Harm Culture" },
            { metric: "150+", label: "Communities", label2: "Uplifted", detail: "Via Cestrix Foundation" },
            { metric: "100%", label: "Compliance", detail: "COSO & ISO Audited" }
          ].map((stat, idx) => (
            <div key={idx} className="p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-2">{stat.metric}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4CA6FF] block mb-3">
                {stat.label} {stat.label2 && <><br/>{stat.label2}</>}
              </span>
              <div className="w-6 h-[2px] bg-white/30 mb-3" />
              <span className="text-xs font-body text-slate-200 font-light">{stat.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PILLAR 1: ENVIRONMENTAL (E) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative h-[450px] shadow-xl rounded-sm overflow-hidden group">
            <img src="/ESG.webp" alt="Environmental" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md text-[#004B87] p-4 rounded-sm shadow-md">
               <Leaf className="w-8 h-8" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-2 border-b-2 border-[#004B87] inline-block pb-1">
              PILLAR I: ENVIRONMENTAL
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              Decarbonizing <br/><span className="font-bold text-[#004B87]">Heavy Infra.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
              We are aggressively transitioning towards a circular construction economy. By re-engineering our material science and electrifying our fleet, we are setting new benchmarks for green infrastructure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-slate-50 p-6 border border-slate-100">
                <Wind className="w-6 h-6 text-[#4CA6FF] mb-4" />
                <h4 className="text-base font-bold text-slate-900 mb-2">Air Quality & Dust</h4>
                <p className="text-xs text-slate-600 leading-relaxed">100% of our massive excavation sites utilize automated anti-smog guns and active dust-suppression telemetry.</p>
              </div>
              <div className="bg-slate-50 p-6 border border-slate-100">
                <Recycle className="w-6 h-6 text-[#4CA6FF] mb-4" />
                <h4 className="text-base font-bold text-slate-900 mb-2">Green Concrete</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Utilizing industrial fly-ash and recycled aggregates to reduce Portland cement reliance by up to 35%.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PILLAR 2: SOCIAL (S) - The Zero Harm Pledge */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative h-[450px] shadow-xl rounded-sm overflow-hidden group">
            <img src="/image36.webp" alt="Social Safety" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute top-6 right-6 bg-[#004B87] text-white p-4 rounded-sm shadow-md">
               <HardHat className="w-8 h-8" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-2 border-b-2 border-[#004B87] inline-block pb-1">
              PILLAR II: SOCIAL
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              Human Capital & <br/><span className="font-bold text-[#004B87]">Zero-Harm.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
              Our workforce is the engine of our execution. Cestrix Group enforces an absolute "Zero-Harm" operational culture. No deadline is worth compromising the safety of the individuals forging our structures.
            </p>
            <ul className="space-y-4 pt-6">
              {[
                { title: "IoT Smart Helmets", desc: "Worker vitals and geofence locations are tracked live to prevent entry into active heavy-lift zones." },
                { title: "Dignified Labor Camps", desc: "Providing RO drinking water, hygienic living quarters, and free on-site medical clinics for all contract laborers." },
                { title: "Continuous Training", desc: "Over 500,000 man-hours dedicated annually to safety drills and VR equipment simulation." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-white p-5 border border-slate-200 rounded-sm shadow-sm hover:border-[#004B87] transition-colors">
                  <ShieldCheck className="w-6 h-6 text-[#004B87] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 font-light mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 6. CSR: THE Cestrix FOUNDATION */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A192F] text-white">
        <div className="max-w-[1400px] mx-auto text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Heart className="w-12 h-12 text-[#4CA6FF] mx-auto" />
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight font-heading leading-snug">
              Cestrix Varalakshmi <br/><span className="font-bold text-[#4CA6FF]">Social Foundation.</span>
            </h2>
            <p className="text-base text-slate-300 font-light leading-relaxed">
              We do not just extract resources from the regions we operate in; we reinvest. The Cestrix Foundation operates deep within the rural peripheries of our mega-project sites, focusing on healthcare and skill enablement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <Users className="w-8 h-8 text-[#4CA6FF] mb-4" />
              <h4 className="text-lg font-bold text-white mb-3">Vocational Academies</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Establishing free technical training institutes to teach drone-mapping, electrical wiring, and welding to local youth, making them highly employable.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <Droplets className="w-8 h-8 text-[#4CA6FF] mb-4" />
              <h4 className="text-lg font-bold text-white mb-3">Water & Sanitation</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Constructing deep-bore wells and sanitation blocks for village panchayats surrounding our deepwater port and highway projects.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <Activity className="w-8 h-8 text-[#4CA6FF] mb-4" />
              <h4 className="text-lg font-bold text-white mb-3">Mobile Medical Clinics</h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">Deploying fully-equipped mobile dispensaries that provide free health check-ups and essential medicines to remote highland communities.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PILLAR 3: GOVERNANCE (G) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-2 border-b-2 border-[#004B87] inline-block pb-1">
              PILLAR III: GOVERNANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              Absolute <br/><span className="font-bold text-[#004B87]">Transparency.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
              Handling multi-billion dollar sovereign contracts requires a governance framework modeled on absolute integrity. Our Board of Directors includes independent ESG auditors who ensure complete compliance with international anti-bribery and financial reporting standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-slate-50 p-6 border border-slate-100">
                <Scale className="w-6 h-6 text-[#004B87] mb-4" />
                <h4 className="text-base font-bold text-slate-900 mb-2">Ethics & Integrity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">A strict Zero-Tolerance policy towards corruption, backed by a protected whistleblower portal directly linked to the independent audit committee.</p>
              </div>
              <div className="bg-slate-50 p-6 border border-slate-100">
                <FileCheck className="w-6 h-6 text-[#004B87] mb-4" />
                <h4 className="text-base font-bold text-slate-900 mb-2">COSO Framework</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Enterprise risk management and financial auditing strictly adhere to the rigorous global COSO standards.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[450px] shadow-xl rounded-sm overflow-hidden group">
            <img src="/image37.webp" alt="Governance & Data" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md text-[#004B87] p-4 rounded-sm shadow-md">
               <Globe2 className="w-8 h-8" />
            </div>
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#004B87] flex justify-center text-center text-white">
        <div className="max-w-3xl w-full space-y-8">
          <span className="text-[10px] font-bold text-[#4CA6FF] tracking-[0.4em] font-heading uppercase block">
            PARTNER WITH TRUST
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-heading uppercase tracking-tight">
            INITIATE <span className="font-bold">JOINT VENTURES.</span>
          </h2>
          <p className="text-white/80 text-base font-body font-light leading-relaxed mx-auto">
            Our unwavering commitment to ESG principles ensures that every joint venture is not only structurally sound but legally and environmentally infallible.
          </p>
          <div className="pt-8">
            <button className="px-10 py-5 bg-white text-[#004B87] hover:bg-slate-100 hover:shadow-2xl text-xs font-bold font-heading tracking-widest transition-all duration-300 uppercase shadow-lg flex items-center gap-3 mx-auto rounded-sm">
              Contact Governance Desk <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}