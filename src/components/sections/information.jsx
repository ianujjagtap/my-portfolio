import { HeaderIcon } from "../svgs/ring-";

export const Information = () => {
	return (
		<section id="about" className=" sm:h-screen flex items-center pb-16">
			<div>
				<h2 className="text-2xl sm:text-3xl font-semibold hover:text-teal-500 cursor-cell text-slate-200 mb-4 flex items-center gap-4">
					<HeaderIcon
						height="30"
						width="30"
						className="text-slate-400 hover:text-teal-500"
					/>{" "}
					About
				</h2>
				<div className="text-slate-400">
					<p className="mb-4">
						Hey
						<span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
							{" "}
							🌞{" "}
						</span>
						I&apos;m Anuj Jagtap, a Fullstack Developer with over
						<span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
							{" "}
							2+ years{" "}
						</span>
						of experience in Fullstack Development. I build scalable
						e-commerce platforms and admin panels. I specialize in creating
						responsive, SEO-optimized web applications using modern
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
						My expertise spans frontend (React, Next.js, TypeScript) and backend
						(Node.js, MongoDB, PostgreSQL) technologies, with a focus on
						<span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
							{" "}
							performance,{" "}
						</span>
						<span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
							{" "}
							accessibility,{" "}
						</span>
						and user experience. I am committed to providing exceptional service
						and building
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
					<p className="mb-6 italic text-slate-500 border-l-2 border-teal-500/50 pl-4 py-2">
						&quot;Perceive that which cannot be seen.&quot; — Miyamoto Musashi
					</p>
					<p>
						If you&apos;re looking for a dedicated professional who can bring your
						<span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
							{" "}
							ideas{" "}
						</span>
						to fruition, I would be thrilled to work with you. Let&apos;s discuss
						your project and create something extraordinary
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
		</section>
	);
};
