import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Circle } from 'lucide-react';

const ScoutPricingSection = () => {
  const features = {
    hobby: [
      "100 Interactions (GPT-3.5 Only)",
      "Deploy 1 App",
      "Connect 1 Collection",
      "10GB of Storage",
      "Community Support (Discord)"
    ],
    pro: [
      "Unlimited Interactions",
      "$0.09 per Interaction",
      "Deploy 10 Apps",
      "Connect 10 Collections",
      "1TB of Storage",
      "Community & Email Support"
    ],
    enterprise: [
      "Unlimited Interactions",
      "Custom Interaction Pricing",
      "Unlimited Apps",
      "Unlimited Collections",
      "Unlimited Storage",
      "Dedicated Support"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-medium mb-6">
            A plan for every need.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you are just starting or require massive scale, we have a solution.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Hobby Plan */}
          <Card className="bg-gray-900/50 border-gray-800 relative overflow-hidden">
            <CardHeader className="pb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">HOBBY</span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-light">$0</span>
              </div>
              <CardDescription className="text-gray-400 text-base leading-relaxed">
                Great for personal use or a first step to explore the Scout platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-white/30 hover:bg-gray-700 text-white py-3 rounded-full font-medium">
                Sign Up
              </Button>

              <div className="space-y-4">
                {features.hobby.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white/30 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pro Plan - Most Popular */}
          <Card className="bg-gradient-to-r from-[#685f6c] via-[#674f71] to-[#26222a] border border-gray-700 relative overflow-hidden transform scale-105">

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-[#685f6c] via-[#674f71] to-[#26222a] border shadow-2xl border-[#674f71] text-white px-4 py-1 rounded-b-lg text-xs font-medium z-99">
                MOST POPULAR
              </Badge>
            </div>
            <CardHeader className="pb-8 pt-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">PRO</span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-light">$50</span>
              </div>
              <CardDescription className="text-gray-400 text-base leading-relaxed">
                Perfect for building and scaling models with limited context.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button className="w-full bg-white text-black hover:bg-gray-100 py-3 rounded-full font-medium">
                Sign Up
              </Button>

              <div className="space-y-4">
                {features.pro.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white/30 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-gray-900/50 border-gray-800 relative overflow-hidden">
            <CardHeader className="pb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">ENTERPRISE</span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-light">Custom</span>
              </div>
              <CardDescription className="text-gray-400 text-base leading-relaxed">
                For large scale models with large and ever-changing context.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 py-3 rounded-full font-medium">
                Request Access
              </Button>

              <div className="space-y-4">
                {features.enterprise.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white/30 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScoutPricingSection;