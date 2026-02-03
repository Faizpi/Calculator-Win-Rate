# ⚔️ Winrate Protocol

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**🎮 A Premium Winrate Calculator for Mobile Legends Players**

*Calculate your path to Mythic Glory with precision analytics*

[Live Demo](#) · [Report Bug](https://github.com/Faizpi/Calculator-Win-Rate/issues) · [Request Feature](https://github.com/Faizpi/Calculator-Win-Rate/issues)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Target Calibration** | Calculate exactly how many consecutive wins you need to reach your goal winrate |
| 📊 **Win/Lose Checker** | Visualize your exact wins and losses based on total matches and percentage |
| 🎮 **Match Simulator** | Predict future outcomes by simulating wins and losses in real-time |
| 📖 **Built-in Instructions** | Interactive guide accessible from the menu |

---

## 🖼️ Preview

```
┌────────────────────────────────────────────────────────┐
│                    WINRATE PROTOCOL                     │
│                                                        │
│    ██╗    ██╗██╗███╗   ██╗██████╗  █████╗ ████████╗   │
│    ██║    ██║██║████╗  ██║██╔══██╗██╔══██╗╚══██╔══╝   │
│    ██║ █╗ ██║██║██╔██╗ ██║██████╔╝███████║   ██║      │
│    ██║███╗██║██║██║╚██╗██║██╔══██╗██╔══██║   ██║      │
│    ╚███╔███╔╝██║██║ ╚████║██║  ██║██║  ██║   ██║      │
│     ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      │
│                                                        │
│    [ Target ]  [ Win/Lose ]  [ Simulation ]            │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Faizpi/Calculator-Win-Rate.git

# Navigate to directory
cd Calculator-Win-Rate

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| **React** | UI Framework |
| **Vite** | Build Tool |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **CSS Variables** | Theming |

</div>

---

## 📐 Architecture

```
src/
├── components/
│   ├── Navbar.jsx           # Fullscreen overlay navigation
│   ├── Hero.jsx             # Landing section with massive typography
│   ├── InstructionModal.jsx # Built-in user guide
│   └── calculators/
│       ├── WinrateCalculator.jsx  # Target winrate tool
│       ├── WinLoseChecker.jsx     # Stats visualization
│       └── MatchSimulator.jsx     # Future prediction
├── App.jsx                  # Main application
├── main.jsx                 # Entry point
└── index.css                # Design system & theming
```

---

## 🎨 Design Philosophy

- **Dark & Premium**: Near-black backgrounds with cyan/purple accents
- **Futuristic Typography**: Outfit font with massive, bold headings
- **Glassmorphism**: Subtle transparent cards with blur effects
- **Micro-animations**: Smooth transitions and reveal effects

---

## 📝 Usage Guide

### 1. Target Calibration
> Calculate required consecutive wins

1. Enter your **Total Matches**
2. Enter your **Current Winrate** (%)
3. Enter your **Target Winrate** (%)
4. View the result instantly

### 2. Win/Lose Checker
> See your exact stats breakdown

1. Enter your **Total Matches**
2. Enter your **Current Winrate** (%)
3. View the visual Win/Loss bar

### 3. Match Simulator
> Predict future performance

1. Set your base stats
2. Click **Add Win** or **Add Loss**
3. Watch your projected winrate change

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

**Made with ❤️ for Mobile Legends Players**

*"Precision tools for competitive dominance"*

</div>
