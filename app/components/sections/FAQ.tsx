'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const faqItems = [
    {
      question: "Think of me as your billionaire friend who actually returns calls and remember.",
      answer: "We connect you with the right people from our extensive network, making meaningful introductions that drive real business results."
    },
    {
      question: "Think of me as your billionaire friend who actually returns calls and remember.",
      answer: "We connect you with the right people from our extensive network, making meaningful introductions that drive real business results."
    },
    {
      question: "Think of me as your billionaire friend who actually returns calls and remember.",
      answer: "We connect you with the right people from our extensive network, making meaningful introductions that drive real business results."
    },
    {
      question: "Think of me as your billionaire friend who actually returns calls and remember.",
      answer: "We connect you with the right people from our extensive network, making meaningful introductions that drive real business results."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      // If the clicked item is already open, close it
      if (prev[id]) {
        return { ...prev, [id]: false };
      }
      // Otherwise, close all items and open only the clicked one
      const newState: { [key: string]: boolean } = {};
      Object.keys(prev).forEach(key => {
        newState[key] = false;
      });
      newState[id] = true;
      return newState;
    });
  };

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden flex items-center lg:py-16 pt-4 pb-8">
      {/* Blue gradient background effect - subtle */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-600/8 via-blue-800/4 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-48 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-blue/5" />
      
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
              fontSize: 'clamp(24px, 4vw, 60px)',
              fontFamily: 'OptimaNovaLTRegular, serif',
              fontWeight: 400
            }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Two-column grid for FAQ boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Column */}
            <motion.div
              variants={containerVariants}
              className="space-y-4 sm:space-y-6"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={`left-${index}`}
                  variants={itemVariants}
                  className="bg-accent-blue/45 backdrop-blur-sm border border-border/30 rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(`left-${index}`)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent-blue/10 transition-colors duration-300"
                  >
                    <span 
                      className="text-text pr-4"
                      style={{ 
                        fontSize: 'clamp(14px, 3vw, 20px)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItems[`left-${index}`] ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {openItems[`left-${index}`] ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      )}
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems[`left-${index}`] ? 'auto' : 0,
                      opacity: openItems[`left-${index}`] ? 1 : 0
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={containerVariants}
              className="space-y-4 sm:space-y-6"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={`right-${index}`}
                  variants={itemVariants}
                  className="bg-accent-blue/45 backdrop-blur-sm border border-border/30 rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(`right-${index}`)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent-blue/10 transition-colors duration-300"
                  >
                    <span 
                      className="text-text pr-4"
                      style={{ 
                        fontSize: 'clamp(14px, 3vw, 20px)',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItems[`right-${index}`] ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {openItems[`right-${index}`] ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                      )}
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems[`right-${index}`] ? 'auto' : 0,
                      opacity: openItems[`right-${index}`] ? 1 : 0
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.3 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
