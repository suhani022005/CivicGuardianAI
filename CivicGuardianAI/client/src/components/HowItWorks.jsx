import {
  FaCamera,
  FaRobot,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera size={45} />,
    title: "Upload Image",
    description:
      "Take a photo of a pothole, garbage dump, water leakage, broken streetlight or any civic issue.",
  },
  {
    icon: <FaRobot size={45} />,
    title: "Gemini AI Analysis",
    description:
      "Gemini Vision identifies the issue category, severity, safety risk and responsible department.",
  },
  {
    icon: <FaDatabase size={45} />,
    title: "Save Report",
    description:
      "The issue is securely stored in MongoDB with complete AI-generated details.",
  },
  {
    icon: <FaChartBar size={45} />,
    title: "Track Progress",
    description:
      "Monitor issue status, priority and resolution through the dashboard.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          How It Works
        </h2>

        <p className="text-center text-slate-400 mt-4 text-lg">
          Reporting a civic issue takes less than a minute.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center text-cyan-400 mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-300">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;