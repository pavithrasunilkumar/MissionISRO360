import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { VisualizationSection } from "./components/VisualizationSection";
import { AnalyticsSection } from "./components/AnalyticsSection";
import { Footer } from "./components/Footer";

import "./index.css";

export default function App() {
  // ✅ Scroll to top when ISRO1 loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // ✅ Ensure default cursor is visible on this page
    document.body.style.cursor = "auto";
    return () => {
      document.body.style.cursor = "auto"; // reset if needed
    };
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Page Content */}
      <Header />
      <main>
        <HeroSection />
        <VisualizationSection />
        <AnalyticsSection />
      </main>
      <Footer />
    </div>
  );
}
