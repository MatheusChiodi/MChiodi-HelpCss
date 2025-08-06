import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import classCategoriesBorda from "@/data/classCategoriesBorda.json";
import classCategoriesDisplay from "@/data/classCategoriesDisplay.json";
import classCategoriesEspacamento from "@/data/classCategoriesEspacamento.json";
import classCategoriesFundo from "@/data/classCategoriesFundo.json";
import classCategoriesTamanho from "@/data/classCategoriesTamanho.json";
import classCategoriesTexto from "@/data/classCategoriesTexto.json";

export default function Study() {
  const classCategories = [
    ...classCategoriesBorda,
    ...classCategoriesDisplay,
    ...classCategoriesEspacamento,
    ...classCategoriesFundo,
    ...classCategoriesTamanho,
    ...classCategoriesTexto,
  ];

  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("Todos");

  const filteredCategories = classCategories
    .filter((cat) => selectedTag === "Todos" || cat.tag === selectedTag)
    .map((cat) => ({
      ...cat,
      classes: cat.classes.filter(
        (cls) =>
          cls.name.toLowerCase().includes(search.toLowerCase()) ||
          cls.label.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.classes.length > 0);
  const allTags = ["Todos", ...classCategories.map((cat) => cat.tag)];

  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 mt-12 bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 bg-clip-text text-center text-4xl font-extrabold text-transparent"
        >
          Estude as Classes do CSS
        </motion.h1>

        {/* Barra de busca */}
        <div className="mb-6 flex flex-col items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Buscar classe..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg bg-zinc-700/80 px-4 py-2 text-black shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ff5555] sm:w-1/2"
          />
          {/* Filtro por categoria */}
          <div className="mt-2 flex flex-wrap gap-2 sm:mt-0">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-lg border border-[#ff5555] bg-zinc-900/80 px-4 py-2 font-semibold transition-all duration-200 hover:bg-[#ff5555]/30 ${
                  selectedTag === tag
                    ? "bg-[#ff5555] text-white"
                    : "text-[#ff5555]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Listagem das classes por categoria */}
        <div className="space-y-12">
          {filteredCategories.length === 0 && (
            <div className="text-center text-zinc-400">
              Nenhuma classe encontrada.
            </div>
          )}
          {filteredCategories.map((cat) => (
            <div key={cat.tag}>
              <h2 className="mb-2 bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 bg-clip-text text-2xl font-bold text-transparent">
                {cat.tag}
              </h2>
              <p className="mb-4 text-zinc-300">{cat.description}</p>
              <div className="flex flex-wrap gap-3">
                {cat.classes.map((cls) => (
                  <a key={cls.name} href={`#${cls.name}`} className="group">
                    <Button className="rounded-lg border border-[#ff5555] bg-zinc-800 px-4 py-2 text-base font-semibold text-[#ff5555] shadow-md transition-all duration-200 group-hover:bg-[#ff5555] group-hover:text-white">
                      <span className="font-mono">{cls.name}</span>{" "}
                      <span className="ml-2 text-xs text-zinc-300">
                        {cls.label}
                      </span>
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
