// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
	const { language, toggleLanguage, t } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1F1F1F] py-4"
					: "bg-transparent py-8"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
				<Link
					href="/"
					className="font-mono  tracking-wider uppercase group"
				>
					<span className="text-xs block font-bold text-white group-hover:text-gray-300 transition-colors">
						Manuel Alejandro
					</span>
					<span className="text-md text-[#888888]">
						Murillo Macias
					</span>
				</Link>

				<nav className="hidden md:flex space-x-8 font-mono text-xs text-[#A6A6A6]">
					<Link
						href="#"
						className="hover:text-white transition-colors"
					>
						{t.nav.main}
					</Link>
					<Link
						href="#about"
						className="hover:text-white transition-colors duration-200"
					>
						{t.nav.about}
					</Link>
					<Link
						href="#experience"
						className="hover:text-white transition-colors duration-200"
					>
						{t.nav.work}
					</Link>
					<Link
						href="#projects"
						className="hover:text-white transition-colors duration-200"
					>
						{t.nav.projects}
					</Link>

					<Link
						href="#contact"
						className="hover:text-white transition-colors duration-200"
					>
						{t.nav.contacts}
					</Link>
				</nav>

				{/* Botón de cambio de idioma minimalista */}
				<button
					onClick={toggleLanguage}
					className="border border-[#2D2D2D] hover:border-[#555555] rounded-full px-3 py-1 text-xs font-mono text-[#888888] hover:text-white transition-all cursor-pointer select-none"
				>
					<span
						className={
							language === "es" ? "text-white font-semibold" : ""
						}
					>
						Es
					</span>
					<span className="text-[#444444] mx-1">/</span>
					<span
						className={
							language === "en" ? "text-white font-semibold" : ""
						}
					>
						En
					</span>
				</button>
			</div>
		</header>
	);
}
