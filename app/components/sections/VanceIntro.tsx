'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

const VanceIntro = () => {
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
    hidden: { opacity: 0, x: -50 },
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
    <section id="vance-intro" className="section-padding bg-background relative overflow-hidden flex items-center">
      {/* Curved blue shape at top of VanceIntro */}
      <div 
        className="absolute"
        style={{
          width: '100vw',
          height: '300px',
          left: '0',
          top: '-150px',
          backgroundImage: `url('${CLOUDINARY_IMAGES.IMAGE_COPY}')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      {/* Center gradient overlay - Ellipse 99(1).png */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: `url('${CLOUDINARY_IMAGES.ELLIPSE_99}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2
        }}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:block container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center"
        >
          {/* Left side - Wolf image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative" style={{ width: '559px', height: '766px', maxWidth: '100%' }}>
              <Image
                src={CLOUDINARY_IMAGES.WOLF3}
                alt="Vance - Professional Wolf Character"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 lg:space-y-10 order-1 lg:order-2 text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-white"
              style={{
                fontFamily: 'OptimaNovaLTRegular, Optima nova LT Regular, serif',
                fontSize: '180px',
                fontWeight: 400,
                lineHeight: '0.9'
              }}
            >
              I AM VANCE
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white"
              style={{
                fontFamily: 'OptimaNovaLTRegular, Optima nova LT Regular, serif',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '1.5',
                maxWidth: '600px'
              }}
            >
              Let&apos;s take a deep dive into our internal process what would normally take 100 hours of hard work into a seamless, zero-effort experience.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '28px',
                maxWidth: '600px'
              }}
            >
              We begin by understanding your needs through a quick chat or call, then use AI, networks, and references to identify the most relevant profiles. Each profile is verified, graded, and assessed for buying intent to ensure the right fit.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Layout - Responsive */}
      <div className="lg:hidden container-custom relative z-10 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:gap-12 items-center"
        >
          {/* Wolf image - Mobile */}
          <motion.div
            variants={imageVariants}
            className="relative w-full flex justify-center order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md" style={{ aspectRatio: '559/766' }}>
              <Image
                src={CLOUDINARY_IMAGES.WOLF3}
                alt="Vance - Professional Wolf Character"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Text content - Mobile */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 sm:space-y-8 order-1 text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-text leading-tight tracking-tight"
              style={{ 
                fontFamily: 'OptimaNovaLTRegular, Optima nova LT Regular, serif',
                fontSize: 'clamp(70px, 12vw, 120px)',
                fontWeight: 400
              }}
            >
              I AM VANCE
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-text leading-relaxed"
              style={{ 
                fontFamily: 'OptimaNovaLTRegular, Optima nova LT Regular, serif',
                fontSize: 'clamp(24px, 4vw, 28px)',
                fontWeight: 400
              }}
            >
              Let&apos;s take a deep dive into our internal process what would normally take 100 hours of hard work into a seamless, zero-effort experience.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 3vw, 18px)',
                fontWeight: 400,
                lineHeight: '28px'
              }}
            >
              We begin by understanding your needs through a quick chat or call, then use AI, networks, and references to identify the most relevant profiles. Each profile is verified, graded, and assessed for buying intent to ensure the right fit.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VanceIntro;

