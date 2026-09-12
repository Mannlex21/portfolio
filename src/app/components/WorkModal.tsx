// components/WorkModal.tsx
"use client";

import { useEffect } from "react";
import { X, Calendar, MapPin, FolderGit2 } from "lucide-react";
import { WorkExperienceItem } from "@/app/constants/workData";
import { useLanguage } from "../context/LanguageContext";

interface WorkModalProps {
	experience: WorkExperienceItem | null;
	onClose: () => void;
}

export function WorkModal({ experience, onClose }: WorkModalProps) {
	const { t } = useLanguage();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (experience) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [experience, onClose]);

	if (!experience) return null;

	const translation =
		t.work.items[experience.id as keyof typeof t.work.items];

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm animate-fade-in">
			{/* Backdrop */}
			<div className="absolute inset-0" onClick={onClose} />

			{/* Contenido del Modal (Crece a max-w-4xl en md y max-w-5xl en xl, con mayor altura) */}
			<div className="relative w-full max-w-2xl md:max-w-4xl xl:max-w-5xl max-h-[90vh] bg-[#141414] border border-[#2D2D2D] rounded-3xl p-6 sm:p-8 lg:p-10 z-10 text-white shadow-2xl flex flex-col overflow-hidden">
				{/* Botón Cerrar */}
				<button
					onClick={onClose}
					className="absolute top-6 right-6 p-2.5 rounded-full bg-[#1E1E1E] text-[#A6A6A6] hover:text-white hover:bg-[#2A2A2A] transition-colors cursor-pointer z-20"
				>
					<X className="w-5 h-5" />
				</button>

				{/* Header Estático */}
				<div className="space-y-2 pr-12 shrink-0">
					<span className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wider">
						{translation?.role}
					</span>
					<h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-white">
						{experience.company}
					</h3>
					<div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A6A6A6] pt-1">
						<span className="flex items-center gap-1.5">
							<Calendar className="w-3.5 h-3.5" />
							{experience.period}{" "}
							{translation?.duration
								? `(${translation.duration})`
								: ""}
						</span>
						{experience.location && (
							<span className="flex items-center gap-1.5">
								<MapPin className="w-3.5 h-3.5" />
								{experience.location}
							</span>
						)}
					</div>
				</div>

				<hr className="my-6 border-[#2A2A2A] shrink-0" />

				{/* Cuerpo Scrolleable con clase custom-scrollbar y padding adaptativo */}
				<div className="overflow-y-auto pr-3 sm:pr-5 space-y-8 custom-scrollbar">
					{/* Agrupación de Proyectos Internos */}
					<div className="space-y-6">
						{translation?.projects.map((proj, pIdx) => (
							<div key={pIdx} className="space-y-3">
								<div className="flex items-center gap-2 text-sm sm:text-base font-mono font-semibold text-[#E0E0E0] border-b border-[#222222] pb-2">
									<FolderGit2 className="w-4 h-4 text-[#A6A6A6]" />
									<span>{proj.name}</span>
								</div>
								<ul className="space-y-2.5 pl-1">
									{proj.description.map((item, index) => (
										<li
											key={index}
											className="flex items-start gap-3 text-sm sm:text-base font-sans text-[#CCCCCC] leading-relaxed"
										>
											<span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#A6A6A6] shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Tecnologías Utilizadas */}
					<div className="pt-6 border-t border-[#2A2A2A]">
						<h4 className="text-xs font-mono text-[#A6A6A6] uppercase tracking-wider mb-3">
							{t.work.modalLabels.technologies}
						</h4>
						<div className="flex flex-wrap gap-2">
							{experience.technologies.map((tech) => (
								<span
									key={tech}
									className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#333333] text-[#E0E0E0]"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
