import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center px-6 md:px-12 pt-28">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT */}
    <div>

      {/* HERO HEADING */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        <span className="text-white">AI Powered</span>
        <br />
        <span className="text-cyan-300">
          Community Issue Reporting
        </span>
      </h1>

      {/* SUBTEXT */}
      <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
        Report potholes, garbage dumps, water leakages, damaged roads and more.
        <br />
        Gemini AI automatically identifies the issue, estimates severity and prioritizes it for faster resolution.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        <Link
          to="/report"
          className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-lg shadow-cyan-500/20"
        >
          Report Issue
          <FaArrowRight />
        </Link>

        <Link
          to="/dashboard"
          className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500/10 transition text-center"
        >
          View Dashboard
        </Link>

      </div>

    </div>

    {/* RIGHT */}
    <div className="flex justify-center">

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
          alt="AI"
          className="rounded-2xl shadow-2xl border border-slate-700"
        />

        {/* glow effect */}
        <div className="absolute -inset-2 bg-cyan-500/20 blur-2xl rounded-2xl -z-10"></div>

      </div>

    </div>

  </div>

</section>
{/* 
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center px-8 pt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              AI Powered
              Community Issue Reporting
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-9">
              Report potholes, garbage dumps, water leakages,
              damaged roads and more.
              Gemini AI automatically identifies the issue,
              estimates severity and prioritizes it for faster
              resolution.
            </p>

            <div className="flex gap-5 mt-10">
              <Link
                to="/report"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl flex items-center gap-3 font-semibold"
              >
                Report Issue
                <FaArrowRight />
              </Link>

              <Link
                to="/dashboard"
                className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
              alt="AI"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section> */}

      <Features />
      <HowItWorks />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;