// components/WorkModal.tsx
"use client";

import { useEffect } from "react";
import { X, Calendar, MapPin } from "lucide-react";
import { WorkExperience } from "@/app/constants/workData";

interface WorkModalProps {
	experience: WorkExperience | null;
	onClose: () => void;
}

export function WorkModal({ experience, onClose }: WorkModalProps) {
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

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
			{/* Backdrop */}
			<div className="absolute inset-0" onClick={onClose} />

			{/* Contenido del Modal */}
			<div className="relative w-full max-w-2xl bg-[#141414] border border-[#2D2D2D] rounded-3xl p-6 sm:p-8 z-10 text-white shadow-2xl overflow-hidden">
				{/* Botón Cerrar */}
				<button
					onClick={onClose}
					className="absolute top-6 right-6 p-2 rounded-full bg-[#1E1E1E] text-[#A6A6A6] hover:text-white hover:bg-[#2A2A2A] transition-colors cursor-pointer"
				>
					<X className="w-5 h-5" />
				</button>

				{/* Header */}
				<div className="space-y-2 pr-10">
					<span className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wider">
						{experience.role}
					</span>
					<h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
						{experience.company}
					</h3>
					<div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A6A6A6] pt-1">
						<span className="flex items-center gap-1.5">
							<Calendar className="w-3.5 h-3.5" />
							{experience.period} ({experience.duration})
						</span>
						{experience.location && (
							<span className="flex items-center gap-1.5">
								<MapPin className="w-3.5 h-3.5" />
								{experience.location}
							</span>
						)}
					</div>
				</div>

				<hr className="my-6 border-[#2A2A2A]" />

				{/* Responsabilidades */}
				<div className="space-y-4">
					<h4 className="text-xs font-mono text-[#A6A6A6] uppercase tracking-wider">
						Responsabilidades & Logros
					</h4>
					<ul className="space-y-2.5">
						{experience.description.map((item, index) => (
							<li
								key={index}
								className="flex items-start gap-3 text-sm font-sans text-[#CCCCCC] leading-relaxed"
							>
								<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F5F5F5] shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Technologies */}
				<div className="mt-8 pt-6 border-t border-[#2A2A2A]">
					<h4 className="text-xs font-mono text-[#A6A6A6] uppercase tracking-wider mb-3">
						Tecnologías Utilizadas
					</h4>
					<div className="flex flex-wrap gap-2">
						{experience.technologies.map((tech) => (
							<span
								key={tech}
								className="font-mono text-xs px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#333333] text-[#E0E0E0]"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
