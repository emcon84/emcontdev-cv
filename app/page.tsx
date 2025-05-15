"use client";
import { useState } from "react";

type Language = "es" | "en";

const translations: Record<
  Language,
  {
    professionalSummary: string;
    workExperience: string;
    education: string;
    courses: string;
    technicalSkills: string;
    softSkills: string;
    lightMode: string;
    darkMode: string;
    contact: string;
    summaryText: string;
    santanderRole: string;
    santanderTasks: string[];
    oliverRole: string;
    oliverTasks: string[];
    intercapRole: string;
    intercapTasks: string[];
    educationLine: string;
    coursesList: string[];
    techSkills: string;
    toolsSkills: string;
    softSkillsList: string;
  }
> = {
  es: {
    professionalSummary: "Resumen Profesional",
    workExperience: "Experiencia Profesional",
    education: "Educación",
    courses: "Cursos",
    technicalSkills: "Habilidades Técnicas",
    softSkills: "Habilidades Blandas",
    lightMode: "🌞 Modo Claro",
    darkMode: "🌙 Modo Oscuro",
    contact: "Contacto",
    summaryText:
      "Más de 5 años de experiencia como Desarrollador de Software. Liderando desarrollos frontend, logrando un gran desempeño y una mejora constante en la calidad del software creado por los equipos en los que participé.",
    santanderRole:
      "Desarrollador Frontend · Buenos Aires · Ene 2024 - Actualidad",
    santanderTasks: [
      "Desarrollo y mantenimiento de aplicaciones internas, mejorando su estructura y performance.",
      "Soporte en tareas complejas para otros equipos, con soluciones implementadas en producción.",
      "Creación de nuevos módulos con arquitectura optimizada y generación de métricas clave.",
      "Organización y conducción de reuniones de seguimiento con demos interactivas.",
      "Desarrollo completo del frontend de la aplicación de onboarding para nuevos empleados.",
    ],
    oliverRole: "Desarrollador Frontend · Buenos Aires · Ene 2022 - Dic 2023",
    oliverTasks: [
      "Desarrollo y mantenimiento de plataformas ecommerce web y mobile.",
      "Implementación de diseño desde Figma para web y mobile.",
      "Desarrollo de paneles administrativos escalables con componentes reutilizables.",
      "Mantenimiento de apps mobile con nuevas funcionalidades.",
    ],
    intercapRole:
      "Desarrollador Frontend y Soporte Técnico · Reconquista · Jun 2018 - Dic 2021",
    intercapTasks: [
      "Mantenimiento de ecommerce y mejora de UX/UI.",
      "Soporte técnico con alta satisfacción del usuario.",
      "Organización y ejecución de la actualización de servidores físicos.",
    ],
    educationLine:
      "Escuela Superior de Comercio · Programador en Sistemas de Computación · Abril 2011",
    coursesList: [
      "TanStack Query - Udemy (2023)",
      "React desde Cero a Experto (Stack MERN) - Udemy (2022)",
      "MEAN Stack, Angular, NodeJS, MongoDB - Udemy (2019)",
    ],
    techSkills:
      "JavaScript, Next.js, React.js, Tailwind CSS, Bootstrap, Angular, Figma, Styled Components, TanStack Query, Storybook",
    toolsSkills: "Scrum, Atlassian, GitLab, GitHub",
    softSkillsList:
      "Análisis de features, Resolución de problemas, Proactividad, Liderazgo, Trabajo en equipo, Responsabilidad, Buenas prácticas y metodologías",
  },
  en: {
    professionalSummary: "Professional Summary",
    workExperience: "Work Experience",
    education: "Education",
    courses: "course",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
    lightMode: "🌞 Light Mode",
    darkMode: "🌙 Dark Mode",
    contact: "Contact",
    summaryText:
      "More than 5 years of experience as a Software Developer. Leading frontend development, achieving strong performance and continuous improvement in software quality across teams I've participated in.",
    santanderRole: "Frontend Developer · Buenos Aires · Jan 2024 - Present",
    santanderTasks: [
      "Develop and maintain internal applications, improving their structure and performance.",
      "Support complex tasks for other teams, with solutions now in production.",
      "Create new modules with optimized architecture and generate key metrics.",
      "Lead follow-up meetings with interactive demos.",
      "Fully developed the frontend for the company's onboarding app.",
    ],
    oliverRole: "Frontend Developer · Buenos Aires · Jan 2022 - Dec 2023",
    oliverTasks: [
      "Develop and maintain ecommerce platforms for web and mobile.",
      "Implemented design from Figma for both web and mobile.",
      "Developed scalable admin panels with reusable components.",
      "Maintained mobile apps with new functionalities.",
    ],
    intercapRole:
      "Frontend Developer & Tech Support · Reconquista · Jun 2018 - Dec 2021",
    intercapTasks: [
      "Maintained ecommerce and improved UX/UI.",
      "Technical support with high user satisfaction.",
      "Led physical server upgrade planning and execution.",
    ],
    educationLine:
      "Escuela Superior de Comercio · Systems Programming · April 2011",
    coursesList: [
      "TanStack Query - Udemy (2023)",
      "React from Zero to Expert (MERN Stack) - Udemy (2022)",
      "MEAN Stack, Angular, NodeJS, MongoDB - Udemy (2019)",
    ],
    techSkills:
      "JavaScript, Next.js, React.js, Tailwind CSS, Bootstrap, Angular, Figma, Styled Components, TanStack Query, Storybook",
    toolsSkills: "Scrum, Atlassian, GitLab, GitHub",
    softSkillsList:
      "Feature analysis, Problem solving, Proactivity, Leadership, Teamwork, Responsibility, Best practices and methodologies",
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<Language>("es");

  const toggleMode = () => setDarkMode(!darkMode);
  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  const t = translations[lang];

  return (
    <div
      className={`${darkMode ? "bg-slate-800 text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300 p-6 md:p-12 max-w-4xl mx-auto`}
    >
      <div className="flex justify-between mb-4">
        <button
          onClick={toggleLang}
          className="px-4 py-2 border rounded shadow hover:shadow-lg transition duration-200"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button
          onClick={toggleMode}
          className="px-4 py-2 border rounded shadow hover:shadow-lg transition duration-200"
        >
          {darkMode ? t.lightMode : t.darkMode}
        </button>
      </div>
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">Emiliano Conti</h1>
        <p className="text-lg mt-2">Reconquista, Santa Fe, Argentina</p>
        <p className="text-sm text-blue-500">
          <a
            href="https://linkedin.com/in/emiliano-conti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/emiliano-conti/
          </a>
        </p>
        <p className="text-sm">📞 +54 3482 445015 | ✉️ emcon84@gmail.com</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-3">
          {t.professionalSummary}
        </h2>
        <p>{t.summaryText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-3">
          {t.workExperience}
        </h2>
        <div className="mb-5">
          <h3 className="text-xl font-bold">Santander Tecnología Argentina</h3>
          <p className="italic">{t.santanderRole}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {t.santanderTasks.map((task: string, i: number) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="text-xl font-bold">Oliver Pet</h3>
          <p className="italic">{t.oliverRole}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {t.oliverTasks.map((task: string, i: number) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Intercap</h3>
          <p className="italic">{t.intercapRole}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {t.intercapTasks.map((task: string, i: number) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-3">
          {t.education}
        </h2>
        <p className="mb-2">{t.educationLine}</p>
        <h3 className="font-bold">{t.courses}</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {t.coursesList.map((course: string, i: number) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold border-b pb-1 mb-3">
          {t.technicalSkills}
        </h2>
        <p className="mb-2">{t.techSkills}</p>
        <p>{t.toolsSkills}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mb-3">
          {t.softSkills}
        </h2>
        <p>{t.softSkillsList}</p>
      </section>
    </div>
  );
}
