import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-16 md:py-24"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Copyright */}
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_0_12px_rgba(234,88,12,0.4)]" />
              <span className="text-neutral-500 text-sm">
                © {currentYear} Jared Talbot
              </span>
            </div>

            {/* Right - Tagline */}
            <span className="text-neutral-600 text-sm">
              Built independently. No noise. Just real solutions.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
