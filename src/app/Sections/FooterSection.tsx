// components/FooterSection.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { SocialLinksBar } from "@/app/components/SocialLinksBar";
import { CONTACT_DATA, getWhatsappUrl } from "@/app/constants/contactData";

export default function FooterSection() {
	const { t } = useLanguage();

	return (
		<footer
			id="contact"
			className="w-full max-w-7xl mx-auto px-6 py-20 text-white"
		>
			<div className="space-y-6 mb-20">
				<div className="flex flex-col md:flex-row  md:items-end justify-between gap-4 border-b border-[#3D3D3D] pb-8">
					<div>
						<span className="font-mono text-xs text-[#A6A6A6] block mb-2 text-left">
							{t.contact.tag}
						</span>
						<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight text-left">
							{t.contact.title}
						</h2>
					</div>
					<p className="font-sans text-justify md:text-right text-sm text-[#A6A6A6] w-full md:max-w-md leading-relaxed">
						{t.contact.subtitle}
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto space-y-12">
				{/* --- FILA SUPERIOR: Nombre Gigante (Izq) + Menú & Card Contacto (Der) --- */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
					{/* Columna Izquierda: Nombre + Apellidos */}
					<div className="lg:col-span-7 flex flex-col justify-end space-y-4">
						<div className="font-sans font-bold tracking-tight leading-none text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
							<div>Manuel Alejandro</div>
							<div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
								<p className="order-2 sm:order-1 font-mono text-[10px] sm:text-xs md:text-sm text-[#888888] font-normal tracking-normal uppercase whitespace-nowrap">
									{t.contact.role}
								</p>
								<div className="order-1 sm:order-2 sm:ml-auto whitespace-nowrap">
									Murillo Macias
								</div>
							</div>
						</div>
					</div>

					{/* Columna Derecha: Navigation + Card Contacto */}
					<div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
						{/* Card "Contacto Rápido" */}
						<div className="w-full bg-[#121212] border border-[#262626] rounded-3xl p-6 space-y-4 shadow-lg max-w-100">
							<div className="flex items-center justify-between">
								<span className="font-mono text-xs text-[#888888]">
									Contacto directo
								</span>
								<span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
									<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
									Disponible
								</span>
							</div>

							<div>
								<h4 className="font-sans text-base font-semibold text-white">
									¿Tienes un proyecto en mente?
								</h4>
								<p className="font-mono text-xs text-[#888888] mt-1">
									Escríbeme por tu canal preferido y lo
									platicamos.
								</p>
							</div>

							<div className="space-y-2.5 pt-1">
								{/* Botón 1: Email */}
								<a
									href={`mailto:${CONTACT_DATA.email}`}
									className="group flex items-center justify-between w-full bg-[#F5F5F5] hover:bg-white text-[#121212] rounded-full pl-4 pr-1 py-1 text-xs font-mono font-medium transition-all duration-300 shadow-sm active:scale-95"
								>
									<span className="flex items-center gap-2">
										<Mail className="w-3.5 h-3.5 text-[#555555]" />
										Enviar Correo
									</span>
									<div className="flex items-center justify-center bg-[#121212] text-white w-7 h-7 rounded-full">
										<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
									</div>
								</a>

								{/* Botón 2: WhatsApp */}
								<a
									href={getWhatsappUrl()}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-between w-full bg-[#1A1A1A] hover:bg-[#222222] text-[#CCCCCC] hover:text-white border border-[#262626] rounded-full pl-4 pr-1 py-1 text-xs font-mono font-medium transition-all duration-300 active:scale-95"
								>
									<span className="flex items-center gap-2">
										<MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
										Enviar WhatsApp
									</span>
									<div className="flex items-center justify-center bg-[#262626] text-white w-7 h-7 rounded-full">
										<ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
									</div>
								</a>
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
