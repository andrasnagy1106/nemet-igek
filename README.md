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
npm run dev
```

Az alkalmazás elérhető lesz: http://localhost:5173/

### Production build:
```bash
npm run build
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
- Vite
- JavaScript (ES6+)
- CSS3

## 📝 Megjegyzés

Az alkalmazás jelenleg csak dark mode-ban működik, modern megjelenéssel és animációkkal.

