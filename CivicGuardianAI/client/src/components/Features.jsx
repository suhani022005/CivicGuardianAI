import {
  FaRobot,
  FaMapMarkedAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={40} />,
    title: "AI Image Analysis",
    description:
      "Gemini Vision automatically detects potholes, garbage, water leaks, streetlights, and more from uploaded images.",
  },
  {
    icon: <FaMapMarkedAlt size={40} />,
    title: "Smart Location Tracking",
    description:
      "Citizens can provide locations so authorities know exactly where the issue exists.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Priority Ranking",
    description:
      "AI assigns severity and priority so dangerous issues receive attention first.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Community Dashboard",
    description:
      "Track reported, pending, resolved, and high-priority civic issues in one place.",
  },
];

function Features() {
  return (
    <section className="bg-slate-900 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Why CivicGuardian AI?
        </h2>

        <p className="text-center text-slate-400 mt-5 text-lg">
          AI-powered civic issue management for smarter cities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <div className="text-cyan-400 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;