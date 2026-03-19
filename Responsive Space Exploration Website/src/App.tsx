// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { OverviewSection } from "./components/OverviewSection";
import { Footer } from "./components/Footer";
import { RocketCursor } from "./components/RocketCursor";
import { IsroPage } from "./components/IsroPage";
import { IsroVsWorldPage } from "./components/IsroVsWorldPage"; // ✅ Your actual page component

// ✅ Cursor controller (same logic)
function CursorController() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("hide-cursor");
      document.body.style.cursor = "none";
    } else {
      document.body.classList.remove("hide-cursor");
      document.body.style.cursor = "auto";
    }

    return () => {
      document.body.classList.remove("hide-cursor");
      document.body.style.cursor = "auto";
    };
  }, [location]);

  return null;
}

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <RocketCursor />

      {/* 🌌 Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/space-background.mp4" type="video/mp4" />
      </video>

      <Navigation />
      <HeroSection />
      <OverviewSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CursorController />

      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🚀 ISRO Page */}
        <Route path="/isro" element={<IsroPage />} />

        {/* 🌍 ISRO vs World Page */}
        <Route path="/isro-vs-world" element={<IsroVsWorldPage />} />
      </Routes>
    </Router>
  );
}
