// components/WorkSection.tsx
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { WORK_EXPERIENCES, WorkExperienceItem } from "@/app/constants/workData";
import { WorkModal } from "../components/WorkModal";
import { useLanguage } from "../context/LanguageContext";

export default function WorkSection() {
	const { t } = useLanguage();
	const [selectedExperience, setSelectedExperience] =
		useState<WorkExperienceItem | null>(null);

	const handleRowClick = (exp: WorkExperienceItem) => {
		// En desktop (>= 768px) abre al hacer clic en cualquier parte de la fila
		if (window.innerWidth >= 768) {
			setSelectedExperience(exp);
		}
	};

	const handleButtonClick = (
		e: React.MouseEvent,
		exp: WorkExperienceItem,
	) => {
		e.stopPropagation(); // Evita interferencias con el clic padre
		setSelectedExperience(exp);
	};

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
						<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight text-right">
							{t.work.title}
						</h2>
					</div>
					<p className="font-sans text-justify md:text-left text-sm text-[#A6A6A6] w-full md:max-w-md leading-relaxed">
						{t.work.subtitle}
					</p>
				</div>
			</div>

			{/* Listado de trabajos */}
			<div className="w-full border-[#222222]">
				{WORK_EXPERIENCES.map((exp) => {
					const translation =
						t.work.items[exp.id as keyof typeof t.work.items];

					return (
						<div
							key={exp.id}
							onClick={() => handleRowClick(exp)}
							className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4 sm:px-6 py-6 border-b border-[#222222] transition-colors duration-200 cursor-default md:cursor-pointer hover:bg-[#F5F5F5] hover:text-[#121212]"
						>
							{/* Columna 1: Periodo, Duración y Botón Móvil */}
							<div className="md:col-span-3 flex items-start justify-between md:flex-col font-mono text-xs sm:text-sm text-[#A6A6A6] group-hover:text-[#444444] transition-colors">
								<div className="flex flex-col">
									<span className="font-semibold text-white group-hover:text-[#121212]">
										{exp.period}
									</span>
									<span className="text-xs text-[#777777] group-hover:text-[#666666]">
										{translation?.duration}
									</span>
								</div>

								{/* Botón interactivo exclusivo para Móvil */}
								<button
									type="button"
									onClick={(e) => handleButtonClick(e, exp)}
									className="md:hidden inline-flex items-center bg-[#F5F5F5] text-[#121212] rounded-full pl-3 pr-1 py-1 shadow-sm active:scale-95 transition-transform cursor-pointer"
								>
									<span className="font-serif italic text-xs font-medium pr-1.5">
										{t.work.viewDetails || "Ver detalle"}
									</span>
									<div className="flex items-center justify-center bg-[#121212] text-white w-5 h-5 rounded-full">
										<ArrowUpRight className="w-3 h-3" />
									</div>
								</button>
							</div>

							{/* Columna 2: Empresa (3 de 12) */}
							<div className="md:col-span-3 font-sans font-bold text-base sm:text-lg text-white group-hover:text-[#121212] transition-colors pr-2">
								{exp.company}
							</div>

							{/* Columna 3: Rol (3 de 12) */}
							<div className="md:col-span-3 font-mono text-xs sm:text-sm text-[#CCCCCC] group-hover:text-[#222222] transition-colors pr-2">
								{translation?.role}
							</div>

							{/* Columna 4: Stack */}
							<div className="md:col-span-3 font-mono text-xs sm:text-sm text-[#A6A6A6] group-hover:text-[#444444] transition-colors md:border-l md:border-[#333333] group-hover:md:border-[#CCCCCC] md:pl-4">
								{exp.stack}
							</div>
						</div>
					);
				})}
			</div>

			{/* Pie de sección */}
			<div className="flex flex-col items-end pt-8 text-right">
				<span className="font-sans text-xs text-[#777777] uppercase tracking-wider">
					{t.work.totalExperienceLabel}
				</span>
				<span className="font-mono text-sm sm:text-base text-[#A6A6A6] mt-1">
					{t.work.totalExperienceValue}
				</span>
			</div>

			{/* Modal de Detalle */}
			<WorkModal
				experience={selectedExperience}
				onClose={() => setSelectedExperience(null)}
			/>
		</section>
	);
}
