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
export const Projects = () => {
    return (
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
    )
}
