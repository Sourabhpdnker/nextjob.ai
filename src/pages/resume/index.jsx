import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResumeBuilder() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("personal");
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    education: [],
    experience: [],
    skills: [],
  });

  useEffect(() => {
    if (!session) router.push("/login");
  }, [session]);

  const handleInputChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Resume Builder</h1>
        <Link
          href="/home"
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </Link>
      </header>

      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-4">Sections</h2>
          <nav className="space-y-2">
            {[
              { id: "personal", label: "Personal Info" },
              { id: "education", label: "Education" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "templates", label: "Templates" },
            ].map((item) => (
              <button
                key={item.id}
                className={`w-full text-left p-2 rounded ${
                  activeSection === item.id
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8">
            <h2 className="font-bold mb-2">Export</h2>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded mb-2">
              Download PDF
            </button>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white p-2 rounded">
              Publish Online
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          {activeSection === "personal" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={resumeData.personal.name}
                    onChange={(e) =>
                      handleInputChange("personal", "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={resumeData.personal.email}
                    onChange={(e) =>
                      handleInputChange("personal", "email", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded"
                    value={resumeData.personal.phone}
                    onChange={(e) =>
                      handleInputChange("personal", "phone", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={resumeData.personal.location}
                    onChange={(e) =>
                      handleInputChange("personal", "location", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === "templates" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Choose Template</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Modern",
                  "Professional",
                  "Creative",
                  "Minimal",
                  "Executive",
                ].map((template) => (
                  <div
                    key={template}
                    className="border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500"
                  >
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-500">{template}</span>
                    </div>
                    <div className="p-2 text-center bg-white">
                      <button className="text-blue-500 hover:text-blue-700">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add similar sections for education, experience, and skills */}
        </div>

        {/* Preview Panel */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold mb-4">Resume Preview</h2>
          <div className="border-2 border-dashed border-gray-300 h-full min-h-[500px] p-4">
            <h3 className="text-lg font-semibold">
              {resumeData.personal.name || "Your Name"}
            </h3>
            <p className="text-gray-600">
              {resumeData.personal.email || "email@example.com"}
            </p>
            <div className="mt-4">
              <p>Preview will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
