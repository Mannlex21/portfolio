// constants/workData.ts
export interface WorkExperience {
	id: string;
	period: string;
	duration: string;
	company: string;
	role: string;
	stack: string;
	description: string[];
	technologies: string[];
	location?: string;
}

export const WORK_EXPERIENCES: WorkExperience[] = [
	{
		id: "ithub",
		period: "2022 - Present",
		duration: "1 year 5 months",
		company: "ITHUB",
		role: "Frontend developer",
		stack: "React & Vue",
		location: "Remote",
		description: [
			"Desarrollo de interfaces de usuario escalables y optimizadas para rendimiento.",
			"Liderazgo en la migración de componentes legacy a Next.js y Tailwind CSS.",
			"Colaboración directa con equipos de producto para definir requisitos de UX/UI.",
		],
		technologies: [
			"React",
			"Vue.js",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
		],
	},
	{
		id: "vk-lab",
		period: "2021 - 2022",
		duration: "8 months",
		company: "VK Development Lab",
		role: "Frontend developer",
		stack: "React",
		location: "Remote",
		description: [
			"Mantenimiento e implementación de nuevas características en aplicaciones web corporativas.",
			"Integración de APIs RESTful y optimización del consumo de datos en el cliente.",
		],
		technologies: ["React", "Redux Toolkit", "JavaScript", "CSS Modules"],
	},
	{
		id: "sn-inc",
		period: "2020 - 2021",
		duration: "9 months",
		company: "SN Inc.",
		role: "Fullstack developer",
		stack: "JavaScript & Python",
		location: "Remote",
		description: [
			"Desarrollo end-to-end de microservicios y módulos frontend.",
			"Implementación de pruebas unitarias e integración continua.",
		],
		technologies: ["JavaScript", "Python", "Node.js", "PostgreSQL"],
	},
];
