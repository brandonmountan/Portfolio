# Portfolio Website

A modern, mobile-friendly React portfolio website showcasing projects from my Master of Software Development program.

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Dual filtering system (by programming language AND course)
- 🎨 Modern UI with smooth animations
- 🚀 Fast performance
- 📂 Clean, organized code structure

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── ProjectCard.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── projectsData.js  ← Edit this to customize!
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm start
```

Your site will open at `http://localhost:3000`

### 3. Customize Your Content

Edit `src/data/projectsData.js` to add:
- Your personal information
- Education details
- Skills
- Projects

## 🎨 Customization

### Update Personal Information

In `src/data/projectsData.js`, update the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Software Developer",
  subtitle: "Master of Software Development",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  about: "Your about me text..."
};
```

### Add Projects

Add your projects to the `projects` array:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  language: "JavaScript",
  course: "Web Development",
  technologies: ["React", "Node.js"],
  github: "https://github.com/username/repo",
  demo: "https://demo-link.com"  // optional
}
```

### Update Skills

Modify the `skills` object:

```javascript
export const skills = {
  languages: ["JavaScript", "Python", "Java"],
  frameworks: ["React", "Node.js"],
  tools: ["Git", "Docker", "AWS"]
};
```

## 🌐 Deploy to GitHub Pages

### 1. Update package.json

Replace `yourusername` with your GitHub username:

```json
"homepage": "https://yourusername.github.io/Portfolio"
```

### 2. Deploy

```bash
npm run deploy
```

### 3. Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages**
3. Select `gh-pages` branch as source
4. Save

Your site will be live at `https://yourusername.github.io/Portfolio`

## 🛠️ Built With

- React 18
- Tailwind CSS
- Lucide React (icons)
- GitHub Pages

## 📝 License

This project is open source and available for personal use.
