import React, { useState } from 'react';
import { Upload, Eye, MessageCircle, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';

const HowItWorks = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Your Report",
      description: "Simply drag & drop or upload your medical report as PDF or image. Our advanced AI instantly analyzes the data and extracts key medical information.",
      color: "blue",
      image: "/images/report.png",
      details: [
        "Supports PDF, JPG, PNG formats",
        "Instant AI analysis",
        "Secure data processing"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "See 3D Visualization",
      description: "Get stunning personalized 3D images of your internal organs based on your report data. It's like having X-ray vision into your own body.",
      color: "cyan",
      image: "/images/visualisation.png",
      details: [
        "Interactive 3D models",
        "Personalized to your data",
        "High-quality rendering"
      ]
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Talk with AI Doctor",
      description: "Ask questions and get detailed explanations in simple terms from your personal AI doctor. Get video responses and voice explanations.",
      color: "purple",
      image: "/images/ai doctor.png",
      details: [
        "24/7 AI doctor availability",
        "Simple explanations",
        "Video & voice responses"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { 
        bg: 'bg-blue-500/10', 
        text: 'text-blue-400', 
        gradient: 'from-blue-500 to-blue-600',
        glow: 'shadow-blue-500/25',
        border: 'border-blue-500/30'
      },
      cyan: { 
        bg: 'bg-cyan-500/10', 
        text: 'text-cyan-400', 
        gradient: 'from-cyan-500 to-cyan-600',
        glow: 'shadow-cyan-500/25',
        border: 'border-cyan-500/30'
      },
      purple: { 
        bg: 'bg-purple-500/10', 
        text: 'text-purple-400', 
        gradient: 'from-purple-500 to-purple-600',
        glow: 'shadow-purple-500/25',
        border: 'border-purple-500/30'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8"
            >
              <Play className="h-4 w-4 mr-2" />
              Simple 3-Step Process
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              How It
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transform your medical reports into interactive 3D visualizations in just three simple steps
            </p>
          </motion.div>

          {/* Interactive Steps */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Step Navigation */}
            <div className="space-y-8">
              {steps.map((step, index) => {
                const colorClasses = getColorClasses(step.color);
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`bg-white/5 backdrop-blur-sm border ${
                      isActive ? `${colorClasses.border} shadow-2xl ${colorClasses.glow}` : 'border-white/10'
                    } rounded-3xl p-8 transition-all duration-500`}>
                      
                      {/* Step Number & Icon */}
                      <div className="flex items-center mb-6">
                        <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg`}>
                          {index + 1}
                        </div>
                        
                        <div className={`${colorClasses.bg} ${colorClasses.text} w-14 h-14 rounded-xl flex items-center justify-center`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-300'
                      }`}>
                        {step.title}
                      </h3>
                      
                      <p className={`leading-relaxed text-lg mb-6 transition-colors duration-300 ${
                        isActive ? 'text-gray-300' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm">
                            <CheckCircle className={`h-4 w-4 mr-3 ${colorClasses.text}`} />
                            <span className={isActive ? 'text-gray-300' : 'text-gray-500'}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Arrow for active step */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
                        >
                          <ArrowRight className={`h-8 w-8 ${colorClasses.text}`} />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side - Visual Display */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", damping: 20 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className={`inline-flex items-center ${getColorClasses(steps[activeStep].color).bg} ${getColorClasses(steps[activeStep].color).text} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                    Step {activeStep + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-gray-300">
                    {steps[activeStep].description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${getColorClasses(steps[activeStep].color).bg} rounded-full flex items-center justify-center`}>
                  {steps[activeStep].icon}
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-xs text-gray-300">Accuracy</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">&lt;30s</div>
                  <div className="text-xs text-gray-300">Processing</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8"
              >
                <Play className="h-4 w-4 mr-2" />
                See It In Action
              </motion.div>

              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to See Inside Your Body?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience the future of medical visualization. Upload your first report and discover what's inside your body in stunning 3D detail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200 flex items-center space-x-3"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-200"
                >
                  Start Free Trial
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-center items-center space-x-8 mt-10 text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">No Setup Required</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </>
  );
};

export default HowItWorks;