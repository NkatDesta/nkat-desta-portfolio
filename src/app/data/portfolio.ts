export const NAV_SECTIONS = [
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;

export const PROJECTS = [
  {
    id: "banks-ethiopia",
    category: "Web Project",
    title: "Banks Ethiopia Currency Exchange",
    duration: "2 months",
    role: "Full-Stack Developer",
    tags: ["Laravel", "PHP", "MySQL"],
    description:
      "Full-stack web app inspired by Banks Ethiopia for comparing currency exchange rates across Ethiopian banks using simulated data and responsive UI.",
    link: "https://github.com/NkatDesta/banks-ethiopia",
  },
  {
    id: "fitness-tracker",
    category: "Web Project",
    title: "Fitness Tracker System",
    duration: "1 month",
    role: "Full-Stack Developer",
    tags: ["Django", "Python", "SQLite", "REST API"],
    description:
      "Full-stack web app for tracking workouts, nutrition, and progress. Built with Django REST Framework and SQLite database integration.",
    link: "https://github.com/NkatDesta/fitness-tracker",
  },
  {
    id: "school-guardian-flutter",
    category: "Mobile Project",
    title: "Digital Parent-School Communication System",
    duration: "2 weeks",
    role: "Flutter Developer",
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    description:
      "Mobile prototype for connecting schools and guardians through digital communication, built with Flutter and Dart with Supabase PostgreSQL integration.",
    link: "https://github.com/NkatDesta/school-guardian-flutter",
},
  {
    id: "school-communication",
    category: "Desktop Project",
    title: "School Communication System",
    duration: "3 months",
    role: "Software Developer",
    tags: ["Java", "OOP"],
    description:
      "Desktop application managing communication between school administrators and guardians, built with object-oriented design principles.",
    link: "https://github.com/NkatDesta",
  },
  {
    id: "bookstore-database",
    category: "Database Project",
    title: "Bookstore Database System",
    duration: "3 weeks",
    role: "Database Administrator",
    tags: ["MySQL", "SQL"],
    description:
      "Relational database system for managing books, customers, and sales records. Focused on efficient data storage, organization, and retrieval.",
    link: "https://github.com/NkatDesta",
  },
  {
    id: "supermarket-billing",
    category: "Desktop Project",
    title: "Supermarket Billing System",
    duration: "2 weeks",
    role: "Software Developer",
    tags: ["C++", "File I/O"],
    description:
      "Desktop billing application for managing product sales, generating receipts, and tracking inventory using C++ and file handling.",
    link: "https://github.com/NkatDesta",
  },
] as const;

export const SKILLS = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++", "C#", "PHP", "Dart"],
  },
  {
    category: "Web",
    items: ["Django", "Laravel", "Next.js", "Node.js", "HTML/CSS"],
  },
  {
    category: "Mobile",
    items: ["Flutter"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "REST APIs", "Agile"],
  },
] as const;

export const CERTIFICATIONS = [
  { title: "Backend Web Development", org: "ALX Africa", period: "05/2024 — 09/2025" },
  { title: "AI Augmented Professional Development", org: "ALX Africa", period: "03/2024 — 05/2024" },
  { title: "Data Analysis Fundamentals", org: "Udacity", period: "07/2024 — 09/2024" },
] as const;

export const CONTACT_INFO = {
  email: "nkatdesta24@gmail.com",
  github: "https://github.com/NkatDesta",
  linkedin: "https://www.linkedin.com/in/nikat-desta/",
  phone: "+251 936 911 927",
  location: "Addis Ababa, Ethiopia",
} as const;
