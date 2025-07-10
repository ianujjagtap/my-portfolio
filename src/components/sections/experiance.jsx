export const Experiance = () => {
    return (
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
    )
}
