import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Globe, Cpu, ExternalLink } from 'lucide-react';

const RouteCards = () => {
  const projects = [
    {
      id: 'jared-fixes',
      badge: 'Main Project',
      title: 'JaredFixes',
      description: 'Simple websites for local businesses and patient tech help at home. Based in Oylegate, Co. Wexford, plus remote help.',
      features: [
        'Fast, good-looking websites for small businesses',
        'Get found on Google: business profiles, search tools and analytics',
        'Device setup, security basics and simple AI help'
      ],
      url: 'https://www.jaredfixes.com',
      ctaText: 'Visit JaredFixes',
      icon: Wrench,
      isPrimary: true,
    },
    {
      id: 'websites-digital-projects',
      badge: 'What I Do',
      title: 'Websites & Digital Projects',
      description: 'Clear, useful websites and practical improvements to the tools people use every day.',
      features: [
        'Website planning, content and improvements',
        'Organising files and digital workflows',
        'Practical tools that make everyday tasks easier'
      ],
      url: null,
      icon: Globe,
      isPrimary: false,
    },
    {
      id: 'simple-systems',
      badge: 'Personal projects',
      title: 'Simple Systems',
      description: 'Exploring practical ways to organise information, simplify everyday tasks and make useful technology easier to work with.',
      features: null,
      url: null,
      icon: Cpu,
      isPrimary: false,
      isSmall: true,
    },
  ];

  return (
    <section 
      id="work" 
      className="py-24 md:py-32"
      data-testid="work-section"
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
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              What I'm working on
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md md:text-right">
            Websites, digital projects and practical help built around real needs.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Primary Card - JaredFixes (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 md:row-span-2"
          >
            <ProjectCard project={projects[0]} />
          </motion.div>

          {/* Secondary Card - Websites & Digital Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <ProjectCard project={projects[1]} />
          </motion.div>

          {/* Tertiary Card - Simple Systems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4"
          >
            <ProjectCard project={projects[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  
  return (
    <div
      className={`group relative h-full bg-white/[0.03] backdrop-blur-xl border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
        project.isPrimary 
          ? 'border-orange-500/30 hover:border-orange-500/50 hover:shadow-[0_8px_40px_rgba(234,88,12,0.15)]' 
          : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
      }`}
      data-testid={`project-card-${project.id}`}
    >
      {/* Primary glow effect */}
      {project.isPrimary && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
      )}

      <div className="relative z-10">
        {/* Badge */}
        <div className="flex items-center justify-between mb-6">
          <span 
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
              project.isPrimary 
                ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                : 'bg-white/5 text-neutral-400 border border-white/10'
            }`}
          >
            {project.badge}
          </span>
          <Icon 
            size={project.isPrimary ? 28 : 22} 
            className={project.isPrimary ? 'text-orange-400' : 'text-neutral-500'} 
            strokeWidth={1.5} 
          />
        </div>

        {/* Title */}
        <h3 
          className={`font-medium tracking-tight text-white mb-3 ${
            project.isPrimary ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        {project.features && (
          <ul className="space-y-3 mb-8">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-300">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 ${project.isPrimary ? 'bg-orange-500' : 'bg-neutral-500'}`} />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA - only shown when URL exists */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              project.isPrimary
                ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-[0_10px_30px_rgba(234,88,12,0.2)] hover:shadow-[0_14px_40px_rgba(234,88,12,0.3)]'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}
            data-testid={`project-cta-${project.id}`}
          >
            {project.ctaText}
            <ExternalLink size={16} strokeWidth={2} />
          </a>
        )}
      </div>
    </div>
  );
};

export default RouteCards;
