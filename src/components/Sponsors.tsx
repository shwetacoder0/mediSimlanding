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
      logo: '/images/elevenlabs.svg',
      url: 'https://elevenlabs.io'
    },
    {
      name: 'Tavus',
      logo: '/images/tavus.svg',
      url: 'https://tavus.io'
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-gray-300 font-semibold text-lg md:text-xl">Thanks to our amazing sponsors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
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
              whileHover={{ scale: 1.1, y: -4 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-white/10">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-10 md:h-12 lg:h-14 w-auto max-w-[140px] md:max-w-[160px] lg:max-w-[180px] object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
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