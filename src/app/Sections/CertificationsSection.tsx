// components/CertificationsSection.tsx
"use client";

import { Award, ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS_DATA } from "@/app/constants/certificationsData";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CertificationsSection() {
	const { t } = useLanguage();

	return (
		<section
			id="education"
			className="w-full max-w-7xl mx-auto px-6 py-16 text-white"
		>
			{/* Encabezado de la sección */}
			<div className="space-y-6 mb-16">
				<div className="flex flex-col md:flex-row md:flex-row-reverse md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-8">
					<div>
						<span className="font-mono text-xs text-[#A6A6A6] block mb-2 text-right">
							{t.certifications?.tag ||
								"... /Educación & Logros ..."}
						</span>
						<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight text-right">
							{t.certifications?.title || "Títulos y Cursos"}
						</h2>
					</div>
					<p className="font-sans text-justify md:text-left text-sm text-[#A6A6A6] w-full md:max-w-md leading-relaxed">
						{t.certifications?.subtitle ||
							"Formación académica, certificaciones profesionales y cursos de especialización continua."}
					</p>
				</div>
			</div>

			{/* Listado Grid de Certificaciones/Cursos */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{CERTIFICATIONS_DATA.map((item) => {
					const hasLink = Boolean(item.credentialUrl);

					const CardContent = () => (
						<div className="group relative flex flex-col justify-between h-full bg-[#121212] border border-[#222222] hover:border-[#444444] rounded-3xl p-6 transition-all duration-300 hover:bg-[#161616] shadow-md">
							<div className="space-y-4">
								{/* Fila Superior: Icono y Año */}
								<div className="flex items-center justify-between">
									<div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-white group-hover:bg-white group-hover:text-[#121212] transition-colors">
										<Award className="w-5 h-5" />
									</div>
									<span className="font-mono text-xs text-[#888888] bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#262626]">
										{item.date}
									</span>
								</div>

								{/* Título e Institución */}
								<div>
									<h3 className="font-sans font-bold text-lg text-white group-hover:text-white transition-colors">
										{item.title}
									</h3>
									<p className="font-mono text-xs text-[#A6A6A6] mt-1">
										{item.issuer}
									</p>
								</div>

								{/* Habilidades relativas */}
								{item.skills && item.skills.length > 0 && (
									<div className="flex flex-wrap gap-1.5 pt-2">
										{item.skills.map((skill, index) => (
											<span
												key={index}
												className="font-mono text-[10px] text-[#777777] bg-[#1A1A1A] px-2 py-0.5 rounded border border-[#222222]"
											>
												{skill}
											</span>
										))}
									</div>
								)}
							</div>

							{/* Pie de tarjeta: Indicador o Enlace */}
							<div className="pt-6 mt-4 border-t border-[#1F1F1F] flex items-center justify-between font-mono text-xs text-[#888888]">
								<span>
									{hasLink
										? "Ver credencial"
										: "Título Profesional"}
								</span>
								{hasLink && (
									<div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1A1A1A] text-white group-hover:bg-white group-hover:text-[#121212] transition-colors">
										<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
									</div>
								)}
							</div>
						</div>
					);

					return hasLink ? (
						<a
							key={item.id}
							href={item.credentialUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="block h-full cursor-pointer"
						>
							<CardContent />
						</a>
					) : (
						<div key={item.id} className="h-full">
							<CardContent />
						</div>
					);
				})}
			</div>
		</section>
	);
}
