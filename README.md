# portfolio.sanitachy

> Modern, high-performance personal developer portfolio website for **Sanita Chaudhary**, 3rd-year BSc. CSIT student at Godawari College, Tribhuvan University (TU), Nepal.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Available_for_Internships-10B981)

---

## 🌟 Highlights

- **Aesthetic**: Modern obsidian dark mode with luminous emerald and cyan glows, glassmorphism, and responsive layouts.
- **Hero Section**: Large bold typography, live status beacon, dual primary action buttons, resume trigger, and interactive developer profile code terminal.
- **About Me**: Clear CSIT student narrative, academic metrics, and quick-insight glass cards.
- **Skills**: Categorized into *Frontend Core*, *Frameworks*, and *Developer Tools* with authentic proficiency badges (`Building With`, `Comfortable`, `Actively Learning`).
- **Projects**: Category filtering (*All, React, Next.js, JavaScript*) with custom interactive visual mockups, GitHub repository links, and deep-dive modals.
- **Education & Learning Journey**: Chronological BSc. CSIT curriculum timeline and authentic student milestone growth progression.
- **Contact & Inquiries**: Validated form with celebratory confetti feedback, one-click email copying, and social links.
- **In-Browser Resume**: Interactive CV previewer with 1-click **Print / Save as PDF** support.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Effects**: Canvas Confetti & CSS keyframes

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sanita226/portfolio.sanitachy.git
   cd portfolio.sanitachy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
src/
├── assets/                  # Visual assets & images
├── data/
│   └── portfolioData.js     # Centralized, easily editable portfolio content
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Sticky glassmorphic navbar with scrollspy & mobile menu
│   │   ├── Footer.jsx       # Minimalist developer footer with back-to-top button
│   │   └── BackgroundEffects.jsx # Ambient glows, grid lines & cursor spotlight
│   ├── sections/
│   │   ├── Hero.jsx         # Bold typography, status badge, action buttons & terminal
│   │   ├── About.jsx        # CSIT narrative, stats & information cards
│   │   ├── Skills.jsx       # Categorized skill cards with authentic status badges
│   │   ├── Projects.jsx     # Interactive project showcase with category filters
│   │   ├── Education.jsx    # Godawari College, TU academic timeline
│   │   ├── LearningJourney.jsx # Authentic developer growth milestones
│   │   └── Contact.jsx      # Contact form with confetti & email copy
│   └── ui/
│       ├── Icons.jsx        # Custom GitHub & LinkedIn icons
│       ├── ProjectModal.jsx # Detailed project walkthrough modal
│       └── ResumeModal.jsx  # Interactive printable CV preview modal
├── App.jsx                  # Main application container
├── index.css                # Tailwind directives & design tokens
└── main.jsx                 # Entry point
```

---

## 👤 Author

**Sanita Chaudhary**  
- GitHub: [@Sanita226](https://github.com/Sanita226)  
- LinkedIn: [Sanita Chaudhary](https://linkedin.com/in/sanitachaudhary)  
- Email: [sanitachaudhary.dev@gmail.com](mailto:sanitachaudhary.dev@gmail.com)  
- College: Godawari College, Tribhuvan University (TU), Nepal
