import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

function Dashboard() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const res = await api.get("/issues");
      setIssues(res.data.issues);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const total = issues.length;

  const pending = issues.filter(
    (issue) => issue.status === "Pending"
  ).length;

  const resolved = issues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  const high = issues.filter(
    (issue) => issue.severity === "High"
  ).length;

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">
            
          </h1>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
              <FaClipboardList className="text-cyan-400 text-4xl mb-4" />
              <h2 className="text-4xl font-bold">{total}</h2>
              <p className="text-slate-400 mt-2">Total Reports</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
              <FaClock className="text-yellow-400 text-4xl mb-4" />
              <h2 className="text-4xl font-bold">{pending}</h2>
              <p className="text-slate-400 mt-2">Pending</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
              <FaCheckCircle className="text-green-400 text-4xl mb-4" />
              <h2 className="text-4xl font-bold">{resolved}</h2>
              <p className="text-slate-400 mt-2">Resolved</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
              <FaExclamationTriangle className="text-red-400 text-4xl mb-4" />
              <h2 className="text-4xl font-bold">{high}</h2>
              <p className="text-slate-400 mt-2">High Severity</p>
            </div>

          </div>

          {/* Loading */}

          {loading ? (
            <div className="text-center py-20 text-2xl">
              Loading Issues...
            </div>
          ) : (

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {issues.length === 0 ? (

                <div className="col-span-full text-center py-20">

                  <h2 className="text-3xl font-bold">
                    No Issues Reported Yet
                  </h2>

                  <p className="text-slate-400 mt-4">
                    Submit your first civic issue to see it here.
                  </p>

                </div>

              ) : (

                issues.map((issue) => (

                  <Link
                    key={issue._id}
                    to={`/issue/${issue._id}`}
                    className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >

                    <img
                      src={issue.imageUrl}
                      alt={issue.category}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-6">

                      <div className="flex justify-between items-center">

                        <h2 className="text-2xl font-bold">
                          {issue.category}
                        </h2>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold
                            ${
                              issue.severity === "High"
                                ? "bg-red-600"
                                : issue.severity === "Medium"
                                ? "bg-yellow-400 text-black"
                                : "bg-green-600"
                            }`}
                        >
                          {issue.severity}
                        </span>

                      </div>

                      <p className="text-slate-400 mt-3 line-clamp-2">
                        {issue.description}
                      </p>

                      <div className="mt-5 space-y-2">

                        <p>
                          <strong>Status:</strong>{" "}
                          <span className="text-cyan-400">
                            {issue.status}
                          </span>
                        </p>

                        <p>
                          <strong>Location:</strong>{" "}
                          {issue.location}
                        </p>

                        <p>
                          <strong>Department:</strong>{" "}
                          {issue.department}
                        </p>

                      </div>

                      <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-xl font-semibold transition">
                        View Details
                      </button>

                    </div>

                  </Link>

                ))

              )}

            </div>

          )}

        </div>

      </section>
    </>
  );
}

export default Dashboard;