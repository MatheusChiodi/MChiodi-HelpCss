import { motion } from "framer-motion";

export function Divider() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-22 relative z-10 mx-auto h-1 w-1/2 rounded-full bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500"
    />
  );
}
