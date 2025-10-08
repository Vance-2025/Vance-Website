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
    <section id="press-media" className="section-padding bg-background relative overflow-hidden flex items-center">
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

      {/* Center gradient overlay - Ellipse 99(1).png */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/doyhawzj1/image/upload/v1759960033/vance-website/vance-website/Ellipse-991.png.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 6
        }}
      />

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
              className="text-text leading-relaxed"
              style={{ 
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontFamily: 'OptimaNovaLTRegular, Optima nova LT Regular, serif'
              }}
            >
              Let&apos;s take a deep dive into our internal process what would normally take 100 hours of hard work into a seamless, zero-effort experience.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed"
              style={{ 
                fontSize: 'clamp(14px, 3vw, 18px)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              We begin by understanding your needs through a quick chat or call, then use AI, networks, and references to identify the most relevant profiles. Each profile is verified, graded, and assessed for buying intent to ensure the right fit.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed"
              style={{ 
                fontSize: 'clamp(14px, 3vw, 18px)',
                fontFamily: 'Inter, sans-serif'
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
              className="relative overflow-hidden w-full"
              style={{ 
                width: 'clamp(355px, 50vw, 477px)',
                height: 'clamp(454px, 80vw, 574px)',
                borderRadius: '25px',
                maxWidth: '100%'
              }}
            >
              <Image
                src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960044/vance-website/vance-website/untitled-0.png.png"
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
