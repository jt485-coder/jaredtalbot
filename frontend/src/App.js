import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import RouteCards from './components/RouteCards';
import HowIWork from './components/HowIWork';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradient Glows */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Orange glow top left */}
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        {/* Subtle cyan glow top right */}
        <div 
          className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(76, 201, 240, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        {/* Subtle orange glow bottom */}
        <div 
          className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.3) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Navigation />
        <main>
          <Hero />
          <RouteCards />
          <HowIWork />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
