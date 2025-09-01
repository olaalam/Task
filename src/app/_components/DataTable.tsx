"use client";
import React, { useState } from "react";

import { Globe, Folder, Zap } from "lucide-react";
import MainContent from "./MainContent";
import RightPanel from "./RightPanel";
import Sidebar from "./Sidebar";
const DataTable = () => {
  const [activeTab, setActiveTab] = useState("Statsbot");

  const sidebarItems = [
    { icon: Globe, label: "Acme", badge: "4" },
    { icon: Folder, label: "Inbox" },
    { icon: Zap, label: "Analytics" },
  ];

  const apps = [
    { name: "Statsbot", active: true },
    { name: "Chief" },
    { name: "Docs" },
    { name: "Accounting" },
  ];

  const actions = [
    { icon: Globe, title: "Get Context From Website", type: "Website", variable: "website" },
    { icon: Folder, title: "Save", type: "Cache", variable: "save" },
    { icon: Zap, title: "Generate Response", type: "GPT-4 Turbo", variable: "output" },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="flex h-[900px]"> 
            <Sidebar apps={apps} sidebarItems={sidebarItems} setActiveTab={setActiveTab} />
            <MainContent activeTab={activeTab} actions={actions} />
            <RightPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
