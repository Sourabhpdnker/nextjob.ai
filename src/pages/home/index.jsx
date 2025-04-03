import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push("/login");
  }, [session]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">CareerHub</h1>
        <div className="flex gap-4">
          <Link
            href="/resume"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Resume Builder
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex gap-6">
        {/* Profile Section (30%) */}
        <section className="bg-white p-6 rounded-lg shadow-md w-[30%]">
          <h2 className="text-xl font-bold mb-4">My Profile</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold">
                {session?.user?.name?.charAt(0) || "U"}
              </div>
              <div>
                <h3 className="font-semibold">
                  {session?.user?.name || "User"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {session?.user?.email || "user@example.com"}
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Applied Jobs</p>
                  <p className="font-bold">12</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Profile Views</p>
                  <p className="font-bold">24</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Node.js", "CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Section (70%) */}
        <section className="bg-white p-6 rounded-lg shadow-md w-[70%]">
          <h2 className="text-xl font-bold mb-4">Job Board</h2>
          <div className="mb-6 flex gap-4">
            <input
              type="text"
              placeholder="Search jobs by title, company..."
              className="flex-1 p-2 border rounded"
            />
            <select className="p-2 border rounded">
              <option>All Locations</option>
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobsData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const jobsData = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechInnovators",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "2 days ago",
    skills: ["React", "TypeScript", "Redux"],
    description:
      "We're looking for an experienced React developer to lead our frontend team...",
  },
  {
    id: 2,
    title: "Android Developer (Kotlin)",
    company: "MobileFirst",
    location: "San Francisco, CA",
    type: "Hybrid",
    salary: "$85,000 - $110,000",
    posted: "1 week ago",
    skills: ["Kotlin", "Android SDK", "Jetpack Compose"],
    description:
      "Join our mobile team to build cutting-edge Android applications...",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Remote",
    type: "Contract",
    salary: "$70 - $90/hr",
    posted: "3 days ago",
    skills: ["Node.js", "React", "MongoDB"],
    description:
      "6-month contract for full stack developer with AWS experience...",
  },
];

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <p className="text-gray-600">
            {job.company} • {job.location}
          </p>
        </div>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm h-fit">
          {job.type}
        </span>
      </div>

      <div className="flex gap-4 mt-2 text-sm">
        <p>💵 {job.salary}</p>
        <p>⏰ {job.posted}</p>
      </div>

      <div className="flex flex-wrap gap-2 my-3">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mb-3">{job.description}</p>

      <div className="flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex-1">
          Apply Now
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
}
