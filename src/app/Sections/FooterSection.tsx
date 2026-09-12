// components/FooterSection.tsx
"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { SocialLinksBar } from "@/app/components/SocialLinksBar";

export default function FooterSection() {
	const { t } = useLanguage();

	return (
		<footer
			id="contact"
			className="w-full max-w-7xl mx-auto px-6 py-20 text-white"
		>
			<div className="space-y-6 mb-20">
				<div className="flex flex-col md:flex-row md:flex-row-reverse md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-8">
					<div>
						<span className="font-mono text-xs text-[#A6A6A6] block mb-2 text-right">
							{t.contact.tag}
						</span>
						<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight">
							{t.contact.title}
						</h2>
					</div>
					<p className="font-sans text-sm text-[#A6A6A6] max-w-md leading-relaxed">
						{t.contact.subtitle}
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto space-y-12">
				{/* --- FILA SUPERIOR: Nombre Gigante (Izq) + Menú & Card Site (Der) --- */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
					{/* Columna Izquierda: Nombre + Apellidos desfasados con subtítulo centrado */}
					<div className="lg:col-span-7 flex flex-col justify-end space-y-4">
						<div className="font-sans font-bold tracking-tight leading-none text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
							{/* Primera línea: Nombre */}
							<div>Manuel Alejandro</div>

							{/* Segunda línea: Alineada verticalmente al centro (sm:items-center) */}
							<div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
								{/* Mantiene el texto en una sola línea sin romper la fila */}
								<p className="order-2 sm:order-1 font-mono text-[10px] sm:text-xs md:text-sm text-[#888888] font-normal tracking-normal uppercase whitespace-nowrap">
									{t.contact.role}
								</p>

								{/* Apellidos desfasados */}
								<div className="order-1 sm:order-2 sm:ml-auto whitespace-nowrap">
									Murillo Macias
								</div>
							</div>
						</div>
					</div>

					{/* Columna Derecha: Navigation + Card Site */}
					<div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6 ">
						{/* Links de navegación */}
						<nav className="flex flex-wrap justify-between w-full font-mono text-xs text-[#CCCCCC] max-w-100">
							<Link
								href="/"
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

						{/* Card "Site" */}
						<div className="w-full bg-[#121212] border border-[#262626] rounded-3xl p-6 space-y-3 shadow-lg max-w-100">
							<h4 className="font-sans text-sm font-semibold text-white">
								{t.contact.siteTitle}
							</h4>
							<div className="font-mono text-xs text-[#888888] space-y-1.5 leading-relaxed">
								<p>{t.contact.poweredBy}</p>
								<p>{t.contact.styledWith}</p>
								<p>{t.contact.writtenIn}</p>
							</div>
						</div>
					</div>
				</div>

				{/* --- FILA INFERIOR: Redes Sociales --- */}
				<div className="pt-6 border-t border-[#1F1F1F]">
					<SocialLinksBar />
				</div>
			</div>
		</footer>
	);
}
