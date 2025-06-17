
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { 
  Bot, 
  Settings, 
  Code, 
  Mic, 
  Volume2, 
  Globe, 
  Phone,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const NoCodeBuilderSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [agentConfig, setAgentConfig] = useState({
    name: 'AI Assistant',
    voice: 'Clara',
    welcomeMessage: 'Hello! How can I help you today?',
    language: 'English (US)',
    recordCalls: true,
    responseSpeed: 50,
    personality: 'Professional'
  });

  const steps = [
    { id: 1, title: 'Configure Agent', icon: Bot },
    { id: 2, title: 'Customize Behavior', icon: Settings },
    { id: 3, title: 'Add to Website', icon: Code }
  ];

  const voices = ['Clara', 'Jordan', 'Sam', 'Alex', 'Emma', 'David'];
  const languages = ['English (US)', 'English (UK)', 'French', 'Spanish', 'German', 'Italian'];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Agent Name</label>
              <input
                type="text"
                value={agentConfig.name}
                onChange={(e) => setAgentConfig({...agentConfig, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter agent name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Voice Selection</label>
              <div className="grid grid-cols-3 gap-2">
                {voices.map((voice) => (
                  <button
                    key={voice}
                    onClick={() => setAgentConfig({...agentConfig, voice})}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      agentConfig.voice === voice
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {voice}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <select
                value={agentConfig.language}
                onChange={(e) => setAgentConfig({...agentConfig, language: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Welcome Message</label>
              <textarea
                value={agentConfig.welcomeMessage}
                onChange={(e) => setAgentConfig({...agentConfig, welcomeMessage: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Enter welcome message"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Response Speed</label>
              <Slider
                value={[agentConfig.responseSpeed]}
                onValueChange={(value) => setAgentConfig({...agentConfig, responseSpeed: value[0]})}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Slower</span>
                <span>Faster</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Call Recording</label>
              <button
                onClick={() => setAgentConfig({...agentConfig, recordCalls: !agentConfig.recordCalls})}
                className={`w-full p-3 rounded-lg border transition-all ${
                  agentConfig.recordCalls
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {agentConfig.recordCalls ? 'Recording Enabled' : 'Recording Disabled'}
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Embed Code</h4>
              <code className="text-sm bg-white p-3 rounded border block">
                {`<script src="https://fluentai.com/embed.js"></script>`}
                <br />
                {`<div id="fluentai-widget" data-agent-id="your-agent-id"></div>`}
              </code>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Agent configured successfully</span>
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Voice training completed</span>
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Ready for deployment</span>
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Deploy Agent
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build Your AI Agent in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No coding required. Configure, customize, and deploy your AI voice agent with our intuitive visual builder.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      currentStep >= step.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="ml-3">
                    <p className={`font-medium ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'}`} />
                  )}
                </div>
              ))}
            </div>

            <Card className="min-h-[400px] transform transition-all duration-500 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <div className="mr-3">
                    {React.createElement(steps[currentStep - 1].icon, { className: "w-6 h-6" })}
                  </div>
                  {steps[currentStep - 1].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderStepContent()}
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                disabled={currentStep === 3}
                className="flex items-center"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="sticky top-8">
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Volume2 className="w-6 h-6 mr-2" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{agentConfig.name}</h3>
                  <p className="text-blue-100">{agentConfig.voice} Voice</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm text-blue-100">Welcome Message:</div>
                    <div className="text-white font-medium">{agentConfig.welcomeMessage}</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm text-blue-100">Language:</div>
                    <div className="text-white font-medium">{agentConfig.language}</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm text-blue-100">Recording:</div>
                    <div className="text-white font-medium">
                      {agentConfig.recordCalls ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center items-end space-x-1 h-12 mb-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white/60 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 40 + 10}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm">Voice simulation active</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoCodeBuilderSection;
