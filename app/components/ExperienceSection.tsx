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

function ImageWithFallback({
  src,
  alt,
  fallbackIcon,
}: {
  src: string;
  alt: string;
  fallbackIcon: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, var(--accent-tint), var(--panel))",
        }}
      >
        <span className="text-4xl mb-2">{fallbackIcon}</span>
        <span
          className="text-xs font-semibold text-center px-4 leading-tight"
          style={{ color: "var(--accent)" }}
        >
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setFailed(true)}
    />
  );
}

type Tab = "work" | "events";

interface ExperienceItem {
  id: string;
  tab: Tab;
  title: string;
  role: string;
  date: string;
  description: string;
  images: string[];
  tags: string[];
  icon: string;
}

const content = {
  en: {
    subtitle: "What I've Done",
    title: "Experience",
    desc: "From professional internships to campus organizations and national events — here's a timeline of my growth in tech, leadership, and design.",
    tabs: { work: "Work & Organization", events: "Events & Certificates" },
    rotating: ["Developer", "Designer", "Leader", "Creator", "Mentor"],
    items: [
      {
        id: "multifab",
        tab: "work" as Tab,
        title: "PT Multi Fabrindo",
        role: "Mobile Developer & UI/UX Designer Intern",
        date: "2026 — Present",
        icon: "💼",
        description:
          "Building cross-platform mobile applications using Flutter and designing intuitive user interfaces. Working with real-time database integration, state management, and delivering production-ready features for internal company apps.",
        images: ["/assets/images/experience/multifab.jpg"],
        tags: ["Flutter", "Dart", "UI/UX", "Figma", "Firebase"],
      },
      {
        id: "gdg-campus",
        tab: "work" as Tab,
        title: "Google Developer Groups on Campus",
        role: "Member — Universitas Airlangga",
        date: "2026",
        icon: "🌐",
        description:
          "Active member of GDG on Campus at Universitas Airlangga, participating in tech talks, workshops, and community-driven developer events focused on Google technologies.",
        images: ["/assets/images/experience/gdg-campus.jpg"],
        tags: ["Community", "Google Tech", "Networking"],
      },
      {
        id: "sekolah-beta",
        tab: "events" as Tab,
        title: "SEKOLAH BETA INTENSIF — HIPSTER SOFTWARE",
        role: "Day 16 — How to Make Resume as UI Designer & Convincing Portfolio",
        date: "2024",
        icon: "🎓",
        description:
          "Participated in an intensive bootcamp session focused on crafting compelling UI designer resumes and building portfolios that stand out. Learned best practices for showcasing design work effectively.",
        images: ["/assets/images/experience/sekolah-beta.jpg"],
        tags: ["Bootcamp", "UI Design", "Portfolio", "Career"],
      },
      {
        id: "ifbc",
        tab: "events" as Tab,
        title: "IFBC EXPO 2025",
        role: "Event Participant & Contributor",
        date: "2025",
        icon: "🏢",
        description:
          "Contributed to the Indonesia Future Business Convention (IFBC) EXPO 2025 — a major national business and technology exposition bringing together innovators, startups, and industry leaders.",
        images: ["/assets/images/experience/IFBC.jpg"],
        tags: ["Expo", "Business", "Technology", "Networking"],
      },
      {
        id: "devfest",
        tab: "events" as Tab,
        title: "GOOGLE DEVELOPER GROUPS — DEVFEST 2025",
        role: "Volunteer Logistics",
        date: "2025",
        icon: "🤝",
        description:
          "Volunteered as logistics coordinator for Google DevFest 2025, managing venue preparation, equipment, and ensuring smooth event operations for hundreds of attendees and speakers.",
        images: ["/assets/images/experience/devfest.jpg"],
        tags: ["Google", "DevFest", "Volunteer", "Logistics"],
      },
      {
        id: "wp",
        tab: "events" as Tab,
        title: "WELCOME PARTY 2024",
        role: "Event Coordinator — HIMTI UNAIR",
        date: "2024",
        icon: "🎉",
        description:
          "Coordinated the annual Welcome Party for new Informatics Engineering students at Universitas Airlangga. Managed event planning, team coordination, and ensured a memorable experience for freshmen.",
        images: ["/assets/images/experience/WP.jpg"],
        tags: ["Event Management", "HIMTI", "Leadership"],
      },
      {
        id: "graduation",
        tab: "events" as Tab,
        title: "GRADUATION PARTY",
        role: "Event Organizer — HIMTI UNAIR",
        date: "2024",
        icon: "🎊",
        description:
          "Organized the Graduation Party celebrating graduating seniors from the Informatics Engineering department. Handled logistics, program design, and cross-team coordination.",
        images: ["/assets/images/experience/graduation.jpg"],
        tags: ["Event Management", "HIMTI", "Celebration"],
      },
    ] as ExperienceItem[],
  },
  id: {
    subtitle: "Apa yang Sudah Saya Lakukan",
    title: "Pengalaman",
    desc: "Dari magang profesional hingga organisasi kampus dan acara nasional — berikut perjalanan pertumbuhan saya di bidang teknologi, kepemimpinan, dan desain.",
    tabs: { work: "Kerja & Organisasi", events: "Acara & Sertifikat" },
    rotating: ["Developer", "Desainer", "Pemimpin", "Kreator", "Mentor"],
    items: [
      {
        id: "multifab",
        tab: "work" as Tab,
        title: "PT Multi Fabrindo",
        role: "Intern Mobile Developer & UI/UX Designer",
        date: "2026 — Sekarang",
        icon: "💼",
        description:
          "Membangun aplikasi mobile cross-platform menggunakan Flutter dan merancang antarmuka pengguna yang intuitif. Bekerja dengan integrasi database real-time, state management, dan menghasilkan fitur siap produksi untuk aplikasi internal perusahaan.",
        images: ["/assets/images/experience/multifab.jpg"],
        tags: ["Flutter", "Dart", "UI/UX", "Figma", "Firebase"],
      },
      {
        id: "gdg-campus",
        tab: "work" as Tab,
        title: "Google Developer Groups on Campus",
        role: "Anggota — Universitas Airlangga",
        date: "2026",
        icon: "🌐",
        description:
          "Anggota aktif GDG on Campus di Universitas Airlangga, berpartisipasi dalam tech talk, workshop, dan acara developer berbasis komunitas yang berfokus pada teknologi Google.",
        images: ["/assets/images/experience/gdg-campus.jpg"],
        tags: ["Komunitas", "Google Tech", "Networking"],
      },
      {
        id: "sekolah-beta",
        tab: "events" as Tab,
        title: "SEKOLAH BETA INTENSIF — HIPSTER SOFTWARE",
        role: "Day 16 — Cara Membuat CV UI Designer & Portofolio yang Meyakinkan",
        date: "2024",
        icon: "🎓",
        description:
          "Mengikuti sesi bootcamp intensif yang berfokus pada pembuatan CV UI designer yang menarik dan membangun portofolio yang menonjol. Mempelajari praktik terbaik untuk menampilkan karya desain secara efektif.",
        images: ["/assets/images/experience/sekolah-beta.jpg"],
        tags: ["Bootcamp", "UI Design", "Portofolio", "Karir"],
      },
      {
        id: "ifbc",
        tab: "events" as Tab,
        title: "IFBC EXPO 2025",
        role: "Peserta & Kontributor Acara",
        date: "2025",
        icon: "🏢",
        description:
          "Berkontribusi dalam Indonesia Future Business Convention (IFBC) EXPO 2025 — pameran bisnis dan teknologi nasional yang mempertemukan inovator, startup, dan pemimpin industri.",
        images: ["/assets/images/experience/IFBC.jpg"],
        tags: ["Expo", "Bisnis", "Teknologi", "Networking"],
      },
      {
        id: "devfest",
        tab: "events" as Tab,
        title: "GOOGLE DEVELOPER GROUPS — DEVFEST 2025",
        role: "Volunteer Logistik",
        date: "2025",
        icon: "🤝",
        description:
          "Menjadi volunteer koordinator logistik untuk Google DevFest 2025, mengelola persiapan venue, peralatan, dan memastikan kelancaran operasional acara untuk ratusan peserta dan pembicara.",
        images: ["/assets/images/experience/devfest.jpg"],
        tags: ["Google", "DevFest", "Volunteer", "Logistik"],
      },
      {
        id: "wp",
        tab: "events" as Tab,
        title: "WELCOME PARTY 2024",
        role: "Koordinator Acara — HIMTI UNAIR",
        date: "2024",
        icon: "🎉",
        description:
          "Mengoordinasikan Welcome Party tahunan untuk mahasiswa baru Teknik Informatika Universitas Airlangga. Mengelola perencanaan acara, koordinasi tim, dan memastikan pengalaman berkesan bagi mahasiswa baru.",
        images: ["/assets/images/experience/WP.jpg"],
        tags: ["Manajemen Acara", "HIMTI", "Kepemimpinan"],
      },
      {
        id: "graduation",
        tab: "events" as Tab,
        title: "GRADUATION PARTY",
        role: "Event Organizer — HIMTI UNAIR",
        date: "2024",
        icon: "🎊",
        description:
          "Mengorganisir Graduation Party untuk merayakan lulusan dari departemen Teknik Informatika. Menangani logistik, desain program, dan koordinasi lintas tim.",
        images: ["/assets/images/experience/graduation.jpg"],
        tags: ["Manajemen Acara", "HIMTI", "Perayaan"],
      },
    ] as ExperienceItem[],
  },
};

interface Props {
  lang: string;
}

export default function ExperienceSection({ lang }: Props) {
  const t = content[lang as keyof typeof content] || content.en;
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);
  const [titleDone, setTitleDone] = useState(false);
  const [descDone, setDescDone] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showRotating, setShowRotating] = useState(false);

  const bothDone = titleDone && descDone;

  React.useEffect(() => {
    if (!bothDone) return;
    const t1 = setTimeout(() => setShowSubtitle(true), 100);
    const t2 = setTimeout(() => setShowRotating(true), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [bothDone]);

  const filtered = t.items.filter((item) => item.tab === activeTab);
  const totalExperiences = t.items.length;

  return (
    <ClickSpark sparkColor="var(--accent)" sparkSize={12} sparkRadius={20} duration={500}>
      <section
        id="snippets"
        className="py-24 transition-colors duration-300 relative"
        style={{ background: "var(--section-bg)" }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div style={{
              opacity: showSubtitle ? 1 : 0,
              transform: showSubtitle ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                {t.subtitle}
              </p>
            </div>

            <div style={{ color: "var(--text-main)" }}>
              <SplitText
                text={t.title}
                className="text-[clamp(32px,3.5vw,48px)] font-bold leading-tight"
                tag="h2"
                delay={40}
                duration={1}
                splitType="chars"
                from={{ opacity: 0, y: 30, rotateX: -40 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.2}
                textAlign="center"
                onLetterAnimationComplete={() => setTitleDone(true)}
              />
            </div>

            <div style={{
              opacity: showRotating ? 1 : 0,
              transform: showRotating ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}>
              <div className="flex items-center justify-center gap-2 mb-5">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  {lang === "en" ? "as a" : "sebagai"}
                </span>
                <RotatingText
                  texts={t.rotating}
                  mainClassName="text-sm font-bold overflow-hidden h-[26px] px-3 pt-[3px] pb-[1px] rounded-md relative top-[1px]"
                  staggerFrom="last"
                  staggerDuration={0.03}
                  rotationInterval={2500}
                  transition={{ type: "spring", damping: 20, stiffness: 250 }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  splitBy="characters"
                  elementLevelClassName="inline-block"
                  style={{ color: "#fff", background: "var(--accent)" }}
                />
              </div>
            </div>

            <div style={{ color: "var(--muted)" }}>
              <SplitText
                text={t.desc}
                className="text-base leading-relaxed max-w-2xl mx-auto"
                tag="p"
                delay={20}
                duration={0.8}
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                textAlign="center"
                onLetterAnimationComplete={() => setDescDone(true)}
              />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <GradientText
                colors={["#2E6FB5", "#5B9BD5", "#82B8E8", "#2E6FB5"]}
                animationSpeed={6}
                className="!mx-0 !overflow-visible !rounded-none text-center"
              >
                <span className="text-3xl font-bold block">
                  <CountUp to={totalExperiences} duration={2} separator="" />
                  <span>+</span>
                </span>
                <span className="text-xs font-medium block" style={{ WebkitTextFillColor: "var(--text-main)" }}>
                  {lang === "en" ? "Experiences" : "Pengalaman"}
                </span>
              </GradientText>
              <div
                className="w-px h-12 shrink-0"
                style={{ background: "var(--border)" }}
              />
              <GradientText
                colors={["#2E6FB5", "#5B9BD5", "#82B8E8", "#2E6FB5"]}
                animationSpeed={6}
                className="!mx-0 !overflow-visible !rounded-none text-center"
              >
                <span className="text-3xl font-bold block">
                  <CountUp to={3} duration={2} separator="" />
                  <span>+</span>
                </span>
                <span className="text-xs font-medium block" style={{ WebkitTextFillColor: "var(--text-main)" }}>
                  {lang === "en" ? "Years Active" : "Tahun Aktif"}
                </span>
              </GradientText>
            </div>
          </div>

          {/* Tab Buttons with Magnet */}
          <div className="flex justify-center gap-4 mb-12">
            {(["work", "events"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background:
                    activeTab === tab ? "var(--accent)" : "var(--panel)",
                  color: activeTab === tab ? "#fff" : "var(--text-main)",
                  border: `1.5px solid ${activeTab === tab ? "var(--accent)" : "var(--border)"}`,
                  boxShadow:
                    activeTab === tab
                      ? "0 8px 24px rgba(46,111,181,0.35)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: activeTab === tab ? "scale(1.05)" : "scale(1)",
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 300,
                    }}
                  />
                )}
                <span className="relative z-10">{t.tabs[tab]}</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
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
                      onClick={() => setSelectedItem(item)}
                      className="flex flex-col h-full"
                    >
                      {/* Image Area */}
                      <div className="relative w-full h-48 overflow-hidden rounded-2xl mb-4">
                        <ImageWithFallback
                          src={item.images[0]}
                          alt={item.title}
                          fallbackIcon={item.icon}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3">
                          <ShinyText
                            text={item.date}
                            speed={3}
                            className="px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-sm"
                            color="rgba(255,255,255,0.85)"
                            shineColor="#ffffff"
                            spread={100}
                          />
                        </div>
                        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-[10px] font-medium bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">
                            {lang === "en"
                              ? "Click for details"
                              : "Klik untuk detail"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-grow px-1">
                        <h3
                          className="font-bold text-base leading-tight mb-1"
                          style={{ color: "var(--text-main)" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-xs font-medium mb-3"
                          style={{ color: "var(--accent)" }}
                        >
                          {item.role}
                        </p>
                        <p
                          className="text-xs leading-relaxed mb-4 line-clamp-3"
                          style={{ color: "var(--muted)" }}
                        >
                          {item.description}
                        </p>

                        {/* Tags with ShinyText */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {item.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                              style={{
                                background: "var(--accent-tint)",
                                color: "var(--accent)",
                                border: "1px solid var(--accent-soft)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          {item.tags.length > 4 && (
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                              style={{ color: "var(--muted)" }}
                            >
                              +{item.tags.length - 4}
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
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              style={{
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(12px)",
              }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 40 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl"
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--border)",
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
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

                {/* Modal Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
                  <ImageWithFallback
                    src={selectedItem.images[0]}
                    alt={selectedItem.title}
                    fallbackIcon={selectedItem.icon}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <ShinyText
                      text={selectedItem.date}
                      speed={3}
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                      color="rgba(255,255,255,0.9)"
                      shineColor="#ffffff"
                    />
                    <h3
                      className="text-white text-2xl font-bold leading-tight"
                      style={{
                        fontFamily:
                          "var(--font-playfair,'Playfair Display',serif)",
                      }}
                    >
                      {selectedItem.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-5">
                  <GradientText
                    colors={["#2E6FB5", "#5B9BD5", "#82B8E8"]}
                    animationSpeed={4}
                    className="text-sm font-semibold"
                  >
                    {selectedItem.role}
                  </GradientText>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {selectedItem.description}
                  </p>

                  {/* Additional Images */}
                  {selectedItem.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-3">
                      {selectedItem.images.slice(1).map((img, i) => (
                        <div
                          key={i}
                          className="relative h-32 rounded-xl overflow-hidden"
                          style={{ border: "1px solid var(--border)" }}
                        >
                          <Image
                            src={img}
                            alt={`${selectedItem.title} ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="300px"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          background: "var(--accent-tint)",
                          color: "var(--accent)",
                          border: "1px solid var(--accent-soft)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ClickSpark>
  );
}
