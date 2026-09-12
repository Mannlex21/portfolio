// components/ProjectsSection.tsx
"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface Project {
	id: string;
	title: string;
	category: string;
	descriptionEs: string;
	descriptionEn: string;
	tags: string[];
	githubUrl?: string;
	liveUrl?: string;
}

const projects: Project[] = [
	{
		id: "project-1",
		title: "Finance & Expense App",
		category: "Mobile App / React Native",
		descriptionEs:
			"Aplicación móvil para la gestión de finanzas personales, seguimiento de gastos diarios y control de planes de pago a plazos.",
		descriptionEn:
			"Mobile app for personal finance management, daily expense tracking, and installment payment plan control.",
		tags: ["React Native", "TypeScript", "Tailwind CSS", "AsyncStorage"],
		githubUrl: "https://github.com",
		liveUrl: "https://ejemplo.com",
	},
	{
		id: "project-2",
		title: "Enterprise Web Suite",
		category: "Full-Stack Web App",
		descriptionEs:
			"Plataforma modular con arquitectura escalable, dashboards analíticos y consumo de servicios REST en entorno empresarial.",
		descriptionEn:
			"Modular platform with scalable architecture, analytical dashboards, and REST services consumption in enterprise environments.",
		tags: [
			"Angular",
			"TypeScript",
			"C# .NET",
			"SQL Server",
			"Tailwind CSS",
		],
		githubUrl: "https://github.com",
		liveUrl: "https://ejemplo.com",
	},
	{
		id: "project-3",
		title: "E-Commerce / Catalog Platform",
		category: "Frontend Web",
		descriptionEs:
			"Catálogo interactivo optimizado con renderizado SSR/SSG, gestión de estado y diseño responsivo enfocado en conversión.",
		descriptionEn:
			"Interactive catalog optimized with SSR/SSG rendering, state management, and responsive design focused on conversion.",
		tags: ["Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
		githubUrl: "https://github.com",
	},
];

export default function ProjectsSection() {
	const { language, t } = useLanguage();

	return (
		<section
			id="projects"
			className="w-full max-w-7xl mx-auto px-6 py-20 space-y-12"
		>
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-6">
				<div>
					<span className="font-mono text-xs text-[#A6A6A6] block mb-2">
						{t.projects.tag}
					</span>
					<h2 className="font-mono text-3xl sm:text-4xl font-semibold text-white tracking-tight">
						{t.projects.title}
					</h2>
				</div>
				<p className="font-sans text-xs sm:text-sm text-[#A6A6A6] max-w-md">
					{t.projects.subtitle}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<div
						key={project.id}
						className="group border border-[#3D3D3D] bg-[#1E1E1E]/40 hover:bg-[#1E1E1E]/80 hover:border-[#F5F5F5]/40 rounded-3xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300"
					>
						<div className="space-y-4">
							<div className="w-full aspect-video rounded-2xl bg-[#121212] border border-[#3D3D3D] flex items-center justify-center text-[#A6A6A6] font-mono text-xs group-hover:border-[#3D3D3D]/80 transition-colors">
								[ Preview / Screenshot ]
							</div>

							<div className="flex items-center justify-between">
								<span className="font-mono text-xs text-[#A6A6A6]">
									{project.category}
								</span>
								<div className="flex items-center gap-2">
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noreferrer"
											className="text-[#A6A6A6] hover:text-white p-2 rounded-full hover:bg-[#3D3D3D]/50 transition-colors"
										>
											<svg
												className="w-4 h-4 fill-current"
												viewBox="0 0 24 24"
											>
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
											</svg>
										</a>
									)}
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noreferrer"
											className="text-[#A6A6A6] hover:text-white p-2 rounded-full hover:bg-[#3D3D3D]/50 transition-colors"
										>
											<ExternalLink className="w-4 h-4" />
										</a>
									)}
								</div>
							</div>

							<h3 className="font-mono text-xl text-white font-semibold flex items-center justify-between">
								{project.title}
								<ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#F5F5F5]" />
							</h3>

							<p className="font-sans text-xs text-[#A6A6A6] leading-relaxed">
								{language === "es"
									? project.descriptionEs
									: project.descriptionEn}
							</p>
						</div>

						<div className="flex flex-wrap gap-2 pt-2 border-t border-[#3D3D3D]/50">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="font-mono text-[10px] text-[#A6A6A6] bg-[#121212] border border-[#3D3D3D] px-3 py-1 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
