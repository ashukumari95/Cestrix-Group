/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  ArrowRight, Briefcase, PlayCircle, ChevronRight, 
  Search, Filter, BarChart, ShieldCheck, 
  TrendingDown, CheckCircle2, PhoneCall
} from "lucide-react";

// Animation Variants for smooth scrolling
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TechInsights() {
  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#002D62] selection:text-white overflow-x-hidden pt-[76px] lg:pt-[88px]">
      
      {/* =========================================
          1. HERO SECTION (Background Image + Left Aligned Clean Content)
      ========================================= */}
      <section className="relative w-full h-[65vh] min-h-[450px] flex items-center overflow-hidden bg-[#001730]">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/insights.webp" 
            alt="Insights Background" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Dark gradient on the left side so the white text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#001730]/70 to-transparent"></div>
        </div>

        {/* Content Aligned to the LEFT */}
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-start text-left">
          
          <div className="max-w-2xl pt-10">
            {/* Main Heading (Size reduced, Badge & Dot removed) */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold text-white font-heading leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
            >
              Smart IT Solutions. <br className="hidden sm:block" />
              <span className="text-[#00A3E0]">Real Business Impact</span>
            </motion.h1>
            
            {/* Subheading Paragraph (Size reduced) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-lg mb-10 drop-shadow-md"
            >
              Read how Cestrix Tech helps construction, logistics, and energy companies streamline their operations. Explore our case studies on Custom Software, 3D Apps, and Live Tracking Dashboards.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================
          2. SIMPLE SEARCH & FILTER (Overlapping the hero section slightly)
      ========================================= */}
      <section className="px-6 md:px-12 lg:px-24 relative z-30 -mt-8 md:-mt-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-[1100px] mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl md:rounded-full shadow-[0_10px_40px_rgba(0,45,98,0.1)] border border-slate-200 p-2 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex w-full md:w-auto items-center flex-1 pl-5 border-b md:border-b-0 border-slate-200 pb-2 md:pb-0">
              <Search className="w-5 h-5 text-[#00A3E0]" />
              <input 
                type="text" 
                placeholder="Search software case studies or topics..." 
                className="w-full bg-transparent border-none outline-none px-4 py-3 text-sm text-slate-700 font-medium placeholder:text-slate-400"
              />
            </div>

            <div className="hidden md:block w-[1px] h-8 bg-slate-200"></div>

            <div className="flex w-full md:w-auto flex-wrap items-center justify-center gap-1 md:gap-2">
              <select className="bg-transparent text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#002D62] outline-none cursor-pointer py-3 px-2 md:px-3 hover:bg-slate-50 rounded-full transition-colors">
                <option>All Industries</option>
                <option>Construction IT</option>
                <option>Transport & Logistics</option>
                <option>Energy Sector</option>
                <option>Defense IT</option>
              </select>

              <select className="bg-transparent text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#002D62] outline-none cursor-pointer py-3 px-2 md:px-3 hover:bg-slate-50 rounded-full transition-colors">
                <option>All Software</option>
                <option>ERP & Web Apps</option>
                <option>3D BIM Software</option>
                <option>Live Tracking (IoT)</option>
                <option>AI & Analytics</option>
              </select>

              <button className="bg-[#002D62] text-white p-3.5 rounded-full hover:bg-[#00A3E0] transition-colors shadow-md ml-2 md:ml-0">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          3. FEATURED SUCCESS STORY (Professional & Clean)
      ========================================= */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="px-6 md:px-12 lg:px-24 mb-24"
      >
        <div className="max-w-[1200px] mx-auto bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,45,98,0.06)] border border-slate-100 flex flex-col md:flex-row overflow-hidden group">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#002D62] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                Featured Case Study
              </span>
              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#00A3E0]">
                <TrendingDown className="w-4 h-4" /> 30% Operational Efficiency
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002D62] font-heading leading-tight mb-6 group-hover:text-[#00A3E0] transition-colors">
              Automating Enterprise Supply Chains with Custom IT.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-8 relative z-10">
              Discover how replacing fragmented legacy tools with a unified Cestrix Tech Web Dashboard helped a national infrastructure leader eradicate manual billing errors, streamline material tracking, and accelerate project delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 mt-auto pt-4">
              <button className="bg-[#00A3E0] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#002D62] transition-colors rounded-full flex items-center justify-center gap-2 w-full sm:w-auto shadow-md">
                Read Full Case Study <ArrowRight className="w-4 h-4" />
              </button>
              <div onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#002D62] hover:text-[#00A3E0] transition-colors cursor-pointer w-full sm:w-auto justify-center py-3.5">
                Request a Demo <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[400px] bg-[#001730] overflow-hidden cursor-pointer">
            <img src="/image48.webp" alt="ERP Software Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent hidden md:block"></div>
          </div>
        </div>
      </motion.section>

      {/* =========================================
          4. PROVEN CASE STUDIES (No Dollar Signs)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-200 pb-6">
            <div>
              <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] block mb-2">INDUSTRY IMPACT</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] font-heading">Software that Delivers Value.</h2>
            </div>
            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="text-[11px] font-bold bg-white border border-[#002D62] text-[#002D62] px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-[#002D62] hover:text-white transition-colors flex items-center gap-2 pb-2">
              Discuss Your IT Project <ArrowRight className="w-3 h-3"/>
            </button>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sector: "3D Software",
                title: "3D Design Tool for Airport Terminal Expansion",
                impact: "Software identified 120+ design errors, preventing months of costly physical rework.",
                img: "/image49.webp"
              },
              {
                sector: "Live Tracking App",
                title: "Live GPS & Fuel Tracking for Heavy Truck Fleets",
                impact: "IoT Dashboard reduced unauthorized fuel usage and engine idling by 22%.",
                img: "/image50.webp"
              },
              {
                sector: "Cloud Security",
                title: "Securing Cloud Data for Government Energy Plants",
                impact: "Achieved 100% data compliance and automatically blocked 4,000+ daily threats.",
                img: "/image52.webp"
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white border border-slate-100 hover:shadow-[0_15px_40px_rgba(0,45,98,0.08)] hover:border-[#00A3E0]/40 transition-all duration-500 group flex flex-col rounded-[1.5rem] overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="relative h-60 overflow-hidden bg-[#001730]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#00A3E0] text-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-md backdrop-blur-md">
                      {item.sector}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#002D62] font-heading mb-6 leading-snug group-hover:text-[#00A3E0] transition-colors mt-2">{item.title}</h3>
                  <div className="bg-[#F4F9FF] p-5 rounded-xl border border-[#00A3E0]/10 mb-8 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart className="w-4 h-4 text-[#00A3E0]" />
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Measurable Value</p>
                    </div>
                    <p className="text-sm text-[#002D62] font-semibold pl-6">{item.impact}</p>
                  </div>
                  <div className="flex items-center text-[11px] font-bold text-[#00A3E0] uppercase tracking-widest group-hover:text-[#002D62] transition-colors mt-auto">
                    View IT Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          5. EXPERTISE SHOWCASE (Why Hire Us)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
            <div className="w-14 h-14 bg-[#E1F0FF] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#00A3E0]/20">
              <Briefcase className="w-7 h-7 text-[#00A3E0]" />
            </div>
            <span className="text-[10px] font-bold text-[#00A3E0] uppercase tracking-[0.2em] block mb-2">YOUR TECHNOLOGY PARTNER</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#002D62] font-heading leading-tight mb-6">Software Built for <br/> Real Businesses.</h2>
            <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base mb-8">
              We are a dedicated IT and Software Development team. Normal software agencies don't understand how complex physical industries work. We combine top-tier software coding with real-world business knowledge to build apps that your team will actually love to use.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm font-semibold text-[#002D62]">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" /> Custom Software & App Development
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-[#002D62]">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" /> Secure Cloud Servers & Data Migration
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-[#002D62]">
                <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" /> 24/7 IT Support & Maintenance
              </li>
            </ul>
            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#002D62] text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#00A3E0] transition-colors rounded-full flex items-center gap-2 shadow-sm w-fit">
              Talk to our IT Experts <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2 w-full">
             <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
               <img src="/image53.webp" className="w-full h-full object-cover" alt="Software Team" />
               <div className="absolute inset-0 bg-[#002D62]/10 mix-blend-multiply"></div>
               
               <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                   <ShieldCheck className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-[#002D62]">Enterprise Software</p>
                   <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-0.5">Secure Cloud Architecture</p>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          6. SOFTWARE VIDEO DEMO
      ========================================= */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#001730] text-white border-y border-[#002D62]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,163,224,0.15)] border border-white/10 group cursor-pointer">
              <img src="/image54.webp" alt="Software Demo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-[#001730]/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-[#00A3E0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,163,224,0.5)]">
                  <PlayCircle className="w-10 h-10 text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-center">
                <span className="bg-[#FFC000] text-[#001730] px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block shadow-md">Software Video Tour</span>
                <h3 className="text-xl md:text-2xl font-bold text-white font-heading leading-tight">Watch: Live Tour of our Dashboard Interface</h3>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight">
              See the Software <br /> in Action.
            </h2>
            <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base">
              Don't just take our word for it. Watch our recorded product videos to see exactly how simple, clean, and powerful Cestrix Tech's software applications are for your team.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-[#001730] px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-[#00A3E0] hover:text-white transition-colors rounded-full shadow-lg flex items-center gap-2">
                Watch Full IT Demo <PlayCircle className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          7. HARD LEAD-GEN CTA (Free IT Audit)
      ========================================= */}
      <section className="w-full py-32 px-6 bg-[#00A3E0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#002D62]/20 rounded-full blur-[100px]"></div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <PhoneCall className="w-8 h-8 text-[#002D62]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6 tracking-tight">Need a Software Solution? Let's Talk.</h2>
          <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed mb-12 max-w-2xl">
            Are you using outdated systems or Excel sheets? Book a free 45-minute IT consultation with our software team to see how we can digitize your operations.
          </p>
          
          <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#002D62] text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#002D62] transition-colors rounded-full shadow-2xl flex items-center gap-3">
            Book Free IT Consultation <ArrowRight className="w-4 h-4" />
          </button>
          
          <p className="text-[10px] text-white/70 mt-6 tracking-widest uppercase font-bold flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3" /> No Commitment. 100% Confidential.
          </p>
        </motion.div>
      </section>

    </div>
  );
}