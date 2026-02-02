import { ExperienceIcon } from "../svgs/experiance";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Experiance = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".experience-card");
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2, // stagger effect based on index
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="experience" className="mb-16 scroll-mt-16">
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
      {/* first experience */}
      <div className="mt-4 px-4 experience-card">
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
                        Fullstack Developer · Knovator Technologies Pvt Ltd
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500">Surat, Gujarat</div>
                  </div>
                </div>
                <ul className="mt-2 text-sm leading-normal text-slate-400 list-disc pl-5 space-y-1">
                  <li>
                    Worked on full-stack restaurant web applications, contributing to both frontend and backend development.
                  </li>
                  <li>
                    Handled integrations such as payments, authentication, and ordering features while fixing bugs and improving performance.
                  </li>
                  <li>
                    Collaborated with the team to add features, resolve issues, and support successful production releases for web and mobile apps.
                  </li>
                  <li>
                    Worked with technologies and platforms including Directus, Olo Pay, Incentivio, Toast, and related tools.
                  </li>
                </ul>
              </div>
              <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                September 2025 – Present
              </div>
            </div>
          </li>
        </ol>
      </div>
      {/* second experience */}
      <div className="mt-4 px-4 experience-card">
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-6">
                <div className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>Frontend Developer · Androbuddy Technologies</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500">Narhe, Pune</div>
                  </div>
                </div>
                <ul className="mt-2 text-sm leading-normal text-slate-400 list-disc pl-5 space-y-1">
                  <li>
                    Developed scalable E-commerce platform with React, featuring dynamic page creation, theme management, and SEO optimizations achieving 85-90 scores, reducing load times by 30% for 10,000+ monthly users.
                  </li>
                  <li>
                    Built React admin panel with Redux and Tanstack Query, enabling efficient admin workflows for concurrent operations.
                  </li>
                  <li>
                    Engineered Next.js admin panel for Flutter community app, supporting large-scale CSV uploads (4K-10K rows) and handling 30K-40K table rows with pagination and search.
                  </li>
                </ul>
              </div>
              <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                August 2024 – July 2025
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};
