
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const waveformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateWaveform = () => {
      if (waveformRef.current) {
        const bars = waveformRef.current.children;
        Array.from(bars).forEach((bar, index) => {
          const element = bar as HTMLElement;
          const height = Math.random() * 60 + 20;
          element.style.height = `${height}px`;
          element.style.animationDelay = `${index * 0.1}s`;
        });
      }
    };

    const interval = setInterval(animateWaveform, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Voice Technology
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              AI Can Now
              <span className="block text-blue-600">Make & Take Calls</span>
              <span className="block">On Your Behalf!</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Human-like voice agents that automate inbound and outbound calls 24/7. 
              Scale your business with AI that sounds completely natural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg hover-scale"
              >
                <Phone className="w-5 h-5 mr-2" />
                Try a FREE Demo Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 hover:bg-gray-50"
              >
                <Play className="w-5 h-5 mr-2" />
                See Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Calls/Day</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* AI Assistant Visualization */}
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl">
              {/* Neural Network Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="border border-white/30 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* AI Assistant Character */}
              <div className="relative z-10 text-center text-white">
                <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">AI Voice Agent</h3>
                <p className="text-blue-100 mb-6">Ready to handle your calls</p>
                
                {/* Animated Waveform */}
                <div className="flex justify-center items-end space-x-1 h-16" ref={waveformRef}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-white/80 rounded-full transition-all duration-300"
                      style={{ height: `${Math.random() * 40 + 10}px` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
