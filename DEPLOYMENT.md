# 🇩🇪 Német Igék Memorizálása

Webes React alkalmazás német igék gyakorlásához flashcard rendszerrel.

## ✨ Funkciók

- **Kártyás tanulás**: Random módon választ német igéket az adatbázisból
- **Testreszabható gyakorlás**: Kiválaszthatod, hogy mit mutasson és mit kérdezzen
  - Magyar jelentés
  - 1. alak (Infinitiv)
  - 2. alak (Präteritum)
  - 3. alak (Perfekt/Partizip II)
- **Eredmények követése**: Helyes/összes válaszok és pontosság százalék
- **50 legismertebb német ige**: Az adatbázis tartalmazza a leggyakoribb német rendhagyó igéket

## 🚀 Használat

### Fejlesztői mód indítása:
```bash
npm install
npm run dev
```

Az alkalmazás elérhető lesz: http://localhost:5173/

### Production build:
```bash
npm run build
npm run preview
```

## 📦 Deployment

Az alkalmazás automatikusan deployolódik **Vercel**-re minden push után a main/master branch-re.

### Vercel Setup (először):

1. **Vercel Account**: Regisztrálj a [vercel.com](https://vercel.com) oldalon (GitHub-bal)
2. **Import Project**: 
   - New Project → Import Git Repository
   - Válaszd ki ezt a repository-t
   - Framework Preset: **Vite** (automatikusan felismeri)
   - Kattints a **Deploy** gombra
3. **Az URL-ed**: `https://nemet-igek.vercel.app` (vagy amit választasz)

### GitHub Actions Setup (opcionális, automatikus CI/CD-hez):

1. Vercel → Settings → Tokens → Create Token
2. GitHub Repository → Settings → Secrets → Add:
   - `VERCEL_TOKEN`: A token amit generáltál
   - `VERCEL_ORG_ID`: Vercel Settings → General → Team ID
   - `VERCEL_PROJECT_ID`: Vercel Project Settings → General → Project ID

### Alternatív: Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

## 📖 Hogyan működik?

1. Válaszd ki, hogy **mit mutasson** az alkalmazás (pl. Magyar jelentés)
2. Válaszd ki, hogy **mit kérdezzen** (pl. 2. alak - Präteritum)
3. Írd be a helyes választ és nyomd meg az Enter-t vagy az Ellenőrzés gombot
4. Azonnal visszajelzést kapsz, hogy helyes volt-e a válaszod
5. A következő ige automatikusan megjelenik

## 🎯 Példa

Ha beállítod:
- **Mit mutatok**: Magyar jelentés
- **Mit kérdezek**: 2. alak (Präteritum)

Akkor látni fogod például a "menni" szót, és be kell írnod: `ging`

## 🗄️ Adatbázis

Az alkalmazás 50 leggyakoribb német igét tartalmazza JSON formátumban:
- Magyar jelentés
- Infinitiv (alapalak)
- Präteritum (múlt idő)
- Perfekt/Partizip II (befejezett melléknévi igenév)

## 🛠️ Technológiák

- React 18
- Vite (Build tool)
- JavaScript (ES6+)
- CSS3 (animations, gradients)
- GitHub Actions (CI/CD)
- Vercel (Hosting)

## 📁 Projekt struktúra

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD
├── public/                 # Statikus fájlok
├── src/
│   ├── data/
│   │   └── verbs.json     # 50 német ige adatbázis
│   ├── App.jsx            # Fő komponens
│   ├── App.css            # Alkalmazás stílusok
│   ├── index.css          # Globális stílusok
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
└── vercel.json            # Vercel konfiguráció
```

## 🌐 Live Demo

Deployment után elérhető: `https://your-project.vercel.app`

## 🔧 Fejlesztés

```bash
# Dependencies telepítése
npm install

# Dev szerver indítása
npm run dev

# Production build
npm run build

# Production preview
npm run preview

# Linter
npm run lint
```

## 📝 Megjegyzések

- Az alkalmazás dark mode-ban működik
- Modern, animált felhasználói felület
- Reszponzív design (mobil és desktop)
- Automatikus deployment minden git push után

## 🤝 Hozzájárulás

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - használd szabadon!

---

Készítette: ❤️ React + Vite + Vercel
