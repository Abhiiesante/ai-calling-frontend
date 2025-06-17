
import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Phone, 
  Mail, 
  Shield, 
  Upload, 
  Webhook,
  Clock,
  Globe,
  Zap,
  BarChart,
  Users,
  Settings
} from 'lucide-react';

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      icon: Brain,
      title: 'Real-time Text Messaging',
      description: 'Seamlessly integrate text messaging capabilities during voice calls for enhanced communication.',
      color: 'from-purple-500 to-indigo-600',
      particles: 'bg-purple-400'
    },
    {
      id: 2,
      icon: Phone,
      title: 'Call Forwarding',
      description: 'Intelligent call routing and forwarding based on availability and business rules.',
      color: 'from-blue-500 to-cyan-600',
      particles: 'bg-blue-400'
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email During Calls',
      description: 'Automatically send follow-up emails and documentation during or after calls.',
      color: 'from-green-500 to-emerald-600',
      particles: 'bg-green-400'
    },
    {
      id: 4,
      icon: Shield,
      title: 'GDPR & CCPA Compliance',
      description: 'Full compliance with data protection regulations ensuring secure customer interactions.',
      color: 'from-red-500 to-pink-600',
      particles: 'bg-red-400'
    },
    {
      id: 5,
      icon: Upload,
      title: 'Knowledge Base Upload',
      description: 'Upload and train your AI agent with custom knowledge bases and business information.',
      color: 'from-orange-500 to-yellow-600',
      particles: 'bg-orange-400'
    },
    {
      id: 6,
      icon: Webhook,
      title: 'Webhooks + Zapier',
      description: 'Connect with 5000+ applications through webhooks and Zapier integrations.',
      color: 'from-teal-500 to-cyan-600',
      particles: 'bg-teal-400'
    },
    {
      id: 7,
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a call with round-the-clock AI agent availability.',
      color: 'from-violet-500 to-purple-600',
      particles: 'bg-violet-400'
    },
    {
      id: 8,
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Communicate in 40+ languages with native-level fluency and cultural understanding.',
      color: 'from-indigo-500 to-blue-600',
      particles: 'bg-indigo-400'
    },
    {
      id: 9,
      icon: Zap,
      title: 'Instant Response',
      description: 'Zero wait times with immediate call answering and real-time processing.',
      color: 'from-yellow-500 to-orange-600',
      particles: 'bg-yellow-400'
    },
    {
      id: 10,
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive call insights, performance metrics, and business intelligence.',
      color: 'from-emerald-500 to-green-600',
      particles: 'bg-emerald-400'
    },
    {
      id: 11,
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless integration with existing team workflows and CRM systems.',
      color: 'from-pink-500 to-rose-600',
      particles: 'bg-pink-400'
    },
    {
      id: 12,
      icon: Settings,
      title: 'Custom Training',
      description: 'Train your AI agent with specific business knowledge and communication style.',
      color: 'from-gray-500 to-slate-600',
      particles: 'bg-gray-400'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Generate floating particles
  const generateParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className={`particle w-2 h-2 bg-blue-400/30 opacity-60`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${4 + Math.random() * 4}s`
        }}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden hex-grid">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {generateParticles()}
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI voice technology with our comprehensive feature set designed for enterprise-grade performance.
          </p>
        </div>

        {/* Hexagonal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: `translateZ(${hoveredFeature === feature.id ? '20px' : '0px'})`
              }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Hexagonal Cell */}
              <div className={`hex-cell relative h-40 bg-gradient-to-br ${feature.color} bg-opacity-20 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500`}>
                <div className="absolute inset-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 mb-3 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                {/* Hover particles */}
                {hoveredFeature === feature.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${feature.particles} rounded-full animate-ping`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Glass Panel Tooltip */}
              {hoveredFeature === feature.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 z-20 animate-fade-in">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mr-3`}>
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Glass panel reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-3xl py-16 px-8">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using FluentAI to automate their phone communications and scale their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
