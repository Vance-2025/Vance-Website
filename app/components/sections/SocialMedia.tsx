'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
          className="space-y-16"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-center font-optima text-text text-5xl lg:text-6xl font-bold"
          >
            Vance on social
          </motion.h2>

          {/* Images Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
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
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
