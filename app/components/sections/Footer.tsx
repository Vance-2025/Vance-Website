'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Main Footer Content */}
      <section className="section-padding relative flex items-center">
        {/* Curved blue shape flowing from previous section */}
        <div 
          className="absolute"
          style={{
            width: '100vw',
            height: '400px',
            left: '0',
            top: '-200px',
            backgroundImage: "url('https://res.cloudinary.com/doyhawzj1/image/upload/v1759960041/vance-website/vance-website/imagecopy2.png.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 5
          }}
        />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left side - Text content */}
            <motion.div
              variants={containerVariants}
              className="space-y-8 lg:space-y-10"
            >
                   <motion.h2
                     variants={itemVariants}
                     className="text-text leading-tight tracking-tight"
                     style={{ 
                       fontSize: '60px',
                       fontFamily: 'OptimaNovaLTProLight, Optima Nova LT Pro Light, serif',
                       fontWeight: 300
                     }}
                   >
                     I will Make Million-Dollar Introductions While You Sleep
                   </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-text-secondary leading-relaxed"
                style={{ 
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                I connect the right people from network, matching needs and timing, making intros, and ensuring connections succeed.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4 flex justify-center lg:justify-start"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-sm sm:text-base border border-secondary"
                  style={{ backgroundColor: '#232E27' }}
                >
                  <Image
                    src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960047/vance-website/vance-website/whatsapp-icon.png.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="group-hover:animate-pulse w-6 h-6 sm:w-7 sm:h-7"
                  />
                  Let&apos;s Connect
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Wolf image */}
            <motion.div
              variants={imageVariants}
              className="relative w-full flex justify-center lg:justify-end"
              style={{ marginTop: '100px' }}
            >
              <div className="relative w-full max-w-2xl aspect-square">
                <Image
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960036/vance-website/vance-website/footer.png.png"
                  alt="Vance - Professional Wolf with Tablet"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-border/50 relative z-10">
        <div className="container-custom py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-text font-bold mb-4 sm:mb-6 text-lg sm:text-xl">Vance.AI</h3>
              <p className="text-text-secondary leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
                Transform your professional network with Vance. We connect ambitious professionals with industry leaders, creating meaningful relationships that drive career success.
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Image
                    src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960045/vance-website/vance-website/Vector.png.png"
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-text font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Navigation</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#home');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#workflow" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#workflow');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    Workflow
                  </a>
                </li>
                <li>
                  <a 
                    href="#vance-intro" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#vance-intro');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    Who is Vance
                  </a>
                </li>
                <li>
                  <a 
                    href="#network" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#network');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    Our Network
                  </a>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-text font-semibold mb-4 sm:mb-6 text-base sm:text-lg">More</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a 
                    href="#press-media" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#press-media');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    Press & Media
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#faq');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="#social" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#social');
                    }}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer block text-sm sm:text-base"
                  >
                    Social
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-text-secondary hover:text-primary transition-colors duration-300 block text-sm sm:text-base">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-text-secondary hover:text-primary transition-colors duration-300 block text-sm sm:text-base">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-border/50 text-center">
            <p className="text-text-secondary text-xs sm:text-sm">
              Copyright 2025 Vance.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
