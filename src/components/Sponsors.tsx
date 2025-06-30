import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Supabase',
      logo: '/images/supa.png',
      url: 'https://supabase.com'
    },
    {
      name: 'Netlify',
      logo: '/images/netlify.svg',
      url: 'https://netlify.com'
    },
    {
      name: 'ElevenLabs',
      logo: '/images/elevenlabs.png',
      url: 'https://elevenlabs.io'
    },
    {
      name: 'Tavus',
      logo: '/images/tavus.svg',
      url: 'https://tavus.io'
    }
  ];

  return (
    <section className="pt-20 pb-8 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-gray-400 font-medium text-sm">Thanks to our amazing sponsors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/10">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-6 w-auto max-w-[100px] object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;