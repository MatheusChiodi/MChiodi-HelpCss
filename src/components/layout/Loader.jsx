import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 overflow-hidden bg-zinc-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {Array.from({ length: 25 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const size = Math.random() * 6 + 4;
        const duration = Math.random() * 5 + 3;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF5555]/20 blur-2xl"
            style={{
              width: size,
              height: size,
              top: `${randomY}%`,
              left: `${randomX}%`,
            }}
            animate={{
              y: ["0%", "10%", "-10%", "0%"],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        );
      })}

      <motion.div
        className="relative flex h-24 w-24 items-center justify-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute h-full w-full rounded-full border-4 border-[#FF5555] border-b-transparent shadow-[0_0_25px_#FF5555]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        <motion.div
          className="h-8 w-8 rounded-full bg-[#FF5555] shadow-[0_0_30px_#FF5555]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.p
        className="text-muted-foreground font-mono text-sm uppercase tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Carregando <span className="text-[#FF5555]">KnowledgeHub</span>...
      </motion.p>
    </motion.div>
  );
}
