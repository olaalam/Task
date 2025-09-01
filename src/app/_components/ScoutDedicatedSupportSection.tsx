import React from 'react';
import { Check, Plus } from 'lucide-react';

const ScoutDedicatedSupportSection = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-5xl w-full shadow-2xl border border-gray-800">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Dedicated Support
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are here to help get you started with a dedicated
                support engineer who can assist with scoping your first
                models and getting them deployed.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">
                WHAT&apos;S INCLUDED
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-300">Shared Slack Channel</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-300">Prompt Engineering Guidance</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-300">Dedicated Support Engineer</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-300">Context Sourcing Guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing Card */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 relative">
            <div className="absolute top-4 right-4">
              <div className="bg-[#674f71] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Plus className="w-4 h-4" />
                <span>ADD ON</span>
              </div>
            </div>
            
            <div className="pt-8 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">
                  $750
                </div>
                <div className="text-gray-400">
                  monthly
                </div>
              </div>
              
              <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Request Access
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                No long term contract obligation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScoutDedicatedSupportSection;