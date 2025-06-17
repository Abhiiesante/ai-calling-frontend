
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, Pause, Volume2, Globe } from 'lucide-react';

const VoiceDemoSection = () => {
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');

  const languages = [
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'en-UK', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'fr-FR', name: 'French', flag: '🇫🇷' },
    { code: 'es-ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'de-DE', name: 'German', flag: '🇩🇪' },
    { code: 'it-IT', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt-PT', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ja-JP', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko-KR', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh-CN', name: 'Chinese', flag: '🇨🇳' }
  ];

  const voices = [
    {
      id: 'clara',
      name: 'Clara',
      gender: 'Female',
      accent: 'American',
      useCase: 'Customer Support',
      description: 'Professional and warm tone',
      color: 'from-pink-400 to-purple-600'
    },
    {
      id: 'jordan',
      name: 'Jordan',
      gender: 'Male',
      accent: 'British',
      useCase: 'Sales & Marketing',
      description: 'Confident and persuasive',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 'sam',
      name: 'Sam',
      gender: 'Male',
      accent: 'American',
      useCase: 'Technical Support',
      description: 'Clear and knowledgeable',
      color: 'from-green-400 to-teal-600'
    },
    {
      id: 'jenny',
      name: 'Jenny',
      gender: 'Female',
      accent: 'Australian',
      useCase: 'Healthcare',
      description: 'Calm and reassuring',
      color: 'from-emerald-400 to-cyan-600'
    },
    {
      id: 'alex',
      name: 'Alex',
      gender: 'Neutral',
      accent: 'Canadian',
      useCase: 'Education',
      description: 'Friendly and engaging',
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 'maya',
      name: 'Maya',
      gender: 'Female',
      accent: 'Indian',
      useCase: 'Hospitality',
      description: 'Welcoming and helpful',
      color: 'from-violet-400 to-purple-600'
    }
  ];

  const handlePlayVoice = (voiceId: string) => {
    if (playingVoice === voiceId) {
      setPlayingVoice(null);
    } else {
      setPlayingVoice(voiceId);
      // Simulate stopping after 3 seconds
      setTimeout(() => {
        setPlayingVoice(null);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            400+ Neural AI Voices
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Experience human-like voices in 40+ languages. Each voice is powered by advanced neural networks for natural, expressive speech.
          </p>
          
          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                  selectedLanguage === lang.code
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Voice Avatars Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {voices.map((voice) => (
                <CarouselItem key={voice.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-white/40 transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* 3D Avatar */}
                      <div className="relative mb-6">
                        <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${voice.color} relative overflow-hidden shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300`}>
                          {/* Glass/Crystal Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                          <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                          
                          {/* Avatar Content */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-4xl font-bold text-white/90">
                              {voice.name.charAt(0)}
                            </div>
                          </div>

                          {/* Voice Waves Animation */}
                          {playingVoice === voice.id && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute border-2 border-white/40 rounded-full animate-ping"
                                  style={{
                                    width: `${40 + i * 20}px`,
                                    height: `${40 + i * 20}px`,
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: '1.5s'
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {/* Orbiting Language Flags */}
                          <div className="absolute inset-0">
                            {languages.slice(0, 3).map((lang, index) => (
                              <div
                                key={lang.code}
                                className={`absolute text-lg transition-all duration-300 ${
                                  playingVoice === voice.id ? 'animate-pulse' : ''
                                }`}
                                style={{
                                  top: '50%',
                                  left: '50%',
                                  transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(-60px) rotate(-${index * 120}deg)`,
                                  opacity: selectedLanguage === lang.code ? 1 : 0.6
                                }}
                              >
                                {lang.flag}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Play Button */}
                        <button
                          onClick={() => handlePlayVoice(voice.id)}
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110"
                        >
                          {playingVoice === voice.id ? (
                            <Pause className="w-5 h-5 text-purple-600" />
                          ) : (
                            <Play className="w-5 h-5 text-purple-600 ml-0.5" />
                          )}
                        </button>
                      </div>

                      {/* Voice Info */}
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-white">{voice.name}</h3>
                        <p className="text-purple-200">{voice.gender} • {voice.accent}</p>
                        <div className="bg-purple-600/30 rounded-full px-3 py-1 text-sm text-purple-200">
                          {voice.useCase}
                        </div>
                        <p className="text-sm text-purple-300">{voice.description}</p>
                      </div>

                      {/* Voice Waveform */}
                      {playingVoice === voice.id && (
                        <div className="mt-4 flex justify-center items-end space-x-1 h-8">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full animate-pulse"
                              style={{
                                height: `${Math.random() * 24 + 8}px`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '0.8s'
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
            <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <Volume2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Give Your Brand a Voice?
              </h3>
              <p className="text-purple-200 mb-6">
                Choose from our extensive library of neural voices or create a custom voice that perfectly matches your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Globe className="w-5 h-5 mr-2" />
                  Explore All Voices
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Create Custom Voice
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceDemoSection;
