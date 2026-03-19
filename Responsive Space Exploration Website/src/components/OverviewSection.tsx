import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function OverviewCard({
  image,
  title,
  description,
  delay = 0,
}: {
  image: string;
  title: string;
  description: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // ✅ Handle Explore button navigation based on title
  const handleExploreClick = () => {
    if (title.toLowerCase().includes("vs")) {
      navigate("/isro-vs-world");
    } else {
      navigate("/isro");
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-slate-900/90 to-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image */}
          <motion.div
            className="relative aspect-video md:aspect-square overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-white font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {title}
            </h3>
            <p className="text-gray-300 font-['Inter']">{description}</p>
            <motion.button
              onClick={handleExploreClick}
              className="self-start px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/30 font-['Inter']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function OverviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="overview" ref={sectionRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white font-['Poppins']">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Overview
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-['Inter']">
            Exploring India's contributions to space exploration and how they
            compare globally
          </p>
        </motion.div>

        <div className="space-y-8">
          <OverviewCard
            image="https://images.unsplash.com/photo-1648281315089-7e54e0c6149c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJU1JPJTIwcm9ja2V0JTIwbGF1bmNofGVufDF8fHx8MTc2MTU4MDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="ISRO Missions"
            description="The Indian Space Research Organisation (ISRO) has achieved remarkable milestones in space exploration, including the Mars Orbiter Mission (Mangalyaan), Chandrayaan lunar missions, and the recent Aditya-L1 solar mission. With cost-effective innovations and a track record of successful launches, ISRO has positioned India as a global leader in space technology and exploration."
            delay={0.2}
          />

          <OverviewCard
            image="https://images.unsplash.com/photo-1737502483514-010a36cf6b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOQVNBJTIwc3BhY2UlMjBtaXNzaW9ufGVufDF8fHx8MTc2MTU4MDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="ISRO vs World Space Agencies"
            description="While agencies like NASA, ESA, and SpaceX have larger budgets and longer histories, ISRO stands out for its frugal engineering and high success rate. India's Mars mission cost less than a Hollywood movie, yet achieved what only a few nations have accomplished. This comparison highlights ISRO's unique approach to space exploration, balancing innovation with cost-effectiveness while competing on the global stage."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
