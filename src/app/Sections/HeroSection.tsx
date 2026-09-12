// components/HeroSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
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
						className="group flex items-center gap-2 cursor-pointer"
					>
						{/* Cápsula expandida */}
						<div className="flex items-center justify-center bg-[#F5F5F5] group-hover:bg-white text-[#121212] w-64 sm:w-80 md:w-96 h-15 rounded-full transition-all duration-300 shadow-md">
							<span className="font-serif italic text-lg sm:text-xl font-medium">
								{t.about.projectsBtn}
							</span>
						</div>
						{/* Botón circular con flecha */}
						<div className="flex items-center justify-center bg-[#F5F5F5] group-hover:bg-white text-[#121212] w-15 h-15 rounded-full transition-all duration-300">
							<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
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
