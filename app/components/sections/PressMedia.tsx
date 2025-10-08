'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PressMedia = () => {
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
    <section id="press-media" className="section-padding bg-background relative overflow-hidden min-h-screen flex items-center">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"
        >
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-text leading-relaxed font-display"
              style={{ fontSize: 'clamp(18px, 4vw, 32px)' }}
            >
              Let&apos;s take a deep dive into our internal process what would normally take 100 hours of hard work into a seamless, zero-effort experience.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed font-sans"
              style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}
            >
              We begin by understanding your needs through a quick chat or call, then use AI, networks, and references to identify the most relevant profiles. Each profile is verified, graded, and assessed for buying intent to ensure the right fit.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed font-sans"
              style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}
            >
              We begin by understanding your needs through a quick chat or call, then use AI, networks, and references to identify.
            </motion.p>
          </motion.div>

          {/* Right side - Phone graphic */}
          <motion.div
            variants={imageVariants}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div 
              className="relative overflow-hidden max-w-sm sm:max-w-md lg:max-w-lg"
              style={{ 
                width: 'min(477px, 100%)',
                height: 'clamp(300px, 60vw, 574px)',
                borderRadius: '25px'
              }}
            >
              <Image
                src="/images/phone.png"
                alt="Vance Mobile Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressMedia;
