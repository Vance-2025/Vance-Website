'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2
      }
    }
  };

  const socialImages = [
    {
      src: '/images/3.png',
      alt: 'Vance astronaut on moon surface'
    },
    {
      src: '/images/2.png',
      alt: 'Vance working on laptop - BOOM'
    },
    {
      src: '/images/1.png',
      alt: 'Vance on rocky outcrop - Why Angry'
    }
  ];

  return (
    <section id="social" className="section-padding bg-background relative overflow-hidden min-h-screen flex items-center">
      {/* Blue gradient background effect - at bottom of section */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/20 via-blue-800/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-tl from-blue-500/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-blue/10" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-center font-display text-text text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontSize: 'clamp(24px, 5vw, 32px)' }}
          >
            Vance on social
          </motion.h2>

          {/* Images Grid */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {socialImages.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl"
                style={{
                  width: 'clamp(250px, 30vw, 366.54px)',
                  height: 'clamp(400px, 50vw, 597.7px)'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 30vw, 366.54px"
                />
              </motion.div>
            ))}
          </div>

          {/* Social Media Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="bg-accent-blue/20 backdrop-blur-sm border border-border/30 rounded-2xl p-6 sm:p-8 flex items-center justify-center gap-4 sm:gap-6">
              {/* Instagram */}
              <motion.a
                href="https://instagram.com/vance.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-pink-600 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-125 hover:rounded-2xl group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce" />
              </motion.a>

              {/* Twitter */}
              <motion.a
                href="https://twitter.com/vance.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-blue-500 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-125 hover:rounded-2xl group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/company/vance-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-blue-700 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-125 hover:rounded-2xl group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-green-500 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-125 hover:rounded-2xl group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="/images/whatsappbutton-removebg-preview.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
