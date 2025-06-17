
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IntegrationsSection = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const integrations = [
    {
      name: 'Twilio',
      icon: '📞',
      color: '#F22F46',
      benefit: 'Powerful voice & SMS APIs for seamless communication',
      position: { x: 0, y: -150, z: 0 }
    },
    {
      name: 'OpenAI',
      icon: '🤖',
      color: '#00A67E',
      benefit: 'Advanced AI models for intelligent conversations',
      position: { x: 106, y: -106, z: 0 }
    },
    {
      name: 'Zapier',
      icon: '⚡',
      color: '#FF4A00',
      benefit: 'Connect 5,000+ apps with automated workflows',
      position: { x: 150, y: 0, z: 0 }
    },
    {
      name: 'GoHighLevel',
      icon: '📈',
      color: '#7C3AED',
      benefit: 'All-in-one CRM and marketing automation',
      position: { x: 106, y: 106, z: 0 }
    },
    {
      name: 'Google Calendar',
      icon: '📅',
      color: '#4285F4',
      benefit: 'Smart scheduling and appointment management',
      position: { x: 0, y: 150, z: 0 }
    },
    {
      name: 'ElevenLabs',
      icon: '🎤',
      color: '#8B5CF6',
      benefit: '1-click voice cloning with realistic AI voices',
      position: { x: -106, y: 106, z: 0 }
    },
    {
      name: 'n8n',
      icon: '🔗',
      color: '#EA4560',
      benefit: 'Advanced workflow automation for complex integrations',
      position: { x: -150, y: 0, z: 0 }
    },
    {
      name: 'Webhook',
      icon: '🔄',
      color: '#10B981',
      benefit: 'Real-time data sync and custom integrations',
      position: { x: -106, y: -106, z: 0 }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seamless <span className="text-blue-600">Integrations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your favorite tools and platforms. Our AI agents work with the systems you already use.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[500px]">
          {/* 3D Rotating Orb Container */}
          <div className="relative w-80 h-80 mx-auto" style={{ perspective: '1000px' }}>
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  className="absolute w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer shadow-xl border-4 border-white"
                  style={{
                    backgroundColor: integration.color,
                    transform: `translate3d(${integration.position.x}px, ${integration.position.y}px, ${integration.position.z}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-32px',
                    marginTop: '-32px'
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotateY: 0,
                    zIndex: 10
                  }}
                  onHoverStart={() => setHoveredLogo(integration.name)}
                  onHoverEnd={() => setHoveredLogo(null)}
                  transition={{ duration: 0.3 }}
                >
                  <span className="filter brightness-0 invert">
                    {integration.icon}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tooltip */}
            {hoveredLogo && (
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 bg-white rounded-lg shadow-2xl p-6 max-w-sm z-20"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {hoveredLogo}
                  </h3>
                  <p className="text-gray-600">
                    {integrations.find(i => i.name === hoveredLogo)?.benefit}
                  </p>
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
              </motion.div>
            )}
          </div>

          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            And many more integrations coming soon...
          </p>
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Integrations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
