import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <SectionTitle
          subtitle="Let's Connect"
          title="Contact Me"
        />

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-zinc-900 rounded-xl p-4 outline-none border border-white/10 focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-zinc-900 rounded-xl p-4 outline-none border border-white/10 focus:border-violet-500"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-zinc-900 rounded-xl p-4 outline-none border border-white/10 focus:border-violet-500"
          />

          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;