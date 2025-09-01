"use client";
import React from "react";
import { BarChart3, Play, Square, Plus, ChevronRight } from "lucide-react";

interface Action {
  icon: React.ElementType;
  title: string;
  type: string;
  variable: string;
}

interface MainContentProps {
  activeTab: string;
  actions: Action[];
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, actions }) => {
  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 size={16} className="text-white" />
          </div>
          <h2 className="text-xl font-semibold text-white">{activeTab}</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <Play size={16} className="text-white" />
          </button>
          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <Square size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium text-white">Inputs</h3>
          <Plus size={16} className="text-gray-400 cursor-pointer hover:text-white" />
        </div>
        <div className="space-y-3">
          <div className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">User Name</span>
              <span className="text-xs text-blue-400">user_name</span>
            </div>
          </div>
          <div className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Profile</span>
              <span className="text-xs text-blue-400">profile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Section */}
      <div>
        <div className="flex items-center gap-2 pb-2">
          <h3 className="text-lg font-medium text-white">Actions</h3>
          <Plus size={16} className="text-gray-400 cursor-pointer hover:text-white" />
        </div>
        <div className="space-y-3 mb-6">
          {actions.map((action, index) => (
            <div key={index} className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                  <action.icon size={16} className="text-gray-300" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white mb-1">{action.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-yellow-600 rounded text-xs text-white">
                      {action.type}
                    </span>
                    <span className="text-xs text-gray-400">• {action.variable}</span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
