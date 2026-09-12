// components/WorkSection.tsx
"use client";

import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface Experience {
	companyEs: string;
	companyEn: string;
	role: string;
	periodEs: string;
	periodEn: string;
	descriptionEs: string;
	descriptionEn: string;
	skills: string[];
}

const experiences: Experience[] = [
	{
		companyEs: "Software Developer / Remoto",
		companyEn: "Software Developer / Remote",
		role: "Full-stack Developer & Frontend Advisor",
		periodEs: "2021 — Presente",
		periodEn: "2021 — Present",
		descriptionEs:
			"Desarrollo y mantenimiento de aplicaciones web y móviles para clientes en sector público y privado. Liderazgo técnico en decisiones de arquitectura frontend, integración de APIs REST y optimización de rendimiento.",
		descriptionEn:
			"Development and maintenance of web and mobile applications for public and private sector clients. Technical leadership in frontend architecture decisions, REST API integration, and performance optimization.",
		skills: [
			"Angular",
			"React",
			"Vue.js",
			"TypeScript",
			"C# .NET",
			"SQL Server",
			"Tailwind CSS",
		],
	},
	{
		companyEs: "Proyectos Independientes",
		companyEn: "Independent Projects",
		role: "UI & Mobile App Developer",
		periodEs: "2018 — 2021",
		periodEn: "2018 — 2021",
		descriptionEs:
			"Diseño e implementación de dashboards interactivos, aplicaciones de finanzas personales en React Native y plantillas de automatización.",
		descriptionEn:
			"Design and implementation of interactive dashboards, personal finance applications in React Native, and automation templates.",
		skills: [
			"React Native",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"Redux Toolkit",
		],
	},
];

export default function WorkSection() {
	const { language, t } = useLanguage();

	return (
		<section
			id="experience"
			className="w-full max-w-7xl mx-auto px-6 py-20 space-y-12"
		>
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-6">
				<div>
					<span className="font-mono text-xs text-[#A6A6A6] block mb-2">
						{t.work.tag}
					</span>
					<h2 className="font-mono text-3xl sm:text-4xl font-semibold text-white tracking-tight">
						{t.work.title}
					</h2>
				</div>
				<p className="font-sans text-xs sm:text-sm text-[#A6A6A6] max-w-md">
					{t.work.subtitle}
				</p>
			</div>

			<div className="space-y-6">
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="border border-[#3D3D3D] bg-[#1E1E1E]/40 hover:bg-[#1E1E1E]/70 p-6 sm:p-8 rounded-3xl transition-all duration-300 space-y-4"
					>
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#3D3D3D]/50 pb-4">
							<div>
								<span className="font-mono text-xs text-[#A6A6A6] uppercase tracking-wider flex items-center gap-2">
									<Briefcase className="w-3.5 h-3.5" />
									{language === "es"
										? exp.companyEs
										: exp.companyEn}
								</span>
								<h3 className="font-mono text-lg sm:text-xl font-semibold text-white mt-1">
									{exp.role}
								</h3>
							</div>

							<div className="font-mono text-xs text-[#A6A6A6] bg-[#121212] border border-[#3D3D3D] px-3 py-1.5 rounded-full self-start md:self-auto flex items-center gap-2">
								<Calendar className="w-3.5 h-3.5" />
								{language === "es"
									? exp.periodEs
									: exp.periodEn}
							</div>
						</div>

						<p className="font-sans text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
							{language === "es"
								? exp.descriptionEs
								: exp.descriptionEn}
						</p>

						<div className="flex flex-wrap gap-2 pt-2">
							{exp.skills.map((skill) => (
								<span
									key={skill}
									className="font-mono text-[10px] text-[#A6A6A6] bg-[#121212] border border-[#3D3D3D] px-3 py-1 rounded-full"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
