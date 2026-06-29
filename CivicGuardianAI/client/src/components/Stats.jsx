import {
  FaClipboardList,
  FaExclamationTriangle,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaClipboardList size={40} />,
    number: "1,250+",
    title: "Issues Reported",
  },
  {
    icon: <FaExclamationTriangle size={40} />,
    number: "340",
    title: "High Priority",
  },
  {
    icon: <FaCheckCircle size={40} />,
    number: "890",
    title: "Resolved",
  },
  {
    icon: <FaUsers size={40} />,
    number: "2,500+",
    title: "Active Citizens",
  },
];

function Stats() {
  return (
    <section className="bg-slate-900 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Community Impact
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Building smarter and safer cities with AI.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:shadow-cyan-500/20 hover:shadow-xl transition"
            >
              <div className="flex justify-center text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;