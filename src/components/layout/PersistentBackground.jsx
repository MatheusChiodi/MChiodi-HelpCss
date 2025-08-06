import { motion } from "framer-motion";

export default function PersistentBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,85,85,0.2)_0%,_transparent_70%)] opacity-100 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -20, 20, 0],
          y: [0, 15, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
        }}
      />
      <motion.div
        className="absolute left-[10%] top-1/3 h-[60vh] w-[60vw] rotate-45 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_transparent_80%)] opacity-100 blur-2xl"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1],
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(circle,_rgba(255,85,85,0.1)_0%,_transparent_70%)] opacity-100 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -50, 30, 0],
          y: [0, 30, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "easeInOut",
          times: [0, 0.4, 0.7, 1],
        }}
      />
    </div>
  );
}
