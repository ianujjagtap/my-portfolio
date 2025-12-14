export const ExperienceIcon = ({
	height = "24px",
	width = "24px",
	className = "",
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 145.24 146.86"
			height={height}
			width={width}
			className={className}
			{...props}
		>
			<title className="sr-only">Experience</title>
			<path
				fill="currentColor"
				d="M145.24,71.55S79.61,74.24,72.62,0c0,0,0,70.47-72.62,71.56,0,0,69.39,3.22,72.62,75.3,0,0-4.3-64.01,72.62-75.31Z"
			/>
		</svg>
	);
};
