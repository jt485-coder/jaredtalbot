import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Eyebrow */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
                data-testid="hero-eyebrow"
              >
                <Zap size={14} className="text-orange-400" strokeWidth={2} />
                <span className="text-orange-200/90 text-xs tracking-[0.2em] uppercase font-mono font-medium">
                  Systems • Tech • Bitcoin
                </span>
              </div>

              {/* Headline */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95] text-white mb-6"
                data-testid="hero-headline"
              >
                Simple systems.<br />
                <span className="text-neutral-400">Real solutions.</span>
              </h1>

              {/* Subheadline */}
              <p 
                className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mb-8"
                data-testid="hero-subheadline"
              >
                I build practical tools and offer clear guidance across tech support, 
                Bitcoin education, and digital infrastructure. This is the central hub 
                — choose your path.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#routes"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold shadow-[0_14px_40px_rgba(234,88,12,0.25)] hover:shadow-[0_18px_50px_rgba(234,88,12,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                  data-testid="hero-cta-primary"
                >
                  Choose Your Route
                  <ArrowDown size={18} strokeWidth={2} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  data-testid="hero-cta-secondary"
                >
                  Request Help
                </a>
              </div>

              {/* Trust Pills */}
              <div className="flex flex-wrap gap-3" data-testid="hero-trust-pills">
                {['Built independently', 'No noise', 'Practical focus'].map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 text-sm font-medium"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Side Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div 
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10"
              data-testid="hero-side-panel"
            >
              <span className="text-xs tracking-[0.2em] uppercase font-mono text-orange-500/80 mb-4 block">
                How I Work
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                Clear thinking beats complexity.
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                I focus on building systems that are simple, effective, and built to last.
                The goal is always the same: remove confusion, increase control, create momentum.
              </p>

              <div className="space-y-3">
                {[
                  'Remove confusion',
                  'Increase control',
                  'Create momentum'
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 border border-white/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-neutral-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
