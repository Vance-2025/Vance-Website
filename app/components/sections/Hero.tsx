'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const processSteps = [
    "Tell me what you're working on (raising money, hiring, expanding, looking for customers, whatever!)",
    "I analyze my network of 50,000+ entrepreneurs, investors, executives, and creators",
    "I find the perfect matches based on timing, need, and mutual benefit",
    "I make the introduction with context that makes both people excited to connect",
    "I follow up to make sure it actually happened and worked"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const wolfVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="h-screen bg-background relative overflow-hidden">
      {/* Blue gradient background effect - at bottom of hero section */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/20 via-blue-800/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-tl from-blue-500/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-blue/10" />
      
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center h-screen py-24 relative">
          
          {/* Left Content - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6 relative z-20"
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl font-bold text-text leading-[1.1] font-display"
              style={{ fontFamily: 'Satoshi-Bold, Satoshi-Variable' }}
            >
              <div>I will Make</div>
              <div>Million-Dollar</div>
              <div>Introductions</div>
              <div>While You Sleep</div>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-text-secondary max-w-lg leading-relaxed"
            >
              I connect the right people from my network, matching needs and timing, 
              making intros, and ensuring connections succeed.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow-green transition-all duration-300 group text-base border border-secondary"
                style={{ backgroundColor: '#232E27' }}
              >
                <Image
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                  className="group-hover:animate-pulse"
                />
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Wolf Character - Between Left and Right Content */}
          <motion.div
            variants={wolfVariants}
            initial="hidden"
            animate="visible"
            className="absolute left-[25%] top-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{
              height: '600px',
              width: 'auto'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/wolf.png"
                alt="Vance - Professional Wolf Character"
                width={1500}
                height={1500}
                className="h-full w-auto object-contain"
                priority
                quality={90}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Faded Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 lg:col-start-9 relative z-20 flex flex-col justify-center"
          >
            {processSteps.map((step, index) => {
              const cardOpacity = 1 - (index * 0.15); // More gradual: 1.0, 0.85, 0.7, 0.55, 0.4
              const isGlowing = index <= 1;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`backdrop-blur-sm border rounded-xl px-6 py-4 transition-all duration-300 relative max-w-md ${
                    isGlowing
                      ? 'bg-accent-blue/30 border-primary/40'
                      : index === 2
                        ? 'bg-accent-blue/15 border-border/30'
                        : 'bg-accent-blue/8 border-border/20'
                  }`}
                  style={{
                    opacity: cardOpacity,
                    marginBottom: index < processSteps.length - 1 ? `${1 + index * 0.25}rem` : '0'
                  }}
                >
                  <p className="text-sm text-text leading-relaxed" style={{ opacity: cardOpacity }}>
                    {step}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
