import { TechStackIcon } from "../svgs/techstack";

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
];
export const TechStack = () => {
	return (
		<div className="pb-16">
			<div >
				<h2 className="text-2xl sm:text-3xl pb-8 font-semibold text-slate-200 flex items-center gap-4">
					<TechStackIcon
						height="50"
						width="50"
						className="text-slate-400 hover:text-teal-500"
					/>{" "}	Tech Stack
				</h2>
			</div>
			<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
				{techStack.map((tech) => (
					<li
						key={tech}
						className="flex items-center justify-center rounded-full bg-teal-400/10 py-1 text-xs font-medium leading-5 text-teal-300"
					>
						{tech}
					</li>
				))}
			</ul>
		</div>
	);
};
