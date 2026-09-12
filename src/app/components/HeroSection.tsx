// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HeroSection() {
	const { t } = useLanguage();

	return (
		<section className="w-full max-w-7xl mx-auto px-6 pt-8 pb-20 space-y-16">
			{/* --- HERO HEADER --- */}
			<div className="space-y-6">
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
					<h1 className="font-mono text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-none">
						Full-stack <br /> Developer
					</h1>
					<div className="flex items-center gap-3 self-start md:self-end">
						<Link
							href="#projects"
							className="bg-[#F5F5F5] text-[#121212] font-mono font-medium px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white transition-all text-base"
						>
							{t.hero.projectsBtn}
							<span className="bg-[#121212] text-white p-2 rounded-full">
								<ArrowUpRight className="w-4 h-4" />
							</span>
						</Link>
					</div>
				</div>

				<p className="max-w-xl text-[#A6A6A6] font-sans text-base sm:text-lg">
					{t.hero.bio}
				</p>

				{/* Links / Redes Sociales */}
				<div className="flex flex-wrap gap-3 pt-2">
					<a
						href="https://github.com"
						target="_blank"
						rel="noreferrer"
						className="border border-[#3D3D3D] bg-[#1E1E1E] hover:border-white/40 text-[#A6A6A6] hover:text-white font-mono text-xs px-4 py-2 rounded-full flex items-center gap-2 transition-all"
					>
						<svg
							className="w-3.5 h-3.5 fill-current"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
						GitHub
					</a>

					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer"
						className="border border-[#3D3D3D] bg-[#1E1E1E] hover:border-white/40 text-[#A6A6A6] hover:text-white font-mono text-xs px-4 py-2 rounded-full flex items-center gap-2 transition-all"
					>
						<svg
							className="w-3.5 h-3.5 fill-current"
							viewBox="0 0 24 24"
						>
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
						LinkedIn
					</a>

					<a
						href="mailto:tu-email@ejemplo.com"
						className="border border-[#3D3D3D] bg-[#1E1E1E] hover:border-white/40 text-[#A6A6A6] hover:text-white font-mono text-xs px-4 py-2 rounded-full flex items-center gap-2 transition-all"
					>
						<Mail className="w-3.5 h-3.5" />
						Contacto
					</a>
				</div>
			</div>

			{/* --- BENTO GRID: ABOUT ME & SKILLS --- */}
			<div
				id="about"
				className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start"
			>
				<div className="lg:col-span-7 space-y-4">
					<span className="font-mono text-xs text-[#A6A6A6] block mb-4">
						{t.hero.aboutTitle}
					</span>

					<div className="border border-[#3D3D3D] bg-[#1E1E1E]/60 p-6 rounded-3xl space-y-3">
						<h3 className="font-mono text-sm text-white font-semibold">
							{t.hero.frontend}
						</h3>
						<p className="font-mono text-xs text-[#A6A6A6] leading-relaxed">
							TypeScript / React / Vue.js / Next.js / React Native
							/ Redux Toolkit / Tailwind CSS / HTML5 / CSS3
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="border border-[#3D3D3D] bg-[#1E1E1E]/60 p-6 rounded-3xl space-y-3">
							<h3 className="font-mono text-sm text-white font-semibold">
								{t.hero.backend}
							</h3>
							<p className="font-mono text-xs text-[#A6A6A6] leading-relaxed">
								Node.js / C# .NET / Express / PostgreSQL / SQL
								Server / REST APIs / Prisma / Supabase
							</p>
						</div>

						<div className="border border-[#3D3D3D] bg-[#1E1E1E]/60 p-6 rounded-3xl space-y-3">
							<h3 className="font-mono text-sm text-white font-semibold">
								{t.hero.devops}
							</h3>
							<p className="font-mono text-xs text-[#A6A6A6] leading-relaxed">
								Git / GitHub / Vercel / Docker / Postman / CI/CD
							</p>
						</div>
					</div>
				</div>

				<div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
					<div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-[#3D3D3D] bg-[#1E1E1E]">
						<div className="w-full h-full bg-[#1E1E1E] flex items-center justify-center text-[#A6A6A6] font-mono text-xs">
							[ Foto / Imagen aquí ]
						</div>
					</div>
					<div className="w-full max-w-md space-y-2">
						<p className="font-mono text-sm text-white">
							{t.hero.introTitle}
						</p>
						<p className="font-sans text-xs text-[#A6A6A6]">
							{t.hero.introBio}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
