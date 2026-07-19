import { useEffect } from "react";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";

interface SplashScreenProps {
  onFinish: () => void;
  duration?: number; // milliseconds
}

export function SplashScreen({ onFinish, duration = 3500 }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, duration);
    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Starfield-style backdrop to match the site theme */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15), transparent 40%)
            `,
          }}
        ></div>
      </div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-5 px-6 text-center"
      >
        <div className="relative">
          <Rocket className="w-16 h-16 text-purple-400" />
          <div className="absolute inset-0 blur-2xl bg-purple-500/40"></div>
        </div>

        <h1 className="text-white font-['Poppins'] text-2xl md:text-4xl tracking-wide">
          MissionISRO360
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 font-['Inter'] text-sm md:text-base tracking-wide"
        >
          A project by <span className="text-cyan-400">Pavithra Sunilkumar</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
