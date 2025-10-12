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
    <section id="vance-intro" className="section-padding bg-background relative overflow-hidden flex items-center lg:py-16 py-8 pb-4">
      {/* Curved blue shape at top of VanceIntro */}
      <div 
        className="absolute"
        style={{
          width: '130vw',
          height: '400px',
          left: '-15vw',
          top: '-200px',
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
              <video
                src="https://res.cloudinary.com/doyhawzj1/video/upload/v1760307304/vance-video_1_uuzukz_grub4i.mp4"
                autoPlay
                playsInline
                muted
                loop={false}
                preload="auto"
                className="w-full h-full object-contain rounded-lg"
                style={{ background: 'transparent' }}
              >
                Your browser does not support the video tag.
              </video>
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
                fontFamily: 'OptimaNovaLTRegular, serif',
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
                fontFamily: 'OptimaNovaLTRegular, serif',
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '1.5',
                maxWidth: '600px'
              }}
            >
              I engineer introductions that move capital, companies, and people — quietly, efficiently, and at scale.
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
              I see what others miss — intent, timing, and alignment.

Tell me what you're building, and I'll map who you need to meet next.

Behind the scenes, I analyze 50,000+ founders, investors, and operators to find your perfect match.

Every introduction is verified, timed, and built to create momentum.

I don't chase connections.

I create inevitabilities.
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
          className="relative"
        >
          {/* Wolf image - Mobile (Background layer) */}
          <motion.div
            variants={imageVariants}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
            style={{ width: '420px', height: '576px', left: '-5%', bottom: '40%', top: '5%' }}
          >
            <div className="relative h-full w-full">
              <video
                src="https://res.cloudinary.com/doyhawzj1/video/upload/v1760307304/vance-video_1_uuzukz_grub4i.mp4"
                autoPlay
                playsInline
                muted
                loop={false}
                preload="auto"
                className="w-full h-full object-contain rounded-lg"
                style={{ background: 'transparent' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Text content - Mobile (Overlay on wolf) */}
          <motion.div
            variants={containerVariants}
            className="relative z-20 text-center pt-[500px] sm:pt-[550px]"
          >
            <motion.h2
              variants={itemVariants}
              className="text-white leading-tight mb-8 sm:mb-12"
              style={{ 
                fontFamily: 'OptimaNovaLTRegular, serif',
                fontSize: 'clamp(70px, 12vw, 120px)',
                fontWeight: 400,
                letterSpacing: '0%',
                wordSpacing: '-0.05em'
              }}
            >
              I AM VANCE
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white text-center mx-auto px-4 mb-12 sm:mb-16"
              style={{ 
                fontFamily: 'OptimaNovaLTRegular, serif',
                fontSize: 'clamp(24px, 4vw, 28px)',
                fontWeight: 400,
                letterSpacing: '0%',
                lineHeight: '28px',
                width: '323px',
                height: '128px'
              }}
            >
              I engineer introductions that move capital, companies, and people — quietly, efficiently, and at scale.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-center mx-auto px-6 pb-10"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 3vw, 18px)',
                fontWeight: 400,
                letterSpacing: '0%',
                lineHeight: '24px',
                width: '364px',
                height: '128px'
              }}
            >
              I see what others miss — intent, timing, and alignment.

Tell me what you're building, and I'll map who you need to meet next.

Behind the scenes, I analyze 50,000+ founders, investors, and operators to find your perfect match.

Every introduction is verified, timed, and built to create momentum.

I don't chase connections.

I create inevitabilities.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VanceIntro;

