'use client';

import { useState, useEffect } from 'react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';
import { Menu, X, ArrowRight, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false); // Close mobile menu after click
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Who is Vance', href: '#vance-intro' },
    { name: 'Our Network', href: '#network' },
    { name: 'Press & Media', href: '#press-media' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Social', href: '#social' },
  ];

  const socialLinks = [
    {
      name: 'X (Twitter)', icon: () => (
        <Image
          src={CLOUDINARY_IMAGES.VECTOR_X}
          alt='X (Twitter)'
          width={20}
          height={20}
          className='w-5 h-5'
        />
      ), href: 'https://x.com/VanceAshfordX'
    },
    {
      name: 'WhatsApp', icon: () => (
        <Image
          src={CLOUDINARY_IMAGES.WHATSAPP_ICON}
          alt='WhatsApp'
          width={24}
          height={24}
          className='w-6 h-6'
        />
      ), href: 'https://wa.me/message/M3TFOBX5HZDJJ1'
    },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/vance-ai-linkedin' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen
        ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
        : 'bg-transparent'
        }`}
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-black via-blue-950 to-black border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-6">
          {/* Static Text */}
          <div className="flex-1">
            <p className="text-white text-base font-semibold">
              I'm helping 100 founders raise their round before this year ends.
            </p>
          </div>

          {/* Button */}
          <Link href="/join">
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-sm hover:shadow-blue-900 whitespace-nowrap group">
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a
              href="#vance-intro"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#vance-intro');
              }}
              className="text-xl sm:text-2xl text-text hover:text-primary transition-colors cursor-pointer"
              style={{
                fontFamily: 'OptimaNovaLTRegular, serif',
                fontWeight: 500
              }}
            >
              VANCE
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1, color: '#00D9FF' }}
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={social.name === 'WhatsApp' ? 24 : 18} className={social.name === 'WhatsApp' ? "xl:w-6 xl:h-6" : "xl:w-5 xl:h-5"} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-text p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md shadow-lg"
            >
              <div className="py-4 sm:py-6 space-y-4 sm:space-y-5">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-text-secondary hover:text-primary transition-colors duration-300 font-medium py-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(14px, 4vw, 16px)',
                      lineHeight: '1.5'
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Social Icons */}
                <div className="flex items-center space-x-6 pt-4 sm:pt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.1, color: '#00D9FF' }}
                      className="text-text-secondary hover:text-primary transition-colors duration-300 p-2"
                      aria-label={social.name}
                    >
                      <social.icon size={social.name === 'WhatsApp' ? 24 : 20} className={social.name === 'WhatsApp' ? "sm:w-7 sm:h-7" : "sm:w-6 sm:h-6"} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
