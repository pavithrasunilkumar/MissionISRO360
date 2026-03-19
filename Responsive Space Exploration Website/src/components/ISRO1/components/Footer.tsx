import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Rocket,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-12 overflow-hidden bg-black border-t border-blue-500/20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1724667523173-d0305380fcdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyZmllbGQlMjBnYWxheHl8ZW58MXx8fHwxNzYxNjQzNTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Starfield"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-[Space_Grotesk] font-bold text-[20px]">
                <span>
                  <span className="text-white">Mission</span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    ISRO360
                  </span>
                </span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A comprehensive data analytics and machine
              learning project exploring ISRO's space missions,
              technological achievements, and future
              trajectories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  ISRO Overview
                </a>
              </li>
              <li>
                <a
                  href="#visualizations"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  Data Visualizations
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  ML Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  ISRO vs World
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">
              Contact & Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Get in touch or follow the project updates
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@missionisro360.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Mission ISRO 360. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with data analytics and machine learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}