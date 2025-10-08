'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrandIdentity() {
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
    <section id="network" className="section-padding bg-background relative overflow-hidden flex items-center">
      {/* Curved blue shape flowing to next section */}
      <div 
        className="absolute"
        style={{
          width: '100vw',
          height: '400px',
          left: '0',
          bottom: '-200px',
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
                fontFamily: 'OptimaNovaLTRegular, Optima nova LT Regular, serif',
                fontWeight: 400
              }}
            >
              1.7M+
            </motion.h2>

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
                  src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960047/vance-website/vance-website/whatsapp-icon.png.png"
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
              <Image
                src="https://res.cloudinary.com/doyhawzj1/image/upload/v1759960043/vance-website/vance-website/ournetwork.png.png"
                alt="Professional Network Statistics"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
