// "use client";
// import Image from 'next/image';
// import Script from "next/script";
// import "../public/css/style.css";
// import Lanyard from "./components/Lanyard/Lanyard";
// import CardSwap, { Card } from "./components/CardSwap/CardSwap";
// import LogoLoop from "./components/LogoLoop/LogoLoop";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
// } from "react-icons/si";

// export default function Home() {
//   const techLogos = [
//     { node: <SiReact />, title: "React", href: "https://react.dev" },
//     { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//     {
//       node: <SiTypescript />,
//       title: "TypeScript",
//       href: "https://www.typescriptlang.org",
//     },
//     {
//       node: <SiTailwindcss />,
//       title: "Tailwind CSS",
//       href: "https://tailwindcss.com",
//     },
//   ];

//   return (
//     <main className="relative overflow-hidden">
//       {/* === NAVBAR === */}
//       {/* <nav className="nav relative z-20"> */}
//       {/* <nav className="nav fixed top-0 left-0 w-full z-50"> */}
//       <nav className="nav !fixed top-0 left-0 w-full z-50">
//         <div className="container nav-inner">
//           <div className="brand">
//             Aleron<b>Maulana</b>
//           </div>
//           <div
//             className="burger"
//             id="burger"
//             aria-label="Toggle menu"
//             aria-expanded="false"
//             role="button"
//             tabIndex={0}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//           <div className="menu" id="menu">
//             <a href="#home">Home</a>
//             <a href="#about">About Me</a>
//             <a href="#snippets">Experience</a>
//             <a href="#projects">Featured Project</a>
//             <a href="#testimonials">
// Reflection</a>
//             <a href="#tools">Tools and Skills</a>
//           </div>
//         </div>
//       </nav>

//       {/* === SECTION: HOME === */}
//       <section
//         id="home"
//         className="relative z-10 flex items-center justify-center min-h-[81vh] bg-[var(--section-bg)] reveal"
//       >
//         <div className="container hero relative">
//           {/* LEFT TEXT */}
//           <div className="z-10">
//             <div className="eyebrow">Hello everyone</div>
//             <h1>
//               Aleron <span className="accent">Maulana Firjatullah</span>
//             </h1>

//             <div
//               style={{
//                 height: "2px",
//                 width: "90px",
//                 background: "#3a3a3a",
//                 margin: "12px 0 18px",
//                 borderRadius: "2px",
//               }}
//             ></div>

//             <p>
//               I am a 5th-semester student in the D4 Informatics Engineering program at Universitas Airlangga, with
// a strong interest in technology, particularly in UI/UX Design and Web Development. I have
// experience in creating user interface designs, developing web-based applications, and actively
// participating in student organizations and committees. I am accustomed to working both individually
// and in teams, possess good communication skills, and am solution-oriented.

//             </p>

//             {/* <div className="actions">
//               <a className="btn btn-primary" href="#projects">
//                 ⬇ Download CV
//               </a>
//               <a className="btn btn-ghost" href="#snippets">
//                 More
//               </a>
//             </div> */}
//             <div className="actions">
//   <a
//     className="btn btn-primary"
//     href="/assets/CV_Aleron Maulana F_EN.pdf"
//     download
//   >
//     ⬇ Download CV
//   </a>
//   <a className="btn btn-ghost" href="#snippets">
//     More
//   </a>
// </div>

//             <div className="socials" aria-label="Sosial">
//               {/* Instagram */}
//               <a href="https://www.instagram.com/aleronmaulanaaa/" aria-label="Instagram" title="Instagram">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="#ddd">
//                   <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
//                 </svg>
//               </a>
//               {/* GitHub */}
// <a href="https://github.com/aleronmaulanaa" aria-label="GitHub" title="GitHub">
//   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ddd">
//     <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z"/>
//   </svg>
// </a>

//               {/* LinkedIn */}
//               <a href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374" aria-label="LinkedIn" title="LinkedIn">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="#ddd">
//                   <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* RIGHT VISUAL (Portrait + Lanyard) */}
//           <div className="absolute inset-0 flex justify-end items-center z-0 pointer-events-none">
//             <div className="relative w-1/2 h-full flex justify-center items-center">
//               {/* Background Portrait */}
//               <div className="absolute inset-0 flex justify-center items-center">
//                 <div className="portrait relative z-10" aria-hidden="true"></div>
//               </div>

//               {/* Lanyard */}
//               <div className="relative top-0 right-0 w-180 z-20">
//                 <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
//               </div>

//               {/* Blob Background */}
//               <div className="absolute inset-0 flex justify-center items-center z-0">
//                 <div className="blob"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === SECTION: ABOUT === */}
//       <section
//         id="about"
//         className="relative flex flex-col md:flex-row items-center justify-between bg-[var(--section-bg)] text-white px-8 md:px-24 py-16 md:py-20 overflow-hidden reveal"
//       >
//         {/* LEFT: YouTube Embed */}
//         <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:translate-x-6">
//           <div className="w-full aspect-video max-w-xl rounded-2xl overflow-hidden shadow-2xl">
//             <iframe
//               width="560"
//               height="315"
//               src="https://www.youtube.com/embed/mPxlAkeoywk?si=eeyf2DzOzo4OLbVe"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>

//         {/* RIGHT: Text Biografi */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6 md:-translate-x-8">
//           <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             I am a student in the D4 Informatics Engineering program at Universitas Airlangga, with a strong passion for technology, particularly in the fields of UI/UX Design and Web Development. In addition to having experience in designing user interfaces and developing web-based applications, I am also actively involved in various organizations and committees. I am accustomed to working both independently and in teams, possess strong communication skills, and am always solution-oriented. Furthermore, I also have experience in event management, public relations, and organization, with the ability to lead and ensure the smooth execution of every activity.
//           </p>
//         </div>
//       </section>

//       {/* === CODE SNIPPET SECTION === */}
// <section
//   id="snippets"
//   className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[var(--section-bg)] text-white px-8 md:px-32 py-10 md:py-12 overflow-hidden reveal"
// >
//   {/* LEFT TEXT CONTENT */}
//   <div className="md:w-1/2 space-y-4 text-center md:text-left z-10 flex flex-col justify-center h-full pl-16 md:pl-38 reveal">
//     <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//       EXPERIENCE
//     </h2>
//     <p className="text-gray-300 text-lg">I have extensive experience in event management, public relations, and organization. Accustomed to leading and coordinating with various parties, I possess expertise in public communication, building relationships, and ensuring the smooth execution of events. With experience in various roles such as person-in-charge, public relations team, and coordinator, I am capable of working effectively both as part of a team and independently.</p>
//   </div>

//   {/* RIGHT CARD STACK */}
// <div className="md:w-1/2 relative flex justify-center items-center reveal">
//   <div className="translate-x-50 translate-y-50">
//     <CardSwap
//       width={520}
//       height={340}
//       cardDistance={70}
//       verticalDistance={80}
//       delay={4000}
//       pauseOnHover={true}
//       skewAmount={4}
//     >
//       {/* CARD 1 */}
//       <Card customClass="flex flex-col justify-between bg-gradient-to-br from-black to-[#161321] border border-gray-700 text-white shadow-2xl overflow-hidden rounded-2xl">
//         <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1b1728]">
//           <div className="flex items-center gap-2">
//             <span className="text-sm">💡</span>
//             <span className="text-base font-medium">IFBC EXPO 2025</span>
//           </div>
//           <span className="text-sm text-gray-400">&lt;/&gt;</span>
//         </div>
//         {/* GANTI INI DENGAN GAMBAR 1 */}
//         <div className="flex flex-col justify-center items-center flex-grow">
//           {/* Menggunakan next/image. Sesuaikan width dan height sesuai kebutuhan desain kartu Anda */}
//           {/* Perhatikan bahwa src dimulai dari /assets sesuai dengan folder public Anda */}
//           <Image src="/assets/images/experience/IFBC.jpg" alt="Image 1" width={400} height={250} className="object-cover w-full h-full rounded-b-2xl" />
//         </div>
//       </Card>

//       {/* CARD 2 */}
//       <Card customClass="flex flex-col justify-between bg-gradient-to-br from-black to-[#161321] border border-gray-700 text-white shadow-2xl overflow-hidden rounded-2xl">
//         <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1b1728]">
//           <div className="flex items-center gap-2">
//             <span className="text-sm">⚙️</span>
//             <span className="text-base font-medium">STUDI BANDING</span>
//           </div>
//           <span className="text-sm text-gray-400">🧩</span>
//         </div>
//         {/* GANTI INI DENGAN GAMBAR 2 */}
//         <div className="flex flex-col justify-center items-center flex-grow">
//           <Image src="/assets/images/experience/Stuban.jpg" alt="Image 2" width={400} height={250} className="object-cover w-full h-full rounded-b-2xl" />
//         </div>
//       </Card>

//       {/* CARD 3 */}
//       <Card customClass="flex flex-col justify-between bg-gradient-to-br from-black to-[#161321] border border-gray-700 text-white shadow-2xl overflow-hidden rounded-2xl">
//         <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700 bg-[#1b1728]">
//           <div className="flex items-center gap-2">
//             <span className="text-sm">💨</span>
//             <span className="text-base font-medium">WELCOME PARTY</span>
//           </div>
//           <span className="text-sm text-gray-400">●</span>
//         </div>
//         {/* GANTI INI DENGAN GAMBAR 3 */}
//         <div className="flex flex-col justify-center items-center flex-grow">
//           <Image src="/assets/images/experience/WP.jpg" alt="Image 3" width={400} height={250} className="object-cover w-full h-full rounded-b-2xl" />
//         </div>
//       </Card>
//     </CardSwap>
//   </div>
// </div>
// </section>

// {/* === FEATURED PROJECT SECTION === */}
// <section id="projects" className="reveal">
//   <div className="container">
//     <h2 className="title reveal">Featured Project</h2>
//     <p className="lead reveal">
//       Here are some of the projects I’ve worked on, showcasing my ability to deliver innovative and effective solutions in technology and event management. Let’s take your project to the next level!
//     </p>

//     <div className="filters reveal" id="filters">
//       <button className="chip active" data-filter="all">
//         All
//       </button>
//       <button className="chip" data-filter="uiux">
//         UI/UX
//       </button>
//       <button className="chip" data-filter="web">
//         Web Design
//       </button>
//       <button className="chip" data-filter="app">
//         App Design
//       </button>
//     </div>

//     <div className="grid-3" id="projectGrid">
//        {/* --- KARTU PROYEK 1 --- */}
//       <article className="card reveal" data-cat="web">
//         <div className="thumb">
//           <Image
//             src="/assets/images/projects/class.png" // Ganti dengan path gambar Anda
//             alt="AirCalling Landing Page Design"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div className="card-body">
//           <div className="tag">Web Design</div>
//           <h4>Website Job search</h4>
//         </div>
//       </article>

//       {/* --- KARTU PROYEK 2 --- */}
//       <article className="card reveal" data-cat="web uiux">
//         <div className="thumb">
//           <Image
//             src="/assets/images/projects/order.png" // Ganti dengan path gambar Anda
//             alt="Business Landing Page Design"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div className="card-body">
//           <div className="tag">UI/UX, Web Design</div>
//           <h4>Website Food delivery</h4>
//         </div>
//       </article>

//       {/* --- KARTU PROYEK 3 --- */}
//       <article className="card reveal" data-cat="app">
//         <div className="thumb">
//           <Image
//             src="/assets/images/projects/mobile.png" // Ganti dengan path gambar Anda
//             alt="Ecom Web Page Design"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         <div className="card-body">
//           <div className="tag">App Design</div>
//           <h4>Application MR.Bin</h4>
//         </div>
//       </article>
//     </div>

//     <div className="cta-banner reveal" role="region" aria-label="Project CTA">
//   <div>
//     <h3 style={{ margin: "0 0 4px" }}>Have any project in mind?</h3>
//     <div style={{ color: "var(--muted)" }}>I'm available for freelancing</div>
//   </div>
//   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

//     <a
//       href="https://github.com/aleronmaulanaa"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="btn"
//       style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
//     >
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z"/>
//       </svg>
//       <span>More Projects</span>
//     </a>

//     {/* --- PERUBAHAN ADA DI SINI --- */}
//     <a href="mailto:aleronmaulanafirjatullah@gmail.com" className="btn btn-primary">
//       📧 Email Me
//     </a>

//   </div>
// </div>
//   </div>
// </section>

//       {/* === TESTIMONIALS SECTION === */}
// <section id="testimonials" className="reveal">
//   <div className="container">
//     <h2 className="title reveal">
// Reflection</h2>
//     <p className="lead reveal">
// Reflecting on my journey as a 5th-semester student at Universitas Airlangga, I’ve realized how much I've grown in both technical and soft skills. The challenge of balancing the demands of my studies in Informatics Engineering with my passion for UI/UX Design and Web Development has not always been easy, but it’s shaped me into a more resilient and adaptable person.

// My involvement in various student organizations and committees has taught me how to work collaboratively, communicate effectively, and lead projects with purpose. Whether it's designing interfaces, developing web applications, or managing events, I’ve learned to navigate obstacles with a solution-oriented mindset, pushing myself to always improve.

// While I’m proud of the progress I've made, I know there’s still much to learn and refine. Each project, each challenge, is an opportunity to keep growing, and I’m excited for the next steps in my academic and professional journey.
//     </p>

//     {/* <div
//       className="slider reveal"
//       id="slider"
//       aria-roledescription="carousel"
//     >
//       <div className="slides" id="slides">
//         <div className="slide reveal">
//           <div className="avatar" aria-hidden="true"></div>
//           <div>
//             <p className="quote">
//               Lorem ipsum dolor sit amet consectetur. In enim cursus odio
//               accumsan. Id leo urna velit neque mattis.
//             </p>
//             <div className="name">Name</div>
//             <div className="role">CEO</div>
//           </div>
//         </div>

//         <div className="slide reveal">
//           <div className="avatar"></div>
//           <div>
//             <p className="quote">
//               Augue dictum dolor elementum convallis dignissim malesuada
//               commodo ultrices.
//             </p>
//             <div className="name">Jane Doe</div>
//             <div className="role">Founder</div>
//           </div>
//         </div>

//         <div className="slide reveal">
//           <div className="avatar"></div>
//           <div>
//             <p className="quote">
//               Sit pretium gravida volutpat magna eget tincidunt. Vitae
//               nibh viverra aenean.
//             </p>
//             <div className="name">John Smith</div>
//             <div className="role">CTO</div>
//           </div>
//         </div>
//       </div>
//     </div> */}

//     <div className="dots reveal" id="dots" aria-label="Slider pagination"></div>
//   </div>
// </section>

// {/* === TOOLS AND SKILLS SECTION === */}
// <section
//   id="tools"
//   className="py-20 bg-[var(--section-bg)] text-white reveal"
// >
//   <div className="container mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-10 reveal">
//       Tools and Skills
//     </h2>

//     <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
//       <LogoLoop
//         logos={techLogos}
//         speed={120}
//         direction="left"
//         logoHeight={48}
//         gap={40}
//         pauseOnHover
//         scaleOnHover
//         fadeOut
//         fadeOutColor="#1f1f1f"
//         ariaLabel="Technology partners"
//       />
//     </div>
//   </div>
// </section>

// {/* === FOOTER === */}
// <footer className="reveal">
//   <div className="container">
//     <div className="foot-brand reveal">AleronMaulana</div>

//     <nav className="foot-menu reveal" aria-label="Footer">
//             <a href="#home">Home</a>
//             <a href="#about">About Me</a>
//             <a href="#snippets">Experience</a>
//             <a href="#projects">Featured Project</a>
//             <a href="#testimonials">
// Reflection</a>
//             <a href="#tools">Tools and Skills</a>
//     </nav>

//     <div className="foot-social reveal">
//       <a className="socials a" href="https://www.instagram.com/aleronmaulanaaa/" aria-label="Instagram">
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4d4d4">
//     <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
//   </svg>
// </a>

//       <a className="socials a" href="https://github.com/aleronmaulanaa" aria-label="GitHub">
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4d4d4">
//     <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z"/>
//   </svg>
// </a>

//       <a className="socials a" href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374" aria-label="LinkedIn">
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4d4d4">
//           <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
//         </svg>
//       </a>
//     </div>

//     <div className="copy reveal">
//       © 2025{" "}
//       <span style={{ color: "var(--accent)", fontWeight: 700 }}>Portofolio</span>{" "}
//       Aleron Maulana Firjatullah.
//     </div>
//   </div>
// </footer>

// </main>
// );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import "../public/css/style.css";
import Lanyard from "./components/Lanyard/Lanyard";
import CardSwap, { Card } from "./components/CardSwap/CardSwap";
import LogoLoop from "./components/LogoLoop/LogoLoop";
// Import Icon Teknologi
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiGo,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiLaravel,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiPhp,
  SiNodedotjs,
  SiWordpress,
  SiMysql,
  SiSqlite,
  SiPostman,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiCanva,
  SiKaggle,
  SiNativescript,
  SiDart,
} from "react-icons/si";
// Import Icon UI
import { FiSun, FiMoon } from "react-icons/fi";

export default function Home() {
  // --- LOGIC DARK MODE ---
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  // --- LOGIC BAHASA (LANGUAGE) ---
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "id" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // --- LOGIC FILTER PROJECT (BARU DITAMBAHKAN) ---
  const [activeFilter, setActiveFilter] = useState("all");

  // --- KAMUS KONTEN ---
  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About Me",
        exp: "Experience",
        proj: "Featured Project",
        ref: "Reflection",
        tools: "Tools",
      },
      hero: {
        tagline: "Mobile Developer & UI/UX Designer",
        hello: "Hi, I'm",
        desc: "An Informatics Engineering student passionate about crafting digital experiences. Currently building mobile apps with Flutter as an Intern at PT Multi Fabrindo and exploring modern web tech with Next.js.",
        cv: "Download Resume",
        more: "View Projects",
        status: "🚀 Currently Intern at PT Multi Fabrindo",
      },
      about: {
        title: "About Me",
        desc: "I am a student in the D4 Informatics Engineering program at Universitas Airlangga, with a strong passion for technology, particularly in the fields of UI/UX Design and Web Development. In addition to having experience in designing user interfaces and developing web-based applications, I am also actively involved in various organizations and committees. I am accustomed to working both independently and in teams, possess strong communication skills, and am always solution-oriented.",
      },
      exp: {
        title: "EXPERIENCE",
        desc: "I have extensive experience in mobile & web development internships, as well as event management and organizations. Accustomed to leading and coordinating with various parties.",
        card1: {
          title: "PT MULTI FABRINDO",
          role: "Mobile Dev & UI/UX Intern",
          icon: "💼",
        },
        card2: {
          title: "HIMTI UNAIR",
          role: "Staff Internal & Event Coord",
          icon: "🔥",
        },
        card3: {
          title: "GOOGLE DEVFEST 2025",
          role: "Volunteer Logistics",
          icon: "🤝",
        },
      },
      proj: {
        title: "Featured Project",
        desc: "Here are some of the real-world projects I’ve worked on, showcasing my ability to deliver innovative and effective solutions in Fullstack, Mobile, and Backend development.",
        filters: {
          all: "All",
          uiux: "UI/UX",
          web: "Web Dev",
          app: "Mobile App",
          backend: "Backend",
        },
        // Data Text Card diambil lewat Key
        card1: {
          cat: "Web Design & Dev",
          title: "Privat Skill UP - Learning Platform",
        },
        card2: {
          cat: "Mobile App (Flutter)",
          title: "MovieHunt - Cinema App",
        },
        card3: {
          cat: "Backend System (Golang)",
          title: "Student Achievement Reporting",
        },
        card4: {
          cat: "UI/UX Design",
          title: "Smile Multifab - App Redesign", 
        },
        cta: {
          title: "Have any project in mind?",
          avail: "I'm available for freelancing",
          more: "More Projects",
          email: "Email Me",
        },
      },
      ref: {
        title: "Reflection",
        p1: "Reflecting on my journey as a 5th-semester student at Universitas Airlangga, I’ve realized how much I've grown in both technical and soft skills. The challenge of balancing the demands of my studies in Informatics Engineering with my passion for UI/UX Design and Web Development has not always been easy, but it’s shaped me into a more resilient and adaptable person.",
        p2: "My involvement in various student organizations and committees has taught me how to work collaboratively, communicate effectively, and lead projects with purpose. Whether it's designing interfaces, developing web applications, or managing events, I’ve learned to navigate obstacles with a solution-oriented mindset.",
      },
      tools: {
        title: "Tools and Skills",
      },
    },
    id: {
      nav: {
        home: "Beranda",
        about: "Tentang Saya",
        exp: "Pengalaman",
        proj: "Proyek",
        ref: "Refleksi",
        tools: "Tools",
      },
      hero: {
        tagline: "Mobile Developer & UI/UX Designer",
        hello: "Halo, Saya",
        desc: "Mahasiswa Teknik Informatika yang fokus menciptakan solusi digital. Saat ini aktif mengembangkan aplikasi mobile dengan Flutter sebagai Intern di PT Multi Fabrindo dan mengeksplorasi teknologi web modern.",
        cv: "Unduh CV",
        more: "Lihat Proyek",
        status: "🚀 Sedang Magang di PT Multi Fabrindo",
      },
      about: {
        title: "Tentang Saya",
        desc: "Saya adalah mahasiswa program studi D4 Teknik Informatika di Universitas Airlangga, dengan semangat tinggi terhadap teknologi, khususnya di bidang UI/UX Design dan Web Development. Selain berpengalaman dalam merancang antarmuka pengguna dan mengembangkan aplikasi berbasis web, saya juga aktif terlibat dalam berbagai organisasi dan kepanitiaan. Saya terbiasa bekerja baik secara mandiri maupun dalam tim, memiliki kemampuan komunikasi yang baik, dan selalu berorientasi pada solusi.",
      },
      exp: {
        title: "PENGALAMAN",
        desc: "Saya memiliki pengalaman luas dalam magang pengembangan aplikasi mobile & web, serta manajemen acara dan organisasi. Terbiasa memimpin dan berkoordinasi dengan berbagai pihak.",
        card1: {
          title: "PT MULTI FABRINDO",
          role: "Intern Mobile Dev & UI/UX",
          icon: "💼",
        },
        card2: {
          title: "HIMTI UNAIR",
          role: "Staf Internal & Koord Acara",
          icon: "🔥",
        },
        card3: {
          title: "GOOGLE DEVFEST 2025",
          role: "Volunteer Logistik",
          icon: "🤝",
        },
      },
      proj: {
        title: "Proyek Unggulan",
        desc: "Berikut adalah beberapa proyek nyata yang pernah saya kerjakan, menunjukkan kemampuan saya dalam memberikan solusi inovatif di bidang Fullstack, Mobile, dan Backend development.",
        filters: {
          all: "Semua",
          uiux: "UI/UX",
          web: "Web Dev",
          app: "Aplikasi Mobile",
          backend: "Backend",
        },
        card1: {
          cat: "Desain & Web Dev",
          title: "Privat Skill UP - Platform Belajar",
        },
        card2: {
          cat: "Aplikasi Mobile (Flutter)",
          title: "MovieHunt - Aplikasi Bioskop",
        },
        card3: {
          cat: "Sistem Backend (Golang)",
          title: "Sistem Pelaporan Prestasi",
        },
        card4: {
          cat: "Desain UI/UX",
          title: "Smile Multifab - Desain Aplikasi", 
        },
        cta: {
          title: "Punya ide proyek?",
          avail: "Saya tersedia untuk freelance",
          more: "Lihat Proyek Lain",
          email: "Email Saya",
        },
      },
      ref: {
        title: "Refleksi Diri",
        p1: "Merefleksikan perjalanan saya sebagai mahasiswa semester 5 di Universitas Airlangga, saya menyadari betapa saya telah berkembang baik dalam keterampilan teknis maupun soft skill. Tantangan menyeimbangkan tuntutan studi di Teknik Informatika dengan minat saya pada UI/UX Design dan Web Development tidak selalu mudah, tetapi hal itu membentuk saya menjadi pribadi yang lebih tangguh dan mudah beradaptasi.",
        p2: "Keterlibatan saya dalam berbagai organisasi mahasiswa dan kepanitiaan telah mengajarkan saya cara bekerja sama, berkomunikasi secara efektif, dan memimpin proyek dengan tujuan yang jelas. Baik itu merancang antarmuka, mengembangkan aplikasi web, atau mengelola acara, saya belajar menghadapi rintangan dengan pola pikir yang berorientasi pada solusi.",
      },
      tools: {
        title: "Tools dan Keahlian",
      },
    },
  };

  const t = content[lang];

  // --- DATA PROJECTS (Disimpan dalam Array agar bisa difilter) ---
  const projectsData = [
    {
      id: 1,
      // Kategori: 'web' dan 'uiux' (karena ada desainnya)
      categories: ["web", "uiux"],
      image: "/assets/images/projects/class.png",
      contentKey: "card1", // Referensi ke content.en.proj.card1
    },
    {
      id: 2,
      // Kategori: 'app' dan 'uiux'
      categories: ["app", "uiux"],
      image: "/assets/images/projects/mobile.png",
      contentKey: "card2",
    },
    {
      id: 3,
      // Kategori: 'backend'
      categories: ["backend"],
      image: "/assets/images/projects/order.png",
      contentKey: "card3",
    },
    {
      id: 4,
      categories: ["uiux"], // Hanya akan muncul di filter 'All' dan 'UI/UX'
      image: "/assets/images/projects/uiux-design.png", // Ganti dengan nama file gambar Anda nanti
      contentKey: "card4", 
    },
  ];

  // Logic Filtering
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(activeFilter),
        );

  // --- TECH STACK ICONS ---
  const techLogos = [
    {
      node: <SiHtml5 style={{ color: "#E34F26" }} />,
      title: "HTML5",
      href: "#",
    },
    { node: <SiCss3 style={{ color: "#1572B6" }} />, title: "CSS3", href: "#" },
    {
      node: <SiJavascript style={{ color: "#F7DF1E" }} />,
      title: "JavaScript",
      href: "#",
    },
    {
      node: <SiTypescript style={{ color: "#3178C6" }} />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiReact style={{ color: "#61DAFB" }} />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs className="text-black dark:text-white" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTailwindcss style={{ color: "#06B6D4" }} />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiBootstrap style={{ color: "#7952B3" }} />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    {
      node: <SiFlutter style={{ color: "#02569B" }} />,
      title: "Flutter",
      href: "https://flutter.dev",
    },
    {
      node: <SiDart style={{ color: "#0175C2" }} />,
      title: "Dart",
      href: "https://dart.dev",
    },
    {
      node: <SiNativescript style={{ color: "#65ADF1" }} />,
      title: "NativeScript",
      href: "https://nativescript.org",
    },
    {
      node: <SiGo style={{ color: "#00ADD8" }} />,
      title: "Golang",
      href: "https://go.dev",
    },
    {
      node: <SiLaravel style={{ color: "#FF2D20" }} />,
      title: "Laravel",
      href: "https://laravel.com",
    },
    {
      node: <SiPhp style={{ color: "#777BB4" }} />,
      title: "PHP",
      href: "https://www.php.net",
    },
    {
      node: <SiNodedotjs style={{ color: "#339933" }} />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiWordpress style={{ color: "#21759B" }} />,
      title: "WordPress",
      href: "https://wordpress.org",
    },
    {
      node: <SiPostgresql style={{ color: "#4169E1" }} />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiMysql style={{ color: "#4479A1" }} />,
      title: "MySQL",
      href: "https://www.mysql.com",
    },
    {
      node: <SiMongodb style={{ color: "#47A248" }} />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <SiSqlite style={{ color: "#003B57" }} />,
      title: "SQLite",
      href: "https://www.sqlite.org",
    },
    {
      node: <SiDocker style={{ color: "#2496ED" }} />,
      title: "Docker",
      href: "https://www.docker.com",
    },
    {
      node: <SiPostman style={{ color: "#FF6C37" }} />,
      title: "Postman",
      href: "https://www.postman.com",
    },
    {
      node: <SiSupabase style={{ color: "#3ECF8E" }} />,
      title: "Supabase",
      href: "https://supabase.com",
    },
    {
      node: <SiFirebase style={{ color: "#FFCA28" }} />,
      title: "Firebase",
      href: "https://firebase.google.com",
    },
    {
      node: <SiVercel className="text-black dark:text-white" />,
      title: "Vercel",
      href: "https://vercel.com",
    },
    {
      node: <SiFigma style={{ color: "#F24E1E" }} />,
      title: "Figma",
      href: "https://www.figma.com",
    },
    {
      node: <SiCanva style={{ color: "#00C4CC" }} />,
      title: "Canva",
      href: "https://www.canva.com",
    },
    {
      node: <SiKaggle style={{ color: "#20BEFF" }} />,
      title: "Kaggle",
      href: "https://www.kaggle.com",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[var(--bg-body)] text-[var(--text-main)] transition-colors duration-300">
      {/* === NAVBAR === */}
      <nav className="nav !fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-transparent transition-colors duration-300">
        <div className="container nav-inner flex justify-between items-center py-4">
          <div className="brand text-xl font-bold">
            Aleron<b className="text-[var(--accent)]">Maulana</b>
          </div>

          <div
            className="burger"
            id="burger"
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="menu flex items-center gap-6" id="menu">
            <a href="#home" className="hover:text-[var(--accent)]">
              {t.nav.home}
            </a>
            <a href="#about" className="hover:text-[var(--accent)]">
              {t.nav.about}
            </a>
            <a href="#snippets" className="hover:text-[var(--accent)]">
              {t.nav.exp}
            </a>
            <a href="#projects" className="hover:text-[var(--accent)]">
              {t.nav.proj}
            </a>
            <a href="#testimonials" className="hover:text-[var(--accent)]">
              {t.nav.ref}
            </a>
            <a href="#tools" className="hover:text-[var(--accent)]">
              {t.nav.tools}
            </a>

            {/* AREA TOMBOL SWITCH */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-all hover:scale-110 focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>

              <button
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white font-bold text-sm transition-all hover:scale-105 border border-transparent hover:border-[var(--accent)] hover:shadow-md group"
                aria-label="Toggle Language"
              >
                <div className="relative w-6 h-4 overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={
                      lang === "en"
                        ? "/assets/icons/ic_flag-us.svg"
                        : "/assets/icons/ic_flag-indonesia.svg"
                    }
                    alt={lang === "en" ? "UK Flag" : "Indonesia Flag"}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <span>{lang === "en" ? "EN" : "ID"}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* === SECTION: HOME === */}
      <section
        id="home"
        className="relative z-10 flex items-center justify-center min-h-[90vh] bg-[var(--section-bg)] reveal transition-colors duration-300"
      >
        <div className="container hero relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10 order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t.hero.status}
            </div>
            <div className="eyebrow text-[var(--accent)] font-semibold mb-2 text-lg">
              {t.hero.hello}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-tight">
              Aleron <br className="hidden md:block" />
              <span className="text-[var(--accent)]">Maulana F.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-6">
              {t.hero.tagline}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              {t.hero.desc}
            </p>
            <div className="actions flex gap-4 justify-center md:justify-start">
              <a
                className="btn btn-primary px-8 py-3 rounded-full bg-[var(--accent)] text-white hover:brightness-110 transition shadow-lg shadow-[var(--accent)]/20"
                href="/assets/CV_Aleron Maulana Firjatullah.pdf"
                download
              >
                {t.hero.cv}
              </a>
              <a
                className="btn btn-ghost px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                href="#projects"
              >
                {t.hero.more}
              </a>
            </div>
            <div
              className="socials flex gap-4 mt-8 justify-center md:justify-start"
              aria-label="Sosial"
            >
              <a
                href="https://www.instagram.com/aleronmaulanaaa/"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </a>
              <a
                href="https://github.com/aleronmaulanaa"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
              </a>
              <a
                href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative z-0 order-1 md:order-2 flex justify-center items-center h-full min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent rounded-full blur-3xl opacity-50 scale-75"></div>
            <div className="relative w-full h-full flex justify-center items-center">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: ABOUT === */}
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center justify-between bg-[var(--bg-body)] text-[var(--text-main)] px-8 md:px-24 py-16 md:py-20 overflow-hidden reveal"
      >
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:translate-x-6">
          <div className="w-full aspect-video max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
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
        <div className="md:w-1/2 text-center md:text-left space-y-6 md:-translate-x-8">
          <h2 className="text-4xl md:text-5xl font-bold">{t.about.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {t.about.desc}
          </p>
        </div>
      </section>

      {/* === SECTION: EXPERIENCE === */}
      <section
        id="snippets"
        className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[var(--section-bg)] text-[var(--text-main)] px-8 md:px-32 py-10 md:py-12 overflow-hidden reveal transition-colors duration-300"
      >
        <div className="md:w-1/2 space-y-4 text-center md:text-left z-10 flex flex-col justify-center h-full pl-0 md:pl-38 reveal">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.exp.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t.exp.desc}
          </p>
        </div>
        <div className="md:w-1/2 relative flex justify-center items-center reveal mt-10 md:mt-0">
          <div className="translate-x-0 md:translate-x-50 md:translate-y-50">
            <CardSwap
              width={520}
              height={340}
              cardDistance={70}
              verticalDistance={80}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
            >
              <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{t.exp.card1.icon}</span>
                    <span className="text-base font-medium">
                      {t.exp.card1.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">2026</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {t.exp.card1.role}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Flutter, UI/UX, & Real-time Database Integration.
                  </p>
                </div>
              </Card>
              <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{t.exp.card2.icon}</span>
                    <span className="text-base font-medium">
                      {t.exp.card2.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">2024-2025</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {t.exp.card2.role}
                  </h3>
                  <Image
                    src="/assets/images/experience/WP.jpg"
                    alt="Experience 2"
                    width={400}
                    height={180}
                    className="object-cover w-full h-32 rounded-lg mt-2"
                  />
                </div>
              </Card>
              <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{t.exp.card3.icon}</span>
                    <span className="text-base font-medium">
                      {t.exp.card3.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">2025</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {t.exp.card3.role}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Logistics & Event Management.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      {/* === FEATURED PROJECT SECTION (UPDATED & INTERACTIVE) === */}
      <section
        id="projects"
        className="reveal py-20 bg-[var(--bg-body)] text-[var(--text-main)] transition-colors"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">{t.proj.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            {t.proj.desc}
          </p>

          {/* Filter Buttons */}
          <div
            className="filters reveal flex gap-4 mb-8 flex-wrap"
            id="filters"
          >
            {["all", "uiux", "web", "app", "backend"].map((filterKey) => (
              <button
                key={filterKey}
                onClick={() => setActiveFilter(filterKey)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filterKey
                    ? "bg-[var(--accent)] text-white shadow-lg scale-105"
                    : "border border-gray-300 dark:border-gray-700 text-[var(--text-main)] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t.proj.filters[filterKey as keyof typeof t.proj.filters]}
              </button>
            ))}
          </div>

          {/* Project Grid (Dynamic Rendering) */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            id="projectGrid"
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={
                      t.proj[project.contentKey as keyof typeof t.proj].title
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
                    {t.proj[project.contentKey as keyof typeof t.proj].cat}
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-main)]">
                    {t.proj[project.contentKey as keyof typeof t.proj].title}
                  </h4>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gray-100 dark:bg-[#161321] border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-main)]">
                {t.proj.cta.title}
              </h3>
              <div className="text-gray-500 dark:text-gray-400">
                {t.proj.cta.avail}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/aleronmaulanaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-current text-[var(--text-main)] hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                <span>{t.proj.cta.more}</span>
              </a>
              <a
                href="mailto:aleronmaulanafirjatullah@gmail.com"
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
              >
                📧 {t.proj.cta.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS (REFLECTION) === */}
      <section
        id="testimonials"
        className="reveal py-20 bg-[var(--section-bg)] text-[var(--text-main)] transition-colors"
      >
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">{t.ref.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
            {t.ref.p1}
            <br />
            <br />
            {t.ref.p2}
          </p>
        </div>
      </section>

      {/* === TOOLS AND SKILLS SECTION === */}
      <section
        id="tools"
        className="py-20 bg-[var(--bg-body)] text-[var(--text-main)] reveal transition-colors"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            {t.tools.title}
          </h2>
          <div
            style={{
              height: "150px",
              position: "relative",
              overflow: "hidden",
              maskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={50}
              gap={60}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={false}
              ariaLabel="Technology Skills"
            />
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-10 bg-[var(--section-bg)] text-[var(--text-main)] border-t border-gray-200 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="text-2xl font-bold">AleronMaulana</div>
          <nav
            className="flex flex-wrap justify-center gap-6 text-sm font-medium"
            aria-label="Footer"
          >
            <a href="#home" className="hover:text-[var(--accent)]">
              {t.nav.home}
            </a>
            <a href="#about" className="hover:text-[var(--accent)]">
              {t.nav.about}
            </a>
            <a href="#snippets" className="hover:text-[var(--accent)]">
              {t.nav.exp}
            </a>
            <a href="#projects" className="hover:text-[var(--accent)]">
              {t.nav.proj}
            </a>
            <a href="#testimonials" className="hover:text-[var(--accent)]">
              {t.nav.ref}
            </a>
            <a href="#tools" className="hover:text-[var(--accent)]">
              {t.nav.tools}
            </a>
          </nav>
          <a
            href="/assets/Portofolio_Aleron Maulana Firjatullah.pdf"
            download
            className="flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:brightness-110 transition-all mb-2"
            aria-label="Download Portfolio PDF"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {lang === "en"
              ? "Download Portfolio Deck (PDF)"
              : "Unduh Dokumen Portofolio (PDF)"}
          </a>
          <div className="flex gap-6">
            <a
              className="hover:scale-110 transition"
              href="https://www.instagram.com/aleronmaulanaaa/"
              aria-label="Instagram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-gray-500 dark:fill-gray-400 hover:fill-[var(--accent)]"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            </a>
            <a
              className="hover:scale-110 transition"
              href="https://github.com/aleronmaulanaa"
              aria-label="GitHub"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-gray-500 dark:fill-gray-400 hover:fill-[var(--accent)]"
              >
                <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
              </svg>
            </a>
            <a
              className="hover:scale-110 transition"
              href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374"
              aria-label="LinkedIn"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-gray-500 dark:fill-gray-400 hover:fill-[var(--accent)]"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
              </svg>
            </a>
          </div>
          <div className="text-gray-500 text-sm text-center">
            <span className="text-[var(--accent)] font-bold">Portofolio</span>{" "}
            Aleron Maulana Firjatullah.
          </div>
        </div>
      </footer>
    </main>
  );
}
