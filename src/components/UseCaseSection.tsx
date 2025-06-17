
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Phone, Calendar, Headphones, Repeat } from 'lucide-react';

const UseCaseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const useCases = [
    {
      id: 1,
      title: 'Outbound Sales',
      icon: Phone,
      stats: '50K+ calls daily',
      description: 'Qualify leads and book meetings automatically',
      gradient: 'from-blue-500 to-indigo-600',
      environment: 'Office Environment',
      features: ['Lead Qualification', 'Meeting Booking', 'Follow-up Automation'],
      bgPattern: 'bg-gradient-to-br from-blue-50 to-indigo-100'
    },
    {
      id: 2,
      title: 'Booking & Reminders',
      icon: Calendar,
      stats: '25K+ appointments scheduled',
      description: 'Automated scheduling and reminder system',
      gradient: 'from-green-500 to-emerald-600',
      environment: 'Calendar System',
      features: ['Smart Scheduling', 'Automated Reminders', 'Rescheduling'],
      bgPattern: 'bg-gradient-to-br from-green-50 to-emerald-100'
    },
    {
      id: 3,
      title: 'Customer Support',
      icon: Headphones,
      stats: '100K+ tickets resolved',
      description: '24/7 intelligent customer assistance',
      gradient: 'from-purple-500 to-violet-600',
      environment: 'Support Center',
      features: ['Instant Responses', 'Ticket Routing', 'Issue Resolution'],
      bgPattern: 'bg-gradient-to-br from-purple-50 to-violet-100'
    },
    {
      id: 4,
      title: 'Real-Time Integrations',
      icon: Repeat,
      stats: '500+ integrations active',
      description: 'Seamlessly connect with your existing tools',
      gradient: 'from-orange-500 to-red-600',
      environment: 'Integration Hub',
      features: ['CRM Sync', 'API Connections', 'Data Flow'],
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Voice Agents for Every Use Case
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with specialized AI agents designed for specific industry needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="relative group use-case-card"
              onMouseEnter={() => setHoveredCard(useCase.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 3D Cube Container */}
              <div className="relative w-full h-80 use-case-cube transition-transform duration-700 group-hover:use-case-rotate">
                {/* Front Face */}
                <div className={`absolute inset-0 w-full h-full ${useCase.bgPattern} rounded-2xl shadow-lg use-case-face border border-gray-200`}>
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {useCase.description}
                      </p>
                    </div>

                    <div>
                      <div className={`bg-gradient-to-r ${useCase.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block`}>
                        {useCase.stats}
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-gray-100">
                        <Play className="w-4 h-4 mr-2" />
                        Preview Demo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${useCase.gradient} rounded-2xl shadow-lg use-case-face use-case-back text-white`}>
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                        <useCase.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{useCase.environment}</h4>
                      <div className="space-y-2 mb-4">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-white/60 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                      variant="outline"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play AI in Action
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Environment Elements */}
              {hoveredCard === useCase.id && (
                <>
                  {/* Floating Icons Animation */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce z-10">
                    <useCase.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse z-10">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold text-gray-700 animate-fade-in z-10">
                    Live Now
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl py-12 px-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to See Your Use Case in Action?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience how our AI voice agents can transform your specific business operations with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                <Play className="w-5 h-5 mr-2" />
                Start Interactive Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Schedule Custom Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
