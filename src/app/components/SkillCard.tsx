// components/SkillCard.tsx
import { SkillCategory } from "@/app/constants/skillsData";

interface SkillCardProps {
	category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
	const { title, skills, highlighted, align, widthClass } = category;

	// Clases condicionales según el estado destacado (Highlight vs Normal)
	const containerStyles = highlighted
		? "bg-[#F5F5F5] text-[#121212] shadow-lg"
		: "bg-[#121212] border border-[#2A2A2A] text-[#E0E0E0] hover:border-[#444444]";

	const titleStyles = highlighted ? "text-[#121212]" : "text-[#E0E0E0]";
	const textStyles = highlighted ? "text-[#333333]" : "text-[#A6A6A6]";
	const separatorStyles = highlighted ? "text-[#888888]" : "text-[#555555]";
	const alignmentClass = align === "left" ? "self-start" : "self-end";

	return (
		<div
			className={`w-full cursor-default ${widthClass} ${alignmentClass} ${containerStyles} p-6 sm:p-7 rounded-3xl transition-transform hover:-translate-y-0.5 duration-300`}
		>
			<h3
				className={`font-sans text-xl sm:text-2xl font-bold mb-3 ${titleStyles}`}
			>
				{title}
			</h3>
			<p
				className={`font-mono text-xs sm:text-sm leading-relaxed ${textStyles}`}
			>
				{skills.map((skill, index) => (
					<span key={skill}>
						{skill}
						{index < skills.length - 1 && (
							<span className={`mx-1.5 ${separatorStyles}`}>
								/
							</span>
						)}
					</span>
				))}
			</p>
		</div>
	);
}
