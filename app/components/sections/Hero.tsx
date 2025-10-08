'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
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
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
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
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.5
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
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="home" className="bg-background relative overflow-hidden">
      {/* Center gradient overlay - Group 127.png */}
      <motion.div 
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/doyhawzj1/image/upload/v1759960038/vance-website/vance-website/Group-127.png.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />

      {/* Wolf Character - Desktop positioning */}
      <motion.div
        variants={wolfVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block absolute z-10"
        style={{
          width: 'clamp(300px, 25vw, 402.52px)',
          height: 'clamp(600px, 50vw, 839px)',
          left: '570px',
          top: '240px'
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
            src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960042/vance-website/vance-website/Mask-group.png.png"
            alt="Vance - Professional Wolf Character"
            width={1500}
            height={1500}
            className="h-full w-auto object-contain"
            priority
            quality={90}
          />
        </motion.div>
      </motion.div>

      {/* Wolf Character - Mobile positioning */}
      <motion.div
        variants={wolfVariants}
        initial="hidden"
        animate="visible"
        className="lg:hidden absolute"
        style={{
          width: 'min(88vw, 360px)',
          height: 'min(120vw, 520px)',
          left: '25%',
          top: '70px',
          transform: 'translateX(-50%)',
          zIndex: 5
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
            src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960042/vance-website/vance-website/Mask-group.png.png"
            alt="Vance - Professional Wolf Character"
            width={1500}
            height={1500}
            className="h-full w-auto object-contain"
            priority
            quality={90}
          />
        </motion.div>
      </motion.div>

      {/* Mobile top glow behind text to match Figma */}
      <div
        className="lg:hidden absolute left-1/2 -translate-x-1/2"
        style={{
          top: '420px',
          width: '80vw',
          height: '160px',
          background: 'radial-gradient(60% 60% at 50% 50%, rgba(37, 99, 235, 0.28) 0%, rgba(12, 18, 28, 0) 70%)',
          filter: 'blur(20px)',
          zIndex: 4
        }}
      />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 relative">
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 sm:space-y-8 text-center"
            >
              {/* Main Heading - Mobile */}
              <motion.h1
                variants={itemVariants}
                className="text-white leading-[1.1]"
                style={{ 
                  fontFamily: 'OptimaNovaLTProRegular, Optima Nova LT Pro, serif',
                  fontSize: 'clamp(32px, 8vw, 48px)',
                  fontWeight: 500
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
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  lineHeight: '28px'
                }}
              >
                I connect the right people from my network, matching needs and timing, 
                making intros, and ensuring connections succeed.
              </motion.p>

              {/* CTA Button - Mobile */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-sm sm:text-base border border-secondary"
                  style={{ backgroundColor: '#232E27' }}
                >
                  <Image
                    src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960047/vance-website/vance-website/whatsapp-icon.png.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="group-hover:animate-pulse w-6 h-6 sm:w-7 sm:h-7"
                  />
                  Let's Connect
                </motion.a>
              </motion.div>

              {/* Process Cards - Mobile */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 sm:mt-12 space-y-3 sm:space-y-4"
              >
                {processSteps.map((step, index) => {
                  const isActive = index === activeCardIndex;
                  const cardOpacity = isActive ? 1.0 : 0.3;

                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 mx-4 sm:mx-0"
                      style={{
                        opacity: cardOpacity,
                        backgroundColor: 'rgba(20, 25, 35, 0.6)'
                      }}
                    >
                      <p 
                        className={`leading-relaxed transition-colors duration-500`}
                        style={{ 
                          color: isActive ? '#ffffff' : '#9ca3af',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 'clamp(14px, 3.5vw, 18px)',
                          lineHeight: '24px'
                        }}
                      >
                        {step}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
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
                  fontFamily: 'OptimaNovaLTProRegular, Optima Nova LT Pro, serif',
                  fontSize: '60px',
                  fontWeight: 500
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
                I connect the right people from my network, matching needs and timing, 
                making intros, and ensuring connections succeed.
              </motion.p>

              {/* CTA Button - Desktop */}
              <motion.div variants={itemVariants} className="pt-2">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-base border border-secondary"
                  style={{ backgroundColor: '#232E27' }}
                >
                  <Image
                    src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960047/vance-website/vance-website/whatsapp-icon.png.png"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                    className="group-hover:animate-pulse"
                  />
                  Let's Connect
                </motion.a>
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
                const cardOpacity = isActive ? 1.0 : 0.3;

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 transition-all duration-500 relative max-w-md mx-auto lg:mx-0 w-full"
                    style={{
                      opacity: cardOpacity,
                      backgroundColor: 'rgba(20, 25, 35, 0.6)'
                    }}
                  >
                    <p 
                      className="leading-relaxed transition-colors duration-500" 
                      style={{ 
                        color: isActive ? '#ffffff' : '#9ca3af',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        lineHeight: '28px'
                      }}
                    >
                      {step}
                    </p>
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
