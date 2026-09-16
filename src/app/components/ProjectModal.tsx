"use client";

import { useEffect } from "react";
import {
	X,
	CheckCircle2,
	Code2,
	Rocket,
	ArrowUpRight,
	Image as ImageIcon,
} from "lucide-react";
import { ProjectMedia } from "@/app/constants/projectsData";
import { SafeImage } from "@/app/components/SafeImage";

export interface MediaItem {
	url: string;
	type?: "desktop" | "mobile";
}

export interface ProjectImages {
	img_1?: MediaItem | string;
	img_2?: MediaItem | string;
	img_3?: MediaItem | string;
	img_4?: MediaItem | string;
	main?: string;
	mobile?: string;
}

export interface ExtendedProjectMedia extends Omit<ProjectMedia, "images"> {
	githubUrl?: string;
	liveUrl?: string;
	images?: ProjectImages;
}

export interface ProjectText {
	id: string;
	title: string;
	category: string;
	description: string;
	longDescription?: string;
	responsibilities?: string[];
	challenges?: string;
	tags: string[];
}

export interface FullProject extends ProjectText {
	media?: ExtendedProjectMedia;
}

interface ProjectModalProps {
	project: FullProject | null;
	onClose: () => void;
	labels?: {
		summary?: string;
		responsibilities?: string;
		challenges?: string;
		technologies?: string;
		viewCode?: string;
		tryDemo?: string;
		gallery?: string;
	};
}

// Extrae las URLs disponibles del objeto images
function extractImageUrls(images?: ProjectImages): string[] {
	if (!images) return [];

	const rawItems = [
		images.main || images.img_1,
		images.mobile || images.img_2,
		images.img_3,
		images.img_4,
	];
	return rawItems
		.map((item) => (typeof item === "string" ? item : item?.url))
		.filter((url): url is string => Boolean(url));
}

export function ProjectModal({ project, onClose, labels }: ProjectModalProps) {
	useEffect(() => {
		document.body.style.overflow = project ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [project]);

	if (!project) return null;

	const imageUrls = extractImageUrls(project.media?.images);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-4xl h-full max-h-[90vh] bg-[#181818] border border-[#3D3D3D] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Encabezado Fijo */}
				<div className="flex items-start justify-between gap-4 border-b border-[#3D3D3D] p-6 sm:p-8 shrink-0 bg-[#181818]">
					<div>
						<span className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wider block mb-1">
							{project.category}
						</span>
						<h2 className="font-mono text-2xl sm:text-4xl font-bold text-white">
							{project.title}
						</h2>
					</div>
					<button
						onClick={onClose}
						className="p-2 rounded-full border border-[#3D3D3D] bg-[#121212] hover:bg-[#3D3D3D] text-[#A6A6A6] hover:text-white transition-colors cursor-pointer shrink-0"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Cuerpo Scrolleable */}
				<div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
					{/* Resumen */}
					<div className="space-y-3">
						<h3 className="font-mono text-sm text-[#A6A6A6] uppercase tracking-wide flex items-center gap-2">
							<Rocket className="w-4 h-4 text-white" />{" "}
							{labels?.summary || "Resumen del Proyecto"}
						</h3>
						<p className="font-sans text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
							{project.longDescription || project.description}
						</p>
					</div>

					{/* Responsabilidades */}
					{project.responsibilities && (
						<div className="space-y-3">
							<h3 className="font-mono text-sm text-[#A6A6A6] uppercase tracking-wide flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 text-white" />{" "}
								{labels?.responsibilities ||
									"Responsabilidades & Logros Clave"}
							</h3>
							<ul className="space-y-2">
								{project.responsibilities.map((item, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3 text-sm text-[#A6A6A6]"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
										<span className="leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Desafío Técnico */}
					{project.challenges && (
						<div className="space-y-3 bg-[#121212] p-5 rounded-2xl border border-[#3D3D3D]/60">
							<h3 className="font-mono text-sm text-white flex items-center gap-2">
								<Code2 className="w-4 h-4" />{" "}
								{labels?.challenges ||
									"Desafío Técnico & Solución"}
							</h3>
							<p className="font-sans text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
								{project.challenges}
							</p>
						</div>
					)}

					{/* Tecnologías */}
					<div className="space-y-3 pt-2">
						<h3 className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wide">
							{labels?.technologies ||
								"Tecnologías y Herramientas Utilizadas"}
						</h3>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="font-mono text-xs text-white bg-[#121212] border border-[#3D3D3D] px-3 py-1 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Galería de Imágenes (Al final del scroll, tamaño completo) */}
					{imageUrls.length > 0 && (
						<div className="space-y-4 pt-4 border-t border-[#3D3D3D]/60">
							<h3 className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wide flex items-center gap-2">
								<ImageIcon className="w-4 h-4 text-white" />
								{labels?.gallery || "Capturas de Pantalla"}
							</h3>
							<div className="flex flex-col gap-6">
								{imageUrls.map((url, index) => (
									<div
										key={index}
										className="relative w-full aspect-video rounded-2xl bg-[#121212] border border-[#3D3D3D] overflow-hidden shadow-xl"
									>
										<SafeImage
											src={url}
											alt={`${project.title} captura ${index + 1}`}
											fallbackText={`Captura ${index + 1}`}
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Enlaces / Acciones Fijos */}
				{(project.media?.githubUrl || project.media?.liveUrl) && (
					<div className="flex items-center gap-4 p-6 sm:px-8 border-t border-[#3D3D3D] shrink-0 bg-[#181818]">
						{project.media?.githubUrl && (
							<a
								href={project.media.githubUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 font-mono text-xs border border-[#3D3D3D] bg-[#121212] hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-full transition-all duration-300"
							>
								{labels?.viewCode || "Ver Código en GitHub"}
							</a>
						)}
						{project.media?.liveUrl && (
							<a
								href={project.media.liveUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 font-mono text-xs bg-white text-black hover:bg-[#E5E5E5] px-5 py-2.5 rounded-full transition-all duration-300"
							>
								{labels?.tryDemo || "Probar Demo"}
								<ArrowUpRight className="w-4 h-4" />
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
