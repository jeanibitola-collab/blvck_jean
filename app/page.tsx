import { projects, testimonials } from "@/data/projects";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa6";
import EnquiryForm from "@/components/EnquiryForm";
import Header from "@/components/Header";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiExpo,
} from "react-icons/si";

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "React Native",
  "Expo",
  "Firebase",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-emerald-400">Hi, I'm Olakunle Ibitola (Jean) 👋</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
          Web & mobile developer building fast, real-world apps.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-400">
          I build online stores, business websites and mobile games with React,
          Next.js and TypeScript, for real businesses in Nigeria and beyond.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500"
          >
            Hire me
          </a>
          <a
            href="/olakunle-ibitola-cv.pdf"
            download
            className="rounded-lg border border-emerald-500 px-5 py-3 font-semibold text-emerald-400 hover:bg-emerald-500/10"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-48 w-full object-contain bg-black/5"
                />
              ) : (
                <div className="mb-4 flex h-44 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 text-2xl font-bold">
                  {p.title}
                </div>
              )}
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-slate-400">{p.description}</p>
              <p className="mt-2 text-sm text-[#d0a850]">{p.result}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm font-semibold">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    className="text-emerald-400 hover:underline"
                  >
                    Live site →
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-slate-300 underline hover:text-white"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="mt-2 opacity-70">What I can build for you.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Online stores",
              text: "Shops with cart, secure Paystack payments, order tracking and an admin page to manage products.",
            },
            {
              title: "Business websites",
              text: "Fast, mobile-friendly sites for your company, with WhatsApp enquiry links and a contact page.",
            },
            {
              title: "Mobile apps and games",
              text: "Android and iOS apps built with React Native, also playable in the browser.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 opacity-80">{s.text}</p>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/2347049075581?text=Hi%20Olakunle%2C%20I%27d%20like%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#d0a850] px-6 py-3 font-semibold text-black"
        >
          Start a project on WhatsApp
        </a>
      </section>

      <section id="why" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Why work with me</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Real payments",
              d: "I build stores with secure Paystack checkout, orders and an admin page.",
            },
            {
              t: "Fast replies",
              d: "Chat with me on WhatsApp and get clear answers and updates.",
            },
            {
              t: "Full ownership",
              d: "From design to live site, you deal with one person.",
            },
            {
              t: "Mobile first",
              d: "Your site works well on phones, where most Nigerian customers are.",
            },
            {
              t: "Built to last",
              d: "Clean Next.js and TypeScript code that is easy to update later.",
            },
            {
              t: "Always learning",
              d: "I keep improving my skills, including AI and data science.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-400">{x.t}</h3>
              <p className="mt-2 text-slate-300">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {testimonials.length > 0 && (
        <section id="testimonials" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">What clients say</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <blockquote className="text-lg leading-relaxed text-slate-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[#d0a850]">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* About + stack */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">About me</h2>

        <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Photo */}
          <img
            src="/jean.jpg"
            alt="Photo of Jean"
            className="h-48 w-48 flex-shrink-0 rounded-full border-4 border-emerald-500/40 object-cover shadow-lg"
          />

          <section id="learning" className="mx-auto max-w-5xl px-6 py-16">
  <h2 className="text-3xl font-bold">Learning</h2>
  <div className="mt-8 grid gap-6 md:grid-cols-2">
    {[
      {
        title: "Front-end web development",
        where: "Early Code Institute",
        when: "2026",
        status: "Completed",
        skills: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
      },
    ].map((l) => (
      <div key={l.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{l.title}</h3>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
            {l.status}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-400">{l.where} · {l.when}</p>
        <p className="mt-3 text-slate-300">Skills: {l.skills}</p>
      </div>
    ))}
  </div>
</section>

<section className="mx-auto max-w-5xl px-6 py-16">
  <h2 className="text-3xl font-bold">Currently building</h2>
  <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">AIG Global Services updates</h3>
      <span className="text-sm text-emerald-400">In progress</span>
    </div>
    <div className="mt-4 h-2 w-full rounded-full bg-slate-800">
      <div className="h-2 rounded-full bg-emerald-400" style={{ width: "70%" }} />
    </div>
    <p className="mt-2 text-sm text-slate-400">80% complete</p>
  </div>
</section>

          {/* Text */}
          <div>
            <p className="text-slate-400">
              I'm a web and mobile developer with a background in law and
              experience in AI data annotation. I love turning ideas into
              working products, from business websites, e-commerce sites with payments to mobile
              games under my studio, Blvckjean Games.
            </p>

            <h3 className="mt-8 text-xl font-semibold">Tech stack</h3>
           <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-5">
  {[
    { n: "HTML", i: <FaHtml5 /> },
    { n: "CSS", i: <FaCss3Alt /> },
    { n: "JavaScript", i: <FaJs /> },
    { n: "TypeScript", i: <SiTypescript /> },
    { n: "React", i: <FaReact /> },
    { n: "Next.js", i: <SiNextdotjs /> },
    { n: "Tailwind", i: <SiTailwindcss /> },
    { n: "React Native", i: <FaReact /> },
    { n: "Expo", i: <SiExpo /> },
    { n: "Firebase", i: <SiFirebase /> },
  ].map((s) => (
    <div
      key={s.n}
      className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-4"
    >
      <span className="text-3xl text-emerald-400">{s.i}</span>
      <span className="text-sm">{s.n}</span>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Let's work together</h2>
        <p className="mt-4 text-slate-400">
          Open to freelance projects and full-time roles.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="mailto:jeanibitola@gmail.com"
            className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Email me
          </a>
          <a
            href="https://wa.me/2347049075581"
            target="_blank"
            className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/jeanibitola-collab"
            target="_blank"
            className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:border-slate-500"
          >
            GitHub
          </a>
        </div>
        <EnquiryForm />
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 Olakunle Ibitola. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
