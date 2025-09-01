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
      {/* Background Icons - Positioned to match image exactly */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left Column - Icons positioned vertically */}
        <div className="absolute left-4 md:left-16 top-0 h-full flex flex-col justify-between py-10 md:py-20">
          {/* Top Left - Chart Icon */}
          <div className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-10 border border-gray-700 flex items-center justify-center bg-gray-900/50 hover:border hover:border-white">
            <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          
          {/* Middle Left - Circle dot */}
          <div className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-10 border border-gray-700 flex items-center justify-center bg-gray-900/50 hover:border hover:border-white">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-gray-500 rounded-full"></div>
          </div>
          
          {/* Bottom Left - Code Icon */}
          <div className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-10 border border-gray-700 flex items-center justify-center bg-gray-900/50 hover:border hover:border-white">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
          </div>
        </div>

        {/* Right Column - Icons positioned vertically with offset */}
        <div className="absolute right-4 md:right-16 top-0 h-full flex flex-col justify-between py-10 md:py-20">
          {/* Top Right - Quote/Message Icon */}
          <div className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-10 border border-gray-700 flex items-center justify-center bg-gray-900/50 hover:border hover:border-white">
            <MessageSquare className="w-7 h-7 md:w-9 md:h-9 text-gray-400" />
          </div>
          
          {/* Middle Right - Briefcase Icon */}
          <div className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-10 border border-gray-700 flex items-center justify-center bg-gray-900/50 hover:border hover:border-white">
            <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
          </div>
          
          {/* Bottom Right - Database Icon */}
          <div className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-10 border border-gray-700 flex items-center justify-center bg-gray-900/50 hover:border hover:border-white">
            <Database className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
        <div className=" sm:max-w-xl md:max-w-4xl mx-auto text-center">
          {/* Main Quote */}
          <blockquote className="text-lg  lg:text-2xl font-normal leading-tight my-8 md:my-12">
            <span className="text-white">&quot;Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations.&quot;
            </span>
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-12 h-12 md:w-16 md:h-16">
              <AvatarImage src="/api/placeholder/64/64" alt="Vijaye Raji" />
              <AvatarFallback className="bg-gray-700 text-white text-lg">VR</AvatarFallback>
            </Avatar>
            
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Vijaye Raji</h3>
              <p className="text-gray-400 text-sm md:text-lg">CEO of Statsig</p>
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