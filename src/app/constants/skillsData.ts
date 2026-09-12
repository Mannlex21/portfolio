// data/skillsData.ts

export interface SkillCategory {
	id: string;
	title: string;
	skills: string[];
	highlighted?: boolean;
	align: "left" | "right";
	widthClass: string;
}

export const SKILLS_DATA: SkillCategory[] = [
	{
		id: "frontend",
		title: "Front-end",
		skills: [
			"TypeScript",
			"React",
			"Vue",
			"NextJs",
			"Angular",
			"Redux Toolkit",
			"React Native",
			"Tailwind CSS",
		],
		highlighted: true,
		align: "left",
		widthClass: "sm:w-[88%]",
	},
	{
		id: "styles",
		title: "Styles",
		skills: ["Tailwind CSS", "SCSS", "SASS", "PostCSS", "Material UI"],
		highlighted: false,
		align: "right",
		widthClass: "sm:w-[82%]",
	},
	{
		id: "backend",
		title: "Back-end",
		skills: [
			"C# .NET",
			"Node.js",
			"Express",
			"SQL Server",
			"PostgreSQL",
			"MySQL",
			"RESTful APIs",
		],
		highlighted: true,
		align: "left",
		widthClass: "sm:w-[85%] sm:ml-4",
	},
	{
		id: "devops",
		title: "DevOps & Tools",
		skills: ["Git", "Docker", "CI/CD", "Vercel", "Azure"],
		highlighted: false,
		align: "right",
		widthClass: "sm:w-[80%]",
	},
];
