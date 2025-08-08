# HelpCss — exemplos didáticos de CSS com visualização ao vivo

Aprenda CSS de forma **visual**: cada propriedade vem com **explicação curta**, **dica profissional**, **variáveis prontas** e um **preview ao vivo**. Ideal para quem quer entender rapidamente *o que a propriedade faz* e *como aplicar na prática*.

> **Stack:** React + Vite + React Router + Monaco Editor  
> **Deploy recomendado:** Vercel

---

## 🎯 Objetivos

- **Didático e direto ao ponto:** exemplos mínimos e claros.
- **Visualização ao vivo:** edite e veja o resultado de imediato.
- **Padronização:** categorias e propriedades seguem um mesmo formato de JSON.
- **Fácil de manter:** adicionar novas classes é questão de criar/editar JSON.

---

## 🚀 Demo

- **Produção:** *(adicione sua URL quando publicar)*  
  `https://mchiodi-helpcss.vercel.app/`

- **Imagem de compartilhamento (Open Graph):**  
  Coloque em `/public/og/cover.png` (1200×630).

---

## ✨ Funcionalidades

- Catálogo de propriedades por **categoria** (Texto, Fundo, Borda, Tamanho, Espaçamento, Display & Layout…).
- **Editor Monaco** embutido para mexer no HTML/CSS do exemplo.
- Botões de **variáveis** que substituem o valor da propriedade automaticamente.
- **Preview seguro** via `iframe` com `sandbox`, aplicando estilos sem vazar para a página.
- Navegação por **React Router** (detalhe de cada classe em rota própria).

---

## 🧱 Estrutura do projeto

```
.
├─ public/
│  ├─ logo-192.png
│  ├─ logo-512.png
│  ├─ apple-touch-icon.png
│  ├─ site.webmanifest
│  └─ og/cover.png
├─ src/
│  ├─ data/
│  │  ├─ classCategoriesBorda.json
│  │  ├─ classCategoriesDisplay.json
│  │  ├─ classCategoriesEspacamento.json
│  │  ├─ classCategoriesFundo.json
│  │  ├─ classCategoriesTamanho.json
│  │  └─ classCategoriesTexto.json
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header.jsx
│  │  │  └─ Footer.jsx
│  │  └─ ...
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ ClassDetails.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ vite.config.js
├─ package.json
└─ README.md
```

> **Atenção (Linux case-sensitive):** garanta que os *imports* usam **o mesmo case** do arquivo real (ex.: `Header.jsx` ≠ `header.jsx`).

---

## 🔡 Formato dos JSONs

Cada arquivo de categoria segue este formato:

```json
{
  "tag": "Texto | Fundo | Borda | Tamanho | Espaçamento | Display e Layout",
  "description": "Breve descrição da categoria.",
  "classes": [
    {
      "name": "font-size",
      "label": "Tamanho da fonte",
      "explanation": "O que a propriedade faz, em linguagem simples.",
      "example": "<p style=\"font-size: 24px;\">Título grande</p>",
      "professionalTip": "Uma dica prática que você realmente usa em produção.",
      "variables": ["14px", "1rem", "2em", "larger"]
    }
  ]
}
```

### Como o preview funciona
- O `example` pode conter **HTML com `style="..."`**.  
- O app remove os `style` do HTML e converte cada um em **regras CSS escopadas**, para evitar vazamento.  
- Ao clicar em uma **variável**, o app troca apenas o **valor da propriedade alvo** dentro do código.

---

## ➕ Como adicionar uma nova classe

1. Escolha a categoria em `src/data/` e adicione um objeto em `classes`.
2. Use um `example` mínimo que **mostre visualmente** o efeito.
3. Adicione 3–6 `variables` úteis e seguras (com unidades corretas).
4. Salve e rode em dev para validar o preview.

> **Dica de UX:** inclua `padding`, `border` e cores neutras no `example` para o efeito ficar óbvio.

---

## 🛠️ Desenvolvimento

### Pré-requisitos
- **Node.js 18+**
- **npm** ou **pnpm**/**yarn** (exemplos com npm)

### Scripts
```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# testar o build localmente
npm run preview
```

> O build usa **Vite**. Se aparecer o aviso do Browserslist desatualizado, opcionalmente rode:
> `npx update-browserslist-db@latest`

---

## 🌐 SEO & compartilhamento

No `index.html`:

- **Title/Description/Author/Canonical/Robots**
- **Open Graph/Twitter Card** com **imagem absoluta**:  
  `https://SEU-DOMINIO/og/cover.png` (1200×630)
- **Manifest PWA:** `<link rel="manifest" href="/site.webmanifest" />`
- **Favicons:** `logo-192.png`, `logo-512.png`, `apple-touch-icon.png`
- **Theme color** (modo claro/escuro)

Manifest já sugerido:
```json
{
  "name": "MChiodi – HelpCss",
  "short_name": "HelpCss",
  "description": "Exemplos didáticos de CSS com visualização ao vivo.",
  "lang": "pt-BR",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#111111",
  "icons": [
    { "src": "/logo-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/logo-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

---

## ☁️ Deploy na Vercel

1. **Importe** o repositório no painel da Vercel.  
2. Framework detectado: **Vite**.  
3. **Build Command:** `npm run build`  
   **Output Directory:** `dist/`
4. Confirme que **todos os imports** respeitam *case-sensitive*.  
5. Após o deploy, ajuste as metas `og:url` e `og:image` com a URL final.

---

## 👨‍💻 Autor

**Matheus Chiodi** — [Links](https://matheuschiodi.github.io/MyLinks/)  

> Se usar este repo em aula/live, mande o link — sempre bom ver a galera aprendendo!
