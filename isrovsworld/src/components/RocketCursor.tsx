import { useState, useEffect } from 'react';

export function RocketCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-screen"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-12px, -12px)',
      }}
    >
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Fire/Exhaust */}
        <g className="animate-pulse">
          <ellipse cx="12" cy="26" rx="4" ry="3" fill="#ff6b00" opacity="0.8">
            <animate attributeName="ry" values="3;4;3" dur="0.3s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="12" cy="28" rx="3" ry="2.5" fill="#ffaa00" opacity="0.7">
            <animate attributeName="ry" values="2.5;3.5;2.5" dur="0.4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="12" cy="30" rx="2" ry="2" fill="#ffdd00" opacity="0.6">
            <animate attributeName="ry" values="2;3;2" dur="0.5s" repeatCount="indefinite" />
          </ellipse>
        </g>
        
        {/* Rocket Body */}
        <path
          d="M12 2L16 12H8L12 2Z"
          fill="url(#rocketGradient)"
          stroke="#60a5fa"
          strokeWidth="0.5"
        />
        <rect x="8" y="12" width="8" height="12" fill="#0ea5e9" rx="1" />
        
        {/* Rocket Fins */}
        <path d="M8 16L5 20L8 20Z" fill="#0284c7" />
        <path d="M16 16L19 20L16 20Z" fill="#0284c7" />
        
        {/* Window */}
        <circle cx="12" cy="16" r="2" fill="#60a5fa" opacity="0.8" />
        <circle cx="12" cy="16" r="1.5" fill="#22d3ee" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
        </circle>
        
        <defs>
          <linearGradient id="rocketGradient" x1="12" y1="2" x2="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
