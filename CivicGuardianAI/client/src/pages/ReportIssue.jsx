import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { FaCloudUploadAlt } from "react-icons/fa";

function ReportIssue() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    try {
      setLoading(true);

      // const formData = new FormData();

      // formData.append("image", image);
      // formData.append("location", location);
      // formData.append("notes", notes);

      const formData = new FormData();

formData.append("image", image);
formData.append("location", location);
formData.append("description", notes);

// TEMP DEFAULTS (IMPORTANT)
formData.append("category", "Road Issue");
formData.append("severity", "Medium");
formData.append("safetyRisk", "Low");
formData.append("department", "Municipal");

      const res = await api.post("/issues/report", formData);

      // const res = await api.post("/issues", formData);

   
      // alert(res.data.message);

      console.log(res.data);
alert(res.data.message || "Issue reported successfully!");

      setImage(null);
      setPreview("");
      setLocation("");
      setNotes("");

    } catch (err) {
      console.log(err);
      alert("Failed to submit report.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white py-28 px-6">

        <div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl p-10 shadow-xl">

          <h1 className="text-4xl font-bold text-center">
            Report Community Issue
          </h1>

          <p className="text-center text-slate-400 mt-3 mb-10">
            Upload an image and let Gemini AI analyze the issue.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* Upload Box */}

            <label
              className="border-2 border-dashed border-cyan-500 rounded-2xl h-72 flex flex-col justify-center items-center cursor-pointer hover:bg-slate-800 transition"
            >

              <FaCloudUploadAlt
                size={70}
                className="text-cyan-400"
              />

              <p className="mt-5 text-xl">
                Click to Upload Image
              </p>

              <p className="text-slate-400 mt-2">
                JPG, PNG, JPEG
              </p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />

            </label>

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="rounded-2xl w-full h-80 object-cover"
              />
            )}

            <div>

              <label className="block mb-3">
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                placeholder="Example: FC Road, Pune"
                className="w-full bg-slate-800 p-4 rounded-xl"
              />

            </div>

            <div>

              <label className="block mb-3">
                Additional Notes
              </label>

              <textarea
                rows="5"
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Any additional details..."
                className="w-full bg-slate-800 p-4 rounded-xl"
              />

            </div>

            <button
              className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-xl font-bold text-lg transition"
            >
              {loading
                ? "Analyzing with Gemini..."
                : "Submit Report"}
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default ReportIssue;