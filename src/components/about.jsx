const about = () => {
  // Tech stack from resume
  const techStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Zustand",
    "Tailwind CSS",
    "Shadcn",
    "Radix UI",
    "Next.js",
    "Framer Motion",
    "React Hook Form",
    "Unhead",
    "Tanstack Query",
    "Tanstack Table",
    "Vercel",
    "Jest",
    "Webpack",
    "Node.js",
    "Express",
    "Hono.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "GraphQL",
    "Cypress",
    "Husky",
    "Biome",
    "Figma",
    "Git",
  ]

  // projects
  const projects = [
    {
      year: 2024,
      name: "Echo",
      madeAt: "Personal Project",
      tech: ["Vite", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Framer Motion"],
      links: [
        { name: "Live", url: "https://echo-the-chatbot.vercel.app" },
        { name: "GitHub", url: "https://github.com/ianujjagtap/Echo" },
      ],
    },
    {
      year: 2024,
      name: "Thirty Six Studio",
      madeAt: "Personal Project",
      tech: ["React", "Vite", "Tailwind CSS", "GSAP"],
      links: [{ name: "Live", url: "https://thirty-six.vercel.app" }],
    },
    {
      year: 2024,
      name: "Route LLM",
      madeAt: "Personal Project",
      tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Prisma", "PostgreSQL", "Hono.js"],
      links: [{ name: "GitHub", url: "https://github.com/ianujjagtap/route-llm" }],
    },
  ]

  return (
    <>
      {/* About Section */}
      <section id="about" className="mb-16 scroll-mt-16">
        <div className="sticky top-0 z-20 px-4 py-5 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-4">About</h2>
          <div className="text-slate-400">
            <p className="mb-4">
              Hey
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                Good afternoon 🌞{" "}
              </span>
              I'm Anuj Jagtap, a React & Next.js Developer with over
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                1+ years{" "}
              </span>
              of experience at Androbuddy Technologies, building scalable e-commerce platforms and admin panels. I
              specialize in creating responsive, SEO-optimized web applications using modern
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                JavaScript{" "}
              </span>
              and
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                TypeScript{" "}
              </span>
              frameworks like
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                Next.js{" "}
              </span>
              and
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                React.js{" "}
              </span>
              to create beautiful and responsive
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                user interfaces.
              </span>
            </p>
            <p className="mb-4">
              My expertise spans frontend (React, Next.js, TypeScript) and backend (Node.js, MongoDB, PostgreSQL)
              technologies, with a focus on
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                performance,{" "}
              </span>
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                accessibility,{" "}
              </span>
              and user experience. I am committed to providing exceptional service and building
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                long-term relationships{" "}
              </span>
              based on
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                trust{" "}
              </span>
              and mutual
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                success.
              </span>
            </p>
            <p>
              If you're looking for a dedicated professional who can bring your
              <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                {" "}
                ideas{" "}
              </span>
              to fruition, I would be thrilled to work with you. Let's discuss your project and create something
              extraordinary

              <span className="group/korok inline-flex lg:font-medium lg:text-slate-200 pl-2">
                <span className="sr-only"> Together </span>
                <span
                  className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
                  aria-hidden="true"
                >
                  {" "}
                  t
                </span>
                <span
                  className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                  aria-hidden="true"
                >
                  o
                </span>
                <span
                  className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
                  aria-hidden="true"
                >
                  ge
                </span>
                <span
                  className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                  aria-hidden="true"
                >
                  t
                </span>
                <span
                  className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
                  aria-hidden="true"
                >
                  h
                </span>
                <span
                  className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
                  aria-hidden="true"
                >
                  e
                </span>
                <span
                  className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
                  aria-hidden="true"
                >
                  r!
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 px-4">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4">Tech Stack</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16 scroll-mt-16">
        <div className="sticky top-0 z-20 bg-slate-900/75 px-4 py-5 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200">Experience</h2>
        </div>
        <div className="mt-4 px-4">
          <ol className="group/list">
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:col-span-6">
                  <div className="font-medium leading-snug text-slate-200">
                    <div>
                      <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>React & Next.js Developer · Androbuddy Technologies</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500">Narthe, Pune</div>
                    </div>
                  </div>
                  <ul className="mt-2 text-sm leading-normal text-slate-400 list-disc pl-5 space-y-1">
                    <li>
                      Architected a scalable e-commerce platform for 10,000+ users, optimizing SEO to 85-90 scores and
                      reducing load times by 30%.
                    </li>
                    <li>
                      Built production-grade React and Next.js admin panels with robust authentication and dynamic data
                      handling.
                    </li>
                    <li>Leveraged GitHub CI/CD for maintainable codebases, earning "Employee of the Year 2024."</li>
                  </ul>
                </div>
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  August 2024 — July 2025
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16 scroll-mt-16">
        <div className="sticky top-0 z-20 bg-slate-900/75 px-4 py-5 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200">Projects</h2>
        </div>
        <div className="mt-4 px-4">
          <table className="w-full border-collapse text-left">
            <thead className="sticky top-14 z-10 border-b border-slate-300/10 bg-slate-900/75 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.name} className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-4 align-top text-sm">
                    <div className="translate-y-px">{project.year}</div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                      <div className="sm:hidden flex justify-between">
                        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base">
                          <span>{project.name}</span>
                        </span>
                      </div>
                      <div className="hidden sm:block">{project.name}</div>
                    </div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap">{project.madeAt}</div>
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex -translate-y-1.5 flex-wrap">
                      {project.tech.map((tech) => (
                        <li key={tech} className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <ul className="translate-y-1 flex justify-start items-center space-x-4">
                      {project.links.map((link) => (
                        <li key={link.name} className="mb-1 items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 text-sm focus-visible:text-teal-300 group/link"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="flex flex-nowrap items-center">
                              <span className="inline-block">{link.name}</span>
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16 scroll-mt-16">
        <div className="sticky top-0 z-20 bg-slate-900/75 px-4 py-5 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200">Education</h2>
        </div>
        <div className="mt-4 px-4">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:col-span-6">
              <div className="font-medium leading-snug text-slate-200">
                <div>
                  <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                    <span>Bachelor of Science · Savitibai Phule University</span>
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">8.53 SGPA</div>
                </div>
              </div>
            </div>
            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              March 2022 — February 2025
            </div>
          </div>
        </div>
      </section>

      {/* Resume Link */}
      <div className="mt-12 px-4">
        <a
          className="inline-flex items-center leading-tight font-medium text-slate-200 group"
          target="_blank"
          href="/resume.pdf"
          rel="noreferrer"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                {" "}
                Résumé
              </span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </span>
        </a>
      </div>

      {/* Navigation Back */}
      <div className="lg:py-24 px-4">
        <a className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Jagtap Anuj
        </a>
      </div>
    </>
  )
}

export default about
