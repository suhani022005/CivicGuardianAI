import Navbar from "../components/Navbar";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
} from "react-icons/fa";

function Leaderboard() {
  const leaders = [
    {
      rank: 1,
      name: "Suhani",
      points: 320,
    },
    {
      rank: 2,
      name: "Rahul",
      points: 285,
    },
    {
      rank: 3,
      name: "Priya",
      points: 250,
    },
    {
      rank: 4,
      name: "Aman",
      points: 210,
    },
    {
      rank: 5,
      name: "Neha",
      points: 185,
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-28 px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <FaTrophy
              className="text-yellow-400 mx-auto"
              size={70}
            />

            <h1 className="text-5xl font-bold mt-5">
              Citizen Hero Leaderboard
            </h1>

            <p className="text-slate-400 mt-4">
              Citizens earn points by reporting and verifying
              community issues.
            </p>

          </div>

          <div className="mt-16 space-y-5">

            {leaders.map((user) => (

              <div
                key={user.rank}
                className="bg-slate-900 rounded-2xl p-6 flex justify-between items-center hover:shadow-cyan-500/20 hover:shadow-xl transition"
              >


             

                <div className="flex items-center gap-5">

                  {user.rank === 1 && (
                    <FaTrophy className="text-yellow-400" size={35} />
                  )}

                  {user.rank === 2 && (
                    <FaMedal className="text-gray-300" size={35} />
                  )}

                  {user.rank === 3 && (
                    <FaAward className="text-orange-500" size={35} />
                  )}

                  {user.rank > 3 && (
                    <FaStar className="text-cyan-400" size={30} />
                  )}

                  <div>

                    <h2 className="text-2xl font-semibold">
                      {user.name}
                    </h2>

                    <p className="text-slate-400">
                      Rank #{user.rank}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h2 className="text-3xl font-bold text-cyan-400">
                    {user.points}
                  </h2>

                  

         
                  <p className="text-slate-400">
                    Hero Points
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Leaderboard;




