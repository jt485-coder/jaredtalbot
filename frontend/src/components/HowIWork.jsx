import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings, TrendingUp } from 'lucide-react';

const HowIWork = () => {
  const principles = [
    {
      icon: MessageSquare,
      title: 'Clear communication',
      description: 'Plain English, direct thinking, and practical next steps. No jargon or unnecessary complexity.',
    },
    {
      icon: Settings,
      title: 'Real-world solutions',
      description: 'Focus on solving actual problems and building useful systems — not theory for its own sake.',
    },
    {
      icon: TrendingUp,
      title: 'Independent thinking',
      description: 'I build independently, learn by doing, and care about systems that are trustworthy and resilient.',
    },
  ];

  return (
    <section 
      id="approach" 
      className="py-24 md:py-32"
      data-testid="how-i-work-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-orange-500/80 block mb-3">
              Trust
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              What you can expect
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md md:text-right">
            A simple approach focused on clarity, usefulness, and real outcomes.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PrincipleCard principle={principle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrincipleCard = ({ principle }) => {
  const Icon = principle.icon;
  
  return (
    <div 
      className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 h-full"
      data-testid={`principle-card-${principle.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-500/30 transition-colors duration-300">
        <Icon size={24} className="text-neutral-400 group-hover:text-orange-400 transition-colors duration-300" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-medium tracking-tight text-white mb-3">
        {principle.title}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed">
        {principle.description}
      </p>
    </div>
  );
};

export default HowIWork;
