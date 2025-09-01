import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  TrendingUp, 
  Layers, 
  MessageSquare, 
  Briefcase,
  Database,
  Code
} from 'lucide-react';

const ScoutTestimonialSection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Icons - Scattered around */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-32 left-32">
          <div className="w-16 h-16 border border-gray-700 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>

        
        {/* Left Side */}
        <div className="absolute top-80 left-48">
          <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-80 left-32">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        
        {/* Right Side */}
        <div className="absolute top-96 right-48">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-96 right-32">
          <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center">
            <Database className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        
        {/* Additional scattered icons */}
        <div className="absolute top-77 right-26">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Main Quote */}
          <blockquote className="text-2xl min-w-[60%] font-normal leading-tight my-12">
            <span className="text-white">
              "Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations."
            </span>
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/api/placeholder/64/64" alt="Vijaye Raji" />
              <AvatarFallback className="bg-gray-700 text-white text-lg">VR</AvatarFallback>
            </Avatar>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-1">Vijaye Raji</h3>
              <p className="text-gray-400 text-lg">CEO of Statsig</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20 pointer-events-none"></div>
    </div>
  );
};

export default ScoutTestimonialSection;