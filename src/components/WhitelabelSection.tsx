
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhitelabelSection = () => {
  const [currentTheme, setCurrentTheme] = useState('default');

  const themes = {
    default: {
      name: 'Default Theme',
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      accentColor: '#F59E0B',
      bgColor: 'from-blue-50 to-indigo-100',
      logo: '🚀'
    },
    medical: {
      name: 'Medical Theme',
      primaryColor: '#10B981',
      secondaryColor: '#059669',
      accentColor: '#F59E0B',
      bgColor: 'from-green-50 to-emerald-100',
      logo: '🏥'
    },
    finance: {
      name: 'Finance Theme',
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      accentColor: '#F59E0B',
      bgColor: 'from-purple-50 to-violet-100',
      logo: '💼'
    },
    education: {
      name: 'Education Theme',
      primaryColor: '#F59E0B',
      secondaryColor: '#D97706',
      accentColor: '#3B82F6',
      bgColor: 'from-amber-50 to-orange-100',
      logo: '🎓'
    }
  };

  const customizationFeatures = [
    { icon: '🎨', title: 'Custom Branding', desc: 'Your logo, colors, and fonts' },
    { icon: '📧', title: 'SMTP Setup', desc: 'Custom email configurations' },
    { icon: '🌐', title: 'Custom Domains', desc: 'Your own domain and subdomains' },
    { icon: '⚙️', title: 'White-label Dashboard', desc: 'Fully customized admin panel' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Branded iOS and Android apps' },
    { icon: '🔐', title: 'SSO Integration', desc: 'Single sign-on with your systems' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Whitelabel</span> & Brand Customization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make it yours. Complete white-label solution with custom branding, domains, and full customization control.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Dashboard Preview */}
          <div className="relative">
            <motion.div 
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
              style={{ perspective: '1000px' }}
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTheme}
                  className={`bg-gradient-to-br ${themes[currentTheme].bgColor} p-6`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl"
                        style={{ backgroundColor: themes[currentTheme].primaryColor }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        {themes[currentTheme].logo}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900">Your Brand</h3>
                        <p className="text-sm text-gray-600">AI Voice Platform</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        style={{ borderTop: `3px solid ${themes[currentTheme].primaryColor}` }}
                      >
                        <div className="text-2xl font-bold mb-1" style={{ color: themes[currentTheme].primaryColor }}>
                          {i * 124}
                        </div>
                        <div className="text-sm text-gray-600">
                          {i === 1 ? 'Active Calls' : i === 2 ? 'Conversations' : 'Integrations'}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Performance Analytics</h4>
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: themes[currentTheme].accentColor }}
                      >
                        Live
                      </div>
                    </div>
                    <div className="h-20 flex items-end space-x-2">
                      {[40, 65, 45, 80, 60, 75, 55].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{ 
                            backgroundColor: themes[currentTheme].primaryColor,
                            height: `${height}%`,
                            opacity: 0.8
                          }}
                          animate={{ height: [`${height * 0.5}%`, `${height}%`] }}
                          transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Animated brush strokes */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: themes[currentTheme].primaryColor }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-1 h-full"
                  style={{ backgroundColor: themes[currentTheme].accentColor }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </motion.div>

            {/* Theme Selector Palette */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {Object.entries(themes).map(([key, theme]) => (
                <motion.button
                  key={key}
                  className="w-8 h-8 rounded-full border-4 border-white shadow-lg"
                  style={{ backgroundColor: theme.primaryColor }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentTheme(key)}
                />
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Complete Customization Control
            </motion.h3>

            {customizationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Whitelabel Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitelabelSection;
