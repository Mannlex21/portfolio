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
		title: "Frontend & UI Architecture",
		skills: [
			"Angular 17+",
			"React",
			"Next.js (App Router)",
			"Vue.js",
			"TypeScript",
			"Tailwind CSS",
			"RxJS",
			"React Query",
			"Micro Frontends",
			"PrimeNG",
			"Angular Material",
			"React MUI",
			"Kendo UI",
		],
		highlighted: true,
		align: "left",
		widthClass: "sm:w-[92%]",
	},
	{
		id: "ai-engineering",
		title: "IA Engineering & Modern Tools",
		skills: [
			"Vercel AI SDK",
			"Zod",
			"Server Actions",
			"LLM Streaming (SSE)",
			"Gemini API",
			"Prisma v7+",
		],
		highlighted: false,
		align: "right",
		widthClass: "sm:w-[85%]",
	},
	{
		id: "backend",
		title: "Backend & Databases",
		skills: [
			"C# .NET / ASP.NET",
			"APIs RESTful",
			"Oracle SQL",
			"SQL Server",
			"PostgreSQL (Supabase)",
			"MongoDB",
			"Firebase",
			"Node.js",
		],
		highlighted: true,
		align: "left",
		widthClass: "sm:w-[88%] sm:ml-4",
	},
	{
		id: "devops",
		title: "Calidad, Tooling & DevOps",
		skills: [
			"SonarQube / SonarCloud",
			"Git",
			"TFS / Azure DevOps",
			"Vite",
			"JWT Authentication",
			"MSW (Mock Service Worker)",
			"Axios",
		],
		highlighted: false,
		align: "right",
		widthClass: "sm:w-[82%]",
	},
];
