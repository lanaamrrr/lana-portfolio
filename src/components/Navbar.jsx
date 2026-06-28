import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../constants/data";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#09090B]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-white transition duration-300 hover:text-violet-400"
        >
          Lana<span className="text-violet-500">.</span>
        </a>

        {/* Navigation */}

        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-300">

          <li>
            <a
              href="#home"
              className="transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5"
            >
              Home
            </a>
          </li>

           <li>
            <a
              href="#skills"
              className="transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5"
            >
              Skills
            </a>
          </li>

          
          <li>
            <a
              href="#projects"
              className="transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5"
            >
              Education
            </a>
          </li>

        </ul>

        {/* Socials */}

        <div className="flex items-center gap-3">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-400"
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;