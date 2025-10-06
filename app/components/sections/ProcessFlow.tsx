'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Users, Search, CheckCircle, UserCheck, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ReactFlow, 
  Background, 
  Node,
  Edge,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node Component with both handles
const CustomNodeWithHandles = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        type="source"
        position={Position.Right}
        style={{ 
          background: '#00D9FF', 
          width: 8, 
          height: 8,
          border: '2px solid #fff',
          borderRadius: '50%'
        }}
      />
      
      <Handle
        type="target"
        position={Position.Left}
        style={{ 
          background: '#00D9FF', 
          width: 8, 
          height: 8,
          border: '2px solid #fff',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 min-w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component without left handle
const CustomNodeNoLeftHandle = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        type="source"
        position={Position.Right}
        style={{ 
          background: '#00D9FF', 
          width: 8, 
          height: 8,
          border: '2px solid #fff',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 min-w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component without right handle
const CustomNodeNoRightHandle = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        style={{ 
          background: '#00D9FF', 
          width: 8, 
          height: 8,
          border: '2px solid #fff',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 min-w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component without any handles
const CustomNodeNoHandles = ({ data }: any) => {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 min-w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNodeWithHandles,
  noLeftHandle: CustomNodeNoLeftHandle,
  noRightHandle: CustomNodeNoRightHandle,
  noHandles: CustomNodeNoHandles,
};

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();

  const processData = [
    {
      column: 1,
      title: "I analysed your needs",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-400",
      steps: [
        { id: 'chat-with-you', text: "Chat with you", icon: MessageCircle, highlight: false, done: false },
        { id: 'voice-call', text: "Voice Call with you", icon: Phone, highlight: false, done: false },
      ]
    },
    {
      column: 2,
      title: "Start Finding best Ideal Profile",
      icon: Search,
      color: "from-purple-500 to-pink-400",
      steps: [
        { id: 'find-from-llm', text: "Find from LLM", icon: Search, highlight: false, done: false },
        { id: 'social-network', text: "Social network", icon: Users, highlight: false, done: false },
        { id: 'personal-contact', text: "Personal Contact", icon: UserCheck, highlight: false, done: false },
        { id: 'references', text: "References", icon: Users, highlight: false, done: false }
      ]
    },
    {
      column: 3,
      title: "Start Communication",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-400",
      steps: [
        { id: 'verify-profile', text: "Verify Profile", icon: CheckCircle, highlight: false, done: false },
        { id: 'customer-grading', text: "Ideal Customer Grading", icon: TrendingUp, highlight: false, done: false },
        { id: 'track-buying-intent', text: "Track Buying intent", icon: TrendingUp, highlight: false, done: false }
      ]
    },
    {
      column: 4,
      title: "Connecting with you",
      icon: UserPlus,
      color: "from-orange-500 to-red-400",
      steps: [
        { id: 'introduction', text: "Introduction", icon: UserPlus, highlight: false, done: false },
        { id: 'connect-with-you', text: "Connect with you", icon: CheckCircle, highlight: false, done: false },
      ]
    }
  ];

  // Create nodes based on processData with proper positioning
  const initialNodes: Node[] = [];
  
  processData.forEach((column, colIndex) => {
    const xPosition = 100 + (colIndex * 350);
    let yPosition = 50;
    
    column.steps.forEach((step, stepIndex) => {
      // Determine node type based on which handles should be removed
      const nodesWithoutLeftHandle = ['chat-with-you'];
      const nodesWithoutRightHandle = ['verify-profile', 'track-buying-intent', 'connect-with-you'];
      const nodesWithoutAnyHandles = ['voice-call', 'personal-contact', 'references', 'find-from-llm'];
      
      let nodeType = 'custom'; // default with both handles
      
      if (nodesWithoutAnyHandles.includes(step.id)) {
        nodeType = 'noHandles';
      } else if (nodesWithoutLeftHandle.includes(step.id)) {
        nodeType = 'noLeftHandle';
      } else if (nodesWithoutRightHandle.includes(step.id)) {
        nodeType = 'noRightHandle';
      }
      
      initialNodes.push({
        id: step.id,
        type: nodeType,
        position: { x: xPosition, y: yPosition + (stepIndex * 120) },
        data: { label: step.text, id: step.id },
      });
    });
  });

  // Create edges based on design.md connections:
  // 1. Chat with you → all boxes in column 2
  // 2. Social Network → all boxes in column 3  
  // 3. Track Buying intent → Introduction
  // 4. Introduction → Connect with you
  const initialEdges: Edge[] = [
    // Chat with you connects to all boxes in column 2
    { 
      id: 'e-chat-llm', 
      source: 'chat-with-you', 
      target: 'find-from-llm', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    { 
      id: 'e-chat-social', 
      source: 'chat-with-you', 
      target: 'social-network', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    { 
      id: 'e-chat-personal', 
      source: 'chat-with-you', 
      target: 'personal-contact', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    { 
      id: 'e-chat-references', 
      source: 'chat-with-you', 
      target: 'references', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    
    // Social Network connects to all boxes in column 3
    { 
      id: 'e-social-verify', 
      source: 'social-network', 
      target: 'verify-profile', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    { 
      id: 'e-social-grading', 
      source: 'social-network', 
      target: 'customer-grading', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    { 
      id: 'e-social-intent', 
      source: 'social-network', 
      target: 'track-buying-intent', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    
    // Track Buying intent connects to Introduction
    { 
      id: 'e-intent-intro', 
      source: 'track-buying-intent', 
      target: 'introduction', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    
    // Ideal Customer Grading connects to Introduction
    { 
      id: 'e-grading-intro', 
      source: 'customer-grading', 
      target: 'introduction', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
    
    // Introduction connects to Connect with you
    { 
      id: 'e-intro-connect', 
      source: 'introduction', 
      target: 'connect-with-you', 
      animated: true, 
      style: { 
        strokeDasharray: '5,5', 
        stroke: '#00D9FF', 
        strokeWidth: 3,
        strokeOpacity: 0.8
      },
      type: 'smoothstep'
    },
  ];

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

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

        {/* Column Headings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-8"
        >
          <div className="grid grid-cols-4 gap-8 lg:gap-16">
            {/* Column 1 Heading */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                I analysed your needs
              </h3>
            </div>
            
            {/* Column 2 Heading */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                Start Finding best Ideal Profile
              </h3>
            </div>
            
            {/* Column 3 Heading */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                Start Communication
              </h3>
            </div>
            
            {/* Column 4 Heading */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                Connect with you
              </h3>
            </div>
          </div>
        </motion.div>

        {/* React Flow Canvas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="w-full h-[500px] lg:h-[700px] bg-black/50 rounded-2xl border border-gray-800 overflow-hidden">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              attributionPosition="bottom-left"
              defaultEdgeOptions={{
                type: 'smoothstep',
                animated: true,
                style: { strokeDasharray: '5,5' },
              }}
              className="bg-transparent"
              proOptions={{ hideAttribution: true }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              panOnScroll={false}
              preventScrolling={true}
            >
              <Background 
                color="#374151" 
                gap={16} 
                size={1}
                style={{ backgroundColor: 'transparent' }}
              />
            </ReactFlow>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;



