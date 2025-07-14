import { Education } from "./sections/education";
import { Experiance } from "./sections/experiance";
import { Information } from "./sections/information";
import { Projects } from "./sections/projects";
import { Resume } from "./sections/resume";
import { TechStack } from "./sections/techstack";

const about = () => {
	return (
		<>
			{/* about Section */}
			<Information />

			{/* tech Stack */}
			<TechStack />

			{/* experience Section */}
			<Experiance />

			{/* projects Section */}
			<Projects />

			{/* education Section */}
			<Education />

			{/* resume Link */}
			<Resume />

			{/* navigation Back */}
			<div className="lg:py-24 px-4">
				<a
					className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
					href="/"
				>
					<svg
						stroke="currentColor"
						fill="none"
						strokeWidth="2"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title className="sr-only">Arrow</title>
						<line x1="19" y1="12" x2="5" y2="12"></line>
						<polyline points="12 19 5 12 12 5"></polyline>
					</svg>
					Jagtap Anuj
				</a>
			</div>
		</>
	);
};

export default about;
