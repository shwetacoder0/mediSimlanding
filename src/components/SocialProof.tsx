import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const logos = [
    { name: 'Johns Hopkins', logo: 'JH' },
    { name: 'Mayo Clinic', logo: 'MC' },
    { name: 'Cleveland Clinic', logo: 'CC' },
    { name: 'Harvard Medical', logo: 'HM' },
    { name: 'Stanford Medicine', logo: 'SM' },
    { name: 'UCSF Health', logo: 'UH' }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 font-medium">Trusted by leading medical institutions worldwide</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {logos.map((institution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg mb-2">
                {institution.logo}
              </div>
              <p className="text-xs text-gray-500 font-medium">{institution.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;