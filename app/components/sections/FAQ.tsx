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
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: 'easeOut'
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
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
          className="space-y-12"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-center font-optima text-text"
            style={{ fontSize: '32px' }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Two-column grid for FAQ boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={`left-${index}`}
                  variants={itemVariants}
                  className="bg-accent-blue/45 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(`left-${index}`)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent-blue/10 transition-colors duration-300"
                  >
                    <span 
                      className="text-text pr-4"
                      style={{ 
                        fontSize: '20px',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItems[`left-${index}`] ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {openItems[`left-${index}`] ? (
                        <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="w-6 h-6 text-primary flex-shrink-0" />
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
                    <div className="px-6 pb-6">
                      <p className="text-text-secondary leading-relaxed">
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
              className="space-y-4"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={`right-${index}`}
                  variants={itemVariants}
                  className="bg-accent-blue/45 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(`right-${index}`)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent-blue/10 transition-colors duration-300"
                  >
                    <span 
                      className="text-text pr-4"
                      style={{ 
                        fontSize: '20px',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItems[`right-${index}`] ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {openItems[`right-${index}`] ? (
                        <Minus className="w-6 h-6 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="w-6 h-6 text-primary flex-shrink-0" />
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
                    <div className="px-6 pb-6">
                      <p className="text-text-secondary leading-relaxed">
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
