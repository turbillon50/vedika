# Védika · Sistema Legal Triangular

> Justicia humana · Soluciones integrales — plataforma editorial premium que conecta **Ciudadanos**, **Especialistas** y **Entidades** bajo supervisión Root.

[![PWA](https://img.shields.io/badge/PWA-installable-D4AF5C?style=flat-square)](#-instalar-como-app-pwa)
[![Demo](https://img.shields.io/badge/demo-live-0B1733?style=flat-square)](#)
[![License](https://img.shields.io/badge/license-private-6B7A93?style=flat-square)](#)

---

## ✦ Qué es esto

Prototipo navegable de **10 pantallas iOS** para Védika, organizadas como sistema legal triangular:

| Sección | Pantallas |
|---|---|
| **00 · Marca & Entrada** | Splash · Boot · FaceID · Selección de rol |
| **01 · Ciudadano** | Onboarding materia · Panel · Detalle caso · Bóveda blindada |
| **02 · Código Rojo Penal** | Defensa en ruta · SLA en cuenta regresiva |
| **03 · Especialista** | Despacho · agenda triangular · ingresos |
| **04 · Entidad — Notaría** | Pipeline notarial · instrumentos |
| **05 · Root** | Telemetría · balance triangular |

Tipografía: **Cormorant Garamond** (serif editorial) + **Inter** (UI) + **JetBrains Mono** (datos).
Paleta: navy `#0B1733` + dorado `#B89248` + rojo emergencia `#C44A3F` sobre papel `#FBFAF7`.

---

## ▶ Cómo verlo

### Local (un click)
Abre `Vedika.html` con doble click. Listo.

### Servidor local (recomendado para PWA)
```bash
# Cualquiera de estos sirve:
python3 -m http.server 8080
# o
npx serve .
```
Luego abre `http://localhost:8080/Vedika.html`.

---

## 📱 Instalar como app (PWA)

Una vez desplegado en HTTPS (Vercel, GitHub Pages, Netlify):

**iPhone / iPad** — Abre en Safari → ⎙ Compartir → *Agregar a pantalla de inicio*.
**Android** — Chrome mostrará "Instalar app" automáticamente.
**Desktop** — Ícono ⊕ en la barra de URL de Chrome / Edge.

La app queda instalada con su ícono, pantalla completa, y funciona **offline** después de la primera visita gracias al service worker (`sw.js`).

---

## 🚀 Subir a GitHub (paso a paso)

### Opción A — Sin terminal (la más fácil)

1. Entra a [github.com](https://github.com) y crea cuenta (si no tienes).
2. Click en **"+ → New repository"** arriba a la derecha.
3. Nombre: `vedika` · Descripción: *Sistema legal triangular* · Privado o público (tú decides).
4. **No marques** "Add README" (ya tenemos uno).
5. Click **"Create repository"**.
6. En la página que se abre, baja a **"uploading an existing file"**.
7. Arrastra **toda la carpeta del proyecto** ahí.
8. Mensaje del commit: `feat: prototipo inicial Védika 10 pantallas` → **Commit changes**.

### Opción B — Con terminal (más profesional)

```bash
cd /ruta/a/tu/proyecto
git init
git add .
git commit -m "feat: prototipo inicial Védika 10 pantallas"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vedika.git
git push -u origin main
```

---

## 🌐 Deploy gratis (Vercel — 2 minutos)

1. Ve a [vercel.com](https://vercel.com) → *Sign up with GitHub*.
2. Click **"Add New… → Project"**.
3. Elige tu repo `vedika` → **Import**.
4. Framework Preset: **Other** · Root Directory: `./` · sin build command.
5. **Deploy**. En ~30 segundos tienes `vedika.vercel.app` (puedes mapear dominio propio luego).

Cada `git push` re-despliega automáticamente.

**Alternativa**: GitHub Pages — Settings → Pages → Source: `main` / root → Save. URL: `tu-usuario.github.io/vedika`.

---

## 📦 Roadmap a App Store

| Etapa | Tiempo | Costo |
|---|---|---|
| **PWA instalable** *(estás aquí)* | 0 | $0 |
| **Capacitor → App Store** (envuelve este HTML en contenedor nativo) | 1–2 semanas | $99/año Apple |
| **Reescritura nativa** (React Native / Swift) | 2–6 meses | Equipo iOS |

### Capacitor en 4 comandos
```bash
npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init Vedika com.vedika.app --web-dir=.
npx cap add ios
npx cap open ios   # abre Xcode → Run en simulador
```

Requiere Mac + Xcode. El binario `.ipa` resultante se sube a App Store Connect.

---

## 🗂 Estructura del proyecto

```
vedika/
├── Vedika.html              ← entry point (todo se monta aquí)
├── vedika.css               ← tokens + utilidades (navy/dorado/papel)
├── vedika-kit.jsx           ← logo, Phone, NavTop, TabBar, Btn, Tag, Avatar
├── design-canvas.jsx        ← canvas pan/zoom para presentar pantallas
├── ios-frame.jsx            ← bezel iPhone
├── screens-01-auth.jsx      ← Boot · Auth · Role
├── screens-02-citizen.jsx   ← Materia · Panel · Caso · Bóveda
├── screens-03-roles.jsx     ← Especialista · Rojo · Notaría · Root
├── manifest.json            ← PWA metadata
├── sw.js                    ← service worker (offline)
└── icons/                   ← PNG 192/512/180 (generar — ver abajo)
```

### ⚠️ Iconos pendientes
Necesitas generar los PNG en `icons/` antes de deploy:
- `icon-192.png` (192×192)
- `icon-512.png` (512×512)
- `icon-maskable-512.png` (512×512, con padding ~10%)
- `apple-touch-icon.png` (180×180)

Más fácil: sube el SVG del nudo a [realfavicongenerator.net](https://realfavicongenerator.net) y descarga el paquete completo.

---

## ⚖ Licencia & uso

Privado · todos los derechos reservados — Védika 2026.

---

*Hecho con tipografía editorial, dorado satinado y mucha disciplina.* ✦
