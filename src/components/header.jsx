import React from 'react';
import Socials from './socials';

const header = () => {
    // Social links data from resume
    const socials = [
        { name: "LinkedIn", url: "https://linkedin.com/in/anuj-jagtap-66a23429a" },
        { name: "GitHub", url: "https://github.com/ianujjagtap" },
        { name: "Twitter", url: "https://x.com/JagtapAnuj15836" },
    ];

    return (
        // Sticky header, responsive width, centered content
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center lg:w-1/2 py-12 px-4 sm:px-8 lg:px-16">
            {/* Header content with glassmorphism effect */}
            <header className="flex flex-col gap-6">
                {/* Name with increased font size */}
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                    JAGTAP ANUJ
                </h2>
                {/* Updated title from resume */}
                <h5 className="text-lg sm:text-xl font-medium tracking-tight text-gray-300">
                    React & Next.js Developer
                </h5>
                {/* Description emphasizing current role */}
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md">
                    I craft scalable, performant web applications with modern frontend and backend technologies, delivering seamless user experiences.
                </p>
                {/* Navigation links */}
                <ul className="mt-8 flex flex-col gap-3 w-max">
                    {["About", "Experience", "Projects"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="group flex items-center py-2"
                            >
                                {/* Nav indicator with hover expansion */}
                                <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-blue-400 group-focus-visible:w-16 group-focus-visible:bg-blue-400"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-200 group-hover:text-blue-400">
                                    {item}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Social links */}
                <div className="mt-8 flex gap-4">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </header>
        </div>
    );
};

export default header