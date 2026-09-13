// components/AboutSection.tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { SKILLS_DATA } from "@/app/constants/skillsData";
import SkillCard from "../components/SkillCard";

export default function AboutSection() {
	const { t } = useLanguage();

	return (
		<section
			id="about"
			className="w-full max-w-7xl mx-auto px-6 py-20 text-white"
		>
			{/* --- ENCABEZADO: Breadcrumb + Saludo dinámico --- */}
			<div className="flex flex-col justify-start gap-6 mb-8 md:mb-16">
				<div className="font-mono text-xs sm:text-sm text-[#A6A6A6]">
					{t.about.tag}
				</div>
				<div className="font-sans text-xl sm:text-2xl md:text-3xl text-[#CCCCCC] text-center  md:text-right leading-relaxed italic max-w-4xl ml-auto">
					{t.about.intro}
				</div>
			</div>

			{/* --- CONTENIDO PRINCIPAL --- */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
				{/* 1. Fotografía de perfil (Móvil: Order 1 | Desktop: Order 2 a la derecha) */}
				<div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center h-full min-h-[400px]">
					<div className="relative w-[80%] h-[380px] sm:h-[460px] rounded-[2rem] overflow-hidden border border-[#2A2A2A] bg-[#121212] shadow-2xl transition-transform hover:-translate-y-0.5 duration-300">
						<Image
							src="/images/profile.png"
							alt="Manuel Alejandro - Fullstack Developer"
							fill
							sizes="(max-width: 1024px) 80vw, 30vw"
							className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
							priority
						/>
					</div>
				</div>

				{/* 2. Cards de habilidades (Móvil: Order 2 abajo | Desktop: Order 1 a la izquierda) */}
				<div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6 justify-center">
					{SKILLS_DATA.map((category) => (
						<SkillCard key={category.id} category={category} />
					))}
				</div>
			</div>
		</section>
	);
}
