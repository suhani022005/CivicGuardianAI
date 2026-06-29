
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 py-12">

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        <h2 className="text-3xl font-bold text-cyan-400">
          CivicGuardian AI
        </h2>

        <p className="text-slate-400 mt-3 max-w-xl">
          AI-powered community issue reporting and prioritization for building smarter cities.
        </p>

        <div className="flex gap-8 text-2xl text-white mt-8">

          <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-cyan-400 transition transform hover:scale-110">
            <FaEnvelope />
          </a>

        </div>

        <p className="text-slate-500 mt-10 text-sm">
          © 2026 CivicGuardian AI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;