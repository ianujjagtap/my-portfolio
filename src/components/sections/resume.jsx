export const Resume = () => {
    return (
        <div className="mt-12 px-4">
            <a
                className="inline-flex items-center leading-tight font-medium text-slate-200 group"
                target="_blank"
                href="/CV-Anuj.pdf"
                rel="noreferrer"
            >
                <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full
                    </span>
                    <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            {" "}
                            Résumé
                        </span>
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </span>
                </span>
            </a>
        </div>
    )
}
