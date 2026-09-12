// components/FooterSection.tsx
"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function FooterSection() {
	const { t } = useLanguage();

	return (
		<footer
			id="contact"
			className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12 border-t border-[#3D3D3D] space-y-12"
		>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
				<div className="space-y-4 max-w-xl">
					<span className="font-mono text-xs text-[#A6A6A6] block">
						{t.footer.tag}
					</span>
					<h2 className="font-mono text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-none">
						{t.footer.title}
					</h2>
					<p className="font-sans text-xs sm:text-sm text-[#A6A6A6]">
						{t.footer.subtitle}
					</p>
				</div>

				<a
					href="mailto:tu-email@ejemplo.com"
					className="bg-[#F5F5F5] text-[#121212] font-mono font-medium px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white transition-all text-base"
				>
					<Mail className="w-4 h-4" />
					{t.footer.btn}
					<span className="bg-[#121212] text-white p-2 rounded-full">
						<ArrowUpRight className="w-4 h-4" />
					</span>
				</a>
			</div>

			<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#3D3D3D]/50 gap-4 font-mono text-xs text-[#A6A6A6]">
				<p>
					© {new Date().getFullYear()} Manuel Murillo.{" "}
					{t.footer.rights}
				</p>
				<p>Built with Next.js & Tailwind CSS</p>
			</div>
		</footer>
	);
}
