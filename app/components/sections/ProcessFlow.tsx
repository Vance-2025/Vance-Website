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
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
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
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
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
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
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
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component with only top handle
const CustomNodeTopHandle = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-transparent border-transparent rounded-lg p-4 transition-all duration-300 w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component with only bottom handle
const CustomNodeBottomHandle = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component with top and bottom handles
const CustomNodeTopBottomHandles = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Node Component with all handles (top, bottom, left, right)
const CustomNodeAllHandles = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-black border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-gray-600 w-[200px]"
      >
        <p className="text-white text-sm leading-relaxed">
          {data.label}
        </p>
      </motion.div>
    </div>
  );
};

// Custom Heading Node Component
const CustomHeadingNode = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      <motion.div
        className="bg-transparent border-none rounded-lg p-2 w-[200px] text-center"
      >
         <h3 className="text-white text-lg font-semibold">
           {data.label}
         </h3>
      </motion.div>
    </div>
  );
};

// Helper Node Component (small circles for side flow)
const HelperNode = ({ data }: any) => {
  return (
    <div className="relative">
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{ 
          background: 'transparent', 
          width: 8, 
          height: 8,
          border: 'none',
          borderRadius: '50%'
        }}
      />
      <div className="w-3 h-3 rounded-full bg-gray-500" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNodeWithHandles,
  noLeftHandle: CustomNodeNoLeftHandle,
  noRightHandle: CustomNodeNoRightHandle,
  noHandles: CustomNodeNoHandles,
  topHandle: CustomNodeTopHandle,
  bottomHandle: CustomNodeBottomHandle,
  topBottomHandles: CustomNodeTopBottomHandles,
  allHandles: CustomNodeAllHandles,
  heading: CustomHeadingNode,
  helper: HelperNode,
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
        { id: 'Begin with', text: "Begin with", icon: MessageCircle, highlight: false, done: false },
        { id: 'chat-with-you', text: "Chat with you", icon: MessageCircle, highlight: false, done: false },
        { id: 'voice-call', text: "Voice Call with you", icon: Phone, highlight: false, done: false },
        { id: 'i-analysed-your-needs', text: "I analysed your needs", icon: MessageCircle, highlight: false, done: false },
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
  
  // Column headings
  const columnHeadings = [
    "",
    "Start Finding best Ideal Profile", 
    "Start Communication",
    "Connect with you"
  ];
  
  // Add helper circle nodes for column 2 (left and right side flows)
  const column2XPosition = 100 + (1 * 350);
  const column2YPositions = [80, 200, 320, 440]; // Y positions for the 4 nodes
  
  // Left side helper nodes (circles)
  column2YPositions.forEach((yPos, index) => {
    initialNodes.push({
      id: `left-helper-${index}`,
      type: 'helper',
      position: { x: column2XPosition - 100, y: yPos },
      data: { label: '' },
    });
  });
  
  // Right side helper nodes (circles)
  column2YPositions.forEach((yPos, index) => {
    initialNodes.push({
      id: `right-helper-${index}`,
      type: 'helper',
      position: { x: column2XPosition + 250, y: yPos },
      data: { label: '' },
    });
  });
  
  processData.forEach((column, colIndex) => {
    const xPosition = 100 + (colIndex * 350);
    let yPosition = 80;
    
    // Add heading node at the top of each column
    initialNodes.push({
      id: `heading-${colIndex}`,
      type: 'heading',
      position: { x: xPosition, y: 10 },
      data: { label: columnHeadings[colIndex] },
    });
    
    column.steps.forEach((step, stepIndex) => {
       // Determine node type based on which handles should be removed
       const nodesWithoutLeftHandle: string[] = [];
       const nodesWithoutRightHandle: string[] = ['verify-profile', 'track-buying-intent', 'connect-with-you'];
       const nodesWithoutAnyHandles: string[] = ['find-from-llm', 'social-network', 'personal-contact', 'references'];
       const nodesWithOnlyBottomHandle: string[] = ['Begin with'];
       const nodesWithOnlyTopHandle: string[] = ['i-analysed-your-needs'];
       const nodesWithTopBottomHandles: string[] = ['chat-with-you', 'voice-call'];
       const nodesWithAllHandles: string[] = [];
      
      let nodeType = 'custom'; // default with both handles
      
      if (nodesWithoutAnyHandles.includes(step.id)) {
        nodeType = 'noHandles';
      } else if (nodesWithAllHandles.includes(step.id)) {
        nodeType = 'allHandles';
      } else if (nodesWithTopBottomHandles.includes(step.id)) {
        nodeType = 'topBottomHandles';
      } else if (nodesWithOnlyTopHandle.includes(step.id)) {
        nodeType = 'topHandle';
      } else if (nodesWithOnlyBottomHandle.includes(step.id)) {
        nodeType = 'bottomHandle';
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
   // 1. Begin with → Chat with you → Voice Call with you → I analysed your needs
   // 2. Chat with you → all boxes in column 2
   // 3. Social Network → all boxes in column 3  
   // 4. Track Buying intent → Introduction
   // 5. Introduction → Connect with you
   const initialEdges: Edge[] = [
     // First column internal connections (vertical flow)
     { 
       id: 'e-begin-chat', 
       source: 'Begin with', 
       target: 'chat-with-you', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     { 
       id: 'e-chat-voice', 
       source: 'chat-with-you', 
       target: 'voice-call', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     { 
       id: 'e-voice-analysed', 
       source: 'voice-call', 
       target: 'i-analysed-your-needs', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     
     // Column 2: Left side vertical flow (helper nodes)
     { 
       id: 'e-left-helper-0-1', 
       source: 'left-helper-0', 
       target: 'left-helper-1', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     { 
       id: 'e-left-helper-1-2', 
       source: 'left-helper-1', 
       target: 'left-helper-2', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     { 
       id: 'e-left-helper-2-3', 
       source: 'left-helper-2', 
       target: 'left-helper-3', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     
     // Column 2: Right side vertical flow (helper nodes)
     { 
       id: 'e-right-helper-0-1', 
       source: 'right-helper-0', 
       target: 'right-helper-1', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     { 
       id: 'e-right-helper-1-2', 
       source: 'right-helper-1', 
       target: 'right-helper-2', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     { 
       id: 'e-right-helper-2-3', 
       source: 'right-helper-2', 
       target: 'right-helper-3', 
       sourceHandle: 'bottom',
       targetHandle: 'top',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'default'
     },
     
     // Column 2: Horizontal connections from left helpers to nodes
     { 
       id: 'e-left-helper-0-find', 
       source: 'left-helper-0', 
       target: 'find-from-llm', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     { 
       id: 'e-left-helper-1-social', 
       source: 'left-helper-1', 
       target: 'social-network', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     { 
       id: 'e-left-helper-2-personal', 
       source: 'left-helper-2', 
       target: 'personal-contact', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     { 
       id: 'e-left-helper-3-references', 
       source: 'left-helper-3', 
       target: 'references', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     
     // Column 2: Horizontal connections from nodes to right helpers
     { 
       id: 'e-find-right-helper-0', 
       source: 'find-from-llm', 
       target: 'right-helper-0', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     { 
       id: 'e-social-right-helper-1', 
       source: 'social-network', 
       target: 'right-helper-1', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     { 
       id: 'e-personal-right-helper-2', 
       source: 'personal-contact', 
       target: 'right-helper-2', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
     },
     { 
       id: 'e-references-right-helper-3', 
       source: 'references', 
       target: 'right-helper-3', 
       sourceHandle: 'right',
       targetHandle: 'left',
       animated: true, 
       style: { 
         strokeDasharray: '5,5', 
         stroke: '#00D9FF', 
         strokeWidth: 1.5,
         strokeOpacity: 0.3
       },
       type: 'straight'
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
        strokeWidth: 1.5,
        strokeOpacity: 0.3
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
        strokeWidth: 1.5,
        strokeOpacity: 0.3
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
        strokeWidth: 1.5,
        strokeOpacity: 0.3
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
        strokeWidth: 1.5,
        strokeOpacity: 0.3
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
        strokeWidth: 1.5,
        strokeOpacity: 0.3
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
        strokeWidth: 1.5,
        strokeOpacity: 0.3
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

        {/* React Flow Canvas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full h-[500px] lg:h-[700px]"
        >
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
            preventScrolling={false}
          >
            <Background 
              color="#374151" 
              gap={16} 
              size={1}
              style={{ backgroundColor: 'transparent' }}
            />
          </ReactFlow>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;



