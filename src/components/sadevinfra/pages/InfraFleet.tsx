/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  HardHat, 
  Truck, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Wrench,
  ArrowRight,
  CheckCircle2,
  Server,
  Anchor,
  Leaf,
  GraduationCap
} from "lucide-react";

// --- EXPANDED DATA STRUCTURE FOR CAPABILITIES ---
const FLEET_CATEGORIES = [
  {
    title: "Earthmoving & Excavation",
    desc: "Over 200+ heavy-duty hydraulic excavators, dozers, and articulated dump trucks designed for massive land leveling and deep-trench excavations.",
    image: "/image26.png",
    features: ["50-Ton Class Excavators", "GPS-Guided Motor Graders", "High-Capacity Wheel Loaders"]
  },
  {
    title: "Lifting & Material Handling",
    desc: "A formidable array of heavy-lift crawler cranes, tower cranes, and offshore barge-mounted rigs capable of hoisting multi-ton steel segments.",
    image: "/image27.png",
    features: ["600-Ton Crawler Cranes", "High-Altitude Tower Cranes", "Hydraulic Gantry Launchers"]
  },
  {
    title: "Concrete & Paving",
    desc: "100% owned automated batching plants and sensor-guided concrete slip-form pavers ensuring seamless runway and expressway construction.",
    image: "/image28.png",
    features: ["Automated Batching Plants", "Slip-form Concrete Pavers", "Fleet of Transit Mixers"]
  },
  {
    title: "Specialized Tunneling (TBM)",
    desc: "Advanced Tunnel Boring Machines engineered for hostile sub-surface environments, cutting through solid Himalayan rock formations.",
    image: "/image29.png",
    features: ["Hard Rock TBMs", "Earth Pressure Balance Shields", "Automated Grouting"]
  },
  {
    title: "Heavy Haulage & Logistics",
    desc: "A massive logistics wing featuring Self-Propelled Modular Transporters (SPMTs) to move ultra-heavy refinery reactors and bridge spans.",
    image: "/image30.png",
    features: ["Multi-Axle SPMTs", "Low-Bed Heavy Trailers", "Escort & Pilot Fleet"]
  },
  {
    title: "Marine & Deepwater Rigs",
    desc: "Floating assets designed for harbor expansion, including cutter-suction dredgers and jack-up barges equipped with heavy rotary piling rigs.",
    image: "/image31.png",
    features: ["Jack-Up Piling Barges", "Cutter-Suction Dredgers", "Floating Concrete Plants"]
  }
];

export default function InfraFleet() {
  
  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#004B87] selection:text-white pb-0">
      
      {/* 1. CINEMATIC HERO BANNER (Fixed Margin - No extra top space) */}
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-50 grayscale-[20%]"
          style={{ backgroundImage: "url('/Capabilities.jpg')" }}
        />
        {/* Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#FAFAFA]" />
        
        <div className="relative z-10 text-center px-6 pt-10">
          <span className="text-[#4CA6FF] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-4 drop-shadow-md">
            Heavy Equipment & Execution
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight font-heading drop-shadow-xl">
            Our Execution <br /><span className="font-bold text-white">Capabilities.</span>
          </h1>
        </div>
      </section>

      {/* 2. OVERVIEW STATEMENT */}
      <section className="w-full bg-[#FAFAFA] pt-12 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <HardHat className="w-12 h-12 text-[#004B87] mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-light text-[#0A192F] font-heading leading-snug">
            "We do not lease equipment. <br/><span className="font-bold text-[#004B87]">We own the execution.</span>"
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed font-body mt-8">
            Sadev Group is one of the few global EPC conglomerates that operates a 100% internally owned fleet of heavy earthmoving, hoisting, and paving machinery. By completely bypassing third-party equipment leasing, we insulate our mega-projects from global supply-chain bottlenecks and guarantee absolute timeline predictability.
          </p>
        </div>
      </section>

      {/* 3. AT A GLANCE STATS (Corporate Blue Band) */}
      <section className="w-full bg-[#004B87] text-white shadow-inner relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {[
            { metric: "800+", label: "Heavy Core Assets", detail: "Cranes, Excavators, TBMs" },
            { metric: "0%", label: "Subcontractor Reliance", detail: "100% In-House Fleet" },
            { metric: "24/7", label: "Live IoT Telemetry", label2: "Tracking", detail: "NOC Monitored" },
            { metric: "15+", label: "Central Workshops", detail: "Pan-India Maintenance" }
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

      {/* 4. THE ASSET PORTFOLIO (Expanded 6-Grid Layout) */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16 text-center md:text-left">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-4 border-l-2 border-[#004B87] pl-3 inline-block md:block">
              THE SADEV ARSENAL
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading">
              Heavy Asset <span className="font-bold text-[#004B87]">Divisions.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {FLEET_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                className="group flex flex-col bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#004B87] transition-all duration-500"
              >
                <div className="w-full h-[220px] overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 shadow-sm rounded-sm text-[#004B87]">
                    <Truck className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-3 font-heading group-hover:text-[#004B87] transition-colors">{category.title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-1">
                    {category.desc}
                  </p>
                  <ul className="space-y-3 pt-6 border-t border-slate-100">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4CA6FF]" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NEW: HIGH-TECH OPERATOR ACADEMY (Human-Machine Interface) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[450px] shadow-xl rounded-sm overflow-hidden group">
            <img src="/image32.png" alt="Training Simulator" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 shadow-lg border-l-4 border-[#004B87]">
              <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-widest block mb-2">VIRTUAL REALITY LAB</span>
              <p className="text-sm font-bold text-slate-800">Advanced 6-Axis Motion Simulators for Tower Crane Operations.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-2 border-b-2 border-[#004B87] inline-block pb-1">
              HUMAN CAPITAL & TRAINING
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              THE SADEV <span className="font-bold text-[#004B87]">ACADEMY.</span>
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Heavy machinery is only as effective as the operator at the helm. At the Sadev Machinery Academy, we combine rigorous physical training with state-of-the-art Virtual Reality (VR) simulators.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 border border-slate-200 shadow-sm rounded-full shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#004B87]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero-Risk Simulation</h4>
                  <p className="text-sm text-slate-600 font-light mt-1">Operators train on extreme weather and load-failure scenarios in the digital realm before stepping into a real cabin.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 border border-slate-200 shadow-sm rounded-full shrink-0">
                  <Activity className="w-5 h-5 text-[#004B87]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Biometric Fatigue Monitoring</h4>
                  <p className="text-sm text-slate-600 font-light mt-1">Operator vitals are actively monitored to prevent fatigue-induced errors on massive active sites.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. DIGITAL TELEMATICS & NOC (Dark Slate Section for Tech) */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A192F] text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <span className="text-[10px] font-bold text-[#4CA6FF] uppercase tracking-[0.3em] block border-l-2 border-[#4CA6FF] pl-3">
              DIGITAL INTEGRATION
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight font-heading leading-snug">
              Live IoT <br /><span className="font-bold text-[#4CA6FF]">Telematics.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              Every single asset in the Sadev Group fleet is equipped with advanced Internet of Things (IoT) sensors. This raw data is beamed continuously via satellite directly to our Central Network Operations Center (NOC) in Noida.
            </p>
            
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <Activity className="w-6 h-6 text-[#4CA6FF] shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest font-heading mb-1">Fuel & Output Monitoring</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">Live dashboards track fuel consumption, engine RPM, and load metrics to prevent operational inefficiencies.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                <Server className="w-6 h-6 text-[#4CA6FF] shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest font-heading mb-1">Predictive Analytics</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">AI-driven algorithms predict mechanical failures before they happen, allowing for preemptive part replacements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] md:h-[650px] rounded-sm overflow-hidden shadow-2xl border border-white/10">
             <img src="/image33.png" alt="NOC Center" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#4CA6FF] uppercase tracking-widest block mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> NETWORK ACTIVE
                  </span>
                  <p className="text-xl font-bold text-white tracking-wide">Central Operations NOC</p>
                </div>
                <Cpu className="w-10 h-10 text-white/30" />
             </div>
          </div>

        </div>
      </section>

      {/* 7. NEW: GREEN FLEET & SUSTAINABILITY */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Leaf className="w-12 h-12 text-green-600 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              The Transition to a <span className="font-bold text-green-600">Green Fleet.</span>
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              We are actively decarbonizing our massive operational footprint. Sadev Group is phasing out legacy diesel engines and investing heavily in the next generation of eco-friendly infrastructure equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-8 border border-slate-200 bg-slate-50 hover:shadow-lg transition-all">
              <h4 className="text-lg font-bold text-[#0A192F] mb-3">BS-VI Compliant Engines</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Over 80% of our active terrestrial fleet has been upgraded to stringent BS-VI emission standards, drastically reducing site-level particulate matter.</p>
            </div>
            <div className="p-8 border border-slate-200 bg-slate-50 hover:shadow-lg transition-all">
              <h4 className="text-lg font-bold text-[#0A192F] mb-3">Electric Hybrid Excavators</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Deploying regenerative braking technology in heavy excavators, capturing boom-swing energy to recharge internal battery cells and reduce fuel consumption.</p>
            </div>
            <div className="p-8 border border-slate-200 bg-slate-50 hover:shadow-lg transition-all">
              <h4 className="text-lg font-bold text-[#0A192F] mb-3">Bio-Diesel Blending</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Running pilot programs in our central batching plants to utilize B20 bio-diesel blends across all stationary concrete mixers and pumps.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. MAINTENANCE & RELIABILITY */}
      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] shadow-xl rounded-sm overflow-hidden group">
            <img src="/image34.png" alt="Maintenance" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-4 left-4 bg-[#004B87] text-white p-3 rounded-sm shadow-md">
               <Wrench className="w-6 h-6" />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-2 border-b-2 border-[#004B87] inline-block pb-1">
              FLEET RELIABILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              ZERO <span className="font-bold text-[#004B87]">BREAKDOWNS.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
              Downtime is the enemy of infrastructure. To combat this, Sadev Group maintains 15+ central base workshops distributed strategically across the subcontinent. 
            </p>
            <ul className="space-y-4 pt-6">
              {[
                "Original Equipment Manufacturer (OEM) certified mechanics on-site.",
                "Mobile maintenance vans deployed at every mega-project site.",
                "Massive inventory of genuine spare parts maintained in central hubs."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-white p-5 border border-slate-200 rounded-sm shadow-sm hover:border-[#004B87] transition-colors">
                  <ShieldCheck className="w-5 h-5 text-[#004B87] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 9. BOTTOM CTA */}
      <section className="w-full py-32 px-6 md:px-12 bg-[#004B87] flex justify-center text-center text-white">
        <div className="max-w-3xl w-full space-y-8">
          <span className="text-[10px] font-bold text-[#4CA6FF] tracking-[0.4em] font-heading uppercase block">
            LEVERAGE OUR CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-heading uppercase tracking-tight">
            INITIATE <span className="font-bold">JOINT VENTURES.</span>
          </h2>
          <p className="text-white/80 text-base font-body font-light leading-relaxed mx-auto">
            Our execution fleet and technical prowess are available for sovereign EPC partnerships and large-scale joint ventures. Access our corporate desk for commercial inquiries.
          </p>
          <div className="pt-8">
            <button className="px-10 py-5 bg-white text-[#004B87] hover:bg-slate-100 hover:shadow-2xl text-xs font-bold font-heading tracking-widest transition-all duration-300 uppercase shadow-lg flex items-center gap-3 mx-auto rounded-sm">
              Contact Tender Desk <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}