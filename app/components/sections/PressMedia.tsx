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
    <section className="section-padding bg-background relative overflow-hidden min-h-screen flex items-center">
      {/* Blue gradient effects - consistent with other sections */}
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
            <motion.p
              variants={itemVariants}
              className="text-text leading-relaxed font-optima"
              style={{ fontSize: '32px' }}
            >
              Let&apos;s take a deep dive into our internal process what would normally take 100 hours of hard work into a seamless, zero-effort experience.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed"
              style={{ 
                fontSize: '18px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 'normal'
              }}
            >
              We begin by understanding your needs through a quick chat or call, then use AI, networks, and references to identify the most relevant profiles. Each profile is verified, graded, and assessed for buying intent to ensure the right fit.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed"
              style={{ 
                fontSize: '18px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 'normal'
              }}
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
              className="relative overflow-hidden"
              style={{ 
                width: '477px',
                height: '574px',
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
