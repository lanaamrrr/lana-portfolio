import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { personalInfo } from "../constants/data";

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col items-center text-center">

          {/* Name */}

          <h2 className="text-4xl font-bold text-white">
            {personalInfo.name}
          </h2>

          <p className="mt-3 text-gray-400">
            AI Student • Aspiring Full-Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-gray-500 leading-7">
            Thanks for visiting my portfolio.
            I'm always excited to learn, collaborate,
            and build meaningful digital experiences.
          </p>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10 py-6">

        <p className="flex items-center justify-center gap-2 text-sm text-gray-500">

          Made with

          <FaHeart className="text-violet-500 animate-pulse" />

          by {personalInfo.name}

        </p>

      </div>

    </footer>
  );
}

export default Footer;