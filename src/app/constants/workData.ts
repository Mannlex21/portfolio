// constants/workData.ts
export interface WorkExperienceItem {
	id: string;
	company: string;
	period: string;
	location: string;
	stack: string;
	technologies: string[];
}

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
	{
		id: "sye-software",
		company: "SYE Software",
		period: "01/2025 — Presente",
		location: "Ciudad de México",
		stack: "React, Angular 17 & Oracle SQL",
		technologies: [
			"React",
			"Angular 17",
			"TypeScript",
			"React Query",
			"RxJS",
			"PrimeNG",
			"Angular Material",
			"Tailwind CSS",
			"Vite",
			"Oracle DB",
			"MSW",
			"SonarQube",
			"Git / TFS",
		],
	},
	{
		id: "qualtop-group",
		company: "Qualtop Group",
		period: "04/2019 — 01/2025",
		location: "Ciudad de México",
		stack: "React, Angular, C# .NET & SQL",
		technologies: [
			"React",
			"Angular",
			"TypeScript",
			"C# .NET / ASP.NET",
			"Micro Frontends",
			"MUI",
			"Razor",
			"Kendo UI",
			"SQL Server",
			"Oracle SQL",
			"SonarCloud",
			"Git / TFS",
		],
	},
	{
		id: "mavi",
		company: "MAVI S.A. DE C.V.",
		period: "03/2018 — 04/2019",
		location: "Guadalajara, Jal.",
		stack: "Vue.js, C# .NET & SQL Server",
		technologies: [
			"Vue.js",
			"JavaScript (ES6+)",
			"HTML5/CSS3",
			"C# .NET",
			"SQL Server",
			"Git",
		],
	},
	{
		id: "ingenio-puga",
		company: "Ingenio de Puga S.A. DE C.V.",
		period: "08/2017 — 03/2018",
		location: "Tepic, Nay.",
		stack: "Razor, WinForms & C# .NET",
		technologies: [
			"C# .NET",
			"Razor",
			"WinForms UI",
			"JavaScript",
			"HTML5/CSS3",
			"SQL Server",
		],
	},
];
