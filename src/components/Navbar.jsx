import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../constants/data";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-violet-500">
          Lana.
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-violet-400 transition cursor-pointer"><a href="#home">Home</a></li>
          <li className="hover:text-violet-400 transition cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-violet-400 transition cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-violet-400 transition cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-violet-400 transition cursor-pointer"><a href="#education">Education</a></li>
        </ul>

        <div className="flex gap-4 text-xl">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;