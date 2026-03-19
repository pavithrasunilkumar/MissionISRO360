import { motion } from 'motion/react';
import { Card } from './ui/card';
import { BarChart3 } from 'lucide-react';

interface VisualizationCardProps {
  title: string;
  index: number;
}

export function VisualizationCard({ title, index }: VisualizationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="bg-gradient-to-br from-gray-900 to-black border-cyan-500/30 overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
        <div className="p-6 lg:p-8">
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
              <div className="absolute inset-0 blur-md bg-cyan-400/40"></div>
            </div>
            <h3 className="text-white">{title}</h3>
          </div>

          {/* Graph Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-cyan-500/20 flex items-center justify-center mb-6 overflow-hidden group-hover:border-cyan-400/40 transition-all">
            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5"></div>

            {/* Content */}
            <div className="relative text-center z-10 p-8">
              <div className="relative inline-block mb-4">
                <BarChart3 className="w-16 h-16 text-cyan-400/60" />
                <div className="absolute inset-0 blur-xl bg-cyan-400/30"></div>
              </div>
              <p className="text-cyan-400/80 text-sm">Insert Interactive Graph Here</p>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/40"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/40"></div>
          </div>

          {/* Insights Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              <span className="text-xs text-cyan-400/70 uppercase tracking-wider">Key Insights</span>
              <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4 border border-cyan-500/10">
              <p className="text-gray-400 text-sm leading-relaxed">
                Analysis and conclusions for this visualization will appear here. This section will contain data-driven insights comparing ISRO's performance with global space agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>
    </motion.div>
  );
}
