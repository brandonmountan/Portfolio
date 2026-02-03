# Portfolio Website - Brandon Mountan

A modern, mobile-responsive portfolio website built with React and Tailwind CSS to showcase projects from my Master of Software Development program at the University of Utah. The site features dynamic project filtering, professional design, and optimized performance for both desktop and mobile devices.

🌐 **Live Site:** [brandonmountan.github.io/Portfolio](https://brandonmountan.github.io/Portfolio)

## 📖 About This Project

This portfolio website serves as a comprehensive showcase of my software development journey, featuring projects from all 10 courses in the University of Utah's Master of Software Development program. The application provides an intuitive, resume-style interface with advanced filtering capabilities to help visitors explore projects by programming language or course topic.

### Key Highlights

- **Dynamic Filtering System**: Filter 10+ projects by programming language (C++, Java, Python, JavaScript, etc.) or by course
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Professional Presentation**: Resume-style sections including About, Education, Skills, Projects, and Contact
- **Performance Optimized**: Fast loading times with React optimization and minimal bundle size
- **Accessible**: Semantic HTML and keyboard navigation support

## 🎨 Features

### 1. **Hero Section with Profile**
- Professional photo display with circular crop and shadow effects
- Responsive layout (stacked on mobile, side-by-side on desktop)
- Direct links to GitHub and LinkedIn profiles
- Gradient background for visual appeal

### 2. **Dual Project Filtering**
- **Language Filter**: Filter by C++, Java, Python, C, JavaScript, SQL, or Assembly
- **Course Filter**: Filter by any of the 10 MSD program courses
- **Combined Filtering**: Both filters work together for precise project discovery
- **Live Count**: Shows number of filtered results in real-time

### 3. **Project Cards**
Each project displays:
- Project title and description
- Programming language and course tags (color-coded)
- Technologies and frameworks used
- GitHub repository links
- Optional live demo links

### 4. **Responsive Navigation**
- Sticky navigation bar that stays visible while scrolling
- Smooth scroll-to-section behavior
- Hamburger menu for mobile devices
- Touch-friendly button sizes

### 5. **Education Timeline**
- Multiple degree support (Master's and Bachelor's)
- University, location, and graduation dates
- Program descriptions for context

## 🛠️ Technologies & Architecture

### **Frontend Framework**
- **React 18.2.0** - Component-based UI library for building interactive interfaces
- **JSX** - JavaScript XML syntax for declarative component rendering

### **Styling**
- **Tailwind CSS 3.3.0** - Utility-first CSS framework for rapid UI development
- **PostCSS 8.4.27** - CSS preprocessor for Tailwind compilation
- **Autoprefixer 10.4.14** - Automatic vendor prefix addition for cross-browser compatibility

### **Build Tools**
- **React Scripts 5.0.1** - Create React App build configuration
- **Webpack** (via React Scripts) - Module bundling and optimization
- **Babel** (via React Scripts) - JavaScript transpilation for browser compatibility

### **Icons & UI Elements**
- **Lucide React 0.263.1** - Modern, lightweight icon library
- Custom SVG icons for social media and UI elements

### **Deployment**
- **GitHub Pages (gh-pages 5.0.0)** - Static site hosting with automated deployment
- **Git** - Version control and deployment pipeline

### **Development Tools**
- **Node.js** - JavaScript runtime for development environment
- **npm** - Package management and build scripts
- **ESLint** - Code quality and consistency checking

## 📁 Project Architecture

```
Portfolio/
├── public/                          # Static assets
│   ├── index.html                   # HTML template
│   └── images/                      # Image assets
│       └── profile.jpg              # Profile photo
│
├── src/                             # Source code
│   ├── components/                  # React components
│   │   ├── Navigation.js            # Sticky nav with mobile menu
│   │   ├── Hero.js                  # Header with profile photo
│   │   ├── About.js                 # About me section
│   │   ├── Education.js             # Education timeline
│   │   ├── Skills.js                # Technical skills display
│   │   ├── Projects.js              # Main projects section with filters
│   │   ├── ProjectCard.js           # Individual project card component
│   │   ├── Contact.js               # Contact information
│   │   └── Footer.js                # Page footer
│   │
│   ├── data/                        # Application data
│   │   └── projectsData.js          # Centralized data store
│   │                                # (personal info, projects, skills, education)
│   │
│   ├── styles/                      # Global styles
│   │   └── index.css                # Tailwind imports and custom CSS
│   │
│   ├── App.js                       # Main app component
│   └── index.js                     # React DOM entry point
│
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

## 🏗️ Component Design Pattern

### **Data-Driven Architecture**
All content (personal information, projects, skills, education) is stored in a single data file (`src/data/projectsData.js`), making updates simple and maintaining separation of concerns between data and presentation.

### **Component Hierarchy**
```
App
├── Navigation (Sticky header with routing)
├── Hero (Profile section)
├── About (Personal summary)
├── Education (Degree information)
├── Skills (Technical competencies)
├── Projects (Filter logic)
│   └── ProjectCard[] (Individual projects)
├── Contact (Email and social links)
└── Footer (Copyright and credits)
```

### **State Management**
- **Local Component State**: React hooks (`useState`) for filter selections
- **Props Drilling**: Data passed from `projectsData.js` through component props
- **Derived State**: Filtered projects computed on-the-fly from user selections

## 🎯 Key Technical Implementations

### 1. **Dynamic Filtering Algorithm**
```javascript
const filteredProjects = projects.filter(project => {
  const languageMatch = selectedLanguage === 'all' || project.language === selectedLanguage;
  const courseMatch = selectedCourse === 'all' || project.course === selectedCourse;
  return languageMatch && courseMatch;
});
```

### 2. **Smooth Scroll Navigation**
```javascript
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

### 3. **Responsive Image Handling**
```javascript
src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
```
Uses `PUBLIC_URL` environment variable for proper path resolution in both development and production.

### 4. **Mobile-First Responsive Design**
Tailwind CSS utility classes enable responsive breakpoints:
- `sm:` - Small devices (640px+)
- `md:` - Tablet (768px+)
- `lg:` - Desktop (1024px+)

Example: `className="grid grid-cols-1 md:grid-cols-2 gap-6"`

## 🚀 Performance Optimizations

- **Code Splitting**: React lazy loading for route-based splitting
- **Optimized Images**: Compressed profile photo for faster loading
- **Minimal Dependencies**: Only essential packages included
- **CSS Purging**: Tailwind removes unused styles in production build
- **Static Generation**: Pre-rendered HTML for instant page loads

## 🌐 Deployment Pipeline

### Automated GitHub Pages Deployment
```bash
npm run deploy
```

This script:
1. Runs `npm run build` to create optimized production bundle
2. Generates static files in `build/` directory
3. Pushes build to `gh-pages` branch
4. GitHub Pages serves the site automatically

### Build Process
1. **Transpilation**: Babel converts modern JavaScript to browser-compatible code
2. **Bundling**: Webpack combines modules into optimized bundles
3. **Minification**: JavaScript and CSS are minified for size reduction
4. **Asset Optimization**: Images and fonts are processed and optimized
5. **HTML Generation**: Dynamic HTML injection with proper asset links

## 🔧 Development Setup

### Prerequisites
- Node.js (v14+)
- npm (v6+)
- Git

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables
- `PUBLIC_URL`: Set automatically by Create React App for asset paths
- `NODE_ENV`: Automatically set to 'development' or 'production'

## 📊 Browser Compatibility

Tested and optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 5+)

## 🎓 Educational Value

This project demonstrates proficiency in:
- **React Development**: Component architecture, hooks, props, state management
- **Responsive Design**: Mobile-first approach, flexbox, CSS Grid
- **Modern JavaScript**: ES6+ syntax, array methods, destructuring
- **Build Tools**: npm scripts, Webpack configuration, deployment automation
- **UI/UX Design**: User-centered design, accessibility, visual hierarchy
- **Version Control**: Git workflow, branch management, GitHub Pages deployment

## 🎨 Customization Guide

### Adding Projects

Edit `src/data/projectsData.js` and add new project objects:

```javascript
{
  id: 11,
  title: "Your Project Name",
  description: "Detailed project description",
  language: "Python",
  course: "Machine Learning",
  technologies: ["PyTorch", "NumPy", "Pandas"],
  github: "https://github.com/brandonmountan/project-name",
  demo: "https://demo-link.com"  // optional
}
```

### Updating Personal Information

Modify the `personalInfo` object in `src/data/projectsData.js`:

```javascript
export const personalInfo = {
  name: "Brandon Mountan",
  email: "brandonmountan1@gmail.com",
  github: "https://github.com/brandonmountan",
  linkedin: "https://linkedin.com/in/brandon-mountan-ab3063222"
};
```

## 📄 License

This project is open source and available under the MIT License for personal and educational use.

## 👤 Author

**Brandon Mountan**
- GitHub: [@brandonmountan](https://github.com/brandonmountan)
- LinkedIn: [brandon-mountan](https://linkedin.com/in/brandon-mountan-ab3063222)
- Email: brandonmountan1@gmail.com

## 🙏 Acknowledgments

- University of Utah - Master of Software Development Program
- React Team - For the excellent framework and documentation
- Tailwind Labs - For the utility-first CSS framework
- Lucide - For the beautiful icon library

---

**Built with ❤️ using React and Tailwind CSS**
