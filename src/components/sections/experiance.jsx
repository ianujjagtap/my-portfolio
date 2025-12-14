import { ExperienceIcon } from "../svgs/experiance";

export const Experiance = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16">
      <div>
        <h2 className="text-2xl sm:text-3xl pb-4 font-semibold text-slate-200 flex items-center gap-4">
          <ExperienceIcon
            height="30"
            width="30"
            className="text-slate-400 hover:text-teal-500"
          />{" "}
          Experience
        </h2>
      </div>
      {/* First Experience */}
      <div className="mt-4 px-4">
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-6">
                <div className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        React & Next.js Developer · Androbuddy Technologies
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500">Pune • Maharashtra</div>
                  </div>
                </div>
                <ul className="mt-2 text-sm leading-normal text-slate-400 list-disc pl-5 space-y-1">
                  <li>
                    Architected a scalable e-commerce platform for 10,000+
                    users, optimizing SEO to 85-90 scores and reducing load
                    times by 30%.
                  </li>
                  <li>
                    Built production-grade React and Next.js admin panels with
                    robust authentication and dynamic data handling.
                  </li>
                  <li>
                    Leveraged GitHub CI/CD for maintainable codebases, earning
                    "Employee of the Year 2024."
                  </li>
                </ul>
              </div>
              <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                August 2024 — July 2025
              </div>
            </div>
          </li>
        </ol>
      </div>
      {/* Second Experience */}
      <div className="mt-4 px-4">
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-6">
                <div className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>Fullstack Developer · Knovator Technologies</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500">Surat • Gujarat</div>
                  </div>
                </div>
                <ul className="mt-2 text-sm leading-normal text-slate-400 list-disc pl-5 space-y-1">
                  <li>
                    Worked on full-stack restaurant web applications,
                    contributing to both frontend and backend development.
                    Handled integrations such as payments, authentication, and
                    ordering features while fixing bugs and improving
                    performance.
                  </li>
                  <li>
                    Collaborated with the team to add features, resolve issues,
                    and support successful production releases for web and
                    mobile apps.
                  </li>
                  <li>
                    Worked with technologies and platforms including Directus,
                    Olo Pay, Incentivio, Toast, and related tools.
                  </li>
                </ul>
              </div>
              <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                September 2025 — Present
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};
