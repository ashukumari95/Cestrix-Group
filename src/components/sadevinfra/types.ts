/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type InfraPage = "home" | "projects" | "fleet" | "sustainability" | "tender";

export interface ProjectItem {
  id: string;
  title: string;
  category: "aviation" | "marine" | "energy" | "civil";
  status: "completed" | "underway" | "procurement";
  location: string;
  value: string;
  concreteSpec: string;
  steelWeight: string;
  progress: number;
  imageUrl: string;
  description: string;
}

export interface FleetAsset {
  id: string;
  name: string;
  category: "earthworks" | "frameworks" | "concrete";
  status: "active" | "maintenance" | "idle";
  telemetry: {
    gps: string;
    fuel: number;
    loadCapacity: string;
    operator: string;
    efficiency: number;
  };
  description: string;
  imageUrl: string;
}

export interface TenderInquiry {
  id: string;
  entityName: string;
  email: string;
  domain: string;
  concreteVolume: number;
  steelTonnage: number;
  estimatedCost: string;
  timestamp: string;
  status: "pending_review" | "approved" | "under_estimation";
}
