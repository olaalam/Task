"use client";
import React from "react";
import { Zap, ChevronRight, Settings } from "lucide-react";

const RightPanel = () => {
  return (
    <div className="w-80 bg-[#1a1a1a] border-l border-gray-800 p-6">
      {/* Generate Response */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={16} className="text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Generate Response</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 block mb-2">Slug</label>
            <div className="text-sm text-gray-300 bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700">
              output
            </div>
          </div>
          
          <div>
            <label className="text-sm text-gray-400 block mb-2">Message</label>
            <div className="text-sm text-gray-500 bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700 min-h-[80px] flex items-center">
              Add an optional display message
            </div>
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-white">Conditions</span>
          <ChevronRight size={14} className="text-gray-500" />
        </div>
        <div className="text-xs text-gray-500">
          If {'{inputs.input}'} is True
        </div>
      </div>

      {/* Configuration */}
      <div>
        <div className="flex items-center gap-2 mb-4 pb-7">
          <Settings size={16} className="text-gray-400" />
          <h3 className="text-sm font-semibold text-white">Configuration</h3>
          <ChevronRight size={14} className="text-gray-500" />
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 block mb-2">Model</label>
            <div className="bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700 flex items-center justify-between">
              <span className="text-sm text-white">GPT-4-turbo</span>
              <ChevronRight size={14} className="text-gray-500" />
            </div>
          </div>
          
          <div>
            <label className="text-xs text-gray-400 block mb-2">Temperature</label>
            <div className="bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">0.7</span>
                <div className="flex gap-1">
                  <button className="text-gray-500 hover:text-white">−</button>
                  <button className="text-gray-500 hover:text-white">+</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label className="text-xs text-gray-400 block mb-2">Max Tokens</label>
            <div className="bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">400</span>
                <div className="flex gap-1">
                  <button className="text-gray-500 hover:text-white">−</button>
                  <button className="text-gray-500 hover:text-white">+</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label className="text-xs text-gray-400 block mb-2">Response Type</label>
            <div className="bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700 flex items-center justify-between">
              <span className="text-sm text-white">Text</span>
              <ChevronRight size={14} className="text-gray-500" />
            </div>
          </div>
          
          <div>
            <label className="text-xs text-gray-400 block mb-2">Prompt</label>
            <div className="bg-[#2a2a2a] rounded px-3 py-2 border border-gray-700 min-h-[60px]">
              <span className="text-xs text-gray-500">Enter your prompt here...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
