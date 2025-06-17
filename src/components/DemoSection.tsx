
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Volume2, MessageSquare, Phone } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See FluentAI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how our AI voice agents handle real conversations with human-like intelligence and natural speech patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Demo Cards */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Volume2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inbound Calls</h3>
            <p className="text-gray-600 mb-4">
              Handle customer inquiries, appointment bookings, and support requests automatically.
            </p>
            <Button variant="outline" className="w-full">
              <Play className="w-4 h-4 mr-2" />
              Listen to Demo
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Outbound Sales</h3>
            <p className="text-gray-600 mb-4">
              Qualify leads, schedule appointments, and follow up with prospects naturally.
            </p>
            <Button variant="outline" className="w-full">
              <Play className="w-4 h-4 mr-2" />
              Listen to Demo
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Scenarios</h3>
            <p className="text-gray-600 mb-4">
              Train your AI agent for specific use cases and industry requirements.
            </p>
            <Button variant="outline" className="w-full">
              <Play className="w-4 h-4 mr-2" />
              Listen to Demo
            </Button>
          </div>
        </div>

        {/* Interactive Demo Player */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Interactive Demo Call
            </h3>
            <p className="text-gray-600">
              Try a live conversation with our AI agent
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Play className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Ready to Start Demo Call?</h4>
            <p className="text-blue-100 mb-6">
              Click below to initiate a real-time conversation with our AI agent
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Start Demo Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
