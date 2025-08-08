import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import classCategoriesBorda from "@/data/classCategoriesBorda.json";
import classCategoriesDisplay from "@/data/classCategoriesDisplay.json";
import classCategoriesEspacamento from "@/data/classCategoriesEspacamento.json";
import classCategoriesFundo from "@/data/classCategoriesFundo.json";
import classCategoriesTamanho from "@/data/classCategoriesTamanho.json";
import classCategoriesTexto from "@/data/classCategoriesTexto.json";

const ClassDetails = () => {
  const { className } = useParams();
  const navigate = useNavigate();

  const allCategoriesRaw = useMemo(
    () => [
      classCategoriesBorda,
      classCategoriesDisplay,
      classCategoriesEspacamento,
      classCategoriesFundo,
      classCategoriesTamanho,
      classCategoriesTexto,
    ],
    [],
  );

  // Normaliza possíveis formatos de categorias e encontra a classe
  const classInfo = useMemo(() => {
    for (const cat of allCategoriesRaw) {
      // pode ser objeto { classes: [...] } ou array de objetos
      const buckets = Array.isArray(cat) ? cat : [cat];
      for (const bucket of buckets) {
        const list = Array.isArray(bucket?.classes) ? bucket.classes : [];
        const found = list.find((cls) => cls.name === className);
        if (found) return found;
      }
    }
    return null;
  }, [allCategoriesRaw, className]);

  const [code, setCode] = useState(classInfo?.example ?? "");

  if (!classInfo) {
    return (
      <main className="grid min-h-screen place-items-center px-6 py-12 text-white">
        <div className="rounded-lg border border-[#ff5555] bg-zinc-900/80 p-6 text-center">
          <p className="text-lg">
            Classe{" "}
            <span className="font-semibold text-[#ff5555]">{className}</span>{" "}
            não encontrada.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 rounded-lg border border-[#ff5555] bg-zinc-900/80 px-4 py-2 font-semibold text-[#ff5555] transition-all duration-200 hover:bg-[#ff5555] hover:text-white"
          >
            ← Voltar
          </button>
        </div>
      </main>
    );
  }

  // Gera srcDoc do preview a partir do code atual
  const srcDoc = useMemo(() => {
    const { html, css } = extractHtmlAndCssFromInlineStyles(code);
    return `
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            :root { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
            body { margin: 16px; font-size: 18px; color: #111; }
            ${css}
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;
  }, [code]);

  // Substitui o valor da propriedade alvo (ex.: color: <variable>)
  const handleUseVariable = (variable) => {
    const escapedName = escapeForRegex(classInfo.name);
    const propRegex = new RegExp(`(${escapedName})\\s*:\\s*([^;"']*)`, "ig");
    const replaced = code.replace(
      propRegex,
      (_m, propName) => `${propName}: ${variable}`,
    );
    setCode(replaced);
  };

  const hasVariables =
    Array.isArray(classInfo.variables) && classInfo.variables.length > 0;

  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <section className="mx-auto max-w-2xl space-y-8">
        <h1 className="mb-6 mt-12 bg-gradient-to-r from-[#ff5555] via-red-500 to-pink-500 bg-clip-text text-center text-3xl font-extrabold text-transparent">
          {classInfo.label}
        </h1>

        <p className="m-0 p-0 text-center text-lg text-zinc-300">
          {classInfo.explanation}
          {classInfo.professionalTip && (
            <span className="mt-2 block text-sm text-zinc-400">
              {classInfo.professionalTip}
            </span>
          )}
        </p>

        <div className="mb-8">
          <h3 className="mb-2 text-xl font-bold text-[#ff5555]">
            Exemplo de Uso:
          </h3>
          <div className="rounded-lg border border-[#ff5555] bg-[#cccccc1a] p-2">
            <Editor
              height="140px"
              defaultLanguage="html"
              value={code}
              onChange={(value) => setCode(value ?? "")}
              options={{
                fontSize: 15,
                minimap: { enabled: false },
                wordWrap: "on",
                scrollBeyondLastLine: false,
              }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-400">
            Dica: mantenha o exemplo no formato{" "}
            <code>{`<tag style="prop: valor">conteúdo</tag>`}</code>. Suporta
            múltiplos elementos.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-2 text-xl font-bold text-[#ff5555]">Variáveis:</h3>
          {hasVariables ? (
            <ul className="flex flex-wrap gap-2">
              {classInfo.variables.map((variable, index) => (
                <li
                  key={index}
                  className="cursor-pointer rounded-lg bg-zinc-800 px-4 py-2 text-base font-semibold text-[#ff5555] shadow-md transition-all duration-200 hover:bg-[#ff5555] hover:text-white"
                  onClick={() => handleUseVariable(variable)}
                  title={`Clique para usar: ${variable}`}
                >
                  {variable}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-zinc-400">
              Nenhuma variável cadastrada para esta classe.
            </p>
          )}
        </div>

        <div>
          <h3 className="mb-2 text-xl font-bold text-[#ff5555]">
            Visualização:
          </h3>
          <div className="flex min-h-[120px] flex-col items-center justify-center rounded-lg border border-[#ff5555] bg-zinc-900/80 p-4 text-lg text-white">
            <iframe
              title="preview"
              sandbox="" /* Sem scripts */
              style={{
                width: "100%",
                minHeight: "160px",
                background: "#fff",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              srcDoc={srcDoc}
            />
          </div>
        </div>
      </section>

      <button
        onClick={() => navigate("/study")}
        className="fixed bottom-6 left-6 z-50 rounded-lg border border-[#ff5555] bg-zinc-900/80 px-4 py-2 font-semibold text-[#ff5555] shadow-md transition-all duration-200 hover:bg-[#ff5555] hover:text-white"
      >
        ← Voltar
      </button>
    </main>
  );
};

export default ClassDetails;

/* Utilidades */

function escapeForRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Lê TODO(s) os style="..." do HTML fornecido, remove-os do HTML de saída,
 * e gera CSS escopado preservando a ordem dos elementos.
 */
function extractHtmlAndCssFromInlineStyles(inputHtml) {
  if (!inputHtml || typeof inputHtml !== "string") {
    return { html: "", css: "" };
  }

  // Captura todas as tags com style="...".
  // Ex.: <div style="color:red; background:blue">Texto</div>
  const styleAttrRegex =
    /(<\s*([a-zA-Z0-9-]+)([^>]*?)\sstyle="([^"]*)"(.*?)>)/g;

  let cssRules = [];
  let index = 0;

  // Vamos agrupar o HTML em um wrapper para escopo seguro
  const WRAP_CLASS = "scoped-preview";
  let html = inputHtml;

  // Para cada tag com style, removemos o style do HTML e criamos uma regra CSS específica ao "n-ésimo elemento"
  html = html.replace(
    styleAttrRegex,
    (full, openTag, tagName, before, styleValue, after) => {
      const cleanOpen = `<${tagName}${before}${after}>`; // remove o atributo style do HTML
      const norm = normalizeInlineStyle(styleValue); // garante ; no final e remove espaços desnecessários
      // Regras por posição: simples, mas eficaz quando o HTML é pequeno
      // Ex.: .scoped-preview *:nth-of-type(X) => aplica na ordem em que as tags aparecem
      // Para ficar mais determinístico por tag, usamos um seletor por tag e índice global.
      cssRules.push(
        `.${WRAP_CLASS} ${tagName}:nth-of-type(${++index}) { ${norm} }`,
      );
      return cleanOpen;
    },
  );

  // Envelopa tudo para evitar vazar estilo
  const wrappedHtml = `<div class="${WRAP_CLASS}">${html}</div>`;
  const css = cssRules.join("\n");

  return { html: wrappedHtml, css };
}

function normalizeInlineStyle(styleStr = "") {
  // garante ; no final e remove ; duplicado / espaços
  let s = styleStr.trim();
  if (!s.endsWith(";")) s += ";";
  return s
    .replace(/\s*;\s*/g, "; ")
    .replace(/\s{2,}/g, " ")
    .trim();
}
