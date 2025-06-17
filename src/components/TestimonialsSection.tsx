
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Agency Owner",
      company: "Digital Growth Co.",
      quote: "CallFluent transformed our lead generation process. We're now booking 3x more qualified meetings with zero manual effort.",
      rating: 5,
      image: "/placeholder.svg",
      waveform: [20, 35, 45, 60, 40, 25, 55, 70, 30, 45, 65, 25, 40, 55, 35],
      tone: "enthusiastic"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Sales Director",
      company: "TechStart Solutions",
      quote: "The AI handles objections better than most of our human reps. It's like having a top performer working 24/7.",
      rating: 5,
      image: "/placeholder.svg",
      waveform: [15, 40, 55, 35, 50, 65, 30, 45, 60, 25, 50, 40, 35, 55, 45],
      tone: "confident"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      company: "ServicePro Inc.",
      quote: "Our customer satisfaction scores increased by 40% after implementing CallFluent's support automation.",
      rating: 5,
      image: "/placeholder.svg",
      waveform: [25, 45, 35, 55, 40, 60, 30, 50, 45, 35, 55, 40, 25, 45, 50],
      tone: "satisfied"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Director",
      company: "Growth Labs",
      quote: "The booking system is incredibly intuitive. We've automated 90% of our appointment scheduling workflow.",
      rating: 5,
      image: "/placeholder.svg",
      waveform: [30, 50, 40, 65, 35, 55, 45, 40, 60, 30, 45, 55, 40, 35, 60],
      tone: "impressed"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "Efficiency First",
      quote: "CallFluent pays for itself within the first month. The ROI is absolutely incredible for our business.",
      rating: 5,
      image: "/placeholder.svg",
      waveform: [40, 30, 55, 45, 35, 50, 60, 35, 45, 55, 30, 40, 50, 45, 35],
      tone: "analytical"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const getCardPosition = (index: number) => {
    const totalCards = testimonials.length;
    const angleStep = 360 / totalCards;
    const currentAngle = (index - activeIndex) * angleStep;
    const radius = 300;
    
    const x = Math.sin((currentAngle * Math.PI) / 180) * radius;
    const z = Math.cos((currentAngle * Math.PI) / 180) * radius;
    const rotateY = -currentAngle;
    
    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
      opacity: Math.abs(currentAngle) > 90 ? 0.3 : 1,
      zIndex: Math.abs(currentAngle) > 90 ? 1 : 10
    };
  };

  const WaveformAnimation = ({ waveform, isActive, tone }: { waveform: number[], isActive: boolean, tone: string }) => {
    const [animationIndex, setAnimationIndex] = useState(0);

    useEffect(() => {
      if (!isActive) return;

      const interval = setInterval(() => {
        setAnimationIndex((prev) => (prev + 1) % waveform.length);
      }, 150);

      return () => clearInterval(interval);
    }, [isActive, waveform.length]);

    const getToneColor = (tone: string) => {
      switch (tone) {
        case 'enthusiastic': return 'bg-green-400';
        case 'confident': return 'bg-blue-400';
        case 'satisfied': return 'bg-purple-400';
        case 'impressed': return 'bg-orange-400';
        case 'analytical': return 'bg-indigo-400';
        default: return 'bg-gray-400';
      }
    };

    return (
      <div className="flex items-end justify-center space-x-1 h-12 mb-4">
        {waveform.map((height, index) => (
          <div
            key={index}
            className={`w-1 rounded-full transition-all duration-150 ${getToneColor(tone)} ${
              isActive && Math.abs(index - animationIndex) <= 2 ? 'opacity-100' : 'opacity-30'
            }`}
            style={{
              height: `${height}%`,
              transform: isActive && index === animationIndex ? 'scaleY(1.2)' : 'scaleY(1)'
            }}
          />
        ))}
      </div>
    );
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 transition-all duration-300 hover:scale-110 ${
              index < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden relative">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Quote className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Automating Success, One Call at a Time
            </h2>
            <Quote className="w-8 h-8 text-blue-400 ml-3 animate-pulse transform rotate-180" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how industry leaders are transforming their operations with AI-powered voice automation
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-96 mb-12" style={{ perspective: '1000px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute w-80 h-80 transition-all duration-800 ease-out cursor-pointer"
                style={getCardPosition(index)}
                onClick={() => goToTestimonial(index)}
              >
                {/* Card Backlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-110" />
                
                {/* Main Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  {/* Profile Section */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover bg-gray-800"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>

                  {/* Waveform Animation */}
                  <WaveformAnimation 
                    waveform={testimonial.waveform} 
                    isActive={index === activeIndex}
                    tone={testimonial.tone}
                  />

                  {/* Quote */}
                  <div className="text-center mb-4">
                    <p className="text-gray-200 text-sm leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex justify-center">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Dot Navigation */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-blue-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Active Testimonial Details */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              {testimonials[activeIndex].name}
            </h3>
            <p className="text-blue-300 mb-4">
              {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
            </p>
            <blockquote className="text-xl text-gray-200 italic leading-relaxed">
              "{testimonials[activeIndex].quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
