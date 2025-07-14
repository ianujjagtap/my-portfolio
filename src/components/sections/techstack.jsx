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
		<div className="px-4 pb-16">
			<h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4">
				Tech Stack
			</h3>
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
