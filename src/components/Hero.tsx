import React, { useState } from 'react';
import { Play, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleDownload = (platform: 'ios' | 'android') => {
    if (platform === 'android') {
      // Use the provided Google Drive link for Android
      window.open('https://drive.google.com/file/d/1Ldk7enhLb8vy6KyAMJ-ENayOhP8Uas9P/view?usp=drive_link', '_blank');
    } else {
      // Use the same link for iOS for now
      window.open('https://drive.google.com/file/d/1Ldk7enhLb8vy6KyAMJ-ENayOhP8Uas9P/view?usp=drive_link', '_blank');
    }
  };

  return (
    <>
      <section className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8 space-y-8"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Star className="h-4 w-4 mr-2" />
                AI-Powered Medical Visualization
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  See Inside
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Your Body
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Upload your medical report and get instant 3D visualizations of your internal organs. 
                  Talk with an AI doctor who explains everything in simple terms.
                </p>
              </motion.div>

              {/* App Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownload('ios')}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-200"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download for iOS
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownload('android')}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-200"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download for Android
                </motion.button>
              </motion.div>

              {/* Watch Demo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-lg transition-colors"
                >
                  <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                    <Play className="h-5 w-5 text-blue-400" />
                  </div>
                  Watch Demo Video
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-gray-400">Reports Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">95%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">AI Doctor Available</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                      <img
                        src="/images/9.png"
                        alt="MediSim App Interface"
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">AI Doctor Online</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">3D View</div>
                    <div className="text-xs text-gray-300">Ready</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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

export default Hero;