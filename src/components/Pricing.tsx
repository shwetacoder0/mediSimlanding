import React from 'react';
import { Check, Zap, Star, Crown, Clock, Database, MessageCircle, BookOpen, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      icon: <Zap className="h-6 w-6" />,
      description: "Try MediSim for 1 week",
      price: 0,
      period: "1 week trial",
      color: "blue",
      features: [
        "1 week free access",
        "Upload 3 medical reports",
        "Basic 3D visualizations",
        "30 minutes AI doctor chat",
        "Access to education section",
        "Basic report analysis"
      ],
      cta: "Start Free Trial",
      popular: false,
      action: "app"
    },
    {
      name: "Pro",
      icon: <Star className="h-6 w-6" />,
      description: "Perfect for individuals and families",
      price: 15,
      period: "month",
      color: "cyan",
      features: [
        "Everything in Free",
        "50 report scans per month",
        "200 minutes AI doctor consultations",
        "Large storage of 3D interactive models",
        "Advanced visualization features",
        "Priority AI doctor responses",
        "Detailed health insights",
        "Export reports and visualizations",
        "Family sharing (up to 4 members)"
      ],
      cta: "Get Pro",
      popular: true,
      action: "app"
    },
    {
      name: "Institution",
      icon: <Crown className="h-6 w-6" />,
      description: "For hospitals, clinics, and medical schools",
      price: 299,
      period: "month",
      color: "purple",
      features: [
        "Everything in Pro",
        "Unlimited report scans",
        "Unlimited AI doctor consultations",
        "Complete 3D model library",
        "Multi-user management dashboard",
        "Custom branding options",
        "Advanced analytics and reporting",
        "API access for integration",
        "Dedicated account manager",
        "HIPAA compliance tools",
        "Custom training materials",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      popular: false,
      action: "mailto"
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    const colors = {
      blue: {
        bg: popular ? 'bg-gradient-to-br from-blue-600/20 to-blue-700/20' : 'bg-white/5',
        text: popular ? 'text-white' : 'text-blue-400',
        border: popular ? 'border-blue-500/50' : 'border-white/10',
        button: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
        iconBg: popular ? 'bg-blue-500/20' : 'bg-blue-500/10'
      },
      cyan: {
        bg: popular ? 'bg-gradient-to-br from-cyan-600/20 to-cyan-700/20' : 'bg-white/5',
        text: popular ? 'text-white' : 'text-cyan-400',
        border: popular ? 'border-cyan-500/50' : 'border-white/10',
        button: 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white',
        iconBg: popular ? 'bg-cyan-500/20' : 'bg-cyan-500/10'
      },
      purple: {
        bg: popular ? 'bg-gradient-to-br from-purple-600/20 to-purple-700/20' : 'bg-white/5',
        text: popular ? 'text-white' : 'text-purple-400',
        border: popular ? 'border-purple-500/50' : 'border-white/10',
        button: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
        iconBg: popular ? 'bg-purple-500/20' : 'bg-purple-500/10'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handlePlanAction = (plan: typeof plans[0]) => {
    switch (plan.action) {
      case 'app':
        // Redirect to the app for both free trial and pro
        window.open('https://bolt.new/~/sb1-i4r2fbym', '_blank');
        break;
      case 'mailto':
        window.location.href = 'mailto:shwetacoder90@gmail.com?subject=MediSim Institution Plan Inquiry&body=Hi, I am interested in the MediSim Institution plan for our organization. Please provide more details about pricing and implementation.';
        break;
    }
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Start with a free trial, then select the plan that fits your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${colorClasses.bg} backdrop-blur-sm border ${colorClasses.border} rounded-3xl p-8 ${
                  plan.popular ? 'scale-105 shadow-2xl shadow-cyan-500/25' : 'shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`${colorClasses.iconBg} ${colorClasses.text} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`${plan.popular ? 'text-gray-300' : 'text-gray-400'} mb-6`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                      ${plan.price}
                    </span>
                    <span className={`${plan.popular ? 'text-gray-300' : 'text-gray-400'} ml-2`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`${colorClasses.iconBg} ${colorClasses.text} w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                        <Check className="h-4 w-4" />
                      </div>
                      <span className={`${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlanAction(plan)}
                  className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular 
                      ? 'bg-white text-cyan-600 hover:shadow-lg' 
                      : `${colorClasses.button} hover:shadow-lg`
                  }`}
                >
                  {plan.action === 'mailto' && <Mail className="h-5 w-5" />}
                  <span>{plan.cta}</span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            🔒 All plans include secure data encryption and privacy protection
          </p>
          <p className="text-sm text-gray-500">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;