/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ArrowRight, 
  Globe2, 
  Building2,
  Anchor,
  Plane,
  HardHat,
  Network,
  Map,
  Beaker,
  Trophy,
  Microscope,
  Truck,
  ShieldAlert,
  Shield,
  Droplets
} from "lucide-react";

interface InfraHomeProps {
  onNavigateToPage: (page: "home" | "projects" | "fleet" | "sustainability" | "tender") => void;
  openVideoModal: (url: string, title: string) => void;
  // FIX: Added the missing prop here
  onSwitchDivision: (view: "gateway" | "infra" | "tech") => void; 
}

const heroSlides = [
  {
    image: "./public/image14.png",
    tag: "National Infrastructure",
    title: "ENGINEERING \n NATIONAL LEGACIES.",
    desc: "Deploying fully capitalized heavy machinery to execute sovereign mandates across high-altitude corridors and strategic national gateways."
  },
  {
    image: "./public/image15.png",
    tag: "Aviation & Terminal Hubs",
    title: "DESIGNING GLOBAL \n AEROTROPOLISES.",
    desc: "Executing greenfield international airports with high-tolerance runway paving and massive steel-truss terminals for unprecedented passenger volumes."
  },
  {
    image: "./public/image16.png",
    tag: "Marine & Deepwater Ports",
    title: "MASTERING THE \n DEEPWATER FRONTIER.",
    desc: "Utilizing internal barge-mounted hydraulic piling rigs to construct weather-resilient cargo berths and anti-corrosive marine structures."
  },
  {
    image: "./public/image13.png",
    tag: "Energy & Industrial Assets",
    title: "POWERING THE \n INDUSTRIAL GRID.",
    desc: "Bridging architectural vision with structural certainty across massive oil & gas refineries, hydroelectric grids, and critical energy corridors."
  }
];

// FIX: Destructured onSwitchDivision here
export default function InfraHome({ onNavigateToPage, openVideoModal, onSwitchDivision }: InfraHomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center select-none bg-white text-slate-800">
      
      <section className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              animate={{ scale: currentSlide === index ? 1.08 : 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="w-full h-full bg-cover bg-center grayscale-[20%]"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#004B87]/60 to-transparent z-10" />

        <div className="max-w-7xl w-full px-6 md:px-12 z-20 relative flex flex-col items-start text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#4CA6FF]/20 border-l-4 border-[#4CA6FF] text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#4CA6FF] uppercase mb-6 backdrop-blur-md">
                {heroSlides[currentSlide].tag}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1] font-heading drop-shadow-2xl whitespace-pre-line">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="mt-6 text-sm md:text-lg text-slate-100 font-light leading-relaxed font-body drop-shadow-lg max-w-2xl border-l border-white/20 pl-6">
                {heroSlides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="mt-10 flex flex-wrap gap-4 md:gap-6">
            <button onClick={() => onNavigateToPage("projects")} className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#004B87] text-white hover:bg-white hover:text-[#004B87] text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-2xl">
              <span>Inspect Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
            <button onClick={() => openVideoModal("./public/video.mp4", "SADEV CORPORATE FILM")} className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#004B87] text-xs font-bold uppercase tracking-widest transition-all duration-500">
              <Play className="w-3 h-3 fill-current" />
              <span>Watch Film</span>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 right-6 md:right-12 z-30 flex items-center gap-6">
          <div className="flex gap-3">
             {heroSlides.map((_, idx) => (
               <button key={idx} onClick={() => setCurrentSlide(idx)} className={`group flex items-center gap-2 cursor-pointer outline-none`}>
                 <span className={`text-[10px] font-bold font-mono transition-colors duration-500 ${idx === currentSlide ? "text-[#4CA6FF]" : "text-white/40"}`}>0{idx + 1}</span>
                 <div className={`h-1 transition-all duration-700 rounded-full ${idx === currentSlide ? "w-10 bg-[#4CA6FF]" : "w-4 bg-white/20 group-hover:bg-white/40"}`} />
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#004B87] text-white shadow-inner z-20 relative border-t-4 border-[#4CA6FF]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {[
            { metric: "Sovereign Scale", label: "Active Order Book", detail: "Secured National & Global EPC Contracts" },
            { metric: "Unprecedented", label: "Mega Projects Commissioned", detail: "Zero-Extension Delivery Heritage" },
            { metric: "Colossal", label: "Heavy Earthmovers", detail: "Fully Capitalized Internal Fleet" },
            { metric: "Impeccable", label: "Safety Record", detail: "Audited Zero-Harm Operations" }
          ].map((stat, idx) => (
            <div key={idx} className="p-8 md:p-12 flex flex-col justify-center items-center text-center hover:bg-white/5 transition-colors duration-500">
              <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight mb-4 uppercase">{stat.metric}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4CA6FF] block mb-3">{stat.label}</span>
              <div className="w-6 h-[2px] bg-white/30 mb-3" />
              <span className="text-xs font-body text-slate-200 font-light">{stat.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-slate-50 flex justify-center border-b border-slate-200">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-[380px] aspect-[3/4] relative p-4 bg-white border border-slate-200 shadow-lg overflow-hidden">
              <div className="relative w-full h-full overflow-hidden">
                <img src="./public/owner.png" alt="Chairman" className="absolute inset-0 w-full h-full object-cover object-top brightness-95" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0A192F] text-white p-6 hidden md:block shadow-xl z-10">
                <span className="text-[10px] font-bold tracking-widest block uppercase mb-1 text-[#4CA6FF]">FOUNDER</span>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:col-span-7 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.2em] block mb-4 border-l-2 border-[#004B87] pl-3">THE SADEV DOCTRINE</span>
            <h2 className="text-2xl md:text-4xl font-light text-slate-800 font-heading leading-snug">
              "An institution is not merely poured concrete and forged steel. It is an unyielding <span className="font-bold text-[#004B87]">execution ecosystem</span>, engineered to mitigate risk and serve the nation for generations."
            </h2>
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                When Sadev was founded, the infrastructure landscape was plagued by subcontracting fragmentation and leased-equipment bottlenecks. Our vision was simple yet structurally radical: <strong className="font-semibold text-slate-900">Execute directly. Capitalize the machinery. Control the timeline.</strong> 
              </p>
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                Today, that philosophy has scaled into a monumental reality. Whether we are utilizing advanced Tunnel Boring Machines in the Himalayas or pouring advanced low-carbon concrete for international aerotropolises, our core thesis remains unchanged. We do not just construct infrastructure; we engineer absolute predictability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-white flex justify-center border-b border-slate-200">
        <div className="max-w-7xl w-full">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-4">GEOGRAPHIC REACH</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              A PAN-CONTINENTAL <br /><span className="font-bold text-[#004B87]">STRATEGIC FOOTPRINT.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-y border-slate-200 py-16">
            <div className="space-y-5 md:border-r border-slate-200 md:pr-8 px-4">
              <Map className="w-10 h-10 text-[#004B87] mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide font-heading">High-Altitude Corridors</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Operating specialized sub-zero concrete batching units across towering mountain ranges to execute complex hydroelectric grids and strategic defense tunnels.</p>
            </div>
            <div className="space-y-5 md:border-r border-slate-200 md:pr-8 md:pl-8 px-4">
              <Building2 className="w-10 h-10 text-[#004B87] mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide font-heading">Urban Aerotropolises</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Executing massive, simultaneous aviation hubs and smart-city economic corridors across national capital regions and critical southern nodes.</p>
            </div>
            <div className="space-y-5 md:pl-8 px-4">
              <Anchor className="w-10 h-10 text-[#004B87] mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide font-heading">Deepwater Coastlines</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Deploying our internal fleet of barge-mounted hydraulic piling rigs along vast coastlines to construct weather-resilient cargo berths and breakwater infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-slate-50 flex justify-center border-b border-slate-200">
        <div className="max-w-7xl w-full">
          <div className="mb-20 text-center md:text-left">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-4">CAPABILITIES & EXPERTISE</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading">
              CORE ENGINEERING <span className="font-bold text-[#004B87]">VERTICALS.</span>
            </h2>
          </div>
          <div className="space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7 relative w-full h-[350px] md:h-[450px] shadow-lg rounded-sm overflow-hidden group">
                <img src="./public/image8.png" alt="Aviation" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 bg-[#0A192F] text-white p-5 flex items-center gap-4 shadow-md z-10">
                  <Plane className="w-6 h-6 text-[#4CA6FF]" />
                  <span className="text-xs font-bold tracking-widest uppercase">Aviation & Aerotropolis</span>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 uppercase tracking-tight">Airports & <br/>Terminal Hubs</h3>
                <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">Executing greenfield international airports capable of handling unprecedented global passenger traffic. We specialize in rapid-cast modular terminal superstructures, automated sub-surface baggage networks, and high-tolerance international runway paving using our proprietary laser-guided slip-form pavers.</p>
                <ul className="space-y-3 pt-4 border-t border-slate-200">
                  {["Wide-Body Commercial Runway Paving", "Massive Steel-Truss Terminals", "Automated Cargo Logistics Nodes"].map(item => (
                    <li key={item} className="text-sm text-slate-700 font-medium flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#004B87] rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 uppercase tracking-tight">Marine & <br/>Deepwater Ports</h3>
                <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">Operating proprietary jack-up barges and heavy dredging fleets to construct ultra-deepwater berths. We engineer massive wave-breaker tetrapod grids and anti-corrosive marine structures designed for multi-generational operational lifecycles, withstanding intense ocean swell shear.</p>
                <ul className="space-y-3 pt-4 border-t border-slate-200">
                  {["Deepwater Berths & Breakwaters", "Anti-Sulfate Marine Concrete Grids", "Naval Dockyards & Dry Docks"].map(item => (
                    <li key={item} className="text-sm text-slate-700 font-medium flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#004B87] rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7 order-1 lg:order-2 relative w-full h-[350px] md:h-[450px] shadow-lg rounded-sm overflow-hidden group">
                <img src="./public/image9.png" alt="Marine" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-0 right-0 bg-[#0A192F] text-white p-5 flex items-center gap-4 shadow-md z-10">
                  <span className="text-xs font-bold tracking-widest uppercase">Maritime Engineering</span>
                  <Anchor className="w-6 h-6 text-[#4CA6FF]" />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7 relative w-full h-[350px] md:h-[450px] shadow-lg rounded-sm overflow-hidden group">
                <img src="./public/image10.png" alt="Defense Infrastructure" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[30%] group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 bg-[#0A192F] text-white p-5 flex items-center gap-4 shadow-md z-10">
                  <Shield className="w-6 h-6 text-[#4CA6FF]" />
                  <span className="text-xs font-bold tracking-widest uppercase">Strategic Defense Infrastructure</span>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 uppercase tracking-tight">Border Corridors & <br/>Tactical Airbases</h3>
                <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">Trusted by sovereign governments to execute highly classified strategic infrastructure. We construct fortified subterranean command bunkers, blast-resistant aerospace hangars, and rapid-deployment border corridors across the most hostile terrains known to man.</p>
                <ul className="space-y-3 pt-4 border-t border-slate-200">
                  {["Subterranean Command Bunkers", "Blast-Resistant Aerospace Hangars", "High-Altitude Tactical Corridors"].map(item => (
                    <li key={item} className="text-sm text-slate-700 font-medium flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#004B87] rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 uppercase tracking-tight">National Water <br/>& Desalination Grids</h3>
                <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">Engineering massive water security systems for urban hubs and agricultural basins. We execute turnkey desalination plants, colossal effluent treatment facilities, and interconnected aqueduct networks that transport life-sustaining water across thousands of kilometers.</p>
                <ul className="space-y-3 pt-4 border-t border-slate-200">
                  {["Mega Desalination Plants", "Cross-Country Aqueduct Networks", "Industrial Effluent Treatment"].map(item => (
                    <li key={item} className="text-sm text-slate-700 font-medium flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#004B87] rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7 order-1 lg:order-2 relative w-full h-[350px] md:h-[450px] shadow-lg rounded-sm overflow-hidden group">
                <img src="./public/image11.png" alt="Water Grids" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-0 right-0 bg-[#0A192F] text-white p-5 flex items-center gap-4 shadow-md z-10">
                  <span className="text-xs font-bold tracking-widest uppercase">Water Infrastructure</span>
                  <Droplets className="w-6 h-6 text-[#4CA6FF]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-white flex justify-center border-b border-slate-200">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block border-l-2 border-[#004B87] pl-3">QUALITY ASSURANCE & COMPLIANCE</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              UNCOMPROMISING <br /><span className="font-bold text-[#004B87]">MATERIAL INTEGRITY.</span>
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              We ensure that every structural element deployed on our sites strictly exceeds global seismic and integrity thresholds. Through rigorous on-site protocols and partnerships with certified third-party testing facilities, we guarantee absolute quality control.
            </p>
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <div className="flex gap-4 p-5 bg-slate-50 border border-slate-100 rounded-sm">
                <Beaker className="w-8 h-8 text-[#004B87] shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-widest font-heading mb-2">High-Performance Standards</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">Every batch of concrete deployed is monitored for exact compressive strength and environmental resistance, ensuring multi-generational durability.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-slate-50 border border-slate-100 rounded-sm">
                <Microscope className="w-8 h-8 text-[#004B87] shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-widest font-heading mb-2">Rigorous Structural Testing</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">All Thermo-Mechanically Treated (TMT) steel and critical load-bearing materials are subjected to mandatory stress verifications before execution.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[600px] shadow-2xl rounded-sm overflow-hidden">
             <img src="./public/image12.png" alt="Quality Assurance on Site" className="absolute inset-0 w-full h-full object-cover object-center" />
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-[#0A192F]/95 backdrop-blur-md text-white z-10">
               <span className="text-[10px] font-bold text-[#4CA6FF] uppercase tracking-widest block mb-2">ON-SITE QUALITY CONTROL</span>
               <p className="text-sm font-medium leading-relaxed">Relentless material stress monitoring and execution audits conducted at every mega-project site.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-slate-50 flex justify-center border-b border-slate-200">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative w-full h-[350px] md:h-[500px] shadow-xl rounded-sm overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" alt="Logistics" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#004B87]/90 to-transparent z-10" />
             <div className="absolute top-10 left-10 text-white z-20">
               <Truck className="w-10 h-10 text-[#4CA6FF] mb-4" />
               <h4 className="text-3xl font-bold font-heading">Global Haulage</h4>
               <span className="text-xs font-bold text-[#4CA6FF] uppercase tracking-widest">Unprecedented Material Movement</span>
             </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block border-l-2 border-[#004B87] pl-3">PROCUREMENT SCALE</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              GLOBAL SUPPLY <br /><span className="font-bold text-[#004B87]">CHAIN INTEGRITY.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
              Executing massive EPC contracts requires military-grade logistics. Sadev procures astronomical volumes of structural steel and aggregates, sourced directly from the world's most reputable mills. <br /><br /> By bypassing intermediaries and utilizing our internal fleet of transit mixers and heavy haulers, we insulate our projects from global supply chain shocks, raw material shortages, and aggressive pricing volatility.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-white flex justify-center border-b border-slate-200">
        <div className="max-w-7xl w-full">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-[#004B87] uppercase tracking-[0.3em] block mb-4">THE EXECUTION ENGINE</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 uppercase tracking-tight font-heading leading-snug">
              Bridging brute physical force with <br/><span className="font-bold text-[#004B87]">high-velocity data integration.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#004B87] transition-all duration-500 group">
              <HardHat className="w-10 h-10 text-[#004B87] mb-8" />
              <h3 className="text-xl font-bold text-slate-900 font-heading uppercase tracking-wide mb-4">The Capitalized Fleet</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">We reject the industry standard of equipment leasing. Sadev owns a colossal fleet of heavy hydraulic excavators, massive crawler cranes, and automated batching plants outright. This capitalization guarantees that our critical path never stalls waiting for third-party machinery.</p>
              <button onClick={() => onNavigateToPage("fleet")} className="text-xs font-bold text-[#004B87] uppercase tracking-widest hover:text-[#4CA6FF] transition-colors flex items-center gap-2">
                Inspect Live Telemetry <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-12 bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#004B87] transition-all duration-500 group">
              <Network className="w-10 h-10 text-[#004B87] mb-8" />
              <h3 className="text-xl font-bold text-slate-900 font-heading uppercase tracking-wide mb-4">Advanced Digital Twins</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">Every physical site is backed by our Digital Division. Real-time scheduling and cost-estimation simulations are run continuously. We perform sub-millimeter structural clash-detection in the cloud before a single drop of concrete is poured.</p>
              {/* FIX: onSwitchDivision is now correctly mapped */}
              <button onClick={() => onSwitchDivision("tech")} className="text-xs font-bold text-[#004B87] uppercase tracking-widest hover:text-[#4CA6FF] transition-colors flex items-center gap-2">
                Enter Tech Ecosystem <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 flex justify-center border-b border-white/5 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center grayscale opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=2000&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/90 to-[#0A192F] z-10" />
        <div className="max-w-7xl w-full text-center relative z-20">
           <ShieldAlert className="w-12 h-12 text-[#4CA6FF] mx-auto mb-6" />
           <span className="text-[10px] font-bold text-[#4CA6FF] uppercase tracking-[0.3em] block mb-4 drop-shadow-md">HUMAN CAPITAL & SAFETY</span>
           <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tight font-heading leading-snug mb-16 drop-shadow-lg">
             THE AUDITED <span className="font-bold">ZERO-HARM PLEDGE.</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 border-t-2 border-[#4CA6FF] bg-[#0A192F]/40 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-500 shadow-2xl group cursor-default">
                 <h4 className="text-lg font-bold text-white uppercase tracking-widest font-heading mb-4 group-hover:text-[#4CA6FF] transition-colors">IoT Smart Helmets</h4>
                 <p className="text-sm text-slate-300 font-light leading-relaxed">Every site worker is equipped with intelligent safety helmets that track vitals, geofence danger zones, and alert the central grid to prevent accidents.</p>
              </div>
              <div className="p-10 border-t-2 border-white bg-[#0A192F]/40 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-500 shadow-2xl group cursor-default">
                 <h4 className="text-lg font-bold text-white uppercase tracking-widest font-heading mb-4 group-hover:text-slate-200 transition-colors">AI Drone Audits</h4>
                 <p className="text-sm text-slate-300 font-light leading-relaxed">Automated AI drone flights map trench walls, piling alignments, and aerial load clearances to verify absolute structural stability across massive footprints.</p>
              </div>
              <div className="p-10 border-t-2 border-[#4CA6FF] bg-[#0A192F]/40 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-500 shadow-2xl group cursor-default">
                 <h4 className="text-lg font-bold text-white uppercase tracking-widest font-heading mb-4 group-hover:text-[#4CA6FF] transition-colors">Global Certification</h4>
                 <p className="text-sm text-slate-300 font-light leading-relaxed">Rigorous independent audits ensure our daily safety operations exceed the strictest international occupational health and safety protocols.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="w-full py-32 px-6 md:px-12 bg-[#004B87] flex justify-center text-center text-white">
        <div className="max-w-3xl w-full space-y-8">
          <span className="text-[10px] font-bold text-[#4CA6FF] tracking-[0.4em] font-heading uppercase block">STRATEGIC ALLIANCES</span>
          <h2 className="text-3xl md:text-5xl font-light font-heading uppercase tracking-tight">
            INITIATE <span className="font-bold">JOINT VENTURES.</span>
          </h2>
          <p className="text-white/80 text-base font-body font-light leading-relaxed mx-auto">
            Access our Commercial Estimating Desk. Input your architectural parameters to instantly calculate structural steel volume, concrete deployment, and projected execution scale.
          </p>
          <div className="pt-8">
            <button onClick={() => onNavigateToPage("tender")} className="px-10 py-5 bg-white text-[#004B87] hover:bg-slate-100 hover:shadow-xl text-xs font-bold font-heading tracking-widest transition-all duration-300 uppercase shadow-md">
              Access Corporate Portal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}