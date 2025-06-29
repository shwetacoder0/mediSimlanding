import React from 'react';
import { Upload, Eye, MessageCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Medical Report Upload",
      description: "Upload your medical reports (PDF/image) and get instant AI-powered 3D visualizations of your internal organs.",
      image: "/images/report.png",
      color: "blue"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "3D Visualization",
      description: "See personalized 3D images of your internal organs based on your report data - like a mirror to see inside your body.",
      image: "/images/visualisation.png",
      color: "cyan"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Talking Doctor",
      description: "Chat with an AI doctor who explains your report in simple terms using personalized video and voice.",
      image: "/images/ai doctor.png",
      color: "purple"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education Section",
      description: "Explore interactive 3D body models, animated disease videos, and search any medical condition.",
      image: "/images/education.png",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', glow: 'shadow-blue-500/25' },
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20', glow: 'shadow-cyan-500/25' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', glow: 'shadow-purple-500/25' },
      green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20', glow: 'shadow-green-500/25' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Core Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to understand your medical reports and visualize your health
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white/5 backdrop-blur-sm border ${colorClasses.border} rounded-3xl overflow-hidden hover:shadow-2xl hover:${colorClasses.glow} transition-all duration-300 group`}
              >
                {/* Image Section */}
                <div className="relative h-90 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className={`${colorClasses.bg} ${colorClasses.text} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;