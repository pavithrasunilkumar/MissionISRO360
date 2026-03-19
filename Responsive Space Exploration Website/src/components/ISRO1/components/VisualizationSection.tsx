import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BarChart3, TrendingUp, Rocket, DollarSign, Calendar, MapPin, Award } from 'lucide-react';

const visualizations = [
  {
    id: 1,
    title: "Mission Success Rate Over the Years",
    icon: TrendingUp,
    insight:
      "ISRO's mission success rate has shown consistent improvement, reaching over 95% in recent years. The organization's learning curve demonstrates increased reliability in launch operations and mission planning, particularly after 2010.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Top Launch Vehicles by Success",
    icon: Rocket,
    insight:
      "PSLV (Polar Satellite Launch Vehicle) leads with the highest success rate among ISRO's launch vehicles, having completed over 50 successful missions. GSLV variants show progressive improvements with enhanced payload capacities and reliability metrics.",
    color: "from-cyan-500 to-blue-400",
  },
  {
    id: 3,
    title: "Budget vs Mission Count Analysis",
    icon: DollarSign,
    insight:
      "ISRO demonstrates exceptional cost-effectiveness with an average mission cost significantly lower than global counterparts. The data reveals strategic budget allocation correlating with increased mission frequency and technological advancement.",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 4,
    title: "Launch Frequency by Year",
    icon: Calendar,
    insight:
      "Launch frequency has exponentially increased from 2-3 launches annually in the early 2000s to 7-8 launches per year in recent times, indicating enhanced infrastructure capabilities and operational efficiency at ISRO's launch facilities.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 5,
    title: "Mission Types Distribution",
    icon: BarChart3,
    insight:
      "Communication satellites constitute 35% of total missions, followed by Earth observation satellites at 30%, and navigation satellites at 15%. This distribution reflects India's strategic priorities in telecommunications, remote sensing, and navigation infrastructure.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: 6,
    title: "International Collaborations & Customer Satellites",
    icon: MapPin,
    insight:
      "ISRO has launched satellites for over 30 countries, with a significant increase in commercial launches post-2015. Revenue from international customers has grown 400%, establishing India as a competitive player in the global launch market.",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 7,
    title: "Mission Milestones & Achievements",
    icon: Award,
    insight:
      "Key achievements include Mars Orbiter Mission (first Asian nation to reach Mars orbit), Chandrayaan-2 (lunar south pole exploration), and record 104 satellites launched in a single mission, showcasing ISRO's technical prowess and innovation capacity.",
    color: "from-cyan-500 to-blue-500",
  },
];

function VisualizationCard({
  visualization,
  index,
}: {
  visualization: typeof visualizations[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = visualization.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300">
        {/* Glowing effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${visualization.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        ></div>

        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${visualization.color} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white flex-1">{visualization.title}</h3>
        </div>

        {/* ✅ Graph Image OR Interactive HTML Display */}
        <div className="relative mb-6 rounded-xl overflow-hidden bg-black border border-cyan-500/30 aspect-video flex items-center justify-center group-hover:border-cyan-400/50 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>

          {visualization.id === 6 ? (
            <div className="w-full h-full relative">
              <iframe
                src="/graphs/interactive.html"
                title="Interactive Graph"
                className="relative z-10 w-full h-full bg-black"
                onError={(e) => {
                  (e.target as HTMLIFrameElement).style.display = "none";
                  const fallback = document.createElement("img");
                  fallback.src = "/graphs/shap.png";
                  fallback.alt = "SHAP Visualization";
                  fallback.className =
                    "absolute inset-0 z-10 w-full h-full object-contain p-4 bg-black";
                  (e.target as HTMLElement).parentNode?.appendChild(fallback);
                }}
              />
              <noscript>
                <img
                  src="/graphs/shap.png"
                  alt="SHAP Visualization"
                  className="absolute inset-0 z-10 w-full h-full object-contain p-4 bg-black"
                />
              </noscript>
            </div>
          ) : (
            <img
              src={`/graphs/graph${visualization.id}.png`}
              alt={visualization.title}
              className="relative z-10 w-full h-full object-contain p-2 bg-black"
            />
          )}

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>

        {/* Insight Text */}
        <div className="relative">
          <div
            className={`absolute -left-4 top-0 w-1 h-full bg-gradient-to-b ${visualization.color} rounded-full`}
          ></div>
          <p className="text-gray-400 pl-4 leading-relaxed">
            {visualization.insight}
          </p>
        </div>
      </div>

      {/* Connector line */}
      {index < visualizations.length - 1 && (
        <div className="h-8 w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent mx-auto"></div>
      )}
    </motion.div>
  );
}

export function VisualizationSection() {
  return (
    <section id="visualizations" className="relative py-20 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ISRO Data Visualizations
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore insights from ISRO's missions, launches, and performance metrics
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Visualization Cards */}
        <div className="max-w-4xl mx-auto space-y-0">
          {visualizations.map((visualization, index) => (
            <VisualizationCard
              key={visualization.id}
              visualization={visualization}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
