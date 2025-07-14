import { EducationIcon } from "../svgs/education";

export const Education = () => {
	return (
		<div className="h-auto flex flex-col items-center justify-center">
			<section id="education" className="mb-16 flex flex-col item-center">
				<div>
					<h2 className="text-2xl pb-4 sm:text-3xl font-semibold text-slate-200 flex items-center gap-4">
						<EducationIcon
							height="30"
							width="30"
							className="text-slate-400 hover:text-teal-500"
						/> Education
					</h2>
				</div>
				<div className="mt-4 px-4">
					<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
						<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
						<div className="z-10 sm:col-span-6">
							<div className="font-medium leading-snug text-slate-200">
								<div>
									<div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
										<span>Bachelor of Science · Savitibai Phule University</span>
									</div>
								</div>
								<div>
									<div className="text-slate-500">8.53 SGPA</div>
								</div>
							</div>
						</div>
						<div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
							March 2022 — February 2025
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
