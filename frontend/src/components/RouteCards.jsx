import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Bitcoin, Cpu, ExternalLink } from 'lucide-react';

const RouteCards = () => {
  const routes = [
    {
      id: 'jared-fixes',
      badge: 'Primary Route',
      title: 'Jared Fixes',
      description: 'Practical tech support for everyday problems. Local help in Wexford plus remote assistance where it makes sense.',
      features: [
        'Device setup, troubleshooting, and clean-up',
        'Practical security and digital basics',
        'Simple AI help and clear problem-solving'
      ],
      url: 'https://jaredfixes.com',
      ctaText: 'Visit Jared Fixes',
      icon: Wrench,
      isPrimary: true,
    },
    {
      id: 'grow-your-btc',
      badge: 'Bitcoin Education',
      title: 'GrowYourBTC',
      description: 'Bitcoin guidance for people who want to secure, understand, and grow their BTC with confidence.',
      features: [
        'Bitcoin basics and long-term thinking',
        'Security, self-custody, and setup guidance',
        'Building conviction through understanding'
      ],
      url: 'https://growyourbtc.com',
      ctaText: 'Visit GrowYourBTC',
      icon: Bitcoin,
      isPrimary: false,
    },
    {
      id: 'simple-systems',
      badge: 'Supporting',
      title: 'Simple Systems',
      description: 'Digital projects, practical AI tools, and independent building. Systems designed to last.',
      features: [
        'Practical digital infrastructure',
        'Independent tools and automation',
        'Systems thinking applied'
      ],
      url: null,
      ctaText: 'Coming Soon',
      icon: Cpu,
      isPrimary: false,
      isSmall: true,
    },
  ];

  return (
    <section 
      id="routes" 
      className="py-24 md:py-32"
      data-testid="routes-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-orange-500/80 block mb-3">
              Choose Your Path
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Where can I help?
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md md:text-right">
            Pick the route that fits your needs. Tech support, Bitcoin, or systems thinking.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Primary Card - Jared Fixes (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 md:row-span-2"
          >
            <RouteCard route={routes[0]} />
          </motion.div>

          {/* Secondary Card - GrowYourBTC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <RouteCard route={routes[1]} />
          </motion.div>

          {/* Tertiary Card - Simple Systems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4"
          >
            <RouteCard route={routes[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RouteCard = ({ route }) => {
  const Icon = route.icon;
  
  return (
    <div
      className={`group relative h-full bg-white/[0.03] backdrop-blur-xl border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
        route.isPrimary 
          ? 'border-orange-500/30 hover:border-orange-500/50 hover:shadow-[0_8px_40px_rgba(234,88,12,0.15)]' 
          : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
      }`}
      data-testid={`route-card-${route.id}`}
    >
      {/* Primary glow effect */}
      {route.isPrimary && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
      )}

      <div className="relative z-10">
        {/* Badge */}
        <div className="flex items-center justify-between mb-6">
          <span 
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
              route.isPrimary 
                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                : 'bg-white/5 text-neutral-400 border border-white/10'
            }`}
          >
            {route.badge}
          </span>
          <Icon 
            size={route.isPrimary ? 28 : 22} 
            className={route.isPrimary ? 'text-orange-400' : 'text-neutral-500'} 
            strokeWidth={1.5} 
          />
        </div>

        {/* Title */}
        <h3 
          className={`font-medium tracking-tight text-white mb-3 ${
            route.isPrimary ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}
        >
          {route.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-6">
          {route.description}
        </p>

        {/* Features */}
        {!route.isSmall && (
          <ul className="space-y-3 mb-8">
            {route.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-300">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${route.isPrimary ? 'bg-orange-500' : 'bg-neutral-500'}`} />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        {route.url ? (
          <a
            href={route.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              route.isPrimary
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-[0_10px_30px_rgba(234,88,12,0.2)] hover:shadow-[0_14px_40px_rgba(234,88,12,0.3)]'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}
            data-testid={`route-cta-${route.id}`}
          >
            {route.ctaText}
            <ExternalLink size={16} strokeWidth={2} />
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-500 font-semibold cursor-not-allowed"
            data-testid={`route-cta-${route.id}`}
          >
            {route.ctaText}
          </span>
        )}
      </div>
    </div>
  );
};

export default RouteCards;
