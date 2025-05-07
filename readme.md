# 🎶 Generative Music Experiments

**Generative Music Experiments** is a collection of interactive, browser-based audio experiments exploring algorithmic composition and procedural sound generation. Built with modern frontend technologies, this project aims to provide a playground for creative exploration of music systems and emergent sound behaviors.

## 🌐 Live Demo

> Coming soon — stay tuned!

## 🚀 Features

- 🎼 **Modular Experiments**: Each experiment is built as a separate interactive route using React Router.
- 🎛️ **Real-Time Audio Synthesis**: Powered by the Web Audio API and optionally extended with Tone.js.
- 🧩 **Reactive UI**: Clean and responsive interface built with React.
- 🎨 **Visual Feedback**: Audio-reactive visuals using Canvas or SVG.
- 🔄 **Procedural Loops**: Controlled randomness, generative rules, and evolving patterns.

## 🛠️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — lightning-fast development environment
- ⚛️ [React](https://reactjs.org/)
- 🔀 [React Router](https://reactrouter.com/)
- 🎧 Web Audio API / [Tone.js](https://tonejs.github.io/)
- 🖼️ Canvas / SVG for visuals

## 📁 Project Structure

```text
/generative-music/
├── index.html
├── src/
│   ├── components/         # Shared UI components
│   ├── experiments/        # Individual generative music experiments
│   ├── hooks/              # Custom React hooks for audio & interactivity
│   ├── routes/             # React Router routes
│   ├── index.css           # Global styles
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
└── README.md
```

## 🧪 Experiments Included

- 🎲 **Random Melody Generator**
- 🕸️ **Markov Chain Chord Progressions**
- 🔁 **Cellular Automata Rhythms**
- 🌿 **L-System Melody Growth**
- 🎛️ **Interactive Step Sequencer**

Each experiment lives in its own route and may be extended with unique UI controls or visualizations.

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A modern browser (Chrome, Firefox, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/generative-music.git
cd generative-music

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then visit `http://localhost:5173` in your browser.

## 🧠 Inspiration

Inspired by the works of:

- **Brian Eno** — ambient and generative music pioneer
- **Terry Riley** — minimalism and loop-based composition
- **Tero Parviainen** — [Generative Music in the Browser](https://teropa.info/blog/2016/07/28/javascript-systems-music.html)

## 📃 License

MIT License — open for remixing, learning, and sharing.

## 🙌 Contributing

Pull requests, issues, and creative suggestions are always welcome! See `CONTRIBUTING.md` for guidelines (coming soon).
