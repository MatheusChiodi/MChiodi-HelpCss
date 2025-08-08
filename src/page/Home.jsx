import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Divider } from "../components/ui/divider";

export default function Home() {
  const dataInfoProject = [
    {
      icon: "📝",
      title: "Exemplos Práticos",
      text: "Vários exemplos práticos tudo em um só lugar",
    },
    {
      icon: "📚",
      title: "Explicações Claras",
      text: "Explicações claras e diretas, sem enrolação",
    },
    {
      icon: "🎨",
      title: "Visualização Real",
      text: "Visualização real do CSS em ação",
    },
  ];
  return (
    <main className="min-h-screen px-6 py-12 text-white">
      {/* HERO */}
      <section className="relative mx-auto flex md:h-screen max-w-5xl flex-col justify-center space-y-8 text-center">
        {/* Animated Background Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 z-0 h-64 w-64 rounded-full bg-[#ff5555] blur-3xl"
        />
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl font-extrabold leading-tight drop-shadow-lg md:text-7xl"
        >
          Aprenda CSS com exemplos{" "}
          <span className="bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 bg-clip-text text-transparent">
            visuais e práticos
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10 mx-auto max-w-2xl text-xl text-zinc-300 md:text-2xl"
        >
          O <span className="font-bold text-white">MChiodi</span>{" "}
          <span className="font-bold text-[#ff5555]">HelpCss</span> é seu guia
          moderno e interativo para dominar o CSS do zero com explicações
          claras, animações e códigos prontos para usar.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 pb-12 sm:flex-row"
        >
          <Link to="/study">
            <Button
              whileHover={{ scale: 1.08, boxShadow: "0 0 24px #ff5555" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 px-10 py-5 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-90"
            >
              Comece a Estudar →
            </Button>
          </Link>
          <Link to="/sobre">
            <Button
              whileHover={{ scale: 1.05, boxShadow: "0 0 16px #ff5555" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-[#ccc] bg-zinc-900 px-10 py-5 text-lg font-semibold text-[#ccc] shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#ff5555] hover:bg-[#ff5555]/50 hover:text-white hover:brightness-90"
            >
              Saiba Mais
            </Button>
          </Link>
        </motion.div>
        <Divider />
      </section>

      {/* SOBRE O PROJETO */}
      <section className="mx-auto mb-32 max-w-4xl space-y-10 text-center pt-32 md:pt-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-2 bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent"
        >
          📚 Sobre o Projeto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-300"
        >
          Esse projeto foi criado para ensinar CSS com foco em{" "}
          <strong className="text-[#ff5555]">visualização real</strong>,
          animações e explicações contextualizadas para quem está começando
          agora. Nada de aulas entediantes — aqui você vê o antes e depois de
          cada estilo.
        </motion.p>
        <div className="mt-8 grid grid-cols-1 gap-8 pb-12 sm:grid-cols-3 lg:grid-cols-3">
          {dataInfoProject.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-zinc-800 to-black p-8 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:scale-[1.04] hover:shadow-[#ff5555]/40"
            >
              <div className="mb-2 animate-bounce text-5xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-base text-neutral-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <Divider />
      </section>

      {/* SOBRE MIM */}
      <section className="mx-auto mt-24 max-w-4xl space-y-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent"
        >
          👨‍💻 Sobre Mim
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-300"
        >
          Sou <span className="font-bold text-[#ff5555]">Matheus Chiodi</span>,
          desenvolvedor front-end e criador do canal{" "}
          <a
            className="font-semibold text-[#ccc] underline transition-all duration-300 hover:text-[#ff5555]"
            href="https://www.youtube.com/@MChiodiDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            MChiodiDev
          </a>
          . Criei esse espaço para compartilhar o que aprendi sobre CSS de forma
          prática, moderna e divertida.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 aspect-video max-w-2xl overflow-hidden rounded-xl border-4 border-[#ff5555]/30 shadow-2xl"
        >
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/K2xeAGMn0xQ?si=77FVxOsqnssJuloi"
            title="Últimos vídeos do canal MChiodiDev"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex justify-center gap-6"
        >
          <a
            href="https://github.com/mchiodi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 shadow-lg transition-all duration-300 hover:bg-[#ff5555]/20"
          >
            <span className="text-xl">🐙</span>
            <span className="font-semibold text-[#fff] transition-all duration-300 group-hover:text-[#ff5555]">
              GitHub
            </span>
          </a>
          <a
            href="https://www.youtube.com/@MChiodiDev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 shadow-lg transition-all duration-300 hover:bg-[#ff5555]/20"
          >
            <span className="text-xl">▶️</span>
            <span className="font-semibold text-[#fff]">YouTube</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
