'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';
import { useState, useEffect } from 'react';

export default function BrandIdentity() {
  // State for mobile image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of mobile images to cycle through
  const mobileImages = [
    "https://res.cloudinary.com/doyhawzj1/image/upload/v1760000423/Screenshot_2025-10-09_at_2.28.00_PM_uuwore.png",
    "https://res.cloudinary.com/doyhawzj1/image/upload/v1759959717/ournetwork_rox7rh.png",
    // Add more images here if needed
  ];

  // Auto-slide effect for mobile images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % mobileImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [mobileImages.length]);

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
    hidden: { opacity: 0, x: 50 },
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
    <section id="network" className="section-padding bg-background relative overflow-hidden flex items-center lg:py-16 py-8 pt-4">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"
        >
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-text leading-tight tracking-tight"
              style={{ 
                fontSize: 'clamp(70px, 15vw, 180px)',
                fontFamily: 'OptimaNovaLTRegular, serif',
                fontWeight: 400
              }}
            >
               
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-text leading-relaxed"
              style={{ 
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontFamily: 'OptimaNovaLTRegular, serif'
              }}
            >
              I've helped 1.7 million people find the right connection at the right moment - 

founders, operators, investors, and creators.

Every introduction I make starts a ripple that builds something new.

You might not see me in the room,

but chances are, someone I've connected is.

I don't just connect people.

I create momentum.
            </motion.p>

            {/* CTA Button with same style as Hero */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-sm sm:text-base border border-secondary"
                style={{ backgroundColor: '#232E27' }}
              >
                <Image
                  src={CLOUDINARY_IMAGES.WHATSAPP_ICON}
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="group-hover:animate-pulse w-7 h-7 sm:w-8 sm:h-8"
                />
                Let&apos;s Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Network graphic */}
          <motion.div
            variants={imageVariants}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl aspect-[4/3]">
              {/* Mobile image carousel */}
              <div className="absolute inset-0 lg:hidden overflow-hidden">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={mobileImages[currentImageIndex]}
                    alt="Professional Network Statistics"
                    fill
                    className="object-contain"
                    style={{ transform: 'rotate(0deg)', transformOrigin: 'center' }}
                    priority
                  />
                </motion.div>
              </div>
              {/* Desktop image (use provided URL) */}
              <div className="absolute inset-0 hidden lg:block">
                <Image
                  src={"https://res.cloudinary.com/doyhawzj1/image/upload/v1759959717/ournetwork_rox7rh.png"}
                  alt="Professional Network Statistics"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
