
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, PhoneCall, Mic, MicOff, Volume2, Settings, User, MessageSquare, Waves } from 'lucide-react';

const LiveAICallSection = () => {
  const [isDialing, setIsDialing] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const [transcription, setTranscription] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('nick');

  const dialPadNumbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
  ];

  const agents = [
    {
      id: 'nick',
      name: 'Nick from CallFluent',
      specialty: 'General Support',
      avatar: 'N',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'sara',
      name: 'Sara - FAQ Expert',
      specialty: 'FAQ Specialist',
      avatar: 'S',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'alex',
      name: 'Alex - Technical',
      specialty: 'Technical Support',
      avatar: 'A',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const sampleTranscriptions = [
    "Hi! I'm Nick from CallFluent. How can I assist you today?",
    "I understand you're looking for information about our services.",
    "Let me help you with that. Our AI voice agents can handle customer support, sales calls, and appointment booking.",
    "Would you like me to explain how we can customize an agent for your specific business needs?"
  ];

  const handleStartCall = () => {
    setIsDialing(true);
    setTimeout(() => {
      setIsDialing(false);
      setIsCallActive(true);
      simulateConversation();
    }, 2000);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setTranscription('');
  };

  const simulateConversation = () => {
    let index = 0;
    const typeText = (text: string) => {
      setTranscription('');
      let charIndex = 0;
      const interval = setInterval(() => {
        setTranscription(text.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index++;
            if (index < sampleTranscriptions.length && isCallActive) {
              typeText(sampleTranscriptions[index]);
            }
          }, 2000);
        }
      }, 50);
    };
    typeText(sampleTranscriptions[0]);
  };

  useEffect(() => {
    if (!isCallActive) {
      setTranscription('');
    }
  }, [isCallActive]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Live AI Call Experience
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience real-time AI conversations with our advanced voice agents. 
            Watch live transcription and interact naturally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Agent Selection & Controls */}
          <div className="space-y-8">
            {/* Agent Selection */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Choose Your AI Agent
                </h3>
                <div className="space-y-3">
                  {agents.map((agent) => (
                    <button
                      key={agent.id}
                      onClick={() => setSelectedAgent(agent.id)}
                      className={`w-full p-4 rounded-lg border transition-all ${
                        selectedAgent === agent.id
                          ? 'border-blue-400 bg-blue-400/20'
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${agent.color} flex items-center justify-center text-white font-bold`}>
                          {agent.avatar}
                        </div>
                        <div className="text-left">
                          <div className="text-white font-medium">{agent.name}</div>
                          <div className="text-blue-200 text-sm">{agent.specialty}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 3D Dialer */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 relative overflow-hidden">
              <CardContent className="p-8">
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50"></div>
                
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  3D Holographic Dialer
                </h3>

                {/* Dial Pad */}
                <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-6">
                  {dialPadNumbers.flat().map((number) => (
                    <button
                      key={number}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg border border-white/30 text-white font-bold text-xl hover:from-blue-400/40 hover:to-purple-400/40 transition-all transform hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                      style={{
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {number}
                    </button>
                  ))}
                </div>

                {/* Call Controls */}
                <div className="flex justify-center space-x-4">
                  {!isCallActive ? (
                    <Button
                      onClick={handleStartCall}
                      disabled={isDialing}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-green-500/25"
                    >
                      {isDialing ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      ) : (
                        <Phone className="w-6 h-6" />
                      )}
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={() => setIsMicEnabled(!isMicEnabled)}
                        className={`rounded-full w-12 h-12 p-0 ${
                          isMicEnabled 
                            ? 'bg-blue-500 hover:bg-blue-600' 
                            : 'bg-red-500 hover:bg-red-600'
                        }`}
                      >
                        {isMicEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                      </Button>
                      <Button
                        onClick={handleEndCall}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full w-16 h-16 p-0"
                      >
                        <PhoneCall className="w-6 h-6" />
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Call Interface */}
          <div className="space-y-8">
            {/* Active Agent Display */}
            {isCallActive && (
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${agents.find(a => a.id === selectedAgent)?.color} flex items-center justify-center text-white text-3xl font-bold relative`}>
                      {agents.find(a => a.id === selectedAgent)?.avatar}
                      
                      {/* Voice Wave Animation */}
                      {isCallActive && (
                        <>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute border-2 border-blue-400/60 rounded-full animate-ping"
                              style={{
                                width: `${100 + i * 30}px`,
                                height: `${100 + i * 30}px`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: '2s'
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {agents.find(a => a.id === selectedAgent)?.name}
                  </h3>
                  <div className="flex justify-center items-center space-x-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Call Active</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Holographic Waveform */}
            {isCallActive && (
              <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-300/30 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Waves className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-medium">Holographic Waveform</span>
                  </div>
                  
                  {/* 3D Waveform Visualization */}
                  <div className="flex justify-center items-end space-x-1 h-24 bg-gradient-to-t from-cyan-900/20 to-transparent rounded-lg p-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-80"
                        style={{
                          width: '4px',
                          height: `${Math.random() * 60 + 20}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1s',
                          boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Live Transcription Panel */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 min-h-[300px] relative overflow-hidden">
              {/* Curved Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">Live Transcription</span>
                  </div>
                  {isCallActive && (
                    <div className="flex items-center space-x-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Recording</span>
                    </div>
                  )}
                </div>

                <div className="bg-black/20 rounded-lg p-4 min-h-[200px] border border-white/10">
                  {isCallActive ? (
                    <div className="text-white font-mono text-lg leading-relaxed">
                      {transcription}
                      <span className="animate-pulse">|</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <Volume2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Start a call to see live transcription</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Settings */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-400">
                    Language: English (US) • Quality: HD
                  </div>
                  <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <PhoneCall className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Deploy Your AI Voice Agent?
              </h3>
              <p className="text-blue-200 mb-6">
                Experience the future of customer communication with our advanced AI voice technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveAICallSection;
