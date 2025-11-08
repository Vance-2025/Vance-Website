'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';
import { useState, useEffect } from 'react';

const SocialMedia = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0
      }
    }
  };

  const socialImages = [
    {
      src: CLOUDINARY_IMAGES.SOCIAL_3,
      alt: 'Vance astronaut on moon surface'
    },
    {
      src: CLOUDINARY_IMAGES.SOCIAL_2,
      alt: 'Vance working on laptop - BOOM'
    },
    {
      src: CLOUDINARY_IMAGES.SOCIAL_1,
      alt: 'Vance on rocky outcrop - Why Angry'
    }
  ];

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % socialImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [socialImages.length]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % socialImages.length);
    } else if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + socialImages.length) % socialImages.length);
    }
  };

  return (
    <section id="social" className="section-padding bg-background relative overflow-hidden flex items-center lg:py-16 py-8 pt-4">
      {/* Curved blue shape flowing to next section */}
      <div 
        className="absolute"
        style={{
          width: '100vw',
          height: '400px',
          left: '0',
          bottom: '-200px',
          backgroundImage: `url('${CLOUDINARY_IMAGES.IMAGE_COPY_2}')`,
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
            className="text-center text-text"
            style={{ 
              fontSize: 'clamp(32px, 4vw, 60px)',
              fontFamily: 'OptimaNovaLTRegular, serif',
              fontWeight: 400
            }}
          >
            Vance on social
          </motion.h2>

          {/* Images - Mobile Carousel / Desktop Grid */}
          <div className="relative">
            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative overflow-hidden rounded-xl mx-auto"
                style={{
                  width: 'clamp(250px, 80vw, 350px)',
                  height: 'clamp(400px, 60vh, 500px)'
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <motion.div
                  className="flex h-full"
                  animate={{
                    x: `-${currentImageIndex * 100}%`
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {socialImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0"
                      style={{
                        width: 'clamp(250px, 80vw, 350px)',
                        height: 'clamp(400px, 60vh, 500px)'
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 80vw, 350px"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {socialImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-600'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:flex flex-wrap justify-center gap-6 lg:gap-8">
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
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    width: '366.54px',
                    height: '597.7px'
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="366.54px"
                  />
                </motion.div>
              ))}
            </div>
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

              {/* X (Twitter) */}
              <motion.a
                href="https://twitter.com/vance.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 hover:bg-blue-500 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-125 hover:rounded-2xl group"
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={CLOUDINARY_IMAGES.VECTOR_X}
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce"
                />
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
                  src={CLOUDINARY_IMAGES.WHATSAPP_BUTTON}
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
