// src/app/_components/Sidebar.tsx
"use client";
import React from "react";
// Import the Font Awesome component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  Home, Inbox, BarChart3, Layers, Puzzle, FileText, Settings, Plus 
} from "lucide-react";

interface SidebarProps {
  apps: { name: string; active?: boolean }[];
  sidebarItems: { icon: any; label: string; badge?: string }[];
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ apps, sidebarItems, setActiveTab }) => {
  return (
    <div className="sm:w-full md:w-64 bg-[#0f0f0f] border-r border-gray-800 flex flex-col">
      {/* Main Navigation */}
      <div className="p-4 space-y-2">
        {sidebarItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
          >
            {/* Conditional rendering based on icon type */}
            {item.icon.prefix ? (
              // If it's a Font Awesome icon (has a 'prefix' property)
              <FontAwesomeIcon icon={item.icon} size="lg" className="text-gray-400" />
            ) : (
              // If it's a Lucide icon (a React component)
              <item.icon size={16} className="text-gray-400" />
            )}
            <span className="text-sm text-gray-300 flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-blue-600 text-xs px-2 py-1 rounded text-white">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Apps Section */}
      <div className="px-4 py-2 border-t border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500 font-medium">Apps</span>
          <Plus size={14} className="text-gray-500 cursor-pointer hover:text-white" />
        </div>
        <div className="space-y-1">
          {apps.map((app, index) => (
            <div 
              key={index}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                app.active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab(app.name)}
            >
              <div className={`w-2 h-2 rounded-full ${app.active ? 'bg-green-500' : 'bg-gray-600'}`} />
              <span className="text-sm">{app.name}</span>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Sidebar;