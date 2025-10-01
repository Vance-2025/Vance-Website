'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Users, Search, CheckCircle, UserCheck, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();

  const processData = [
    {
      column: 1,
      title: "Begin with",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-400",
      steps: [
        { text: "Chat with you", icon: MessageCircle, highlight: false, done: false },
        { text: "Voice Call with you", icon: Phone, highlight: false, done: false },
        { text: "I analysed your needs", icon: Users, highlight: true, done: false }
      ]
    },
    {
      column: 2,
      title: "Start Finding best Ideal Profile",
      icon: Search,
      color: "from-purple-500 to-pink-400",
      steps: [
        { text: "Find from LLM", icon: Search, highlight: false, done: false },
        { text: "Social network", icon: Users, highlight: false, done: false },
        { text: "Personal Contact", icon: UserCheck, highlight: false, done: false },
        { text: "References", icon: Users, highlight: false, done: false }
      ]
    },
    {
      column: 3,
      title: "Start Communication",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-400",
      steps: [
        { text: "Verify Profile", icon: CheckCircle, highlight: false, done: false },
        { text: "Ideal Customer Grading", icon: TrendingUp, highlight: false, done: false },
        { text: "Track Buying intent", icon: TrendingUp, highlight: false, done: false }
      ]
    },
    {
      column: 4,
      title: "Connecting with you",
      icon: UserPlus,
      color: "from-orange-500 to-red-400",
      steps: [
        { text: "Introduction", icon: UserPlus, highlight: false, done: false },
        { text: "Connect with you", icon: CheckCircle, highlight: false, done: false },
        { text: "Done", icon: CheckCircle, highlight: true, done: true }
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate which step should be active based on scroll position
      const scrollProgress = scrollPosition / (documentHeight - windowHeight);
      const newActiveStep = Math.min(Math.floor(scrollProgress * 4), 3);
      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Blue gradient background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-32 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-text mb-6 font-display leading-tight"
          >
            Think of me as your billionaire friend who actually returns calls and remembers everyone's business needs, funding rounds, and secret projects.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            We begin by understanding your needs through a quick chat or call, then use AI,
            networks, and references to identify the most relevant profiles. Each profile is verified,
            graded, and assessed for buying intent to ensure the right fit.
          </motion.p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop Layout - 4 columns */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start relative">

            {processData.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                variants={itemVariants}
                className="lg:col-span-3 relative"
              >
                {/* Column Header */}
                <div className="mb-8">
                  <h3 className="text-white text-lg font-medium mb-4">
                    {column.title}
                  </h3>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  {column.steps.map((step, stepIndex) => {
                    const globalStepIndex = processData.slice(0, columnIndex).reduce((acc, col) => acc + col.steps.length, 0) + stepIndex;
                    const isActive = globalStepIndex === activeStep;

                    return (
                      <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600"
                      >
                        <p className="text-white text-sm leading-relaxed">
                          {step.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - 2x2 Grid */}
          <div className="lg:hidden grid grid-cols-2 gap-8">
            {processData.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Column Header */}
                <div className="mb-6">
                  <h3 className="text-white text-base font-medium">
                    {column.title}
                  </h3>
                </div>

                {/* Steps */}
                <div className="space-y-3">
                  {column.steps.map((step, stepIndex) => {
                    const globalStepIndex = processData.slice(0, columnIndex).reduce((acc, col) => acc + col.steps.length, 0) + stepIndex;
                    const isActive = globalStepIndex === activeStep;

                    return (
                      <motion.div
                        key={stepIndex}
                        whileHover={{ scale: 1.02 }}
                        className="bg-black border border-gray-800 rounded-lg p-3 transition-all duration-300 hover:border-gray-600"
                      >
                        <p className="text-white text-xs leading-relaxed">
                          {step.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;
