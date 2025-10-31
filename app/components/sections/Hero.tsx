'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';

const Hero = () => {
  const processSteps = [
    "Tell me what you're working on (raising money, hiring, expanding, looking for customers, whatever!)",
    "I analyze my network of 50,000+ entrepreneurs, investors, executives, and creators",
    "I find the perfect matches based on timing, need, and mutual benefit",
    "I make the introduction with context that makes both people excited to connect",
    "I follow up to make sure it actually happened and worked"
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Auto-scroll through cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [processSteps.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const wolfVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="bg-background relative overflow-hidden pb-2 pt-12">
      {/* Center gradient overlay - Group 127.png */}
      <motion.div 
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: `url('${CLOUDINARY_IMAGES.GROUP_127}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />

      {/* Wolf Character - Desktop positioning (behind gradient) */}
      <motion.div
        variants={wolfVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block absolute z-0 left-1/2 -translate-x-1/2"
        style={{
          width: 'clamp(300px, 25vw, 402.52px)',
          height: 'clamp(600px, 50vw, 839px)',
          top: '100px',
          left: '40%'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 0.5, 0, -0.5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative h-full w-full"
        >
          <Image
            src={CLOUDINARY_IMAGES.MASK_GROUP}
            alt="Vance - Professional Wolf Character"
            width={1500}
            height={1500}
            className="h-full w-auto object-contain"
            priority
            quality={90}
          />
        </motion.div>
      </motion.div>



      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 relative">
          
          {/* Mobile Layout */}
          <div className="lg:hidden relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Wolf Character - Mobile (Background layer) */}
              <motion.div
                variants={wolfVariants}
                className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
                style={{ width: '380px', height: '800px', left: '10%' }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 0.5, 0, -0.5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={CLOUDINARY_IMAGES.MASK_GROUP}
                    alt="Vance - Professional Wolf Character"
                    width={402}
                    height={839}
                    className="h-full w-full object-contain"
                    priority
                    quality={90}
                  />
                </motion.div>
              </motion.div>

              {/* Content overlay - on top of wolf */}
              <div className="relative z-20 text-center pt-[280px] sm:pt-[320px] space-y-6 sm:space-y-8">
                {/* Main Heading - Mobile */}
                <motion.h1
                  variants={itemVariants}
                  className="text-white leading-[1.1]"
                  style={{ 
                    fontFamily: 'OptimaNovaLTRegular, serif',
                    fontSize: 'clamp(40px, 8vw, 48px)',
                    fontWeight: 400
                  }}
                >
                  <div>I will Make</div>
                  <div>Million-Dollar</div>
                  <div>Introductions</div>
                  <div>While You Sleep</div>
                </motion.h1>

                {/* Description - Mobile */}
                <motion.p
                  variants={itemVariants}
                  className="text-gray-300 max-w-md mx-auto leading-relaxed px-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    lineHeight: '28px'
                  }}
                >
                  I connect extraordinary people from my network — aligning needs, timing, and intent — to create introductions that lead to partnerships, funding, and game-changing opportunities.
                </motion.p>

                {/* CTA Buttons - Mobile */}
                <motion.div variants={itemVariants} className="pt-2">
                  <div className="flex items-center justify-center gap-3">
                    <motion.a
                      href="https://wa.me/message/M3TFOBX5HZDJJ1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                      animate={{ boxShadow: ['0 0 0 rgba(0, 255, 136, 0)', '0 0 18px rgba(0, 255, 136, 0.35)', '0 0 0 rgba(0, 255, 136, 0)'] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 sm:gap-3 text-white font-semibold px-3 sm:px-4 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-sm sm:text-base border border-secondary h-[46px] sm:h-[48px] text-left"
                      style={{ backgroundColor: '#232E27' }}
                    >
                      <Image
                        src={CLOUDINARY_IMAGES.WHATSAPP_ICON}
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="group-hover:animate-pulse w-6 h-6 sm:w-7 sm:h-7"
                      />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>Let's Connect</span>
                    </motion.a>

                    {/* Product Hunt Badge */}
                    <a
                      href="https://www.producthunt.com/products/vance?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-vance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-secondary h-[46px] sm:h-[48px] px-1 overflow-hidden"
                      style={{ backgroundColor: '#232E27' }}
                    >
                      <span className="block h-[40px] sm:h-[44px] leading-none -mx-1">
                        <img
                          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1026023&theme=dark&t=1760432029330"
                          alt="Vance - World's First AI SuperConnector | Product Hunt"
                          className="h-full w-auto"
                        />
                      </span>
                    </a>
                  </div>
                </motion.div>

                {/* Process Cards - Mobile */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 pb-8"
                >
                  {processSteps.map((step, index) => {
                    const isActive = index === activeCardIndex;
                    const cardOpacity = isActive ? 1.0 : 0.2;

                    return (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        initial={{
                          opacity: index === 0 ? 1.0 : 0.2,
                          scale: index === 0 ? 1.0 : 0.85,
                          y: index === 0 ? -2 : 0
                        }}
                        animate={{
                          opacity: cardOpacity,
                          scale: isActive ? 1.0 : 0.85,
                          y: isActive ? -2 : 0
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className="backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 mx-4 sm:mx-0"
                        style={{
                          backgroundColor: 'rgba(20, 25, 35, 0.6)'
                        }}
                      >
                        <motion.p 
                          initial={{
                            color: index === 0 ? '#ffffff' : '#6b7280'
                          }}
                          animate={{
                            color: isActive ? '#ffffff' : '#6b7280'
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="leading-relaxed"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            fontSize: 'clamp(14px, 3.5vw, 18px)',
                            lineHeight: '24px'
                          }}
                        >
                          {step}
                        </motion.p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
            {/* Left Content - Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 space-y-4 sm:space-y-6 relative z-20 text-center lg:text-left"
            >
              {/* Main Heading - Desktop */}
              <motion.h1
                variants={itemVariants}
                className="text-white leading-[1.1]"
                style={{ 
                  fontFamily: 'OptimaNovaLTRegular, serif',
                  fontSize: '60px',
                  fontWeight: 400
                }}
              >
                <div>I will Make</div>
                <div>Million-Dollar</div>
                <div>Introductions</div>
                <div>While You Sleep</div>
              </motion.h1>

              {/* Description - Desktop */}
              <motion.p
                variants={itemVariants}
                className="text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  lineHeight: '28px'
                }}
              >
                I connect extraordinary people from my network — aligning needs, timing, and intent — to create introductions that lead to partnerships, funding, and game-changing opportunities.
              </motion.p>

              {/* CTA Buttons - Desktop */}
              <motion.div variants={itemVariants} className="pt-2">
                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://wa.me/message/M3TFOBX5HZDJJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                    animate={{ boxShadow: ['0 0 0 rgba(0, 255, 136, 0)', '0 0 18px rgba(0, 255, 136, 0.35)', '0 0 0 rgba(0, 255, 136, 0)'] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 sm:gap-3 text-white font-semibold px-5 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-base border border-secondary h-[48px] text-left"
                    style={{ backgroundColor: '#232E27' }}
                  >
                    <Image
                      src={CLOUDINARY_IMAGES.WHATSAPP_ICON}
                      alt="WhatsApp"
                      width={28}
                      height={28}
                      className="group-hover:animate-pulse w-7 h-7"
                    />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>Let's Connect</span>
                  </motion.a>

                  {/* Product Hunt Badge */}
                  <a
                    href="https://www.producthunt.com/products/vance?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-vance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-secondary h-[48px] px-1 overflow-hidden"
                    style={{ backgroundColor: '#232E27' }}
                  >
                    <span className="block h-[44px] leading-none -mx-1">
                      <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1026023&theme=dark&t=1760432029330"
                        alt="Vance - World's First AI SuperConnector | Product Hunt"
                        className="h-full w-auto"
                      />
                    </span>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Faded Cards matching Figma */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-4 lg:col-start-9 relative z-20 flex flex-col justify-center mt-8 lg:mt-0 space-y-4"
            >
              {processSteps.map((step, index) => {
                const isActive = index === activeCardIndex;
                const cardOpacity = isActive ? 1.0 : 0.2;

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial={{
                      opacity: index === 0 ? 1.0 : 0.2,
                      scale: index === 0 ? 1.0 : 0.85,
                      y: index === 0 ? -2 : 0
                    }}
                    animate={{
                      opacity: cardOpacity,
                      scale: isActive ? 1.0 : 0.85,
                      y: isActive ? -2 : 0
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 relative max-w-md mx-auto lg:mx-0 w-full"
                    style={{
                      backgroundColor: 'rgba(20, 25, 35, 0.6)'
                    }}
                  >
                    <motion.p 
                      initial={{
                        color: index === 0 ? '#ffffff' : '#6b7280'
                      }}
                      animate={{
                        color: isActive ? '#ffffff' : '#6b7280'
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="leading-relaxed"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        lineHeight: '28px'
                      }}
                    >
                      {step}
                    </motion.p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
