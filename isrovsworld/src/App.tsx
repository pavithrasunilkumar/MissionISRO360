import { useRef } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { StarField } from './components/StarField';
import { OrbitAnimation } from './components/OrbitAnimation';
import { VisualizationCard } from './components/VisualizationCard';
import { RocketCursor } from './components/RocketCursor';
import { AnalyticsSection } from './components/AnalyticsSection';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Rocket,
  TrendingUp,
  Globe,
  Upload,
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  BarChart3,
  Brain,
} from 'lucide-react';

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const visualizationsRef = useRef<HTMLDivElement>(null);
  const mlRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      hero: heroRef,
      intro: introRef,
      visualizations: visualizationsRef,
      ml: mlRef,
      footer: footerRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const visualizations = [
  'WorldWide Mission by Country',
  'Top 20 Countries by Mission Count',
  'Launch Outcome',
  'Countries Mission Share',
  'Mission Vs Success Rate',
  'Mission per Year',
  'India Vs Other Country',
  'Price Distribution',
  'Mission Counts',
  'Mission',
  'Yearly Mission Count'
];


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Space Grotesk', sans-serif;
          }
        `}
      </style>

      <RocketCursor />
      <Header onNavigate={handleNavigate} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <StarField count={150} />
        <OrbitAnimation />

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBuZWJ1bGF8ZW58MXx8fHwxNzYxNTY0MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Space background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-[24px] bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent font-[Souliyo_Unicode] text-[64px] px-[0px] py-[10px] mt-[50px] mr-[0px] ml-[0px]">
              ISRO vs The World
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              A comprehensive data analysis comparing ISRO's missions, growth trajectory, and success metrics
              against leading international space agencies. Explore visualizations that reveal India's position
              in the global space race through data-driven insights and advanced analytics.
            </p>

            {/* Abstract Visuals */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701453831008-ea11046da960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjByaW5ncyUyMHNwYWNlfGVufDF8fHx8MTc2MTY0MTMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Planet rings"
                className="rounded-2xl opacity-60 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl bg-[rgba(5,6,76,0)]"></div>
            </div>

            <motion.button
              onClick={() => handleNavigate('intro')}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >

              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Intro + CTA Section */}
      <section ref={introRef} className="relative py-24 lg:py-32 overflow-hidden">
        <StarField count={50} />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Comparative Analysis</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              A Data-Driven Comparison
            </h2>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Through advanced data visualization and machine learning analytics, we uncover ISRO's global standing
              in space exploration. Our comprehensive performance metrics reveal mission success rates, cost efficiency,
              technological innovation, and international collaboration patterns across the world's leading space agencies.
              Discover how India's space program stacks up against NASA, ESA, Roscosmos, CNSA, and other major players
              in the cosmic arena.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleNavigate('visualizations')}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 rounded-lg overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  View Visualizations
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 blur-xl bg-cyan-400/30 group-hover:bg-cyan-400/50 transition-all"></div>
              </Button>

              <Button
                onClick={() => handleNavigate('ml')}
                className="relative bg-transparent border-2 border-cyan-500/50 hover:border-cyan-400 text-white px-8 py-6 rounded-lg overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Analytic Results
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visualization Section */}
      <section ref={visualizationsRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black"></div>
        <StarField count={30} />

        <div className="relative z-10 container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400">Interactive Data Insights</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Visual Analytics — ISRO vs World Agencies
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Interactive data insights comparing ISRO with global space organizations across multiple dimensions
              of performance, innovation, and impact.
            </p>
          </motion.div>

          {/* Visualization Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {visualizations.map((title, index) => (
              <VisualizationCard key={index} title={title} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Section */}
      <div ref={mlRef}>
        <AnalyticsSection />
      </div>

      {/* Footer */}
      <footer ref={footerRef} className="relative py-16 overflow-hidden border-t border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <StarField count={30} />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-cyan-400" />
                <span className="text-xl">
                  Mission <span className="text-cyan-400">ISRO 360</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A comprehensive data analytics platform comparing ISRO's achievements with global space agencies
                through interactive visualizations and machine learning insights.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Visualizations', id: 'visualizations' },
                  { label: 'Analytic Result', id: 'ml' },
                  { label: 'Contact', id: 'footer' }
                ].map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => handleNavigate(link.id)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400/50 transition-all">
                  <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400/50 transition-all">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400/50 transition-all">
                  <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-cyan-500/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Mission ISRO 360. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Built with data, passion, and curiosity for space exploration.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      </footer>
    </div>
  );
}
