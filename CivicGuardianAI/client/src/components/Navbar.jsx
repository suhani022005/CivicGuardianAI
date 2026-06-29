import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <FaShieldAlt className="text-cyan-400 text-3xl" />

          <span className="text-2xl font-bold text-white">
            CivicGuardian
            <span className="text-cyan-400"> AI</span>
          </span>
        </Link>

        <div className="flex gap-8 text-white font-medium">

          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/report" className="hover:text-cyan-400">
            Report
          </Link>

          <Link to="/dashboard" className="hover:text-cyan-400">
            Dashboard
          </Link>

          <Link to="/leaderboard" className="hover:text-cyan-400">
            Leaderboard
          </Link>

        </div>

      </div>
    </nav>
  );
}



export default Navbar;