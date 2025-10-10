"use client";
import Script from "next/script";
import "../public/css/style.css";
import Lanyard from "./components/Lanyard/Lanyard";
import CardSwap, { Card } from "./components/CardSwap/CardSwap";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* === NAVBAR === */}
      {/* <nav className="nav relative z-20"> */}
      {/* <nav className="nav fixed top-0 left-0 w-full z-50"> */}
      <nav className="nav !fixed top-0 left-0 w-full z-50">
        <div className="container nav-inner">
          <div className="brand">
            Geo<b>biops</b>
          </div>
          <div
            className="burger"
            id="burger"
            aria-label="Toggle menu"
            aria-expanded="false"
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu" id="menu">
            <a href="#home">Home</a>
            <a href="#tools">Tools and Skills</a>
            <a href="#projects">Featured Project</a>
            <a href="#snippets">Code Snippet</a>
            <a href="#testimonials">Testimonials</a>
          </div>
        </div>
      </nav>

      {/* === SECTION: HOME === */}
      <section
        id="home"
        className="relative z-10 flex items-center justify-center min-h-[81vh] bg-[var(--section-bg)] reveal"
      >
        <div className="container hero relative">
          {/* LEFT TEXT */}
          <div className="z-10">
            <div className="eyebrow">Hello Buddy</div>
            <h1>
              Aleron <span className="accent">Maulana Firjatullah</span>
            </h1>

            <div
              style={{
                height: "2px",
                width: "90px",
                background: "#3a3a3a",
                margin: "12px 0 18px",
                borderRadius: "2px",
              }}
            ></div>

            <p>
              I have a keen interest in design layout, believing that presenting
              an attractive design is crucial for effective product branding. To
              achieve this, I focus on proper composition and visual details to
              ensure a professional appearance.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#projects">
                ⬇ Download CV
              </a>
              <a className="btn btn-ghost" href="#snippets">
                More
              </a>
            </div>

            <div className="socials" aria-label="Sosial">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ddd">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter" title="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ddd">
                  <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.9 3.9 0 0011 8.5c0 .3 0 .6.1.9-3.2-.2-6-1.7-7.9-4.1-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8-.7 0-1.3-.2-1.9-.5v.1c0 2.3 1.7 4.2 3.9 4.6-.4.1-.9.2-1.4.2-.3 0-.6 0-.8-.1.6 1.9 2.4 3.3 4.6 3.3A8 8 0 012 19.5 11.3 11.3 0 008.3 21c7 0 10.9-5.8 10.9-10.9v-.5c.8-.5 1.5-1.2 2-2z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ddd">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL (Portrait + Lanyard) */}
          <div className="absolute inset-0 flex justify-end items-center z-0 pointer-events-none">
            <div className="relative w-1/2 h-full flex justify-center items-center">
              {/* Background Portrait */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="portrait relative z-10" aria-hidden="true"></div>
              </div>

              {/* Lanyard */}
              <div className="relative top-0 right-0 w-180 z-20">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>

              {/* Blob Background */}
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="blob"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: ABOUT === */}
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center justify-between bg-[var(--section-bg)] text-white px-8 md:px-24 py-16 md:py-20 overflow-hidden reveal"
      >
        {/* LEFT: YouTube Embed */}
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:translate-x-6">
          <div className="w-full aspect-video max-w-xl rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mPxlAkeoywk?si=eeyf2DzOzo4OLbVe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* RIGHT: Text Biografi */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 md:-translate-x-8">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Saya adalah mahasiswa dari jurusan <b>Teknologi Informasi</b> dengan
            minat yang besar pada pengembangan web dan desain interaktif. Fokus
            saya adalah menggabungkan kreativitas dan teknologi untuk
            menciptakan pengalaman digital yang menarik serta fungsional. Tujuan
            saya adalah menjadi <b>front-end developer</b> profesional yang
            mampu menghadirkan desain modern dengan performa optimal.
          </p>
        </div>
      </section>

      {/* === CODE SNIPPET SECTION === */}
<section
  id="snippets"
  className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[var(--section-bg)] text-white px-8 md:px-32 py-10 md:py-12 overflow-hidden reveal"
>
  {/* LEFT TEXT CONTENT */}
  <div className="md:w-1/2 space-y-4 text-center md:text-left z-10 flex flex-col justify-center h-full pl-16 md:pl-38 reveal">
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Card stacks have never <br /> looked so good
    </h2>
    <p className="text-gray-400 text-lg">Just look at it go!</p>
  </div>

  {/* RIGHT CARD STACK */}
  <div className="md:w-1/2 relative flex justify-center items-center reveal">
    <div className="translate-x-50 translate-y-50">
      <CardSwap
        width={520}
        height={340}
        cardDistance={70}
        verticalDistance={80}
        delay={4000}
        pauseOnHover={true}
        skewAmount={4}
      >
        {/* CARD 1 */}
        <Card customClass="flex flex-col justify-between bg-gradient-to-br from-black to-[#161321] border border-gray-700 text-white shadow-2xl overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1b1728]">
            <div className="flex items-center gap-2">
              <span className="text-sm">💡</span>
              <span className="text-base font-medium">Reliable</span>
            </div>
            <span className="text-sm text-gray-400">&lt;/&gt;</span>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow text-7xl font-bold text-purple-500">
            1
          </div>
        </Card>

        {/* CARD 2 */}
        <Card customClass="flex flex-col justify-between bg-gradient-to-br from-black to-[#161321] border border-gray-700 text-white shadow-2xl overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1b1728]">
            <div className="flex items-center gap-2">
              <span className="text-sm">⚙️</span>
              <span className="text-base font-medium">Customizable</span>
            </div>
            <span className="text-sm text-gray-400">🧩</span>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow text-7xl font-bold text-pink-500">
            2
          </div>
        </Card>

        {/* CARD 3 */}
        <Card customClass="flex flex-col justify-between bg-gradient-to-br from-black to-[#161321] border border-gray-700 text-white shadow-2xl overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1b1728]">
            <div className="flex items-center gap-2">
              <span className="text-sm">💨</span>
              <span className="text-base font-medium">Smooth</span>
            </div>
            <span className="text-sm text-gray-400">●</span>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow text-7xl font-bold text-cyan-500">
            3
          </div>
        </Card>
      </CardSwap>
    </div>
  </div>
</section>

{/* === FEATURED PROJECT SECTION === */}
<section id="projects" className="reveal">
  <div className="container">
    <h2 className="title reveal">Featured Project</h2>
    <p className="lead reveal">
      Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est
      risus lectus.
    </p>

    <div className="filters reveal" id="filters">
      <button className="chip active" data-filter="all">
        All
      </button>
      <button className="chip" data-filter="uiux">
        UI/UX
      </button>
      <button className="chip" data-filter="web">
        Web Design
      </button>
      <button className="chip" data-filter="app">
        App Design
      </button>
      <button className="chip" data-filter="graphic">
        Graphic Design
      </button>
    </div>

    <div className="grid-3" id="projectGrid">
      <article className="card reveal" data-cat="web">
        <div className="thumb"></div>
        <div className="card-body">
          <div className="tag">Web Design</div>
          <h4>AirCalling Landing Page Design</h4>
        </div>
      </article>

      <article className="card reveal" data-cat="web uiux">
        <div className="thumb"></div>
        <div className="card-body">
          <div className="tag">Web Design</div>
          <h4>Business Landing Page Design</h4>
        </div>
      </article>

      <article className="card reveal" data-cat="web graphic">
        <div className="thumb"></div>
        <div className="card-body">
          <div className="tag">Web Design</div>
          <h4>Ecom Web Page Design</h4>
        </div>
      </article>
    </div>

    <div className="cta-banner reveal" role="region" aria-label="Project CTA">
      <div>
        <h3 style={{ margin: "0 0 4px" }}>Have any project in mind?</h3>
        <div style={{ color: "var(--muted)" }}>I'm available for freelancing</div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <a href="#projects" className="btn">
          More Projects
        </a>
        <a href="" className="btn btn-primary">
          📧 Email Me
        </a>
      </div>
    </div>
  </div>
</section>

      {/* === TESTIMONIALS SECTION === */}
<section id="testimonials" className="reveal">
  <div className="container">
    <h2 className="title reveal">Testimonials</h2>
    <p className="lead reveal">
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
      nibh lectus netus in.
    </p>

    <div
      className="slider reveal"
      id="slider"
      aria-roledescription="carousel"
    >
      <div className="slides" id="slides">
        <div className="slide reveal">
          <div className="avatar" aria-hidden="true"></div>
          <div>
            <p className="quote">
              Lorem ipsum dolor sit amet consectetur. In enim cursus odio
              accumsan. Id leo urna velit neque mattis.
            </p>
            <div className="name">Name</div>
            <div className="role">CEO</div>
          </div>
        </div>

        <div className="slide reveal">
          <div className="avatar"></div>
          <div>
            <p className="quote">
              Augue dictum dolor elementum convallis dignissim malesuada
              commodo ultrices.
            </p>
            <div className="name">Jane Doe</div>
            <div className="role">Founder</div>
          </div>
        </div>

        <div className="slide reveal">
          <div className="avatar"></div>
          <div>
            <p className="quote">
              Sit pretium gravida volutpat magna eget tincidunt. Vitae
              nibh viverra aenean.
            </p>
            <div className="name">John Smith</div>
            <div className="role">CTO</div>
          </div>
        </div>
      </div>
    </div>

    <div className="dots reveal" id="dots" aria-label="Slider pagination"></div>
  </div>
</section>

{/* === TOOLS AND SKILLS SECTION === */}
<section
  id="tools"
  className="py-20 bg-[var(--section-bg)] text-white reveal"
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10 reveal">
      Tools and Skills
    </h2>

    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#1f1f1f"
        ariaLabel="Technology partners"
      />
    </div>
  </div>
</section>

{/* === FOOTER === */}
<footer className="reveal">
  <div className="container">
    <div className="foot-brand reveal">Geobiops</div>

    <nav className="foot-menu reveal" aria-label="Footer">
      <a href="#home">Home</a>
      <a href="#tools">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#testimonials">Testimonials</a>
    </nav>

    <div className="foot-social reveal">
      <a className="socials a" href="#" aria-label="Facebook">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4d4d4">
          <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.5.7-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
        </svg>
      </a>

      <a className="socials a" href="#" aria-label="Twitter">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4d4d4">
          <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.9 3.9 0 0011 8.5c0 .3 0 .6.1.9-3.2-.2-6-1.7-7.9-4.1-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8-.7 0-1.3-.2-1.9-.5v.1c0 2.3 1.7 4.2 3.9 4.6-.4.1-.9.2-1.4.2-.3 0-.6 0-.8-.1.6 1.9 2.4 3.3 4.6 3.3A8 8 0 012 19.5 11.3 11.3 0 008.3 21c7 0 10.9-5.8 10.9-10.9v-.5c.8-.5 1.5-1.2 2-2z" />
        </svg>
      </a>

      <a className="socials a" href="#" aria-label="LinkedIn">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4d4d4">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
        </svg>
      </a>
    </div>

    <div className="copy reveal">
      © 2023{" "}
      <span style={{ color: "var(--accent)", fontWeight: 700 }}>Geobiops</span>{" "}
      All Rights Reserved, Inc.
    </div>
  </div>
</footer>

</main>
);
}
