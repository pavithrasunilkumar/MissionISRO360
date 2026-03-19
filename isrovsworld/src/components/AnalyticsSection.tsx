import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Brain, ArrowUp, TrendingUp, Lightbulb, ChevronDown } from 'lucide-react';
import { Progress } from './ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface ModelData {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  trainingData: string;
  keyFeatures: string;
  crossValidation: string;
  topFeature1: { name: string; value: string };
  topFeature2: { name: string; value: string };
  topFeature3: { name: string; value: string };
  insights: string;
}

const modelData: Record<string, ModelData> = {
  'random-forest': {
    name: 'Random Forest Classifier',
    accuracy: 92.7,
    precision: 91.3,
    recall: 94.8,
    f1Score: 93.0,
    trainingData: '450 ISRO missions (1969-2024)',
    keyFeatures: 'Launch Vehicle, Budget, Payload Mass, Orbit Type',
    crossValidation: '5-Fold CV Score: 91.2%',
    topFeature1: { name: 'Launch Vehicle Type', value: '0.42' },
    topFeature2: { name: 'Mission Budget', value: '0.38' },
    topFeature3: { name: 'Payload Mass', value: '0.31' },
    insights: 'Launch vehicle type and mission funding have the highest influence on mission success probability. PSLV launches show consistently positive SHAP values, indicating strong positive contribution to success. Missions with budgets above ₹300 crores demonstrate 15% higher success probability. Payload mass optimization within vehicle capacity limits is crucial, with the sweet spot being 70-85% of maximum capacity for optimal success rates.',
  },
  'xgboost': {
    name: 'XGBoost Classifier',
    accuracy: 94.2,
    precision: 93.5,
    recall: 95.1,
    f1Score: 94.3,
    trainingData: '450 ISRO missions (1969-2024)',
    keyFeatures: 'Launch Vehicle, Budget, Mission Type, Launch Site',
    crossValidation: '5-Fold CV Score: 93.8%',
    topFeature1: { name: 'Mission Budget', value: '0.45' },
    topFeature2: { name: 'Launch Vehicle Type', value: '0.41' },
    topFeature3: { name: 'Mission Type', value: '0.35' },
    insights: 'XGBoost reveals that mission budget is the strongest predictor of success, with a non-linear relationship showing diminishing returns above ₹500 crores. Launch vehicle reliability metrics and historical success rates are heavily weighted. Communication satellites show 18% higher success rates compared to earth observation missions. The gradient boosting approach captures complex interactions between budget allocation and technical specifications.',
  },
  'logistic-regression': {
    name: 'Logistic Regression',
    accuracy: 87.5,
    precision: 86.2,
    recall: 89.3,
    f1Score: 87.7,
    trainingData: '450 ISRO missions (1969-2024)',
    keyFeatures: 'Launch Vehicle, Payload Mass, Year, Orbit Type',
    crossValidation: '5-Fold CV Score: 86.9%',
    topFeature1: { name: 'Launch Vehicle Type', value: '0.38' },
    topFeature2: { name: 'Orbit Type', value: '0.33' },
    topFeature3: { name: 'Launch Year', value: '0.28' },
    insights: 'The linear model shows that ISRO success rates have improved steadily over time, with a 2.3% increase per decade. GTO missions have 12% lower success probability compared to LEO missions due to complexity. PSLV demonstrates the most consistent positive coefficient. The simplicity of logistic regression makes it highly interpretable, showing clear linear relationships between technical parameters and mission outcomes.',
  },
};

export function AnalyticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedModel, setSelectedModel] = useState('random-forest');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentModel = modelData[selectedModel];

  const handleModelChange = (value: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedModel(value);
      setIsTransitioning(false);
    }, 300);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="analytics" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black"></div>
      
      {/* Earth background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZXxlbnwxfHx8fDE3NjE2MTgwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Earth from space"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6 shadow-lg shadow-purple-500/50">
            <Brain className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Model Architecture & Performance
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Compare different machine learning models used for ISRO mission prediction
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
        </motion.div>

        {/* Model Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-12"
        >
          <label className="block text-cyan-400 mb-3 text-center">Select Model</label>
          <Select value={selectedModel} onValueChange={handleModelChange}>
            <SelectTrigger className="w-full bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-cyan-500/30 text-white hover:border-cyan-400/50 transition-all duration-300 h-14 text-lg shadow-lg shadow-cyan-500/10 focus:ring-2 focus:ring-cyan-400/50">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-cyan-500/30 text-white">
              <SelectItem value="random-forest" className="hover:bg-cyan-500/20 focus:bg-cyan-500/20">
                Random Forest Classifier
              </SelectItem>
              <SelectItem value="xgboost" className="hover:bg-cyan-500/20 focus:bg-cyan-500/20">
                XGBoost Classifier
              </SelectItem>
              <SelectItem value="logistic-regression" className="hover:bg-cyan-500/20 focus:bg-cyan-500/20">
                Logistic Regression
              </SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedModel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? 20 : 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
              {/* Model Accuracy Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                      <h3 className="text-white">Model Accuracy Score</h3>
                    </div>

                    {/* Circular progress */}
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <svg className="transform -rotate-90 w-48 h-48">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="rgba(147, 51, 234, 0.1)"
                          strokeWidth="12"
                          fill="none"
                        />
                        <motion.circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="url(#gradient)"
                          strokeWidth="12"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 88}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - currentModel.accuracy / 100) }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span
                          key={currentModel.accuracy}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-white"
                        >
                          {currentModel.accuracy}%
                        </motion.span>
                        <span className="text-gray-400 text-sm">Accuracy</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Precision</span>
                        <motion.span
                          key={`precision-${currentModel.precision}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-purple-400"
                        >
                          {currentModel.precision}%
                        </motion.span>
                      </div>
                      <Progress value={currentModel.precision} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Recall</span>
                        <motion.span
                          key={`recall-${currentModel.recall}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-blue-400"
                        >
                          {currentModel.recall}%
                        </motion.span>
                      </div>
                      <Progress value={currentModel.recall} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">F1-Score</span>
                        <motion.span
                          key={`f1-${currentModel.f1Score}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-cyan-400"
                        >
                          {currentModel.f1Score}%
                        </motion.span>
                      </div>
                      <Progress value={currentModel.f1Score} className="h-2" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Model Details Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white">Model Architecture</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-black/40 rounded-lg border border-cyan-500/20">
                        <div className="text-sm text-gray-400 mb-1">Algorithm</div>
                        <motion.div
                          key={currentModel.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-white"
                        >
                          {currentModel.name}
                        </motion.div>
                      </div>
                      
                      <div className="p-4 bg-black/40 rounded-lg border border-cyan-500/20">
                        <div className="text-sm text-gray-400 mb-1">Training Dataset</div>
                        <div className="text-white">{currentModel.trainingData}</div>
                      </div>
                      
                      <div className="p-4 bg-black/40 rounded-lg border border-cyan-500/20">
                        <div className="text-sm text-gray-400 mb-1">Key Features</div>
                        <motion.div
                          key={currentModel.keyFeatures}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-white"
                        >
                          {currentModel.keyFeatures}
                        </motion.div>
                      </div>
                      
                      <div className="p-4 bg-black/40 rounded-lg border border-cyan-500/20">
                        <div className="text-sm text-gray-400 mb-1">Cross-Validation</div>
                        <motion.div
                          key={currentModel.crossValidation}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-white"
                        >
                          {currentModel.crossValidation}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* SHAP Explanation Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-5xl mx-auto relative group mb-12"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-white">SHAP Feature Importance Analysis</h3>
                  </div>

                  <div className="relative mb-6 rounded-xl overflow-hidden bg-black/40 border border-cyan-500/30 min-h-[400px] flex items-center justify-center group-hover:border-cyan-400/50 transition-colors duration-300">
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

  {/* Added shap image */}
  <img
    src="/shap/shap1.png"
    alt="SHAP Feature Importance"
    className="relative z-10 w-full h-full object-contain rounded-lg"
    onError={(e) => {
      const target = e.currentTarget as HTMLImageElement;
      target.onerror = null;
      target.src = '/placeholder.png';
    }}
  />

  {/* Grid overlay */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    ></div>
  </div>
</div>


                  {/* Insights */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-black/40 rounded-lg border border-cyan-500/20">
                      <div className="text-cyan-400 mb-2">Top Feature #1</div>
                      <motion.div
                        key={currentModel.topFeature1.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white mb-1"
                      >
                        {currentModel.topFeature1.name}
                      </motion.div>
                      <div className="text-gray-400 text-sm">SHAP Value: {currentModel.topFeature1.value}</div>
                    </div>
                    
                    <div className="p-4 bg-black/40 rounded-lg border border-blue-500/20">
                      <div className="text-blue-400 mb-2">Top Feature #2</div>
                      <motion.div
                        key={currentModel.topFeature2.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white mb-1"
                      >
                        {currentModel.topFeature2.name}
                      </motion.div>
                      <div className="text-gray-400 text-sm">SHAP Value: {currentModel.topFeature2.value}</div>
                    </div>
                    
                    <div className="p-4 bg-black/40 rounded-lg border border-purple-500/20">
                      <div className="text-purple-400 mb-2">Top Feature #3</div>
                      <motion.div
                        key={currentModel.topFeature3.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white mb-1"
                      >
                        {currentModel.topFeature3.name}
                      </motion.div>
                      <div className="text-gray-400 text-sm">SHAP Value: {currentModel.topFeature3.value}</div>
                    </div>
                  </div>

                  {/* Key Insight */}
                  <div className="mt-6 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30">
                    <div className="flex gap-3">
                      <Lightbulb className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-white mb-2">Key Insights from SHAP Analysis</div>
                        <motion.p
                          key={currentModel.insights}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-gray-400 leading-relaxed"
                        >
                          {currentModel.insights}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Back to Visualizations Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('visualizations')}
            className="group inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Back to Visualizations</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
