import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">NextJob.Ai</h2>
          <p className="mt-4 text-gray-400">
            Build stunning resumes & profiles effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-300">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-blue-300">
            Stay Connected
          </h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
              <FaGithub />
            </a>
          </div>
          <h3 className="text-lg font-semibold mt-6 text-blue-300">
            Subscribe to our NextJob.ai
          </h3>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-lg text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      <p className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} ResumeCraft. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
