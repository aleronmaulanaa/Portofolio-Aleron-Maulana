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

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
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
// // Import Icon untuk Dark Mode
// import { FiSun, FiMoon } from "react-icons/fi";

// export default function Home() {
//   // --- LOGIC DARK MODE ---
//   const [theme, setTheme] = useState("dark"); // Default gelap

//   useEffect(() => {
//     // Cek local storage saat load pertama kali
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       if (savedTheme === "dark") {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     } else {
//       // Jika belum ada settingan, set default dark
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === "dark") {
//       setTheme("light");
//       localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     } else {
//       setTheme("dark");
//       localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     }
//   };
//   // -----------------------

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
//     <main className="relative overflow-hidden bg-[var(--bg-body)] text-[var(--text-main)] transition-colors duration-300">
//       {/* === NAVBAR === */}
//       <nav className="nav !fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-transparent transition-colors duration-300">
//         <div className="container nav-inner flex justify-between items-center py-4">
//           <div className="brand text-xl font-bold">
//             Aleron<b className="text-[var(--accent)]">Maulana</b>
//           </div>

//           <div
//             className="burger"
//             id="burger"
//             aria-label="Toggle menu"
//             role="button"
//             tabIndex={0}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//           <div className="menu flex items-center gap-6" id="menu">
//             <a href="#home" className="hover:text-[var(--accent)]">
//               Home
//             </a>
//             <a href="#about" className="hover:text-[var(--accent)]">
//               About Me
//             </a>
//             <a href="#snippets" className="hover:text-[var(--accent)]">
//               Experience
//             </a>
//             <a href="#projects" className="hover:text-[var(--accent)]">
//               Featured Project
//             </a>
//             <a href="#testimonials" className="hover:text-[var(--accent)]">
//               Reflection
//             </a>
//             <a href="#tools" className="hover:text-[var(--accent)]">
//               Tools
//             </a>

//             {/* TOMBOL SWITCH TEMA DISINI */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-all hover:scale-110 focus:outline-none ml-4"
//               aria-label="Toggle Dark Mode"
//             >
//               {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* === SECTION: HOME === */}
//       <section
//         id="home"
//         className="relative z-10 flex items-center justify-center min-h-[85vh] bg-[var(--section-bg)] reveal transition-colors duration-300"
//       >
//         <div className="container hero relative">
//           {/* LEFT TEXT */}
//           <div className="z-10 max-w-2xl">
//             <div className="eyebrow text-[var(--accent)] font-semibold mb-2">
//               Hello everyone
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold mb-4">
//               Aleron{" "}
//               <span className="text-[var(--accent)]">Maulana Firjatullah</span>
//             </h1>

//             <div
//               style={{
//                 height: "4px",
//                 width: "90px",
//                 background: "var(--accent)", // Gunakan warna accent agar lebih pop
//                 margin: "12px 0 24px",
//                 borderRadius: "2px",
//               }}
//             ></div>

//             <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
//               I am a 5th-semester student in the D4 Informatics Engineering
//               program at Universitas Airlangga, with a strong interest in
//               technology, particularly in UI/UX Design and Web Development. I
//               have experience in creating user interface designs, developing
//               web-based applications, and actively participating in student
//               organizations and committees.
//             </p>

//             <div className="actions flex gap-4">
//               <a
//                 className="btn btn-primary px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
//                 href="/assets/CV_Aleron Maulana F_EN.pdf"
//                 download
//               >
//                 ⬇ Download CV
//               </a>
//               <a
//                 className="btn btn-ghost px-6 py-3 border border-current rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//                 href="#snippets"
//               >
//                 More
//               </a>
//             </div>

//             <div className="socials flex gap-4 mt-8" aria-label="Sosial">
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/aleronmaulanaaa/"
//                 className="hover:scale-110 transition"
//                 aria-label="Instagram"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-gray-600 dark:fill-gray-300"
//                 >
//                   <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
//                 </svg>
//               </a>
//               {/* GitHub */}
//               <a
//                 href="https://github.com/aleronmaulanaa"
//                 className="hover:scale-110 transition"
//                 aria-label="GitHub"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-gray-600 dark:fill-gray-300"
//                 >
//                   <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
//                 </svg>
//               </a>
//               {/* LinkedIn */}
//               <a
//                 href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374"
//                 className="hover:scale-110 transition"
//                 aria-label="LinkedIn"
//               >
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-gray-600 dark:fill-gray-300"
//                 >
//                   <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* RIGHT VISUAL (Portrait + Lanyard) */}
//           <div className="absolute inset-0 flex justify-end items-center z-0 pointer-events-none opacity-20 md:opacity-100">
//             <div className="relative w-1/2 h-full flex justify-center items-center">
//               {/* Lanyard - Tetap dirender */}
//               <div className="relative top-0 right-0 w-180 z-20">
//                 <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === SECTION: ABOUT === */}
//       <section
//         id="about"
//         className="relative flex flex-col md:flex-row items-center justify-between bg-[var(--bg-body)] text-[var(--text-main)] px-8 md:px-24 py-16 md:py-20 overflow-hidden reveal"
//       >
//         {/* LEFT: YouTube Embed */}
//         <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:translate-x-6">
//           <div className="w-full aspect-video max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
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
//           <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//             I am a student in the D4 Informatics Engineering program at
//             Universitas Airlangga, with a strong passion for technology,
//             particularly in the fields of UI/UX Design and Web Development. In
//             addition to having experience in designing user interfaces and
//             developing web-based applications, I am also actively involved in
//             various organizations and committees. I am accustomed to working
//             both independently and in teams, possess strong communication
//             skills, and am always solution-oriented.
//           </p>
//         </div>
//       </section>

//       {/* === CODE SNIPPET SECTION (EXPERIENCE) === */}
//       <section
//         id="snippets"
//         className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[var(--section-bg)] text-[var(--text-main)] px-8 md:px-32 py-10 md:py-12 overflow-hidden reveal transition-colors duration-300"
//       >
//         {/* LEFT TEXT CONTENT */}
//         <div className="md:w-1/2 space-y-4 text-center md:text-left z-10 flex flex-col justify-center h-full pl-0 md:pl-38 reveal">
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             EXPERIENCE
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             I have extensive experience in event management, public relations,
//             and organization. Accustomed to leading and coordinating with
//             various parties, I possess expertise in public communication.
//           </p>
//         </div>

//         {/* RIGHT CARD STACK */}
//         <div className="md:w-1/2 relative flex justify-center items-center reveal mt-10 md:mt-0">
//           <div className="translate-x-0 md:translate-x-50 md:translate-y-50">
//             <CardSwap
//               width={520}
//               height={340}
//               cardDistance={70}
//               verticalDistance={80}
//               delay={4000}
//               pauseOnHover={true}
//               skewAmount={4}
//             >
//               {/* CARD 1 */}
//               <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
//                 <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm">💡</span>
//                     <span className="text-base font-medium">
//                       IFBC EXPO 2025
//                     </span>
//                   </div>
//                   <span className="text-sm text-gray-400">&lt;/&gt;</span>
//                 </div>
//                 <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black">
//                   <Image
//                     src="/assets/images/experience/IFBC.jpg"
//                     alt="Experience 1"
//                     width={400}
//                     height={250}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </Card>

//               {/* CARD 2 */}
//               <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
//                 <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm">⚙️</span>
//                     <span className="text-base font-medium">STUDI BANDING</span>
//                   </div>
//                   <span className="text-sm text-gray-400">🧩</span>
//                 </div>
//                 <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black">
//                   <Image
//                     src="/assets/images/experience/Stuban.jpg"
//                     alt="Experience 2"
//                     width={400}
//                     height={250}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </Card>

//               {/* CARD 3 */}
//               <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
//                 <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm">💨</span>
//                     <span className="text-base font-medium">WELCOME PARTY</span>
//                   </div>
//                   <span className="text-sm text-gray-400">●</span>
//                 </div>
//                 <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black">
//                   <Image
//                     src="/assets/images/experience/WP.jpg"
//                     alt="Experience 3"
//                     width={400}
//                     height={250}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//               </Card>
//             </CardSwap>
//           </div>
//         </div>
//       </section>

//       {/* === FEATURED PROJECT SECTION === */}
//       <section
//         id="projects"
//         className="reveal py-20 bg-[var(--bg-body)] text-[var(--text-main)] transition-colors"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-4">Featured Project</h2>
//           <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
//             Here are some of the projects I’ve worked on, showcasing my ability
//             to deliver innovative and effective solutions in technology and
//             event management.
//           </p>

//           <div className="filters reveal flex gap-4 mb-8" id="filters">
//             <button
//               className="px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium"
//               data-filter="all"
//             >
//               All
//             </button>
//             <button
//               className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-[var(--text-main)] hover:bg-gray-100 dark:hover:bg-gray-800"
//               data-filter="uiux"
//             >
//               UI/UX
//             </button>
//             <button
//               className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-[var(--text-main)] hover:bg-gray-100 dark:hover:bg-gray-800"
//               data-filter="web"
//             >
//               Web Design
//             </button>
//           </div>

//           <div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             id="projectGrid"
//           >
//             {/* --- KARTU PROYEK 1 --- */}
//             <article
//               className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all"
//               data-cat="web"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/assets/images/projects/class.png"
//                   alt="Web Design"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
//                   Web Design
//                 </div>
//                 <h4 className="text-xl font-bold text-[var(--text-main)]">
//                   Website Job Search
//                 </h4>
//               </div>
//             </article>

//             {/* --- KARTU PROYEK 2 --- */}
//             <article
//               className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all"
//               data-cat="web uiux"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/assets/images/projects/order.png"
//                   alt="Business Landing Page"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
//                   UI/UX, Web Design
//                 </div>
//                 <h4 className="text-xl font-bold text-[var(--text-main)]">
//                   Website Food Delivery
//                 </h4>
//               </div>
//             </article>

//             {/* --- KARTU PROYEK 3 --- */}
//             <article
//               className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all"
//               data-cat="app"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/assets/images/projects/mobile.png"
//                   alt="App Design"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
//                   App Design
//                 </div>
//                 <h4 className="text-xl font-bold text-[var(--text-main)]">
//                   Application MR.Bin
//                 </h4>
//               </div>
//             </article>
//           </div>

//           {/* CTA Banner */}
//           <div className="mt-16 p-8 rounded-2xl bg-gray-100 dark:bg-[#161321] border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
//             <div>
//               <h3 className="text-2xl font-bold text-[var(--text-main)]">
//                 Have any project in mind?
//               </h3>
//               <div className="text-gray-500 dark:text-gray-400">
//                 I'm available for freelancing
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <a
//                 href="https://github.com/aleronmaulanaa"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-6 py-3 rounded-full border border-current text-[var(--text-main)] hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//               >
//                 <span>More Projects</span>
//               </a>
//               <a
//                 href="mailto:aleronmaulanafirjatullah@gmail.com"
//                 className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
//               >
//                 📧 Email Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === TESTIMONIALS (REFLECTION) SECTION === */}
//       <section
//         id="testimonials"
//         className="reveal py-20 bg-[var(--section-bg)] text-[var(--text-main)] transition-colors"
//       >
//         <div className="container mx-auto px-4 text-center md:text-left">
//           <h2 className="text-4xl font-bold mb-6">Reflection</h2>
//           <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
//             Reflecting on my journey as a 5th-semester student at Universitas
//             Airlangga, I’ve realized how much I've grown in both technical and
//             soft skills. The challenge of balancing the demands of my studies in
//             Informatics Engineering with my passion for UI/UX Design and Web
//             Development has not always been easy, but it’s shaped me into a more
//             resilient and adaptable person.
//             <br />
//             <br />
//             My involvement in various student organizations and committees has
//             taught me how to work collaboratively, communicate effectively, and
//             lead projects with purpose. Whether it's designing interfaces,
//             developing web applications, or managing events, I’ve learned to
//             navigate obstacles with a solution-oriented mindset.
//           </p>
//         </div>
//       </section>

//       {/* === TOOLS AND SKILLS SECTION === */}
//       <section
//         id="tools"
//         className="py-20 bg-[var(--bg-body)] text-[var(--text-main)] reveal transition-colors"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-10">
//             Tools and Skills
//           </h2>

//           <div
//             style={{
//               height: "200px",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <LogoLoop
//               logos={techLogos}
//               speed={120}
//               direction="left"
//               logoHeight={48}
//               gap={40}
//               pauseOnHover
//               scaleOnHover
//               fadeOut
//               fadeOutColor="var(--bg-body)" // Menggunakan variable agar fade outnya nyatu dengan background
//               ariaLabel="Technology partners"
//             />
//           </div>
//         </div>
//       </section>

//       {/* === FOOTER === */}
//       <footer className="py-10 bg-[var(--section-bg)] text-[var(--text-main)] border-t border-gray-200 dark:border-gray-800 transition-colors">
//         <div className="container mx-auto px-4 flex flex-col items-center gap-6">
//           <div className="text-2xl font-bold">AleronMaulana</div>

//           <nav
//             className="flex flex-wrap justify-center gap-6 text-sm font-medium"
//             aria-label="Footer"
//           >
//             <a href="#home" className="hover:text-[var(--accent)]">
//               Home
//             </a>
//             <a href="#about" className="hover:text-[var(--accent)]">
//               About Me
//             </a>
//             <a href="#snippets" className="hover:text-[var(--accent)]">
//               Experience
//             </a>
//             <a href="#projects" className="hover:text-[var(--accent)]">
//               Featured Project
//             </a>
//             <a href="#testimonials" className="hover:text-[var(--accent)]">
//               Reflection
//             </a>
//             <a href="#tools" className="hover:text-[var(--accent)]">
//               Tools and Skills
//             </a>
//           </nav>

//           <div className="flex gap-6">
//             <a
//               className="hover:scale-110 transition"
//               href="https://www.instagram.com/aleronmaulanaaa/"
//               aria-label="Instagram"
//             >
//               <svg
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 className="fill-gray-500 dark:fill-gray-400 hover:fill-[var(--accent)]"
//               >
//                 <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
//               </svg>
//             </a>
//             <a
//               className="hover:scale-110 transition"
//               href="https://github.com/aleronmaulanaa"
//               aria-label="GitHub"
//             >
//               <svg
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 className="fill-gray-500 dark:fill-gray-400 hover:fill-[var(--accent)]"
//               >
//                 <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
//               </svg>
//             </a>
//             <a
//               className="hover:scale-110 transition"
//               href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374"
//               aria-label="LinkedIn"
//             >
//               <svg
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 className="fill-gray-500 dark:fill-gray-400 hover:fill-[var(--accent)]"
//               >
//                 <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
//               </svg>
//             </a>
//           </div>

//           <div className="text-gray-500 text-sm text-center">
//             <span className="text-[var(--accent)] font-bold">Portofolio</span>{" "}
//             Aleron Maulana Firjatullah.
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
// Import Icon untuk Dark Mode
import { FiSun, FiMoon } from "react-icons/fi";
// Import Icon untuk Bahasa (Opsional, tapi text lebih jelas)
import { MdLanguage } from "react-icons/md";

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
  const [lang, setLang] = useState("en"); // Default English

  // Simpan preferensi bahasa (Opsional)
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

  // --- KAMUS KONTEN (TRANSLATIONS) ---
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
        hello: "Hello everyone",
        desc: "I am a 5th-semester student in the D4 Informatics Engineering program at Universitas Airlangga, with a strong interest in technology, particularly in UI/UX Design and Web Development. I have experience in creating user interface designs, developing web-based applications, and actively participating in student organizations and committees.",
        cv: "Download CV",
        more: "More",
      },
      about: {
        title: "About Me",
        desc: "I am a student in the D4 Informatics Engineering program at Universitas Airlangga, with a strong passion for technology, particularly in the fields of UI/UX Design and Web Development. In addition to having experience in designing user interfaces and developing web-based applications, I am also actively involved in various organizations and committees. I am accustomed to working both independently and in teams, possess strong communication skills, and am always solution-oriented.",
      },
      exp: {
        title: "EXPERIENCE",
        desc: "I have extensive experience in event management, public relations, and organization. Accustomed to leading and coordinating with various parties, I possess expertise in public communication.",
      },
      proj: {
        title: "Featured Project",
        desc: "Here are some of the projects I’ve worked on, showcasing my ability to deliver innovative and effective solutions in technology and event management.",
        filters: { all: "All", uiux: "UI/UX", web: "Web Design" },
        card1: { cat: "Web Design", title: "Website Job Search" },
        card2: { cat: "UI/UX, Web Design", title: "Website Food Delivery" },
        card3: { cat: "App Design", title: "Application MR.Bin" },
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
        hello: "Halo semuanya",
        desc: "Saya adalah mahasiswa semester 5 program studi D4 Teknik Informatika di Universitas Airlangga, dengan minat yang kuat pada teknologi, khususnya UI/UX Design dan Web Development. Saya memiliki pengalaman dalam membuat desain antarmuka pengguna, mengembangkan aplikasi berbasis web, dan aktif berpartisipasi dalam organisasi mahasiswa serta kepanitiaan.",
        cv: "Unduh CV",
        more: "Selengkapnya",
      },
      about: {
        title: "Tentang Saya",
        desc: "Saya adalah mahasiswa program studi D4 Teknik Informatika di Universitas Airlangga, dengan semangat tinggi terhadap teknologi, khususnya di bidang UI/UX Design dan Web Development. Selain berpengalaman dalam merancang antarmuka pengguna dan mengembangkan aplikasi berbasis web, saya juga aktif terlibat dalam berbagai organisasi dan kepanitiaan. Saya terbiasa bekerja baik secara mandiri maupun dalam tim, memiliki kemampuan komunikasi yang baik, dan selalu berorientasi pada solusi.",
      },
      exp: {
        title: "PENGALAMAN",
        desc: "Saya memiliki pengalaman luas dalam manajemen acara, hubungan masyarakat, dan organisasi. Terbiasa memimpin dan berkoordinasi dengan berbagai pihak, saya memiliki keahlian dalam komunikasi publik.",
      },
      proj: {
        title: "Proyek Unggulan",
        desc: "Berikut adalah beberapa proyek yang pernah saya kerjakan, menunjukkan kemampuan saya dalam memberikan solusi inovatif dan efektif dalam teknologi dan manajemen acara.",
        filters: { all: "Semua", uiux: "UI/UX", web: "Desain Web" },
        card1: { cat: "Desain Web", title: "Website Pencari Kerja" },
        card2: {
          cat: "UI/UX, Desain Web",
          title: "Website Pesan Antar Makanan",
        },
        card3: { cat: "Desain Aplikasi", title: "Aplikasi MR.Bin" },
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

  // Helper untuk mengambil teks sesuai bahasa yang aktif
  const t = content[lang];

  // -----------------------

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

            {/* --- AREA TOMBOL SWITCH --- */}
            <div className="flex items-center gap-2 ml-4">
              {/* 1. Tombol Theme */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-all hover:scale-110 focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>

              {/* 2. Tombol Bahasa (Baru) */}
              <button
                onClick={toggleLang}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white font-bold text-sm transition-all hover:scale-110 border border-transparent hover:border-[var(--accent)]"
                aria-label="Toggle Language"
              >
                {lang === "en" ? "EN" : "ID"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* === SECTION: HOME === */}
      <section
        id="home"
        className="relative z-10 flex items-center justify-center min-h-[85vh] bg-[var(--section-bg)] reveal transition-colors duration-300"
      >
        <div className="container hero relative">
          {/* LEFT TEXT */}
          <div className="z-10 max-w-2xl">
            <div className="eyebrow text-[var(--accent)] font-semibold mb-2">
              {t.hero.hello}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Aleron{" "}
              <span className="text-[var(--accent)]">Maulana Firjatullah</span>
            </h1>

            <div
              style={{
                height: "4px",
                width: "90px",
                background: "var(--accent)",
                margin: "12px 0 24px",
                borderRadius: "2px",
              }}
            ></div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {t.hero.desc}
            </p>

            <div className="actions flex gap-4">
              <a
                className="btn btn-primary px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                href="/assets/CV_Aleron Maulana F_EN.pdf"
                download
              >
                ⬇ {t.hero.cv}
              </a>
              <a
                className="btn btn-ghost px-6 py-3 border border-current rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                href="#snippets"
              >
                {t.hero.more}
              </a>
            </div>

            <div className="socials flex gap-4 mt-8" aria-label="Sosial">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aleronmaulanaaa/"
                className="hover:scale-110 transition"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-600 dark:fill-gray-300"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/aleronmaulanaa"
                className="hover:scale-110 transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-600 dark:fill-gray-300"
                >
                  <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.7 0-.4 0-1.4 0-2.7-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1.1 0 1.7 1.2 1.7 1.2 1.1 1.8 2.9 1.3 3.6.9 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.6 0-1.2.4-2.3 1.1-3.1-.1-.3-.5-.9-.2-1.8 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5 1.1 0 2.2.2 3.2.5 2.3-1.5 3.3-1.2 3.3-1.2.3.9-.1 1.5-.2 1.8.7.8 1.1 1.9 1.1 3.1 0 4.3-2.8 5.3-5.5 5.6.4.4.8 1.2.8 2.3 0 1.6 0 2.9 0 3.3.1.5.3.7.8.7 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/aleron-maulana-firjatullah-037200374"
                className="hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-600 dark:fill-gray-300"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 5.9V23h-4v-6.3c0-1.5 0-3.5-2.2-3.5-2.2 0-2.6 1.7-2.6 3.4V23h-4V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL (Portrait + Lanyard) */}
          <div className="absolute inset-0 flex justify-end items-center z-0 pointer-events-none opacity-20 md:opacity-100">
            <div className="relative w-1/2 h-full flex justify-center items-center">
              {/* Lanyard - Tetap dirender */}
              <div className="relative top-0 right-0 w-180 z-20">
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: ABOUT === */}
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center justify-between bg-[var(--bg-body)] text-[var(--text-main)] px-8 md:px-24 py-16 md:py-20 overflow-hidden reveal"
      >
        {/* LEFT: YouTube Embed */}
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

        {/* RIGHT: Text Biografi */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 md:-translate-x-8">
          <h2 className="text-4xl md:text-5xl font-bold">{t.about.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {t.about.desc}
          </p>
        </div>
      </section>

      {/* === CODE SNIPPET SECTION (EXPERIENCE) === */}
      <section
        id="snippets"
        className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-[var(--section-bg)] text-[var(--text-main)] px-8 md:px-32 py-10 md:py-12 overflow-hidden reveal transition-colors duration-300"
      >
        {/* LEFT TEXT CONTENT */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left z-10 flex flex-col justify-center h-full pl-0 md:pl-38 reveal">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.exp.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t.exp.desc}
          </p>
        </div>

        {/* RIGHT CARD STACK */}
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
              {/* CARD 1 */}
              <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💡</span>
                    <span className="text-base font-medium">
                      IFBC EXPO 2025
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">&lt;/&gt;</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black">
                  <Image
                    src="/assets/images/experience/IFBC.jpg"
                    alt="Experience 1"
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>

              {/* CARD 2 */}
              <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">⚙️</span>
                    <span className="text-base font-medium">STUDI BANDING</span>
                  </div>
                  <span className="text-sm text-gray-400">🧩</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black">
                  <Image
                    src="/assets/images/experience/Stuban.jpg"
                    alt="Experience 2"
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>

              {/* CARD 3 */}
              <Card customClass="flex flex-col justify-between bg-white dark:bg-gradient-to-br dark:from-black dark:to-[#161321] border border-gray-200 dark:border-gray-700 text-black dark:text-white shadow-2xl overflow-hidden rounded-2xl transition-colors">
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1b1728]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💨</span>
                    <span className="text-base font-medium">WELCOME PARTY</span>
                  </div>
                  <span className="text-sm text-gray-400">●</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-black">
                  <Image
                    src="/assets/images/experience/WP.jpg"
                    alt="Experience 3"
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>

      {/* === FEATURED PROJECT SECTION === */}
      <section
        id="projects"
        className="reveal py-20 bg-[var(--bg-body)] text-[var(--text-main)] transition-colors"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">{t.proj.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            {t.proj.desc}
          </p>

          <div className="filters reveal flex gap-4 mb-8" id="filters">
            <button
              className="px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium"
              data-filter="all"
            >
              {t.proj.filters.all}
            </button>
            <button
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-[var(--text-main)] hover:bg-gray-100 dark:hover:bg-gray-800"
              data-filter="uiux"
            >
              {t.proj.filters.uiux}
            </button>
            <button
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-[var(--text-main)] hover:bg-gray-100 dark:hover:bg-gray-800"
              data-filter="web"
            >
              {t.proj.filters.web}
            </button>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            id="projectGrid"
          >
            {/* --- KARTU PROYEK 1 --- */}
            <article
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all"
              data-cat="web"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/assets/images/projects/class.png"
                  alt="Web Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
                  {t.proj.card1.cat}
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)]">
                  {t.proj.card1.title}
                </h4>
              </div>
            </article>

            {/* --- KARTU PROYEK 2 --- */}
            <article
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all"
              data-cat="web uiux"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/assets/images/projects/order.png"
                  alt="Business Landing Page"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
                  {t.proj.card2.cat}
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)]">
                  {t.proj.card2.title}
                </h4>
              </div>
            </article>

            {/* --- KARTU PROYEK 3 --- */}
            <article
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#161321] hover:shadow-xl transition-all"
              data-cat="app"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/assets/images/projects/mobile.png"
                  alt="App Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase">
                  {t.proj.card3.cat}
                </div>
                <h4 className="text-xl font-bold text-[var(--text-main)]">
                  {t.proj.card3.title}
                </h4>
              </div>
            </article>
          </div>

          {/* CTA Banner */}
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

      {/* === TESTIMONIALS (REFLECTION) SECTION === */}
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
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="var(--bg-body)"
              ariaLabel="Technology partners"
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
