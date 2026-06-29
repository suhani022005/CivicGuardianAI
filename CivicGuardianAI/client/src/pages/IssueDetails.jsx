import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function IssueDetails() {
  const { id } = useParams();

  const [issue, setIssue] = useState(null);

  useEffect(() => {
    fetchIssue();
  }, []);

  const fetchIssue = async () => {
    try {
      const res = await api.get(`/issues/${id}`);
      setIssue(res.data.issue);
    } catch (err) {
      console.log(err);
    }
  };

  if (!issue) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center text-3xl">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Image */}

          <img
            src={issue.imageUrl}
            alt={issue.category}
            className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
          />

          {/* Details */}

          <div>

            <h1 className="text-5xl font-bold mb-8">
              {issue.category}
            </h1>

            <div className="space-y-5 text-lg">

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Description:</strong>

                <p className="mt-2">
                  {issue.description}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Severity:</strong>

                <p className="mt-2 text-red-400">
                  {issue.severity}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Safety Risk:</strong>

                <p className="mt-2">
                  {issue.safetyRisk}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Department:</strong>

                <p className="mt-2">
                  {issue.department}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Impact Prediction:</strong>

                <p className="mt-2">
                  {issue.impactPrediction}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Status:</strong>

                <p className="mt-2 text-cyan-400">
                  {issue.status}
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <strong>Location:</strong>

                <p className="mt-2">
                  {issue.location}
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default IssueDetails;