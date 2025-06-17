
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to install anything?",
      answer: "No installation required! Our AI voice agents run completely in the cloud. Just connect your phone number through our web dashboard and you're ready to go. The entire setup takes less than 5 minutes.",
      color: 'from-blue-500/20 to-blue-700/30',
      glowColor: 'shadow-blue-500/30'
    },
    {
      question: "How do AI calls help sales?",
      answer: "AI voice agents work 24/7 to qualify leads, book appointments, and follow up with prospects. They can handle multiple conversations simultaneously, never miss a call, and consistently deliver your sales message with perfect recall of your product details.",
      color: 'from-purple-500/20 to-purple-700/30',
      glowColor: 'shadow-purple-500/30'
    },
    {
      question: "Is it hard to train the AI agent?",
      answer: "Not at all! Our no-code builder lets you train your AI agent in minutes. Simply upload your knowledge base, set conversation flows, and customize responses. The AI learns from every interaction and gets smarter over time.",
      color: 'from-emerald-500/20 to-emerald-700/30',
      glowColor: 'shadow-emerald-500/30'
    },
    {
      question: "What voice options exist?",
      answer: "Choose from 100+ premium AI voices in multiple languages and accents. We partner with ElevenLabs for ultra-realistic voice cloning - you can even clone your own voice with just a 1-minute sample. Each voice is optimized for natural conversation flow.",
      color: 'from-orange-500/20 to-orange-700/30',
      glowColor: 'shadow-orange-500/30'
    },
    {
      question: "How much does it cost to run?",
      answer: "Pricing is transparent and affordable. You only pay for the minutes used, starting at just $0.05 per minute. Most businesses save 60-80% compared to hiring human agents, while getting 24/7 availability and consistent performance.",
      color: 'from-pink-500/20 to-pink-700/30',
      glowColor: 'shadow-pink-500/30'
    },
    {
      question: "Can I integrate with my CRM?",
      answer: "Yes! We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and GoHighLevel. Your AI agent can automatically create leads, update contact records, and trigger workflows based on conversation outcomes.",
      color: 'from-cyan-500/20 to-cyan-700/30',
      glowColor: 'shadow-cyan-500/30'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
      {/* Floating particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our AI voice agents
          </p>
        </motion.div>

        {/* 3D Question Block Stack */}
        <div className="space-y-4" style={{ perspective: '1000px' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* 3D Block Container */}
              <motion.div
                className={`relative bg-gradient-to-br ${faq.color} backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer ${faq.glowColor} shadow-lg`}
                animate={{
                  rotateX: activeIndex === index ? -5 : 0,
                  rotateY: activeIndex === index ? 2 : 0,
                  z: activeIndex === index ? 20 : 0,
                  scale: activeIndex === index ? 1.02 : 1,
                }}
                whileHover={{
                  rotateX: -2,
                  rotateY: 1,
                  z: 10,
                  scale: 1.01
                }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleFAQ(index)}
              >
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Question Header */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                      animate={{
                        rotate: activeIndex === index ? 360 : 0,
                        scale: activeIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <HelpCircle className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  </motion.div>
                </div>

                {/* Answer Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ 
                        height: 0, 
                        opacity: 0,
                        rotateX: -90,
                      }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        rotateX: 0,
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        rotateX: -90,
                      }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      style={{ transformOrigin: 'top' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-white/10 pt-4">
                          <motion.p 
                            className="text-slate-300 leading-relaxed"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3D depth effect */}
                <div className="absolute inset-0 border border-white/5 rounded-xl transform translate-x-1 translate-y-1 -z-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-slate-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
