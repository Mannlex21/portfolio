// components/HeroSection.tsx
"use client";

import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import { SocialLinksBar } from "../components/SocialLinksBar";

export default function HeroSection() {
	const { t } = useLanguage();

	return (
		<section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col justify-center">
			{/* CONTENEDOR PRINCIPAL: Grid responsivo con reordenamiento para móvil */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
				{/* 1. "Full-stack" */}
				<div className="order-1 lg:col-span-7">
					<h1 className="font-sans text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-tight leading-none text-start">
						{t.about.heroTitle1}
					</h1>
				</div>

				{/* 2. Botón "Ver proyectos" */}
				<div className="order-4 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
					<Link
						href="#projects"
						className="group flex items-center justify-end w-64 sm:w-80 md:w-96 bg-[#F5F5F5] hover:bg-white text-[#121212] rounded-full pl-6 sm:pl-8 pr-1.5 sm:pr-2 py-2 sm:py-2.5 transition-all duration-300 shadow-md active:scale-95"
					>
						{/* Texto con tipografía Serif e itálica */}
						<span className="font-serif text-center w-full italic text-base sm:text-lg md:text-xl font-medium">
							{t.about.projectsBtn}
						</span>

						{/* Círculo oscuro con la flecha */}
						<div className="flex items-center justify-center bg-[#121212] text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full shrink-0 transition-transform duration-300">
							<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5  transition-transform" />
						</div>
					</Link>
				</div>

				{/* 3. Descripción / Bio resumida del CV */}
				<div className="order-3 lg:col-span-5 pt-2">
					<p className="font-sans text-[#A6A6A6] text-sm sm:text-base leading-relaxed w-full lg:max-w-md">
						{t.about.bio}
					</p>
				</div>

				{/* 4. "Developer" */}
				<div className="order-2 lg:order-4 lg:col-span-7 flex justify-end">
					<h1 className="font-sans text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-tight leading-none">
						{t.about.heroTitle2}
					</h1>
				</div>
			</div>

			{/* Redes Sociales */}
			<div className="mt-10 sm:mt-14">
				<SocialLinksBar />
			</div>
		</section>
	);
}
