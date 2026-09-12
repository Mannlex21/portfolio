// app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import {
	ArrowUpRight,
	ArrowLeft,
	X,
	CheckCircle2,
	Code2,
	Rocket,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { PROJECTS_MEDIA, ProjectMedia } from "@/app/constants/projectsData";
import { SafeImage } from "../components/SafeImage";

interface ProjectText {
	id: string;
	title: string;
	category: string;
	description: string;
	longDescription?: string;
	responsibilities?: string[];
	challenges?: string;
	tags: string[];
}

interface FullProject extends ProjectText {
	media?: ProjectMedia;
}

export default function ProjectsPage() {
	const { t } = useLanguage();
	const [selectedProject, setSelectedProject] = useState<FullProject | null>(
		null,
	);

	useEffect(() => {
		document.body.style.overflow = selectedProject ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [selectedProject]);

	return (
		<main className="min-h-screen bg-[#121212] text-white py-3 px-6 overflow-hidden">
			<div className="w-full max-w-7xl mx-auto space-y-24">
				{/* Header */}
				<div className="space-y-6">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-8">
						<div>
							<span className="font-mono text-xs text-[#A6A6A6] block mb-2">
								{t.projects.tag}
							</span>
							<h1 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight">
								{t.projects.title}
							</h1>
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
											<h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
												{project.title}
											</h2>
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
													Ver más
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
										{/* Imagen Principal (Main) */}
										<div className="col-span-8 aspect-[4/3] rounded-3xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden">
											<SafeImage
												src={media?.images.main}
												alt={`${project.title} screenshot`}
												fallbackText="Imagen"
											/>
										</div>

										{/* Imagen Mobile */}
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
			</div>

			{/* Modal Detallado */}
			{selectedProject && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200">
					<div
						className="relative w-full max-w-4xl max-h-[90vh] bg-[#181818] border border-[#3D3D3D] rounded-3xl p-6 sm:p-10 overflow-y-auto space-y-8 shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-start justify-between gap-4 border-b border-[#3D3D3D] pb-6">
							<div>
								<span className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wider block mb-1">
									{selectedProject.category}
								</span>
								<h2 className="font-mono text-2xl sm:text-4xl font-bold text-white">
									{selectedProject.title}
								</h2>
							</div>
							<button
								onClick={() => setSelectedProject(null)}
								className="p-2 rounded-full border border-[#3D3D3D] bg-[#121212] hover:bg-[#3D3D3D] text-[#A6A6A6] hover:text-white transition-colors cursor-pointer"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						<div className="space-y-3">
							<h3 className="font-mono text-sm text-[#A6A6A6] uppercase tracking-wide flex items-center gap-2">
								<Rocket className="w-4 h-4 text-white" />{" "}
								Resumen del Proyecto
							</h3>
							<p className="font-sans text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
								{selectedProject.longDescription ||
									selectedProject.description}
							</p>
						</div>

						{selectedProject.responsibilities && (
							<div className="space-y-3">
								<h3 className="font-mono text-sm text-[#A6A6A6] uppercase tracking-wide flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-white" />{" "}
									Responsabilidades & Logros Clave
								</h3>
								<ul className="space-y-2">
									{selectedProject.responsibilities.map(
										(item, idx) => (
											<li
												key={idx}
												className="flex items-start gap-3 text-sm text-[#A6A6A6]"
											>
												<span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
												<span className="leading-relaxed">
													{item}
												</span>
											</li>
										),
									)}
								</ul>
							</div>
						)}

						{selectedProject.challenges && (
							<div className="space-y-3 bg-[#121212] p-5 rounded-2xl border border-[#3D3D3D]/60">
								<h3 className="font-mono text-sm text-white flex items-center gap-2">
									<Code2 className="w-4 h-4" /> Desafío
									Técnico & Solución
								</h3>
								<p className="font-sans text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
									{selectedProject.challenges}
								</p>
							</div>
						)}

						<div className="space-y-3 pt-2">
							<h3 className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wide">
								Tecnologías e Herramientas Utilizadas
							</h3>
							<div className="flex flex-wrap gap-2">
								{selectedProject.tags.map((tag) => (
									<span
										key={tag}
										className="font-mono text-xs text-white bg-[#121212] border border-[#3D3D3D] px-3 py-1 rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className="flex items-center gap-4 pt-6 border-t border-[#3D3D3D]">
							{selectedProject.media?.githubUrl && (
								<a
									href={selectedProject.media.githubUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 font-mono text-xs border border-[#3D3D3D] bg-[#121212] hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-full transition-all duration-300"
								>
									Ver Código en GitHub
								</a>
							)}
							{selectedProject.media?.liveUrl && (
								<a
									href={selectedProject.media.liveUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 font-mono text-xs bg-white text-black hover:bg-[#E5E5E5] px-5 py-2.5 rounded-full transition-all duration-300"
								>
									Probar Demo
									<ArrowUpRight className="w-4 h-4" />
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
