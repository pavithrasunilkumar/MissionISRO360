import { motion } from 'motion/react';

export function OrbitAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
      {/* Central point */}
      <div className="relative w-4 h-4 bg-cyan-400 rounded-full blur-sm"></div>

      {/* Orbit rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-cyan-500/20"
          style={{
            width: `${ring * 150}px`,
            height: `${ring * 150}px`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20 + ring * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Orbiting satellite/dot */}
          <motion.div
            className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2"
            animate={{
              boxShadow: [
                '0 0 10px rgba(34, 211, 238, 0.5)',
                '0 0 20px rgba(34, 211, 238, 0.8)',
                '0 0 10px rgba(34, 211, 238, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          ></motion.div>
        </motion.div>
      ))}
    </div>
  );
}
