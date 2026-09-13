// app/constants/certificationsData.ts

export interface CertificationItem {
	id: string;
	title: string;
	issuer: string;
	date: string;
	credentialUrl?: string;
	skills?: string[];
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
	{
		id: "degree-eng",
		title: "Ingeniería en Sistemas Computacionales",
		issuer: "Instituto Tecnológico de Tepic",
		date: "2018",
		credentialUrl: "", // Opcional: Link a cédula/título digital
		skills: ["Software Engineering", "Architecture", "Databases"],
	},
	{
		id: "cert-nextjs",
		title: "Next.js App Router & Server Actions",
		issuer: "Vercel / Online Course",
		date: "2026",
		credentialUrl: "https://example.com/cert/nextjs",
		skills: ["Next.js", "React", "TypeScript"],
	},
	{
		id: "cert-ai-dev",
		title: "AI Integration with Vercel AI SDK & Structured Outputs",
		issuer: "Specialized Workshop",
		date: "2026",
		credentialUrl: "https://example.com/cert/ai",
		skills: ["Vercel AI SDK", "Zod", "LLMs"],
	},
];
