import { FaEnvelope, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { personalInfo } from "../constants/data";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="relative w-[90%] max-w-sm rounded-2xl bg-zinc-900 border border-violet-500/20 p-6">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-violet-500 mb-6">
          Contact Me
        </h2>

        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-violet-500 text-xl" />
            <span>{personalInfo.email}</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-violet-500 text-xl" />
            <span>{personalInfo.phone}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactModal;