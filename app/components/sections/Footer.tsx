'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
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
      <section className="section-padding relative min-h-screen flex items-center">
        {/* Blue gradient effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top gradient */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent" />
          
          {/* Central blurred ellipse */}
          <div 
            className="absolute"
            style={{
              width: '273.13px',
              height: '831px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) rotate(58.05deg)',
              background: 'rgba(3, 20, 255, 0.3)',
              filter: 'blur(100px)',
            }}
          />
          
          {/* Bottom rectangle gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{
              width: '100%',
              height: '397px',
              background: 'linear-gradient(190.24deg, rgba(0, 7, 255, 0) 57.03%, rgba(3, 20, 255, 0.5) 79.38%, #5050FF 94.61%)'
            }}
          />
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
                className="font-bold text-text leading-tight tracking-tight font-optima"
                style={{ fontSize: '60px' }}
              >
                I will Make Million-Dollar Introductions While You Sleep
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-text-secondary leading-relaxed"
                style={{ 
                  fontSize: '18px',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                I connect the right people from <span className="text-primary underline">network</span>, matching <span className="text-primary underline">needs</span> and <span className="text-primary underline">timing</span>, making intros, and ensuring connections succeed.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-base border border-secondary"
                  style={{ backgroundColor: '#232E27' }}
                >
                  <Image
                    src="/images/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                    className="group-hover:animate-pulse"
                  />
                  Let&apos;s Connect
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Wolf image */}
            <motion.div
              variants={imageVariants}
              className="relative w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-2xl aspect-square">
                <Image
                  src="/images/wolf4.jpeg"
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
      <div className="border-t border-border/20 relative z-10">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Navigation Links */}
            <div>
              <h3 className="text-text font-semibold mb-4 text-lg">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#workflow" className="text-text-secondary hover:text-primary transition-colors duration-300">
                    Workflow
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-text-secondary hover:text-primary transition-colors duration-300">
                    Who is Vance
                  </a>
                </li>
                <li>
                  <a href="#network" className="text-text-secondary hover:text-primary transition-colors duration-300">
                    Our network
                  </a>
                </li>
                <li>
                  <a href="#press" className="text-text-secondary hover:text-primary transition-colors duration-300">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-text font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#terms" className="text-text-secondary hover:text-primary transition-colors duration-300">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-text-secondary hover:text-primary transition-colors duration-300">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-text font-semibold mb-4 text-lg">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-border/20 text-center">
            <p className="text-text-secondary text-sm">
              Copyright 2025 Vance.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
