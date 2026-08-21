export const RESUME_PDF = `${import.meta.env.BASE_URL}Rishabh_Bhardwaj_resume.pdf`;

export const PHOTO = `${import.meta.env.BASE_URL}photo.jpg`;
export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    role: "Associate Software Engineer",
    org: "MAQ Software",
    type: "Full-time · On-site, Noida, Uttar Pradesh",
    period: "Dec 2025 — Present",
    current: true,
    bullets: [
      "Developed and implemented AI/ML algorithms for predictive and analytical solutions, improving prediction accuracy by 20%.",
      "Designed and managed 10+ interactive dashboards and reports using Power BI for business insights.",
      "Processed and validated 100M+ row datasets using SQL (joins, aggregations, CTEs) and Spark notebooks across a Lakehouse architecture, applying data validation checks and structured data modeling.",
      "Utilized Microsoft Fabric for end-to-end data integration and analytics workflows.",
    ],
    tags: ["AI/ML", "Power BI", "Azure", "Microsoft Fabric", "SQL", "Spark"],
  },
  {
    role: "Web Developer Intern",
    org: "TechOctanet Pvt. Ltd.",
    type: "Internship · Remote",
    period: "Dec 2024 — Feb 2025",
    current: false,
    bullets: [
      "Developed and maintained 100% responsive web applications to improve user engagement.",
      "Enhanced user experience by implementing dynamically rendered components with React.",
      "Designed and optimized user interfaces to ensure cross-browser compatibility.",
      "Built reusable frontend components to ensure consistency and faster development.",
    ],
    tags: ["React", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    name: "Tripzz — Cab Booking System",
    desc: "A full-stack cab booking platform with real-time ride booking, driver assignment, and live location updates.",
    bullets: [
      "Built RESTful APIs for ride booking, driver assignment, and live location updates.",
      "Integrated OSRM for route calculation and ETA prediction, and React Leaflet for interactive maps.",
    ],
    tags: ["Spring Boot", "React.js", "OSRM", "React Leaflet"],
  },
  {
    name: "NewsHub — A News Portal",
    desc: "A device-friendly news web app delivering up-to-date content through live API integration.",
    bullets: [
      "Integrated real-time news fetching from public APIs to deliver up-to-date content dynamically.",
      "Enhanced functionality with JavaScript for seamless navigation, content filtering, and interactions.",
    ],
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export const SKILLS = [
  { label: "Languages", items: ["Java", "JavaScript", "Python"] },
  { label: "Frameworks & Libraries", items: ["React", "Spring Boot", "Bootstrap"] },
  { label: "Data & BI", items: ["SQL", "Spark", "Power BI", "Microsoft Fabric"] },
  { label: "Cloud & Tools", items: ["Azure", "GitHub"] },
  { label: "Databases", items: ["MySQL"] },
  { label: "Core", items: ["Data Structures & Algorithms", "Time Management", "Teamwork"] },
];

export const EDUCATION = [
  { school: "Chandigarh University", place: "Chandigarh", degree: "Bachelor of Engineering — CSE", period: "Aug 2022 — 2026", metric: "81.90%" },
  { school: "S.K.D. Academy", place: "Lucknow", degree: "Intermediate", period: "2021 — 2022", metric: "93.20%" },
  { school: "S.K.D. Academy", place: "Lucknow", degree: "Matriculation", period: "2019 — 2020", metric: "89.33%" },
];

export const ACHIEVEMENTS = [
  "Scored 92 in the Coding Bootcamp of Advance Credit Bootcamp, Chandigarh University (2022).",
  "Solved 500+ problems across different coding platforms.",
  "Participated in the Build with India Hackathon, organised by Hack with India (2024).",
  "Completed a 30-day in-house Summer Training on ReactJS.",
];

export const QUERY_TEXT = "SELECT impact FROM experience WHERE engineer = 'Rishabh Bhardwaj';";
