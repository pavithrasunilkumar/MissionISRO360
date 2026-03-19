import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background container */}
      <div className="absolute inset-0">
        {/* Starfield effect */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => {
            const size = Math.random() > 0.8 ? 2 : 1;
            const isColored = Math.random() > 0.85;
            const colors = ["bg-blue-300", "bg-purple-300", "bg-pink-300", "bg-white"];
            const color = isColored
              ? colors[Math.floor(Math.random() * colors.length)]
              : "bg-white";

            return (
              <motion.div
                key={i}
                className={`absolute rounded-full ${color}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                  boxShadow: size > 1 ? "0 0 4px currentColor" : "none",
                }}
                animate={{
                  opacity: [
                    Math.random() * 0.8 + 0.2,
                    Math.random() * 0.3 + 0.1,
                    Math.random() * 0.8 + 0.2,
                  ],
                  scale: size > 1 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: Math.random() * 4 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            );
          })}
        </div>

        {/* Half Earth on the right */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559448048-e7dc5ec38d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Earth"
            className="w-full h-full object-cover opacity-50 translate-x-1/2"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Heading */}
          <motion.h1
            className="mb-8 text-white font-['Poppins'] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-5xl md:text-6xl">
              MissionISRO360
            </span>
          </motion.h1>

          {/* Paragraph (same font + color as heading) */}
          <motion.p
            className="max-w-2xl mx-auto leading-relaxed text-white font-['Poppins'] text-lg mb-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From the launch of Aryabhata to Chandrayaan and beyond, MissionISRO360 captures
            the story of India's rise in space exploration. Experience the innovation, ambition,
            and triumphs of ISRO through interactive visuals and insights that bring space closer to you.
          </motion.p>

          {/* Button */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={() => {
                const element = document.getElementById("overview");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/50 font-['Poppins']"
            >
              Know More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
