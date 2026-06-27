import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { personalInfo } from "../constants/data";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-violet-500">
            {personalInfo.name}
          </h2>

          <p className="text-gray-400 mt-2">
            AI Student | Aspiring Full-Stack Developer
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
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

      <div className="text-center border-t border-white/10 py-5 text-gray-500 flex items-center justify-center gap-2">

        Made with

        <FaHeart className="text-violet-500" />

        by {personalInfo.name}

      </div>
    </footer>
  );
}

export default Footer;