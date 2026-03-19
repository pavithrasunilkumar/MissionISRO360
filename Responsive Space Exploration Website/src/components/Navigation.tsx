import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/30 border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-purple-400" />
          <span className="text-white font-['Poppins'] text-xl">MissionISRO360</span>
        </div>
        
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-300 hover:text-purple-400 transition-colors font-['Inter']"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("overview")}
            className="text-gray-300 hover:text-purple-400 transition-colors font-['Inter']"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-purple-400 transition-colors font-['Inter']"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}