
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Users, Mic, Clock } from 'lucide-react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Starter',
      id: 'starter',
      height: 250,
      monthlyPrice: 49,
      yearlyPrice: 29,
      description: 'Perfect for small businesses getting started',
      voiceAgents: 1,
      minutes: 180,
      voices: 3,
      features: [
        'Basic analytics',
        'Email support',
        'Standard voice quality',
        'CRM integration'
      ],
      popular: false,
      color: 'from-blue-400/20 to-blue-600/30',
      glowColor: 'shadow-blue-500/50',
      icons: [<Mic key="mic" className="w-6 h-6" />, <Clock key="clock" className="w-6 h-6" />]
    },
    {
      name: 'Business',
      id: 'business',
      height: 320,
      monthlyPrice: 149,
      yearlyPrice: 89,
      description: 'Ideal for growing businesses',
      voiceAgents: 3,
      minutes: 360,
      voices: 6,
      features: [
        'Advanced analytics',
        'Priority support',
        'HD voice quality',
        'Custom training',
        'Webhook integration',
        'API access'
      ],
      popular: true,
      color: 'from-purple-400/20 to-purple-600/30',
      glowColor: 'shadow-purple-500/50',
      icons: [<Users key="users" className="w-6 h-6" />, <Zap key="zap" className="w-6 h-6" />]
    },
    {
      name: 'Agency',
      id: 'agency',
      height: 280,
      monthlyPrice: 399,
      yearlyPrice: 239,
      description: 'For agencies and large teams',
      voiceAgents: 30,
      minutes: 1600,
      voices: '100+',
      features: [
        'White-label solution',
        'Dedicated support',
        'Ultra HD voice',
        'Advanced integrations',
        'Custom branding',
        'SLA guarantee',
        'Multi-tenant dashboard'
      ],
      popular: false,
      color: 'from-emerald-400/20 to-emerald-600/30',
      glowColor: 'shadow-emerald-500/50',
      icons: [<Star key="star" className="w-6 h-6" />, <Check key="check" className="w-6 h-6" />]
    }
  ];

  const savingsPercentage = Math.round(((plans[1].monthlyPrice - plans[1].yearlyPrice) / plans[1].monthlyPrice) * 100);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Pricing Plan</span>
          </h2>
          
          {/* Plan Switcher */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !isYearly 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
                    isYearly 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    Save {savingsPercentage}%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Pricing Columns */}
        <div className="flex justify-center items-end space-x-8 mb-16" style={{ perspective: '1000px' }}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="relative group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                z: 50,
                rotateY: 5,
                rotateX: -5
              }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* 3D Column */}
              <div
                className={`relative bg-gradient-to-b ${plan.color} backdrop-blur-sm border border-white/10 rounded-2xl p-8 ${plan.glowColor} shadow-2xl`}
                style={{ 
                  height: `${plan.height}px`,
                  width: '280px',
                  transform: hoveredPlan === plan.id ? 'translateZ(20px)' : 'translateZ(0px)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Holographic shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse rounded-2xl" />
                
                {/* Floating icons */}
                {hoveredPlan === plan.id && (
                  <>
                    {plan.icons.map((icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        className="absolute text-white/60"
                        style={{
                          left: iconIndex === 0 ? '-40px' : '300px',
                          top: `${50 + iconIndex * 40}px`,
                        }}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ 
                          opacity: 1, 
                          x: iconIndex === 0 ? -10 : 10,
                          y: [0, -10, 0] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: iconIndex * 0.5 
                        }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </>
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-300 text-sm mb-6">{plan.description}</p>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-400 ml-1">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-green-400 text-sm mt-1">
                        Save ${plan.monthlyPrice - plan.yearlyPrice}/month
                      </p>
                    )}
                  </div>

                  {/* Key stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Voice Agents</span>
                      <span className="text-white font-semibold">{plan.voiceAgents}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Minutes</span>
                      <span className="text-white font-semibold">{plan.minutes}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Voices</span>
                      <span className="text-white font-semibold">{plan.voices}</span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full py-3 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    } transition-all duration-300`}
                  >
                    Get Started Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="text-slate-400 text-sm">
            * Twilio account required for phone number
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
