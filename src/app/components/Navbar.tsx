// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
	const { language, toggleLanguage, t } = useLanguage();

	return (
		<header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
			<div className="font-mono text-sm tracking-wider uppercase">
				<span className="block font-bold text-white">Manuel</span>
				<span className="text-[#A6A6A6]">Murillo</span>
			</div>

			<nav className="hidden md:flex space-x-8 font-mono text-sm text-[#A6A6A6]">
				<Link
					href="#about"
					className="hover:text-white transition-colors"
				>
					{t.nav.about}
				</Link>
				<Link
					href="#projects"
					className="hover:text-white transition-colors"
				>
					{t.nav.projects}
				</Link>
				<Link
					href="#experience"
					className="hover:text-white transition-colors"
				>
					{t.nav.work}
				</Link>
				<Link
					href="#contact"
					className="hover:text-white transition-colors"
				>
					{t.nav.contacts}
				</Link>
			</nav>

			{/* Botón interactivo de cambio de idioma */}
			<button
				onClick={toggleLanguage}
				className="border border-[#3D3D3D] hover:border-white/50 rounded-full px-4 py-1 text-xs font-mono text-[#A6A6A6] hover:text-white transition-all cursor-pointer select-none"
			>
				<span
					className={language === "es" ? "text-white font-bold" : ""}
				>
					Es
				</span>
				{" / "}
				<span
					className={language === "en" ? "text-white font-bold" : ""}
				>
					En
				</span>
			</button>
		</header>
	);
}
