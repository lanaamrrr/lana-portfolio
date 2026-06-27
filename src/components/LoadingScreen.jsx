import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#09090B] flex items-center justify-center z-[9999]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="w-20 h-20 rounded-full border-4 border-violet-500 border-t-transparent"
      />
    </div>
  );
}

export default LoadingScreen;