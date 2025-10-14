'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
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
            width: '130vw',
            height: '400px',
            left: '-15vw',
            top: '-200px',
            backgroundImage: `url('${CLOUDINARY_IMAGES.IMAGE_COPY_2}')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1
          }}
        />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10 pt-20 sm:pt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left"
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
                       fontSize: 'clamp(40px, 4vw, 60px)',
                       fontFamily: 'OptimaNovaLTRegular, serif',
                       fontWeight: 400
                     }}
                   >
                     I will Make Million-Dollar Introductions While You Sleep
                   </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-text-secondary leading-relaxed"
                style={{ 
                  fontSize: 'clamp(16px, 3vw, 18px)',
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
                  href="https://wa.me/message/M3TFOBX5HZDJJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                  animate={{ boxShadow: ['0 0 0 rgba(0, 255, 136, 0)', '0 0 18px rgba(0, 255, 136, 0.35)', '0 0 0 rgba(0, 255, 136, 0)'] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 text-white font-semibold px-4 sm:px-6 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-sm sm:text-base border border-secondary h-[46px] sm:h-[48px]"
                  style={{ backgroundColor: '#232E27' }}
                >
                  <Image
                    src={CLOUDINARY_IMAGES.WHATSAPP_ICON}
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="group-hover:animate-pulse w-7 h-7 sm:w-8 sm:h-8"
                  />
                  Let&apos;s Connect
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Wolf image */}
            <motion.div
              variants={imageVariants}
              className="relative w-full justify-center lg:justify-end hidden sm:flex"
              style={{ marginTop: '100px' }}
            >
              <div className="relative w-full max-w-2xl aspect-square">
                <Image
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1760002458/Generated_Image_September_24_2025_-_5_30PM_1_mbd727.png"
                  alt="Footer graphic"
                  fill
                  className="object-contain z-0"
                  priority
                />

                {/* Corner gradient overlays - covering image corners */}
                <Image
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1760002563/Ellipse_115_iuob6l.png"
                  alt=""
                  width={280}
                  height={280}
                  aria-hidden
                  draggable={false}
                  className="pointer-events-none select-none absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-48 h-48 sm:w-56 sm:h-56 opacity-90 z-10"
                />
                <Image
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1760002563/Ellipse_78_1_bw9krs.png"
                  alt=""
                  width={280}
                  height={280}
                  aria-hidden
                  draggable={false}
                  className="pointer-events-none select-none absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-48 h-48 sm:w-56 sm:h-56 opacity-90 z-10"
                />
                <Image
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1760002562/Ellipse_113_o8pfb6.png"
                  alt=""
                  width={280}
                  height={280}
                  aria-hidden
                  draggable={false}
                  className="pointer-events-none select-none absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-48 h-48 sm:w-56 sm:h-56 opacity-90 z-10"
                />
                <Image
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1760002561/Ellipse_78_zlo7yi.png"
                  alt=""
                  width={280}
                  height={280}
                  aria-hidden
                  draggable={false}
                  className="pointer-events-none select-none absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-48 h-48 sm:w-56 sm:h-56 opacity-90 z-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="border-t border-border/50 relative z-10">
        {/* Wolf Image - Top Left Corner */}
        <div className="absolute top-0 left-0 z-20">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
            <Image
              src={CLOUDINARY_IMAGES.FOOTER_WOLF}
              alt="Vance Wolf"
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
            {/* Black shadow overlay on top of image to hide corners */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at center, transparent 40%, black 60%),
                  linear-gradient(45deg, black 0%, transparent 10%, transparent 90%, black 100%),
                  linear-gradient(-45deg, black 0%, transparent 10%, transparent 90%, black 100%),
                  linear-gradient(0deg, black 0%, transparent 15%, transparent 85%, black 100%),
                  linear-gradient(90deg, black 0%, transparent 15%, transparent 85%, black 100%)
                `
              }}
            />
          </div>
        </div>
        
        <div className="container-custom py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Company Info - Full width on mobile, spans 2 columns on sm+ */}
            <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left mb-6 sm:mb-0">
              <h3 className="text-text font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Vance.AI</h3>
              
              <h4 className="text-text font-semibold mb-4 text-sm sm:text-base">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="https://x.com/VanceAshfordX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-3 sm:p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Image
                    src={CLOUDINARY_IMAGES.VECTOR_X}
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/vance.ashford?igsh=c2VxZGhsYjZuaHQz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-3 sm:p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/vance-ai-linkedin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-3 sm:p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://wa.me/message/M3TFOBX5HZDJJ1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors duration-300 p-3 sm:p-2 hover:bg-accent-blue/20 rounded-lg"
                >
                  <Image
                    src={CLOUDINARY_IMAGES.WHATSAPP_ICON}
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-text font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Navigation</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-0">
                <ul className="space-y-2 lg:space-y-3">
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
                </ul>
                <ul className="space-y-2 lg:space-y-3">
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
            </div>

            {/* More Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-text font-semibold mb-4 sm:mb-6 text-base sm:text-lg">More</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-0">
                <ul className="space-y-2 lg:space-y-3">
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
                </ul>
                <ul className="space-y-2 lg:space-y-3">
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
          </div>

          {/* Copyright */}
          <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-border/50 text-center">
            <p className="text-text-secondary text-xs sm:text-sm px-4">
              Copyright 2025 Vance.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
