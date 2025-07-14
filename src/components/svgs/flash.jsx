const FlashIcon = ({
	height = "24px",
	width = "24px",
	className = "",
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 67.03 151.44"
			height={height}
			width={width}
			className={className}
			{...props}
		>
			<title className="sr-only">Flash logo</title>
			<polygon
				fill="currentColor"
				points="63.22 41.38 40.96 40.84 67.03 .6 34.41 0 .05 57.91 24.19 58.22 1.12 100.6 20.84 100.91 0 151.44 64.83 79.8 41.26 79.33 63.22 41.38"
			/>
		</svg>
	);
};

export default FlashIcon;
