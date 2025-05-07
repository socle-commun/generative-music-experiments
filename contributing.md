# 🤝 Contributing to Generative Music Experiments

Thank you for your interest in contributing! Whether you're here to fix a bug, suggest a new feature, or experiment with generative music ideas — you're very welcome.

This document outlines the process for contributing to the project.

## 🛠️ How to Contribute

### 1. **Fork the Repository**

Click the **Fork** button at the top right of the [GitHub page](https://github.com/your-username/generative-music) to create your own copy of the repo.

### 2. **Clone Your Fork Locally**

```bash
git clone https://github.com/your-username/generative-music.git
cd generative-music
```

### 3. **Install Dependencies**

```bash
npm install
```

### 4. **Create a New Branch**

```bash
git checkout -b your-feature-name
```

### 5. **Start the Dev Server**

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) and start building!

## 💡 What You Can Contribute

- 🐞 Bug fixes or performance improvements
- 🎼 New generative music experiments (under `src/experiments/`)
- 🖼️ Visualizations tied to music
- 💬 Improvements to UI/UX or accessibility
- 🧪 Unit tests or utility functions
- 📖 Docs, tutorials, or inline code comments

## 🧪 Adding a New Experiment

1. Create a new component in `src/experiments/`.
2. Register it in the router (`src/router/routes.ts`).
3. Use the Web Audio API or Tone.js to implement sound logic.
4. Add visual feedback if needed.
5. Follow the component style conventions already in place.

## 📦 Commit & Push

```bash
git add .
git commit -m "Add: [your short description here]"
git push origin your-feature-name
```

## 📬 Submit a Pull Request

Go to your fork on GitHub and click **Compare & Pull Request**.

Please:

- Clearly describe your changes.
- Link to any related issues.
- Keep pull requests focused (1 feature or fix at a time is ideal).

## 🧹 Code Style & Guidelines

- Follow existing component and folder naming conventions.
- Keep code modular and reusable where possible.
- Use descriptive commit messages.
- Prefer function components and React hooks.

## 🧠 Inspiration-Driven Collaboration

This project welcomes experimental, exploratory contributions. If you have a wild idea that could produce surprising audio behavior — go for it! Open an issue to discuss it or submit a draft PR.

## ❤️ Code of Conduct

This project follows a [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) based on the Contributor Covenant. Be kind, inclusive, and supportive.

---

Thanks again for contributing and helping this creative coding lab grow! 🎧✨
