/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  ArrowRight, PlayCircle, Target, ShieldCheck, 
  Code, Globe, CheckCircle2, ChevronRight,
  Briefcase, Users, Cpu, Layers, PhoneCall
} from "lucide-react";

// Premium Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TechAbout() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans selection:bg-[#002D62] selection:text-white overflow-x-hidden pt-[76px] lg:pt-[88px]">
      
      {/* =========================================
          1. HERO SECTION (Premium Dark Corporate)
      ========================================= */}
      <section className="relative w-full h-[65vh] min-h-[450px] flex items-center overflow-hidden bg-[#001730]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/image40.webp" 
            alt="Corporate Identity Cestrix Tech" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-transparent"></div>
        </div>

        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-start text-left">
          <div className="max-w-2xl pt-10">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold text-white font-heading leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
            >
              Engineering the <br className="hidden sm:block" />
              <span className="text-[#00A3E0]">Digital Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-lg mb-10 drop-shadow-md"
            >
              Cestrix Tech is a premier deep-tech consultancy dedicated to modernizing heavy engineering, aviation, and national infrastructure. We merge industrial expertise with elite software architecture.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================
          2. GLOBAL LEADER INTRO
      ========================================= */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div variants={fadeUp} className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] font-heading leading-tight mb-6">
              Empowering Heavy Industries with Elite Software Architecture.
            </h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              We stand at the forefront of digital transformation for complex physical sectors. Cestrix Tech partners with leading logistics, infrastructure, and energy corporations to deploy robust cloud applications, scalable ERPs, and secure data networks that drive measurable business outcomes.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="md:w-2/5 flex justify-center md:justify-end w-full">
            <div className="bg-[#F8FAFC] border-l-4 border-b-4 border-[#002D62] p-8 w-full max-w-sm relative shadow-lg hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00A3E0]/10 border-l border-b border-[#00A3E0]/20 rounded-bl-3xl"></div>
              <h3 className="text-2xl font-bold text-[#002D62] font-heading leading-tight">
                Resilient. <br />
                <span className="text-[#00A3E0]">Scalable.</span> <br />
                Intelligent.
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-6 pt-4 border-t border-slate-200">
                Engineering Software For Tomorrow.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          3. OUR JOURNEY & DARK BLUE CARDS
      ========================================= */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1300px] mx-auto">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row gap-12 mb-12">
            <motion.div variants={fadeUp} className="md:w-1/2">
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-4 block">OUR ORIGIN</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002D62] font-heading leading-tight mb-6">
                Pioneering the Digital Frontier in Enterprise IT.
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-sm">
                Our foundation is built on the reality that standard IT frameworks often fail in rugged environments. Cestrix Tech evolved to bridge the gap between Silicon Valley-grade code and ground-level industrial operations. Our mission is to engineer software that functions flawlessly, regardless of physical complexities.
              </p>
            </motion.div>
            <motion.div variants={staggerContainer} className="md:w-1/2 flex flex-col sm:flex-row gap-4">
               <motion.img variants={fadeUp} src="/image47.webp" className="w-full sm:w-1/2 h-48 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform" alt="Engineering Team" />
               <motion.img variants={fadeUp} src="/image55.webp" className="w-full sm:w-1/2 h-48 object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform" alt="Tech Dashboard" />
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="bg-[#002D62] p-8 md:p-10 text-white rounded-2xl shadow-xl border-b-4 border-[#00A3E0] hover:bg-[#001730] transition-colors">
              <h3 className="text-xl font-bold font-heading mb-4 text-[#00A3E0]">Architecting Reliable Ecosystems</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                We craft custom applications and interconnected data lakes that provide real-time visibility, allowing corporate leadership to control remote assets and supply chains seamlessly.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#002D62] p-8 md:p-10 text-white rounded-2xl shadow-xl border-b-4 border-[#00A3E0] hover:bg-[#001730] transition-colors">
              <h3 className="text-xl font-bold font-heading mb-4 text-[#00A3E0]">Advanced R&D Capabilities</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Our innovation centers continually integrate emerging tech—from IoT sensor networks to predictive algorithms—ensuring our clients maintain a sharp competitive edge.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          4. VISION, MISSION, VALUES
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading mb-4">Our Vision. Mission. Values.</h2>
            <p className="text-slate-500 font-light max-w-2xl mx-auto">The principles that drive our engineering excellence and client partnerships.</p>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200 hover:border-[#00A3E0]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Target className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <h3 className="text-2xl font-bold text-[#002D62] font-heading">Our Mission</h3>
              </div>
              <p className="text-slate-600 font-light leading-relaxed text-sm">
                To engineer robust, scalable, and intuitive IT solutions that eliminate operational inefficiencies, secure enterprise data, and accelerate digital transformation for the heavy engineering, logistics, and energy sectors.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200 hover:border-[#00A3E0]/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Globe className="w-6 h-6 text-[#00A3E0]" />
                </div>
                <h3 className="text-2xl font-bold text-[#002D62] font-heading">Our Vision</h3>
              </div>
              <p className="text-slate-600 font-light leading-relaxed text-sm">
                To become the global digital backbone for complex industries, creating a future where every physical asset, supply chain, and workforce operation is flawlessly optimized through intelligent software.
              </p>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row gap-8 bg-[#F8FAFC] p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200">
            <div className="md:w-2/5 relative h-64 md:h-auto min-h-[250px] rounded-xl overflow-hidden group cursor-pointer border border-slate-300 shadow-md">
              <img src="/image37.webp" alt="Leadership Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#001730]/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#00A3E0] rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#002D62] transition-colors shadow-lg">
                  <PlayCircle className="w-8 h-8 ml-1" />
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 pl-0 md:pl-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#002D62] font-heading mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                Core Values
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002D62] text-sm">Uncompromising Quality</h4>
                    <p className="text-xs text-slate-500 font-light mt-1">Deploying highly optimized, secure, and easily maintainable codebases for every project.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002D62] text-sm">Client-Centric Design</h4>
                    <p className="text-xs text-slate-500 font-light mt-1">Focusing heavily on UI/UX to guarantee adoption by your internal teams and workforce.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#002D62] text-sm">Absolute Security</h4>
                    <p className="text-xs text-slate-500 font-light mt-1">Protecting enterprise assets with advanced encryption and zero-trust cloud architectures.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          5. OUR PEOPLE (Overlapping Box Signature)
      ========================================= */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#001730]">
        <div className="max-w-[1300px] mx-auto relative">
          
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white font-heading mb-12 text-center">
            The Minds Behind the Code
          </motion.h2>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-slate-900 flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,163,224,0.1)]">
            
            <div className="absolute inset-0 md:left-[30%] z-0">
               <img src="/image56.webp" alt="Team" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#001730] via-[#001730]/80 to-transparent md:hidden"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#001730] via-transparent to-transparent hidden md:block"></div>
            </div>

            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 text-white p-8 md:p-12 w-full md:w-[45%] md:mt-24 md:mb-12 md:ml-12 rounded-2xl flex flex-col justify-center border-l-4 border-l-[#00A3E0]">
              <h3 className="text-2xl font-bold font-heading mb-6">Our Talent Pool</h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm mb-6">
                Cestrix Tech is driven by a unique synergy of senior cloud architects, AI researchers, and domain specialists. We don’t just write code; we understand the mechanical and logistical realities of the businesses we serve.
              </p>
              <p className="text-slate-300 font-light leading-relaxed text-sm mb-8">
                This collective intellectual rigor enables us to solve complex enterprise bottlenecks that standard IT agencies simply cannot process.
              </p>
              <button className="bg-[#00A3E0] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#001730] transition-colors rounded-full shadow-lg w-fit flex items-center gap-2">
                Explore Careers <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* =========================================
          6. WHY PARTNER WITH US? (Angled Image Style)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div variants={fadeUp} className="lg:w-1/2 space-y-6">
            <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] mb-2 block">DEDICATED ALLIANCE</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading">Your Trusted IT Partner</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              Beyond standard vendor relationships, we integrate as your core technology partner. We take complete responsibility for your software modernization journey, ensuring a seamless transition to digital workflows without halting daily operations.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#E1F0FF] flex items-center justify-center rounded-full shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                </div>
                <p className="text-sm font-semibold text-[#002D62]">Tailor-made software aligning exactly with your operational needs.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#E1F0FF] flex items-center justify-center rounded-full shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                </div>
                <p className="text-sm font-semibold text-[#002D62]">Frictionless API integrations with your existing tech stack.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#E1F0FF] flex items-center justify-center rounded-full shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                </div>
                <p className="text-sm font-semibold text-[#002D62]">Rapid deployment cycles backed by rigorous stress testing.</p>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:w-1/2 w-full relative">
            <div className="w-full h-[450px] bg-[#001730] shadow-2xl relative overflow-hidden rounded-[2rem] border border-slate-200" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <img src="/image57.webp" alt="Partnership" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-[#FFC000] z-0 opacity-80 rounded-bl-3xl"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          7. THE FUTURE / BUILDING BLOCKS 
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading mb-6">The Horizon: Autonomous Enterprise</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
              As global industry scales, software must evolve from a management tool to an intelligent decision-maker. We are actively constructing the frameworks that will power tomorrow's automated enterprises.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,45,98,0.1)] relative border border-slate-200">
             <div className="md:w-2/5 relative h-64 md:h-auto bg-[#001730]">
               <img src="/image52.webp" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-1000" alt="Tech Future" />
             </div>
             
             <div className="md:w-3/5 bg-white p-10 md:p-16 flex flex-col justify-center relative">
               <h3 className="text-2xl md:text-3xl font-bold text-[#002D62] font-heading mb-6 z-10">Constructing the digital foundation for tomorrow</h3>
               <p className="text-slate-600 text-sm font-light leading-relaxed mb-8 z-10">
                 Whether it involves scalable data processing, predictive analytics, or modernized user interfaces, Cestrix Tech provides the robust IT infrastructure necessary to thrive in a data-centric future.
               </p>
               <button onClick={() => { window.location.hash = "services"; window.dispatchEvent(new HashChangeEvent("hashchange")); }} className="bg-[#002D62] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#00A3E0] transition-colors rounded-full flex items-center gap-2 w-fit shadow-md">
                 Explore Our Software Suite <ArrowRight className="w-4 h-4"/>
               </button>
             </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          8. CALL TO ACTION (Replaces the basic image grid to match other pages)
      ========================================= */}
      <section className="w-full py-32 px-6 bg-gradient-to-b from-[#001730] to-[#002D62] text-center relative overflow-hidden">
        {/* Soft glowing orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3E0]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00A3E0]/10 rounded-full blur-[120px]"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20">
            <PhoneCall className="w-8 h-8 text-[#00A3E0]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-heading tracking-tight leading-tight mb-6">Ready to Transform?</h2>
          <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Schedule a confidential consultation with our senior technical architects. Let us blueprint a custom software ecosystem that eliminates inefficiencies across your organization.
          </p>
          <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 bg-[#00A3E0] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#002D62] transition-colors shadow-[0_10px_30px_rgba(0,163,224,0.3)] rounded-full inline-flex items-center gap-3">
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

    </div>
  );
}