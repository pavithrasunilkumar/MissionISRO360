import { motion } from 'motion/react';
import { Rocket, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldCUyMGxhdW5jaHxlbnwxfHx8fDE3NjE1Njg4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Space Rocket Launch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      {/* Orbit Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="orbit-line orbit-1"></div>
        <div className="orbit-line orbit-2"></div>
        <div className="orbit-line orbit-3"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative py-[1px] px-[32px] py-[50px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-8 shadow-lg shadow-cyan-500/50"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white mb-6 tracking-wider"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-[Abril_Fatface] text-[48px]">
              ISRO
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            The Indian Space Research Organisation (ISRO) has carved a remarkable journey in space exploration since its inception in 1969. 
            From launching India's first satellite Aryabhata to the historic Mars Orbiter Mission (Mangalyaan) and the groundbreaking 
            Chandrayaan missions, ISRO has consistently demonstrated excellence in cost-effective space technology. Mission ISRO 360 
            explores ISRO's comprehensive mission data, launch statistics, and technological achievements through advanced analytics 
            and machine learning, unveiling insights into mission success patterns, budget optimization, and future trajectories in 
            India's space program.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('visualizations')}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span className="relative z-10">View Visualizations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('analytics')}
              className="group relative px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Analytic Results</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyan-400 cursor-pointer"
            onClick={() => scrollToSection('visualizations')}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
