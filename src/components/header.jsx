import { FlashIcon } from "./svgs/flash";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Header = () => {
  const containerRef = useRef(null);
  const flashRef = useRef(null);
  
  // socials links
  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/anuj-jagtap-66a23429a" },
    { name: "GitHub", url: "https://github.com/ianujjagtap" },
    { name: "Twitter", url: "https://x.com/JagtapAnuj15836" },
  ];

  useGSAP(() => {
    // add delay to wait for preloader (1.5s fill + ~2s transitions) - reduced by 1s
    const tl = gsap.timeline({ delay: 2.5, defaults: { ease: "power3.out" } });

    // initial load animations
    // note: we animate .header-text (name), not the icon container
    tl.from(".header-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
    .from(".header-contact p", {
      x: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    }, "-=0.5")
    .from(".header-bio", {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6")
    .from(".nav-link", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    }, "-=0.6")
    .from(".social-link", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="lg:sticky lg:top-5 lg:h-screen flex flex-col justify-center lg:w-1/2 py-12 px-4 sm:px-8 lg:px-16">
      <header className="flex flex-col gap-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-white flex gap-4 items-center">
          <div ref={flashRef} id="header-flash-icon">
            <FlashIcon height="48px" width="48px" className="text-slate-400" />
          </div>{" "}
          <span className="header-text">JAGTAP ANUJ</span>
        </h2>
        <h5 className="header-text text-lg sm:text-xl font-medium tracking-tight text-gray-300">
          Fullstack Developer
        </h5>
        <div className="header-contact text-gray-400 text-sm sm:text-base mt-2">
          <p>Shirdi, Ahmadnager</p>
          <p>anujjagtap2004@gmail.com</p>
          <p>+91-9168226899</p>
        </div>
        <p className="header-bio text-base sm:text-lg text-gray-400 leading-relaxed max-w-md mt-4">
          I craft scalable, performant web applications with modern frontend and
          backend technologies, delivering seamless user experiences.
        </p>
        <ul className="mt-8 flex flex-col gap-3 w-max">
          {["About", "Experience", "Projects"].map((item) => (
            <li key={item} className="nav-link">
              <a
                href={`#${item.toLowerCase()}`}
                className="group flex items-center py-2"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-teal-500 group-focus-visible:w-16 group-focus-visible:bg-teal-500"></span>
                <span className="text-sm font-bold uppercase  text-gray-200 group-hover:text-teal-500 group-hover:tracking-widest transition-all  duration-200">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
        {/* socials */}
        <div className="mt-8 flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="social-link text-gray-400 hover:text-teal-500 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
};
