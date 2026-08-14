/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 

import TechNavbar from "./components/TechNavbar";
import TechFooter from "./components/TechFooter";

import TechHome from "./Pages/TechHome";
import TechIndustry from "./Pages/TechIndustry";
import TechServices from "./Pages/TechServices";
import TechInsights from "./Pages/TechInsights";
import TechAbout from "./Pages/TechAbout";

// 🔥 All 4 Legal Pages Imported Here
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfUse from "./Pages/TermsOfUse";
import Disclaimer from "./Pages/Disclaimer";
import CookiesPolicy from "./Pages/CookiesPolicy";

// 🔥 All 5 Sniper Landing Pages Imported Here
import AwsServerlessMigration from "./Pages/Solutions/AwsServerlessMigration";
import NodejsMemoryLeakFix from "./Pages/Solutions/NodejsMemoryLeakFix";
import LegacyAngularMigration from "./Pages/Solutions/LegacyAngularMigration";
import SaasVaptRemediation from "./Pages/Solutions/SaasVaptRemediation";
import MongoDbOptimization from "./Pages/Solutions/MongoDbOptimization";

interface CestrixTechProps {
  onNavigate: (view: "gateway" | "infra" | "tech" | "privacy" | "terms" | "disclaimer" | "cookies") => void;
}

// 🔥 Updated TypeScript Types with all 5 new URLs
type TechPage = "overview" | "industry" | "services" | "insights" | "about-us" | "privacy" | "terms" | "disclaimer" | "cookies" | "solutions/aws-ec2-to-serverless" | "solutions/nodejs-memory-leak-fix" | "solutions/legacy-angular-migration" | "solutions/saas-vapt-remediation" | "solutions/mongodb-optimization";

// 🔥 Updated Array with all 5 new URLs
const VALID_PAGES: TechPage[] = [
  "overview", "industry", "services", "insights", "about-us", 
  "privacy", "terms", "disclaimer", "cookies", 
  "solutions/aws-ec2-to-serverless", 
  "solutions/nodejs-memory-leak-fix",
  "solutions/legacy-angular-migration",
  "solutions/saas-vapt-remediation",
  "solutions/mongodb-optimization"
];

export default function CestrixTech({ onNavigate }: CestrixTechProps) {
  
  const [currentPage, setCurrentPage] = useState<TechPage>(() => {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    // Router logic to read long URLs (solutions/...) 
    const pageStr = pathParts.slice(1).join("/"); 
    const page = (pageStr || "overview") as TechPage;
    return VALID_PAGES.includes(page) ? page : "overview";
  });

  useEffect(() => {
    const newPath = currentPage === "overview" ? "/tech" : `/tech/${currentPage}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }

    const scrollContainer = document.getElementById("main-scroll-view");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      if (pathParts[0] === "tech") {
        const pageStr = pathParts.slice(1).join("/");
        const page = (pageStr || "overview") as TechPage;
        if (VALID_PAGES.includes(page)) {
          setCurrentPage(page);
        } else {
          setCurrentPage("overview");
        }
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleCustomNav = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (VALID_PAGES.includes(customEvent.detail)) {
        setCurrentPage(customEvent.detail);
      } else if (customEvent.detail === 'overview') {
        setCurrentPage('overview');
      }
    };
    window.addEventListener("tech-navigate", handleCustomNav);
    return () => window.removeEventListener("tech-navigate", handleCustomNav);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "overview": return <TechHome />;
      case "industry": return <TechIndustry />;
      case "services": return <TechServices />;
      case "insights": return <TechInsights />;
      case "about-us": return <TechAbout />;
      
      // Legal Pages
      case "privacy": return <PrivacyPolicy onNavigate={onNavigate} />;
      case "terms": return <TermsOfUse onNavigate={onNavigate} />;
      case "disclaimer": return <Disclaimer onNavigate={onNavigate} />;
      case "cookies": return <CookiesPolicy onNavigate={onNavigate} />;

      // 🔥 All 5 Sniper Problem-Solving Routes Added Here
      case "solutions/aws-ec2-to-serverless": return <AwsServerlessMigration onNavigate={onNavigate} />;
      case "solutions/nodejs-memory-leak-fix": return <NodejsMemoryLeakFix onNavigate={onNavigate} />;
      case "solutions/legacy-angular-migration": return <LegacyAngularMigration onNavigate={onNavigate} />;
      case "solutions/saas-vapt-remediation": return <SaasVaptRemediation onNavigate={onNavigate} />;
      case "solutions/mongodb-optimization": return <MongoDbOptimization onNavigate={onNavigate} />;

      default:
        return (
          <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#F4F6F8] pt-24 pb-12 px-6">
            <div className="w-16 h-16 bg-[#002D62] text-white flex items-center justify-center font-heading font-bold text-3xl rounded-sm mb-6 shadow-md">S</div>
            <h1 className="text-3xl md:text-5xl text-[#002D62] font-bold font-heading uppercase tracking-widest text-center mb-4">
              {currentPage.replace("-", " ")}
            </h1>
            <p className="text-slate-500 font-light text-center max-w-md">This module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen text-slate-900 bg-[#F4F6F8] relative overflow-x-hidden font-sans selection:bg-[#4CA6FF] selection:text-white pb-0 flex flex-col justify-between">
      
      <style dangerouslySetInnerHTML={{__html: `
        .font-body { font-family: 'Inter', sans-serif; }
        .font-heading { font-family: 'Montserrat', sans-serif; }
      `}} />

      <TechNavbar currentPage={currentPage} onPageChange={setCurrentPage} onNavigate={onNavigate} />

      <main className="relative z-10 w-full flex-1 flex flex-col justify-start">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-1 flex flex-col"
        >
          {renderPage()}
        </motion.div>
      </main>

      <TechFooter 
        onNavigate={onNavigate} 
        onPageChange={setCurrentPage} 
        hideContactForm={["privacy", "terms", "disclaimer", "cookies", "solutions/aws-ec2-to-serverless", "solutions/nodejs-memory-leak-fix", "solutions/legacy-angular-migration", "solutions/saas-vapt-remediation", "solutions/mongodb-optimization"].includes(currentPage)}
      />

    </div>
  );
}