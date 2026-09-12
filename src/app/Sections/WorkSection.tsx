// components/WorkSection.tsx
"use client";

import { useState } from "react";
import { WORK_EXPERIENCES, WorkExperience } from "@/app/constants/workData";
import { WorkModal } from "../components/WorkModal";
import { useLanguage } from "../context/LanguageContext";

export default function WorkSection() {
	const { t } = useLanguage();
	const [selectedExperience, setSelectedExperience] =
		useState<WorkExperience | null>(null);

	return (
		<section
			id="experience"
			className="w-full max-w-7xl mx-auto px-6 py-16 text-white"
		>
			<div className="space-y-6 mb-20">
				<div className="flex flex-col md:flex-row md:flex-row-reverse md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-8">
					<div>
						<span className="font-mono text-xs text-[#A6A6A6] block mb-2 text-right">
							{t.work.tag}
						</span>
						<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight">
							{t.work.title}
						</h2>
					</div>
					<p className="font-sans text-sm text-[#A6A6A6] max-w-md leading-relaxed">
						{t.work.subtitle}
					</p>
				</div>
			</div>

			{/* Listado de trabajos (Tabla) */}
			<div className="w-full border-t border-[#222222]">
				{WORK_EXPERIENCES.map((exp) => (
					<div
						key={exp.id}
						onClick={() => setSelectedExperience(exp)}
						className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 sm:px-6 py-6 border-b border-[#222222] transition-colors duration-200 cursor-pointer hover:bg-[#F5F5F5] hover:text-[#121212]"
					>
						{/* Periodo y Duración */}
						<div className="md:col-span-3 flex flex-col font-mono text-xs sm:text-sm text-[#A6A6A6] group-hover:text-[#444444] transition-colors">
							<span className="font-semibold text-white group-hover:text-[#121212]">
								{exp.period}
							</span>
							<span className="text-xs text-[#777777] group-hover:text-[#666666]">
								{exp.duration}
							</span>
						</div>

						{/* Nombre de la Empresa */}
						<div className="md:col-span-4 font-sans font-bold text-base sm:text-xl text-white group-hover:text-[#121212] transition-colors">
							{exp.company}
						</div>

						{/* Rol y Stack */}
						<div className="md:col-span-5 font-mono text-xs sm:text-sm text-[#CCCCCC] group-hover:text-[#222222] flex items-center gap-2 transition-colors">
							<span>{exp.role}</span>
							<span className="text-[#555555] group-hover:text-[#888888]">
								|
							</span>
							<span className="text-[#A6A6A6] group-hover:text-[#444444]">
								{exp.stack}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Total de Experiencia al Pie */}
			<div className="flex flex-col items-end pt-8 text-right">
				<span className="font-sans text-xs text-[#777777] uppercase tracking-wider">
					Work experience
				</span>
				<span className="font-mono text-sm sm:text-base text-[#A6A6A6] mt-1">
					4 years 9 months
				</span>
			</div>

			{/* Modal interactivo */}
			<WorkModal
				experience={selectedExperience}
				onClose={() => setSelectedExperience(null)}
			/>
		</section>
	);
}
