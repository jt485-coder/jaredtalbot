import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website_url_trap: '', // Honeypot field
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (formData.website_url_trap) {
      return;
    }

    // For now, just show a success message (frontend only)
    // Ready for Netlify Forms integration later
    setStatus({
      type: 'success',
      message: 'Message received. Jared will be in touch soon.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      website_url_trap: '',
    });

    // Clear status after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Content */}
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-mono text-orange-500/80 block mb-4">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Let's work together
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8 max-w-lg">
                If you need help with Bitcoin, tech, or building simple systems that actually work, 
                reach out directly. I prefer clear communication and practical next steps.
              </p>

              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>Based in Wexford, Ireland</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {/* 
                Form is ready for Netlify Forms integration:
                - Add name="contact" attribute to form
                - Add data-netlify="true" attribute
                - Add netlify-honeypot="website_url_trap" attribute
              */}
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
                data-testid="contact-form"
                // For Netlify Forms (uncomment when deploying):
                // name="contact"
                // data-netlify="true"
                // netlify-honeypot="website_url_trap"
              >
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="website_url_trap"
                  value={formData.website_url_trap}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-200"
                    placeholder="Your name"
                    data-testid="contact-name-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-200"
                    placeholder="you@example.com"
                    data-testid="contact-email-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-neutral-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all duration-200 resize-none"
                    placeholder="How can I help?"
                    data-testid="contact-message-input"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div 
                    className={`flex items-center gap-2 p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                    data-testid="contact-status"
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={18} strokeWidth={2} />
                    ) : (
                      <AlertCircle size={18} strokeWidth={2} />
                    )}
                    <span className="text-sm font-medium">{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold shadow-[0_10px_30px_rgba(234,88,12,0.2)] hover:shadow-[0_14px_40px_rgba(234,88,12,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                  data-testid="contact-submit-button"
                >
                  Send Message
                  <Send size={18} strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
