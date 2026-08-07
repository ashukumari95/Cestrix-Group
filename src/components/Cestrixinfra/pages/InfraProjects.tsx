/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2,
  Globe2,
  Plane,
  Anchor,
  Zap as EnergyIcon,
  Map as MapIcon,
  Shield,
  Droplets,
  Target,
  HardHat
} from "lucide-react";

interface InfraProjectsProps {
  openVideoModal: (url: string, title: string) => void;
}

// --- EXPANDED SECTOR DATA ---
const SECTORS_DATA = [
  {
    id: "aviation",
    title: "Aviation & Airports",
    tagline: "Building world-class transit hubs.",
    description: "We partner with lead developers to execute critical infrastructure within massive aviation projects. Our expertise lies in high-tolerance runway paving and heavy structural steel erections for terminal buildings.",
    philosophy: "We view airports not just as transit points, but as sovereign economic engines. Our execution strategy focuses on zero-disruption phasing, ensuring parallel operations during massive expansions so that air traffic never halts.",
    machinery: "Deployed fleet includes laser-guided slip-form pavers, heavy-duty asphalt batching plants, and long-reach tower cranes specifically calibrated for rapid terminal construction.",
    imageUrl: "/image17.png",
    scaleInfo: { magnitude: "National Scale", footprint: "Global Corridors" },
    capabilities: ["Commercial Runway Paving", "Terminal Structural Steel", "Automated Cargo Tracks", "Airfield Earthworks"]
  },
  {
    id: "marine",
    title: "Marine & Seaports",
    tagline: "Building strong structures against the ocean.",
    description: "Working alongside global port authorities, we execute specialized marine operations. From deploying anti-corrosive concrete for breakwaters to executing deepwater hydraulic piling for new cargo berths.",
    philosophy: "Oceanic engineering demands zero margin for error. We construct defensive breakwaters and deepwater berths engineered to withstand century-level storm surges and highly corrosive saline environments.",
    machinery: "Our internal fleet features barge-mounted hydraulic piling rigs, massive offshore cutter suction dredgers, and heavy-lift jack-up vessels designed for deepwater stability.",
    imageUrl: "/image18.png",
    scaleInfo: { magnitude: "Mega-Project Level", footprint: "Coastal Hubs" },
    capabilities: ["Hydraulic Deepwater Piling", "Marine Grade Concrete", "Port Yard Paving", "Breakwater Tetrapods"]
  },
  {
    id: "energy",
    title: "Energy & Power",
    tagline: "Powering the nation's energy networks.",
    description: "We serve as critical execution partners in the energy sector. We supply massive volumes of specialized concrete and execute complex structural foundations for dams, refineries, and power plants.",
    philosophy: "Energy security is national security. We deploy specialized containment protocols for nuclear sites and utilize high-altitude logistical planning for massive hydroelectric dams in the most hostile terrains.",
    machinery: "Operating with heavy crawler cranes, high-capacity concrete transit mixers, and automated sub-zero batching units capable of functioning in extreme weather conditions.",
    imageUrl: "/image19.png",
    scaleInfo: { magnitude: "National Power Grid", footprint: "Country-Wide" },
    capabilities: ["Reactor Shielding Concrete", "Hydro-Dam Earthworks", "Solar Park Foundations", "Refinery Structural Supports"]
  },
  {
    id: "civil",
    title: "Highways & Tunnels",
    tagline: "Connecting cities with fast and safe roads.",
    description: "We are contracted to execute specific, high-complexity packages within national highway corridors. We specialize in rapid multi-lane concrete paving and continuous tunnel-wall stabilization.",
    philosophy: "We connect topographies by conquering them. Our highway and tunnel division operates on a continuous 24/7 execution cycle, accelerating national corridor connectivity without compromising geological stability.",
    machinery: "Powered by advanced Tunnel Boring Machines (TBMs), massive hydraulic excavators, and fully automated multi-lane road-laying fleets.",
    imageUrl: "/image20.png",
    scaleInfo: { magnitude: "State & National Level", footprint: "Connecting Cities" },
    capabilities: ["Tunnel Wall Spray Concrete", "Multi-Lane Rigid Paving", "Highway Bridge Pillars", "Terrain Excavation"]
  },
  {
    id: "defense",
    title: "Defense Infrastructure",
    tagline: "Building secure borders and defense sites.",
    description: "Acting as trusted execution partners for sovereign defense agencies, we provide armored excavation and high-strength blast-resistant concrete pouring for classified military installations.",
    philosophy: "Operating under strict confidentiality, our defense division prioritizes structural invulnerability. We engineer subterranean and blast-resistant assets that guarantee operational continuity under extreme duress.",
    machinery: "Utilizing armored excavation units, rapid-deployment concrete sprayers, and highly secure heavy-haul transport convoys for classified material movement.",
    imageUrl: "/image21.png",
    scaleInfo: { magnitude: "High Security", footprint: "Border Frontiers" },
    capabilities: ["Subterranean Bunkers", "Blast-Resistant Concrete", "Border Tactical Roads", "Military Hangar Frameworks"]
  },
  {
    id: "water",
    title: "Water & Desalination",
    tagline: "Securing pure water for the future.",
    description: "We execute the heavy civil engineering scope for massive hydrological projects. This includes constructing salt-water resistant storage reservoirs and laying foundations for cross-country pipelines.",
    philosophy: "We architect hydrological permanence. From deep-sea sourcing to purification, our grid executions are designed for multi-generational lifespans, ensuring sovereign water security against shifting climate variables.",
    machinery: "Deploying deep-trenching heavy excavators, high-pressure industrial pipeline laying rigs, and continuous-pour concrete systems for massive reservoirs.",
    imageUrl: "/image22.png",
    scaleInfo: { magnitude: "City-Wide Scale", footprint: "Water Pipelines" },
    capabilities: ["Reservoir Concrete Pouring", "Pipeline Trench Excavation", "Desalination Plant Foundations", "Effluent Treatment Structures"]
  }
];

// --- REALISTIC PROJECTS: Cestrix as an Execution Partner/Sub-Contractor ---
const INITIAL_PROJECTS = [
  // AVIATION
  { id: "AV-092", title: "Indira Gandhi Int. Airport - T1 Expansion", category: "aviation", magnitude: "Roofing & Structural Phase", imageUrl: "/image23.png" },
  { id: "AV-094", title: "Bhogapuram Greenfield Airport", category: "aviation", magnitude: "Runway Paving Package", imageUrl: "/image24.png" },
  { id: "AV-112", title: "Navi Mumbai Airport Logistics Hub", category: "aviation", magnitude: "Earthworks & Foundation", imageUrl: "/image25.png" },
  
  // ENERGY
  { id: "EN-441", title: "Subansiri Hydroelectric Dam", category: "energy", magnitude: "Spillway Concrete Pouring", imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1600" },
  { id: "EN-502", title: "Kudankulam Nuclear Power Plant", category: "energy", magnitude: "Radiation Shielding Sub-contract", imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1600" },

  // MARINE
  { id: "MR-105", title: "Mundra Deepwater Pier Expansion", category: "marine", magnitude: "Hydraulic Piling Operations", imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1600" },
  { id: "MR-288", title: "Nhava Sheva Cargo Yard", category: "marine", magnitude: "Heavy-Duty Crane Track Paving", imageUrl: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1600" },

  // CIVIL & TUNNELS
  { id: "CV-882", title: "Z-Morh Himalayan Tunnel", category: "civil", magnitude: "Tunnel Wall Stabilization Package", imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600" },
  { id: "CV-905", title: "Delhi-Mumbai Expressway (Pkg 14)", category: "civil", magnitude: "45km Rigid Concrete Paving", imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1600" },

  // DEFENSE
  { id: "DF-011", title: "BRO Sector 4 High-Altitude Roads", category: "defense", magnitude: "Tactical Route Earthworks", imageUrl: "https://images.unsplash.com/photo-1464627010534-1cdece8c37d0?auto=format&fit=crop&q=80&w=1600" },
  { id: "DF-055", title: "Eastern Naval Command Base", category: "defense", magnitude: "Subterranean Blast-Proof Concrete", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600" },

  // WATER
  { id: "WT-302", title: "Gujarat State Desalination Grid", category: "water", magnitude: "Reservoir Construction Package", imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" }
];

export default function InfraProjects({ openVideoModal }: InfraProjectsProps) {
  
  const [selectedSector, setSelectedSector] = useState<typeof SECTORS_DATA[0] | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollContainer = document.getElementById("main-scroll-view");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedSector]);


  // =========================================================
  // LEVEL 2: SECTOR OVERVIEW PAGE 
  // =========================================================
  if (selectedSector) {
    const sectorProjects = INITIAL_PROJECTS.filter(p => p.category === selectedSector.id);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full min-h-screen bg-[#FAFAFA] text-slate-900 font-sans pb-24">
        
        {/* BANNER */}
        <section className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <img src={selectedSector.imageUrl} alt={selectedSector.title} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[10%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-transparent to-[#FAFAFA]" />
          
          <div className="relative z-10 text-center px-6 pt-16">
            <span className="text-[#4CA6FF] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-4 drop-shadow-md">
              Construction Division
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight font-heading drop-shadow-xl">
              {selectedSector.title.split('&')[0]} <span className="font-bold">& {selectedSector.title.split('&')[1] || ''}</span>
            </h1>
          </div>
        </section>

        {/* DETAILED CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-light text-slate-700 font-heading">"{selectedSector.tagline}"</h3>
              <p className="text-base text-slate-600 font-light leading-relaxed font-body">{selectedSector.description}</p>
            </div>

            {/* Right Blue Box */}
            <div className="lg:col-span-4">
              <div className="bg-[#004B87] text-white p-8 shadow-xl">
                <Globe2 className="w-8 h-8 text-[#4CA6FF] mb-6" />
                <div className="space-y-6">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#4CA6FF] mb-1">Execution Capacity</span>
                    <span className="text-2xl font-bold font-heading tracking-tight">{selectedSector.scaleInfo.magnitude}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/20" />
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#4CA6FF] mb-1">Our Reach</span>
                    <span className="text-xl font-light font-heading tracking-tight">{selectedSector.scaleInfo.footprint}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STRATEGIC DETAILS ROW */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-16">
             <div className="bg-white border border-slate-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
               <h4 className="text-sm font-bold text-[#004B87] uppercase tracking-widest mb-6 flex items-center gap-3 font-heading">
                 <Target className="w-6 h-6 text-[#4CA6FF]"/> Execution Philosophy
               </h4>
               <p className="text-sm text-slate-600 font-light leading-relaxed">{selectedSector.philosophy}</p>
             </div>
             <div className="bg-white border border-slate-200 p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
               <h4 className="text-sm font-bold text-[#004B87] uppercase tracking-widest mb-6 flex items-center gap-3 font-heading">
                 <HardHat className="w-6 h-6 text-[#4CA6FF]"/> Dedicated Machinery
               </h4>
               <p className="text-sm text-slate-600 font-light leading-relaxed">{selectedSector.machinery}</p>
             </div>
          </div>

          {/* WIDER CAPABILITIES SECTION */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h4 className="text-xs font-bold text-[#004B87] uppercase tracking-widest mb-8 text-center md:text-left">Core Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {selectedSector.capabilities.map((cap, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 bg-white p-6 border border-slate-200 shadow-sm hover:border-[#004B87] transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#4CA6FF] shrink-0" />
                  <span className="text-sm font-medium text-slate-800 leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid for this specific sector (NON-CLICKABLE & STATIC) */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-24 mt-12 border-t border-slate-200">
           <h3 className="text-2xl md:text-3xl font-light text-slate-900 font-heading tracking-widest mb-12 text-center md:text-left uppercase">
             OUR <span className="font-bold text-[#004B87]">PROJECTS.</span>
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
             {sectorProjects.length === 0 ? (
                <div className="col-span-full py-10 text-slate-500 font-medium italic">Project details are not publicly available for this division yet.</div>
             ) : (
                sectorProjects.map((project, index) => (
                  <motion.div
                    key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-sm overflow-hidden shadow-sm border border-slate-200 flex flex-col"
                  >
                    <div className="relative w-full h-[260px] overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale-[10%]" />
                    </div>
                    {/* CLEAN CARD BOTTOM */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-bold text-[#004B87] font-heading uppercase tracking-widest">{project.magnitude}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-snug font-heading">{project.title}</h3>
                    </div>
                  </motion.div>
               ))
             )}
           </div>
        </section>

      </motion.div>
    );
  }

  // =========================================================
  // LEVEL 1: MAIN SERVICES PAGE (GATEWAY)
  // =========================================================
  return (
    <div className="w-full bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#004B87] selection:text-white pb-32">
      
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src="/sector.jpg" 
          alt="Cestrix Megastructures" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#004B87]/30 to-[#FAFAFA]" />
        
        <div className="relative z-10 text-center px-6 pt-10">
          <span className="text-[#4CA6FF] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-4 drop-shadow-md">
            Core Engineering Services
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight font-heading drop-shadow-xl">
            Our Business <br /><span className="font-bold">Divisions.</span>
          </h1>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA] pt-16 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Globe2 className="w-12 h-12 text-[#004B87] mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-light text-[#0A192F] font-heading leading-snug">
            "Building massive projects <br/><span className="font-bold text-[#004B87]">with perfect precision.</span>"
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed font-body mt-8">
            Welcome to the Cestrix Group's project portfolio. We work on the largest construction projects, building airports, seaports, defense sites, and power plants across the country.
          </p>
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed font-body">
            Every project shown here proves our strong working model. By functioning as specialized execution partners, we use our own heavy machines and 3D planning software to deliver critical project phases exactly on time.
          </p>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 lg:px-24 pt-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
           {SECTORS_DATA.map((sector, idx) => {
             const Icon = sector.id === 'aviation' ? Plane : 
                          sector.id === 'marine' ? Anchor : 
                          sector.id === 'energy' ? EnergyIcon : 
                          sector.id === 'defense' ? Shield :
                          sector.id === 'water' ? Droplets : MapIcon;

             return (
              <motion.div 
                key={sector.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedSector(sector)}
                className="group relative bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#004B87] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-[480px]"
              >
                <div className="absolute inset-0 h-1/2">
                  <img src={sector.imageUrl} alt={sector.title} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>
                
                <div className="relative z-10 mt-auto p-8 bg-white h-1/2 flex flex-col">
                  <div className="w-12 h-12 bg-[#004B87] text-white flex items-center justify-center rounded-sm shadow-lg absolute -top-6 right-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#004B87] transition-colors leading-tight">{sector.title}</h2>
                  <p className="text-sm text-slate-600 font-light leading-relaxed flex-1">{sector.tagline}</p>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{sector.scaleInfo.magnitude}</span>
                      <span className="text-sm font-bold text-[#004B87] font-heading">{sector.scaleInfo.footprint}</span>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-slate-50 text-[#004B87] group-hover:bg-[#004B87] group-hover:text-white transition-colors rounded-sm">
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
             )
           })}
        </div>
      </section>

    </div>
  );
}