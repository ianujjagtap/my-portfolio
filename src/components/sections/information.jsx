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

export const Information = () => {
    return (
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
    )
}

