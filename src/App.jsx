
import developerWorkspace from './assets/developer-workspace.png';

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Next.js"
  ];



  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F7FC] text-[#19152B]">
      <header className="border-b border-[#E8E3F0]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Hanzala<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[#393449] md:flex">
            <a href="#home" className="transition hover:text-violet-400">Home</a>
            <a href="#about" className="transition hover:text-violet-400">About</a>
            <a href="#skills" className="transition hover:text-violet-400">Skills</a>
           
            <a
              href="#contact"
              className="rounded-lg bg-violet-500 px-4 py-2.5 font-semibold text-[#19152B] transition hover:bg-violet-600"
            >
              Contact Me
            </a>
          </div>

          <a href="#contact" className="text-sm font-medium text-violet-300 md:hidden">
            Let's Talk ↗
          </a>
        </nav>
      </header>

      <main>
       
<section
  id="home"
  className="relative mx-auto grid min-h-[620px] max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:gap-4 lg:py-20">
  <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-300/25 blur-[100px]" />

  <div className="relative z-10">
    

    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
      Frontend &amp; MERN Stack Developer
    </p>

    <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#19152B] sm:text-5xl lg:text-6xl">
      Building digital
      <br />
      experiences that
      <br />
      <span className="text-violet-500">make an impact.</span>
    </h1>

    <p className="mt-6 max-w-xl text-base leading-7 text-[#625D72]">
      Hi, I'm Hanzala. I build responsive, user-friendly websites
      and web applications using modern web technologies.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#about"
        className="rounded-lg bg-violet-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-600"
      >
        Learn More ↓
      </a>

      <a
        href="#contact"
        className="rounded-lg border border-violet-200 px-6 py-3.5 font-semibold text-[#29233D] transition hover:border-violet-400"
      >
        Get in Touch
      </a>
    </div>

    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#625D72]">
      <span>✦ Responsive Design</span>
      <span>✦ Frontend Development</span>
      <span>✦ Full-Stack Projects</span>
    </div>
  </div>

  <div className="relative z-10 mx-auto w-full max-w-xl md:max-w-none">
    <div className="absolute inset-10 rounded-full bg-violet-300/30 blur-3xl" />
    <img
      src={developerWorkspace}
      alt="3D developer workspace with a laptop displaying code and programming icons"
      className="relative h-auto w-full object-contain drop-shadow-sm"
    />
  </div>
</section>


        <section id="about" className="border-y border-[#E8E3F0] bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Get to know me
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                About Me<span className="text-violet-400">.</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#393449]">
                I'm a web developer who enjoys turning ideas into clean,
                functional digital experiences. I focus on responsive layouts,
                reusable components and writing maintainable code.
              </p>
              <p className="mt-5 leading-8 text-[#625D72]">
                From designing user interfaces to connecting applications
                with APIs and databases, I'm continuously learning and
                improving my development skills through practical projects.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            What I work with
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            My Skills<span className="text-violet-400">.</span>
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[#625D72]">
            Technologies I use to develop modern websites and web applications.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="rounded-xl border border-[#E8E3F0] bg-white p-5 transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-400/[0.06]"
              >
                <span className="text-sm text-violet-400">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-semibold text-[#19152B]">{skill}</h3>
              </div>
            ))}
          </div>
        </section>


        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-transparent px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Have a project in mind?
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Let's work together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#625D72]">
              I'm interested in web development opportunities and projects
              where I can create useful digital experiences.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="mt-8 inline-flex rounded-lg bg-violet-500 px-7 py-3.5 font-semibold transition hover:bg-violet-600"
            >
              Email Me ↗
            </a>
           
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E8E3F0] px-6 py-7 text-center text-sm text-[#777187]">
        © {new Date().getFullYear()} Hanzala Nasir. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
