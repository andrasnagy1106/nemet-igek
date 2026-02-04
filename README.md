# 🇩🇪 Német Igék Memorizálása

Webes React alkalmazás német igék gyakorlásához flashcard rendszerrel.

## ✨ Funkciók

### 📖 Tanulás mód
- Random igék megjelenítése **minden alakkal**
- Nézegetheted és memorizálhatod az igéket
- Tökéletes tanuláshoz először!

### ✍️ Gyakorlás mód
- **Testreszabható kérdezés**: Kiválaszthatod, hogy mit mutasson és mit kérdezzen
  - Magyar jelentés
  - 1. alak (Infinitiv)
  - 2. alak (Präteritum)
  - 3. alak (Perfekt/Partizip II)
- **Intelligens értékelés**: 1-2 karakteres elgépelést is elfogad
- **Eredmények követése**: Helyes/összes válaszok és pontosság százalék
- **Összes alak megjelenítése**: Válasz után látod az összes alakot

### 🗄️ Adatbázis
- **50 legismertebb német ige**: A leggyakoribb rendhagyó igék

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

### 📚 Tanulás mód
1. Kattints a **📖 Tanulás** gombra
2. Látod a teljes igét minden alakkal (magyar, infinitiv, präteritum, perfekt)
3. Tanulmányozd, memorizáld
4. "Következő ige →" gombbal léptetsz

### ✍️ Gyakorlás mód
1. Kattints a **✍️ Gyakorlás** gombra
2. Válaszd ki, hogy **mit mutasson** (pl. Magyar jelentés)
3. Válaszd ki, hogy **mit kérdezzen** (pl. 2. alak - Präteritum)
4. Írd be a helyes választ és nyomd meg az Enter-t
5. Azonnal visszajelzést kapsz + látod az összes alakot
6. "Következő ige →" gombbal léptetsz

**💡 Tipp:** Kis és nagybetű nem számít, 1-2 elgépelést is elfogad!

## 🎯 Példa - Gyakorlás mód

Ha beállítod:
- **Mit mutatok**: Magyar jelentés
- **Mit kérdezek**: 2. alak (Präteritum)

Akkor látni fogod például a "menni" szót, és be kell írnod: `ging`

Elfogadott válaszok:
- `ging` ✅
- `Ging` ✅ (kis/nagybetű)
- `gign` ✅ (1 elgépelés)
- `gieng` ✅ (1 elgépelés)

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

