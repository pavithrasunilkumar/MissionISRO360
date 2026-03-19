import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, FileText, Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative py-12 px-6 border-t border-purple-500/20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-white font-['Poppins'] text-xl">MissionISRO360</span>
            </div>
            <p className="text-gray-400 font-['Inter']">
              Exploring the cosmos through India's space achievements
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-['Poppins']">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left font-['Inter']"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-purple-400 transition-colors text-left font-['Inter']"
              >
                Overview
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-['Poppins']">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-purple-900/50 border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-purple-900/50 border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-purple-900/50 border border-purple-500/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-500 font-['Inter']">
            © 2025 MissionISRO360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}