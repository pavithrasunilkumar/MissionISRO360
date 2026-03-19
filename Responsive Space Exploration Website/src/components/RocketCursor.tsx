import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function RocketCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate angle based on mouse movement direction
      const deltaX = newX - previousPosition.x;
      const deltaY = newY - previousPosition.y;
      
      if (deltaX !== 0 || deltaY !== 0) {
        // Calculate angle in degrees (0 degrees = pointing up)
        const angle = Math.atan2(deltaX, -deltaY) * (180 / Math.PI);
        setRotation(angle);
      }
      
      setPreviousPosition({ x: newX, y: newY });
      setMousePosition({ x: newX, y: newY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [previousPosition]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-screen"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      animate={{
        x: -24,
        y: -24,
        rotate: rotation,
      }}
      transition={{
        x: { duration: 0 },
        y: { duration: 0 },
        rotate: { type: "spring", stiffness: 200, damping: 20 },
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rocket body */}
        <path
          d="M12 2L14 8L12 14L10 8L12 2Z"
          fill="url(#rocketGradient)"
          stroke="#60A5FA"
          strokeWidth="0.5"
        />
        
        {/* Rocket fins */}
        <path d="M10 10L8 14L10 12L10 10Z" fill="#3B82F6" />
        <path d="M14 10L16 14L14 12L14 10Z" fill="#3B82F6" />
        
        {/* Window */}
        <circle cx="12" cy="6" r="1.5" fill="#E0F2FE" opacity="0.8" />
        
        {/* Fire animation */}
        <motion.path
          d="M12 14L11 18L12 20L13 18L12 14Z"
          fill="url(#fireGradient1)"
          animate={{
            d: [
              "M12 14L11 18L12 20L13 18L12 14Z",
              "M12 14L10.5 17L12 21L13.5 17L12 14Z",
              "M12 14L11 18L12 20L13 18L12 14Z",
            ],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M12 16L11.5 19L12 21L12.5 19L12 16Z"
          fill="url(#fireGradient2)"
          animate={{
            d: [
              "M12 16L11.5 19L12 21L12.5 19L12 16Z",
              "M12 16L11 18.5L12 22L13 18.5L12 16Z",
              "M12 16L11.5 19L12 21L12.5 19L12 16Z",
            ],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="rocketGradient" x1="12" y1="2" x2="12" y2="14">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          <linearGradient id="fireGradient1" x1="12" y1="14" x2="12" y2="20">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          
          <linearGradient id="fireGradient2" x1="12" y1="16" x2="12" y2="21">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}