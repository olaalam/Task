import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Target, 
  Settings, 
  Inbox,
  Plus,
  MoreHorizontal
} from 'lucide-react';

const ScoutAISection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-6 md:grid-cols-12 gap-6">
          
          {/* Left Column - AI where you work */}
          <div className="col-span-4 space-y-6">
            <Card className="bg-black border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <MessageSquare className="w-8 h-8 text-gray-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">AI where you work</h2>
                <p className="text-gray-400 mb-8">Deploy Scout Apps to Slack or Discord</p>
                
                {/* Bottom section with feature request */}
                <div className="mt-16">
                  <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-white" />
                      <span className="text-white text-sm">Feature request on Slack</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-medium">AI</span>
                    <div className="flex-1"></div>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                      ✨ Scout AI
                    </Badge>
                  </div>
                  
                  <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      <span className="text-blue-400 text-sm">Linear ticket for that feature</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Customize your AI */}
          <div className="col-span-4">
            <Card className="bg-black border-gray-700 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl">Customize your AI</CardTitle>
                <CardDescription className="text-gray-400">
                  Build custom workflows and apps in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Name</label>
                    <Input 
                      placeholder="Short answer" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Value</label>
                    <Input 
                      placeholder="Short answer" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Add Button */}
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                </Button>

                {/* Tabs */}
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-5 bg-gray-700/50 h-10">
                    <TabsTrigger value="text" className="data-[state=active]:bg-gray-600 text-xs">Text</TabsTrigger>
                    <TabsTrigger value="llm" className="data-[state=active]:bg-gray-600 text-xs">LLM</TabsTrigger>
                    <TabsTrigger value="web" className="data-[state=active]:bg-gray-600 text-xs">Web</TabsTrigger>
                    <TabsTrigger value="http" className="data-[state=active]:bg-gray-600 text-xs">HTTP</TabsTrigger>
                    <TabsTrigger value="save" className="data-[state=active]:bg-gray-600 text-xs">Save</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Access to the right data */}
          <div className="col-span-4">
            <Card className="bg-black border-gray-700 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl">Access to the right data</CardTitle>
                <CardDescription className="text-gray-400">
                  Control what your AI knows and what it forgets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* ELIS Account Card */}
                <div className="bg-black rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-purple-600 text-white text-sm">E</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-medium text-sm">ELIS Account</p>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    This is a sample data output which we can replace.
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="destructive" size="sm" className="text-xs">Delete</Button>
                    <Button variant="secondary" size="sm" className="bg-gray-600 text-white text-xs">Save</Button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3">
                  <div className="bg-black rounded-lg p-3">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-6 h-6 mt-0.5">
                        <AvatarFallback className="bg-purple-600 text-white text-xs">S</AvatarFallback>
                      </Avatar>
                      <p className="text-white text-sm">Thanks Scout. You just saved me a bunch of time</p>
                    </div>
                  </div>
                  
                  <div className="bg-black rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">Use the Inspect option to review previous runs</span>
                    </div>
                  </div>
                  
                  <div className="bg-black rounded-lg p-3">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-6 h-6 mt-0.5">
                        <AvatarFallback className="bg-purple-600 text-white text-xs">U</AvatarFallback>
                      </Avatar>
                      <p className="text-white text-sm">How do I replay a previous app run?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Three Feature Cards */}
        <div className="grid sm:grid-cols-6 md:grid-cols-12 gap-6 mt-6">
          <div className="col-span-4">
            <Card className="bg-black border-gray-700 h-full">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Accelerate your product</h3>
                  <p className="text-gray-400 text-sm">
                    Use Scout API to enable AI-features for your customers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-4">
            <Card className="bg-black border-gray-700 h-full">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automate your work</h3>
                  <p className="text-gray-400 text-sm">
                    Connect your existing tools and eliminate the busy work
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-4">
            <Card className="bg-black border-gray-700 h-full">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Inbox className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">An Inbox with superpowers</h3>
                  <p className="text-gray-400 text-sm">
                    Curate responses and review results for each interaction
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutAISection;