import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-gray-800 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-b border-gray-800 h-12"></div>
          ))}
        </div>
      </div>

      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/20 via-blue-500/15 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-gradient-to-l from-blue-600/10 via-cyan-500/15 to-green-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and Status */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <div className="text-2xl font-bold mr-3">✱ scout</div>
            </div>
            
            {/* Status Indicator with Enhanced Glow */}
            <div className="relative inline-flex items-center">
              {/* Glowing background for status */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-md scale-125"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-sm scale-110"></div>

              {/* Status pill */}
              <div className="relative bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 flex items-center space-x-3">
                {/* Pulsing dot */}
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-300 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-green-100 font-medium text-sm tracking-wide">
                  ALL SYSTEMS OPERATIONAL
                </span>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-6">LINKS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-6">SOLUTIONS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Slack Bot
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Discord Bot
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Command
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Onsite Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-6">LEGAL</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-800">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2024 Scout. All rights reserved.
          </div>

          {/* Social Links - Fixed */}
          <div className="flex space-x-4">
            {/* Slack Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="Slack"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
            </a>

            {/* X (Twitter) Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle geometric decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
        <div className="w-full h-full border border-gray-700 transform rotate-45 translate-x-32 translate-y-32"></div>
      </div>
    </footer>
  );
};

export default Footer;