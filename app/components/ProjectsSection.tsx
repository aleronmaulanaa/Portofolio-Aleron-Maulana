"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import SpotlightCard from "@/components/SpotlightCard";
import SplitText from "@/components/SplitText";
import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";
import RotatingText from "@/components/RotatingText";
import ClickSpark from "@/components/ClickSpark";
import GradualBlur from "@/components/GradualBlur";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiGo,
  SiLaravel,
  SiFigma,
  SiDart,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const techIconMap: Record<string, React.ReactNode> = {
  React: <SiReact style={{ color: "#61DAFB" }} />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript style={{ color: "#3178C6" }} />,
  "Tailwind CSS": <SiTailwindcss style={{ color: "#06B6D4" }} />,
  Flutter: <SiFlutter style={{ color: "#02569B" }} />,
  Golang: <SiGo style={{ color: "#00ADD8" }} />,
  Laravel: <SiLaravel style={{ color: "#FF2D20" }} />,
  Figma: <SiFigma style={{ color: "#F24E1E" }} />,
  Dart: <SiDart style={{ color: "#0175C2" }} />,
  Firebase: <SiFirebase style={{ color: "#FFCA28" }} />,
  Supabase: <SiSupabase style={{ color: "#3ECF8E" }} />,
  PostgreSQL: <SiPostgresql style={{ color: "#4169E1" }} />,
  Bootstrap: <SiBootstrap style={{ color: "#7952B3" }} />,
  HTML: <SiHtml5 style={{ color: "#E34F26" }} />,
  CSS: <SiCss3 style={{ color: "#1572B6" }} />,
  JavaScript: <SiJavascript style={{ color: "#F7DF1E" }} />,
};

interface ProjectItem {
  id: number;
  categories: string[];
  image: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  media: string[];
  links: { label: string; url: string }[];
}

const content = {
  en: {
    subtitle: "What I've Built",
    title: "Featured Projects",
    desc: "Real-world projects showcasing my ability to deliver innovative solutions in Fullstack, Mobile, and Backend development.",
    rotating: ["with passion", "with precision", "with purpose"],
    filters: {
      all: "All",
      uiux: "UI/UX",
      web: "Web Dev",
      app: "Mobile App",
      backend: "Backend",
    } as Record<string, string>,
    cta: {
      title: "Have any project in mind?",
      avail: "I'm available for freelancing",
      more: "More Projects",
      email: "Email Me",
    },
    projects: [
      {
        id: 1,
        categories: ["web", "uiux"],
        image: "/assets/images/projects/class.png",
        title: "Privat Skill UP - Learning Platform",
        category: "Web Design & Dev",
        shortDesc:
          "A modern web-based learning platform with course management, progress tracking, and interactive UI.",
        fullDesc:
          "Privat Skill UP is a full-featured online learning platform designed to make education accessible and engaging. It features a clean, modern interface for course discovery, enrollment, and progress tracking. Built with responsive design principles and optimized for both desktop and mobile experiences. The platform includes user authentication, dashboard analytics, and a content management system for instructors.",
        techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel"],
        media: ["/assets/images/projects/class.png"],
        links: [
          { label: "GitHub", url: "https://github.com/aleronmaulanaa" },
        ],
      },
      {
        id: 2,
        categories: ["app", "uiux"],
        image: "/assets/images/projects/mobile.png",
        title: "MovieHunt - Cinema App",
        category: "Mobile App (Flutter)",
        shortDesc:
          "A cross-platform mobile app for discovering movies, checking showtimes, and booking tickets.",
        fullDesc:
          "MovieHunt is a beautifully designed mobile application built with Flutter that lets users explore trending movies, read reviews, watch trailers, and book cinema tickets. Features include real-time movie data integration, user favorites, search with filters, and a smooth booking flow. The app showcases clean architecture patterns and responsive UI across iOS and Android.",
        techStack: ["Flutter", "Dart", "Firebase"],
        media: ["/assets/images/projects/mobile.png"],
        links: [
          { label: "GitHub", url: "https://github.com/aleronmaulanaa" },
        ],
      },
      {
        id: 3,
        categories: ["backend"],
        image: "/assets/images/projects/order.png",
        title: "Student Achievement Reporting",
        category: "Backend System (Golang)",
        shortDesc:
          "A RESTful backend system for managing and reporting student academic achievements.",
        fullDesc:
          "A robust backend system built with Go (Golang) for managing student achievement data. Features include RESTful API design, database migrations, role-based access control, and automated report generation. The system handles CRUD operations for students, courses, and achievements with efficient query optimization and comprehensive error handling.",
        techStack: ["Golang", "PostgreSQL"],
        media: ["/assets/images/projects/order.png"],
        links: [
          { label: "GitHub", url: "https://github.com/aleronmaulanaa" },
        ],
      },
      {
        id: 4,
        categories: ["uiux"],
        image: "/assets/images/projects/class.png",
        title: "Smile Multifab - App Redesign",
        category: "UI/UX Design",
        shortDesc:
          "Complete UI/UX redesign for a company internal app with focus on usability and modern aesthetics.",
        fullDesc:
          "A comprehensive UI/UX redesign project for PT Multi Fabrindo's internal application, Smile Multifab. The redesign focused on improving user experience through intuitive navigation, consistent design language, and modern visual aesthetics. Conducted user research, created wireframes, built interactive prototypes in Figma, and delivered a complete design system with component library.",
        techStack: ["Figma", "Flutter", "Dart"],
        media: ["/assets/images/projects/class.png"],
        links: [],
      },
    ] as ProjectItem[],
  },
  id: {
    subtitle: "Apa yang Sudah Saya Bangun",
    title: "Proyek Unggulan",
    desc: "Proyek nyata yang menunjukkan kemampuan saya dalam memberikan solusi inovatif di bidang Fullstack, Mobile, dan Backend development.",
    rotating: ["dengan passion", "dengan presisi", "dengan tujuan"],
    filters: {
      all: "Semua",
      uiux: "UI/UX",
      web: "Web Dev",
      app: "Aplikasi Mobile",
      backend: "Backend",
    } as Record<string, string>,
    cta: {
      title: "Punya ide proyek?",
      avail: "Saya tersedia untuk freelance",
      more: "Lihat Proyek Lain",
      email: "Email Saya",
    },
    projects: [
      {
        id: 1,
        categories: ["web", "uiux"],
        image: "/assets/images/projects/class.png",
        title: "Privat Skill UP - Platform Belajar",
        category: "Desain & Web Dev",
        shortDesc:
          "Platform belajar online modern dengan manajemen kursus, pelacakan progres, dan UI interaktif.",
        fullDesc:
          "Privat Skill UP adalah platform pembelajaran online lengkap yang dirancang untuk membuat pendidikan lebih mudah diakses dan menarik. Menampilkan antarmuka modern dan bersih untuk penemuan kursus, pendaftaran, dan pelacakan progres. Dibangun dengan prinsip desain responsif dan dioptimalkan untuk pengalaman desktop maupun mobile. Platform ini mencakup autentikasi pengguna, analitik dashboard, dan sistem manajemen konten untuk instruktur.",
        techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel"],
        media: ["/assets/images/projects/class.png"],
        links: [
          { label: "GitHub", url: "https://github.com/aleronmaulanaa" },
        ],
      },
      {
        id: 2,
        categories: ["app", "uiux"],
        image: "/assets/images/projects/mobile.png",
        title: "MovieHunt - Aplikasi Bioskop",
        category: "Aplikasi Mobile (Flutter)",
        shortDesc:
          "Aplikasi mobile cross-platform untuk menemukan film, cek jadwal, dan pesan tiket.",
        fullDesc:
          "MovieHunt adalah aplikasi mobile yang didesain dengan indah menggunakan Flutter untuk menjelajahi film trending, membaca ulasan, menonton trailer, dan memesan tiket bioskop. Fitur meliputi integrasi data film real-time, favorit pengguna, pencarian dengan filter, dan alur pemesanan yang mulus. Aplikasi ini menampilkan pola arsitektur bersih dan UI responsif di iOS dan Android.",
        techStack: ["Flutter", "Dart", "Firebase"],
        media: ["/assets/images/projects/mobile.png"],
        links: [
          { label: "GitHub", url: "https://github.com/aleronmaulanaa" },
        ],
      },
      {
        id: 3,
        categories: ["backend"],
        image: "/assets/images/projects/order.png",
        title: "Sistem Pelaporan Prestasi Mahasiswa",
        category: "Sistem Backend (Golang)",
        shortDesc:
          "Sistem backend RESTful untuk mengelola dan melaporkan prestasi akademik mahasiswa.",
        fullDesc:
          "Sistem backend yang tangguh dibangun dengan Go (Golang) untuk mengelola data prestasi mahasiswa. Fitur meliputi desain RESTful API, migrasi database, kontrol akses berbasis peran, dan pembuatan laporan otomatis. Sistem menangani operasi CRUD untuk mahasiswa, mata kuliah, dan prestasi dengan optimasi query yang efisien dan penanganan error yang komprehensif.",
        techStack: ["Golang", "PostgreSQL"],
        media: ["/assets/images/projects/order.png"],
        links: [
          { label: "GitHub", url: "https://github.com/aleronmaulanaa" },
        ],
      },
      {
        id: 4,
        categories: ["uiux"],
        image: "/assets/images/projects/class.png",
        title: "Smile Multifab - Desain Ulang Aplikasi",
        category: "Desain UI/UX",
        shortDesc:
          "Redesain UI/UX lengkap untuk aplikasi internal perusahaan dengan fokus pada kegunaan dan estetika modern.",
        fullDesc:
          "Proyek redesain UI/UX komprehensif untuk aplikasi internal PT Multi Fabrindo, Smile Multifab. Redesain berfokus pada peningkatan pengalaman pengguna melalui navigasi intuitif, bahasa desain konsisten, dan estetika visual modern. Melakukan riset pengguna, membuat wireframe, membangun prototipe interaktif di Figma, dan menyerahkan sistem desain lengkap dengan library komponen.",
        techStack: ["Figma", "Flutter", "Dart"],
        media: ["/assets/images/projects/class.png"],
        links: [],
      },
    ] as ProjectItem[],
  },
};

interface Props {
  lang: string;
}

export default function ProjectsSection({ lang }: Props) {
  const t = content[lang as keyof typeof content] || content.en;
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filtered =
    activeFilter === "all"
      ? t.projects
      : t.projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <ClickSpark sparkColor="var(--accent)" sparkSize={10} sparkRadius={18} duration={450}>
      <section
        id="projects"
        className="py-24 transition-colors relative"
        style={{ background: "var(--bg-body)" }}
      >
        <GradualBlur
          position="top"
          strength={2}
          height="5rem"
          divCount={6}
          curve="ease-out"
          animated="scroll"
          duration="0.6s"
        />
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16">
            <GradientText
              colors={["#2E6FB5", "#5B9BD5", "#82B8E8", "#2E6FB5"]}
              animationSpeed={6}
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              {t.subtitle}
            </GradientText>

            <div className="flex items-baseline gap-3 flex-wrap mb-2">
              <div style={{ color: "var(--text-main)" }}>
                <SplitText
                  text={t.title}
                  className="text-[clamp(32px,3.5vw,48px)] font-bold"
                  tag="h2"
                  delay={35}
                  duration={1}
                  splitType="chars"
                  from={{ opacity: 0, y: 25, rotateX: -30 }}
                  to={{ opacity: 1, y: 0, rotateX: 0 }}
                  threshold={0.2}
                  textAlign="left"
                />
              </div>
              <RotatingText
                texts={t.rotating}
                mainClassName="text-lg font-medium overflow-hidden h-7"
                staggerFrom="first"
                staggerDuration={0.025}
                rotationInterval={3000}
                transition={{ type: "spring", damping: 22, stiffness: 260 }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                splitBy="characters"
                elementLevelClassName="inline-block"
                style={{ color: "var(--accent)" }}
              />
            </div>

            <div style={{ color: "var(--muted)" }}>
              <SplitText
                text={t.desc}
                className="text-base leading-relaxed max-w-2xl"
                tag="p"
                delay={15}
                duration={0.7}
                splitType="words"
                from={{ opacity: 0, y: 15 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                textAlign="left"
              />
            </div>

            {/* Project count */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                <CountUp to={t.projects.length} duration={1.5} />
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--muted)" }}
              >
                {lang === "en" ? "Projects Completed" : "Proyek Selesai"}
              </span>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background:
                    activeFilter === key ? "var(--accent)" : "var(--panel)",
                  color: activeFilter === key ? "#fff" : "var(--text-main)",
                  border: `1.5px solid ${activeFilter === key ? "var(--accent)" : "var(--border)"}`,
                  boxShadow:
                    activeFilter === key
                      ? "0 6px 20px rgba(46,111,181,0.3)"
                      : "0 2px 8px rgba(0,0,0,0.03)",
                  transform:
                    activeFilter === key ? "scale(1.05)" : "scale(1)",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <SpotlightCard
                    className="h-full cursor-pointer group hover:-translate-y-2 transition-all duration-400 !bg-[var(--panel)] !border-[var(--border)]"
                    spotlightColor="rgba(46, 111, 181, 0.15)"
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="flex flex-col h-full"
                    >
                      {/* Image */}
                      <div className="relative w-full h-52 overflow-hidden rounded-2xl mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-semibold bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            {lang === "en"
                              ? "Click to view details"
                              : "Klik untuk detail"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-grow px-1">
                        <ShinyText
                          text={project.category}
                          speed={4}
                          className="text-[10px] font-bold uppercase tracking-wider mb-2"
                          color="var(--accent)"
                          shineColor="var(--accent-2, #82B8E8)"
                          spread={120}
                        />
                        <h4
                          className="text-lg font-bold mb-2 leading-tight"
                          style={{ color: "var(--text-main)" }}
                        >
                          {project.title}
                        </h4>
                        <p
                          className="text-xs leading-relaxed mb-4 line-clamp-2"
                          style={{ color: "var(--muted)" }}
                        >
                          {project.shortDesc}
                        </p>

                        {/* Tech Icons */}
                        <div className="flex items-center gap-2 mt-auto">
                          {project.techStack.slice(0, 5).map((tech) => (
                            <div
                              key={tech}
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-sm transition-transform hover:scale-110"
                              style={{
                                background: "var(--accent-tint)",
                                border: "1px solid var(--border)",
                              }}
                              title={tech}
                            >
                              {techIconMap[tech] || (
                                <span
                                  className="text-[8px] font-bold"
                                  style={{ color: "var(--accent)" }}
                                >
                                  {tech.slice(0, 2)}
                                </span>
                              )}
                            </div>
                          ))}
                          {project.techStack.length > 5 && (
                            <span
                              className="text-[10px] font-semibold"
                              style={{ color: "var(--muted)" }}
                            >
                              +{project.techStack.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Banner */}
          <div
            className="mt-16 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6"
            style={{
              background: "var(--panel)",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 24px rgba(46,111,181,0.1)",
            }}
          >
            <div>
              <h3
                className="text-2xl font-bold"
                style={{
                  color: "var(--text-main)",
                  fontFamily: "var(--font-playfair,'Playfair Display',serif)",
                }}
              >
                {t.cta.title}
              </h3>
              <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                {t.cta.avail}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aleronmaulanaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{
                  border: "1.5px solid var(--border)",
                  color: "var(--text-main)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
                {t.cta.more}
              </a>
              <a
                href="mailto:aleronmaulanafirjatullah@gmail.com"
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 6px 20px rgba(46,111,181,0.35)",
                }}
              >
                {t.cta.email}
              </a>
            </div>
          </div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              style={{
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(12px)",
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 40 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--border)",
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Media Area */}
                <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.media[0] || selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <ShinyText
                      text={selectedProject.category}
                      speed={3}
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                      color="rgba(255,255,255,0.9)"
                      shineColor="#ffffff"
                    />
                    <h3
                      className="text-white text-2xl md:text-3xl font-bold leading-tight"
                      style={{
                        fontFamily:
                          "var(--font-playfair,'Playfair Display',serif)",
                      }}
                    >
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Additional Media Gallery */}
                {selectedProject.media.length > 1 && (
                  <div className="px-6 pt-4">
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selectedProject.media.slice(1).map((m, i) => (
                        <div
                          key={i}
                          className="relative flex-shrink-0 w-40 h-24 rounded-xl overflow-hidden"
                          style={{ border: "1px solid var(--border)" }}
                        >
                          <Image
                            src={m}
                            alt={`${selectedProject.title} ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <GradientText
                      colors={["#2E6FB5", "#5B9BD5", "#82B8E8"]}
                      animationSpeed={4}
                      className="text-sm font-bold uppercase tracking-wider mb-3"
                    >
                      {lang === "en"
                        ? "About This Project"
                        : "Tentang Proyek Ini"}
                    </GradientText>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <GradientText
                      colors={["#2E6FB5", "#5B9BD5", "#82B8E8"]}
                      animationSpeed={4}
                      className="text-sm font-bold uppercase tracking-wider mb-3"
                    >
                      {lang === "en" ? "Tech Stack" : "Teknologi"}
                    </GradientText>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-transform hover:scale-105"
                          style={{
                            background: "var(--accent-tint)",
                            border: "1px solid var(--accent-soft)",
                            color: "var(--text-main)",
                          }}
                        >
                          <span className="text-base">
                            {techIconMap[tech] || null}
                          </span>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {selectedProject.links.length > 0 && (
                    <div className="flex gap-3 pt-2">
                      {selectedProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                          style={{
                            background: "var(--accent)",
                            boxShadow: "0 6px 20px rgba(46,111,181,0.35)",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ClickSpark>
  );
}
