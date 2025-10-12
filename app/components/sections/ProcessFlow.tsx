'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { CLOUDINARY_IMAGES } from '@/lib/cloudinary';
const ProcessFlow = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Mobile slider state for pagination dots
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
      scrollToSlide((activeSlide + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const handle = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActiveSlide(index);
    };
    el.addEventListener('scroll', handle, { passive: true });
    return () => el.removeEventListener('scroll', handle as any);
  }, []);

  const scrollToSlide = (index: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(index, 3));
    el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' });
    setActiveSlide(target);
  };

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
      const nextSlide = (activeSlide + 1) % 4;
      scrollToSlide(nextSlide);
    } else if (isRightSwipe) {
      const prevSlide = (activeSlide - 1 + 4) % 4;
      scrollToSlide(prevSlide);
    }
  };

  return (
    <section id="workflow" className="section-padding bg-background relative overflow-hidden flex items-center lg:py-16 py-8 pt-2">
      {/* Curved blue shape at bottom of ProcessFlow */}
      <div 
        className="absolute"
        style={{
          width: '100vw',
          height: '300px',
          left: '0',
          bottom: '-150px',
          backgroundImage: `url('${CLOUDINARY_IMAGES.IMAGE_COPY}')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {/* Text Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-start">
            {/* Left Text */}
            <motion.p
              variants={itemVariants}
              className="text-text leading-relaxed text-center lg:text-left"
              style={{ 
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontFamily: 'OptimaNovaLTRegular, serif',
                lineHeight: '1.4'
              }}
            >
              Let me take you behind the curtain.

What usually takes founders and investors weeks of chasing, aligning, and following up - I turn into a zero-effort experience.

Every introduction I make is intentional, verified, and perfectly timed. You tell me what you need - I handle the rest.
            </motion.p>

            {/* Right Text */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary leading-relaxed text-center lg:text-left"
              style={{ 
                fontSize: 'clamp(14px, 3vw, 18px)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              I start by understanding your goals - whether that's raising capital, hiring, or finding a strategic partner.

Then I analyze my private network and surface the most relevant, high-intent profiles.

Each one is verified, graded, and matched with precision.

When I make the introduction, it feels inevitable - and I stay until it delivers real value.
            </motion.p>
          </div>

          {/* Flowchart Image - Desktop */}
          <motion.div
            variants={imageVariants}
            className="relative w-full justify-center hidden lg:flex"
          >
            <div 
              className="relative w-full max-w-full"
              style={{
                width: 'min(1161px, 100%)',
                height: 'clamp(300px, 50vw, 366px)',
                maxWidth: '100%'
              }}
            >
              <Image
                src={CLOUDINARY_IMAGES.GROUP_123}
                alt="Vance Process Flow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Flowchart Image - Mobile slider with scroll-snap */}
          <motion.div
            variants={imageVariants}
            className="lg:hidden"
          >
            <div
              ref={sliderRef}
              className="relative w-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
              style={{
                WebkitOverflowScrolling: 'touch'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex" style={{ width: '400%' }}>
                {['0%', '33%', '66%', '100%'].map((pos, idx) => (
                  <div
                    key={idx}
                    className="snap-center shrink-0 w-full"
                    style={{ height: 'min(520px, 120vw)' }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url('${CLOUDINARY_IMAGES.GROUP_123}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPositionX: pos,
                        backgroundPositionY: 'center'
                      }}
                      aria-label="Process Flow slide"
                      role="img"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {[0,1,2,3].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                    activeSlide === i ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;
