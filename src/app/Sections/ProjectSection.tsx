// components/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { PROJECTS_MEDIA } from "@/app/constants/projectsData";
import { SafeImage } from "@/app/components/SafeImage";
import {
	ProjectModal,
	FullProject,
	ProjectText,
} from "@/app/components/ProjectModal";

export default function ProjectsSection() {
	const { t } = useLanguage();
	const [selectedProject, setSelectedProject] = useState<FullProject | null>(
		null,
	);

	return (
		<section
			id="projects"
			className="w-full max-w-7xl mx-auto px-6 py-20 text-white"
		>
			{/* Header de la sección */}
			<div className="space-y-6 mb-20">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-8">
					<div>
						<span className="font-mono text-xs text-[#A6A6A6] block mb-2">
							{t.projects.tag}
						</span>
						<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight">
							{t.projects.title}
						</h2>
					</div>
					<p className="font-sans text-sm text-[#A6A6A6] max-w-md leading-relaxed">
						{t.projects.subtitle}
					</p>
				</div>
			</div>

			{/* Lista de Proyectos */}
			<div className="space-y-32">
				{(t.projects.items as unknown as ProjectText[]).map(
					(projectText, index) => {
						const media = PROJECTS_MEDIA[projectText.id];
						const project: FullProject = {
							...projectText,
							media,
						};
						const isEven = index % 2 === 0;

						return (
							<div
								key={project.id}
								className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
									isEven ? "" : "lg:flex-row-reverse"
								}`}
							>
								{/* Información */}
								<div className="w-full lg:w-5/12 space-y-6">
									<div>
										<h3 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
											{project.title}
										</h3>
										<span className="font-mono text-xs text-[#A6A6A6] block mt-1">
											{project.category}
										</span>
									</div>

									<div className="flex flex-wrap gap-2 pt-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="font-mono text-[11px] text-[#A6A6A6] bg-[#1E1E1E] border border-[#3D3D3D] px-3.5 py-1.5 rounded-full"
											>
												{tag}
											</span>
										))}
									</div>

									<p className="font-sans text-xs sm:text-sm text-[#A6A6A6] leading-relaxed pt-2">
										{project.description}
									</p>

									{/* Acciones */}
									<div className="flex items-center gap-4 pt-4">
										<button
											onClick={() =>
												setSelectedProject(project)
											}
											className="group inline-flex items-center gap-3 bg-[#F5F5F5] hover:bg-white text-[#121212] pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
										>
											<span className="font-serif italic text-base font-medium">
												{t.projects.seeMore ||
													"Ver más"}
											</span>
											<div className="w-8 h-8 rounded-full bg-[#121212] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
												<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
											</div>
										</button>

										{media?.githubUrl && (
											<a
												href={media.githubUrl}
												target="_blank"
												rel="noreferrer"
												title="Ver código en GitHub"
												className="w-11 h-11 rounded-full border border-[#3D3D3D] bg-[#1E1E1E]/60 hover:bg-white hover:text-black text-[#A6A6A6] flex items-center justify-center transition-all duration-300"
											>
												<svg
													className="w-5 h-5 fill-current"
													viewBox="0 0 24 24"
												>
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
												</svg>
											</a>
										)}
										{media?.liveUrl && (
											<a
												href={media.liveUrl}
												target="_blank"
												rel="noreferrer"
												title="Ver Demo en vivo"
												className="w-11 h-11 rounded-full border border-[#3D3D3D] bg-[#1E1E1E]/60 hover:bg-white hover:text-black text-[#A6A6A6] flex items-center justify-center transition-all duration-300"
											>
												<ArrowUpRight className="w-5 h-5" />
											</a>
										)}
									</div>
								</div>

								{/* Columna Imágenes */}
								<div className="w-full lg:w-7/12 grid grid-cols-12 gap-4 relative">
									<div className="col-span-8 aspect-[4/3] rounded-3xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden">
										<SafeImage
											src={media?.images.main}
											alt={`${project.title} screenshot`}
											fallbackText="Imagen"
										/>
									</div>

									<div className="col-span-4 aspect-[3/4] rounded-3xl bg-[#1E1E1E] border border-[#3D3D3D] self-end overflow-hidden">
										<SafeImage
											src={media?.images.mobile}
											alt={`${project.title} mobile screenshot`}
											fallbackText="Imagen Mobile"
										/>
									</div>
								</div>
							</div>
						);
					},
				)}
			</div>

			{/* Modal Separado */}
			<ProjectModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
				labels={t.projects.modalLabels}
			/>
		</section>
	);
}
