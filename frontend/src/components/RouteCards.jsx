import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ExternalLink } from 'lucide-react';

const RouteCards = () => {
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
              Selected work
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md md:text-right">
            Websites, digital projects and practical help built around real needs.
          </p>
        </motion.div>

        {/* Featured Project - Puppet Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <FeaturedProject />
        </motion.div>

        {/* Compact Service Card - JaredFixes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ServiceCard />
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedProject = () => {
  return (
    <div
      className="group relative bg-white/[0.03] backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_8px_40px_rgba(234,88,12,0.15)]"
      data-testid="project-card-puppet-pathways"
    >
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Screenshot in understated browser frame */}
        <div className="order-1 lg:order-none">
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-neutral-600" />
              <span className="w-3 h-3 rounded-full bg-neutral-600" />
              <span className="w-3 h-3 rounded-full bg-neutral-600" />
              <div className="ml-3 flex-1 h-6 rounded-md bg-white/[0.04] border border-white/10 flex items-center px-3">
                <span className="text-[11px] text-neutral-500 font-mono truncate">
                  puppetpathways.com
                </span>
              </div>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/puppet-pathways-hero.webp`}
              alt="Puppet Pathways homepage"
              width="1200"
              height="675"
              loading="lazy"
              className="block w-full h-auto"
              data-testid="puppet-pathways-screenshot"
            />
          </div>
        </div>

        {/* Text content */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-orange-500/20 text-orange-300 border border-orange-500/30">
              Featured website project
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">
            Puppet Pathways
          </h3>

          <p className="text-neutral-400 leading-relaxed mb-5 text-base md:text-lg">
            A colourful, welcoming website for an educational puppetry business, bringing its
            school programme, puppet characters and event information together with clear ways
            to enquire.
          </p>

          <p className="text-neutral-300 leading-relaxed mb-8 text-sm md:text-base">
            <span className="text-neutral-500">Contribution — </span>
            Design, build, content, enquiry form and deployment.
          </p>

          <a
            href="https://puppetpathways.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-[0_10px_30px_rgba(234,88,12,0.2)] hover:shadow-[0_14px_40px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            data-testid="project-cta-puppet-pathways"
          >
            Visit Puppet Pathways
            <ExternalLink size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <div
      className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
      data-testid="project-card-jared-fixes"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 transition-colors duration-300">
            <Wrench size={22} className="text-neutral-400 group-hover:text-orange-400 transition-colors duration-300" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2">
              Need a website or tech help?
            </h3>
            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              Through JaredFixes, I build and look after websites for local businesses and offer
              patient everyday tech help. Based in Oylegate, Co. Wexford, plus remote help.
            </p>
          </div>
        </div>

        <a
          href="https://www.jaredfixes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          data-testid="project-cta-jared-fixes"
        >
          Visit JaredFixes
          <ExternalLink size={16} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
};

export default RouteCards;
