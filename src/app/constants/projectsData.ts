// constants/projectsData.ts
export interface ProjectMedia {
	images: {
		img_1: string;
		img_2?: string;
		img_3?: string;
		img_4?: string;
	};
	githubUrl?: string;
	liveUrl?: string;
}

export const PROJECTS_MEDIA: Record<string, ProjectMedia> = {
	"recetario-ai": {
		images: {
			img_1: "/images/projects/recetario-ai/recetario-main.png",
			img_2: "/images/projects/recetario-ai/recetario-mobile.png",
		},
		githubUrl: "https://github.com/Mannlex21/recetario-de-papa",
		liveUrl: "https://recetario-de-papa.vercel.app/",
	},
	"finance-ai": {
		images: {
			img_1: "/images/projects/finance/finance-main.png",
			img_2: "/images/projects/finance/finance-mobile.png",
		},
		githubUrl: "https://github.com/Mannlex21/agente-finanzas",
		liveUrl: "https://agente-finanzas-vert.vercel.app/",
	},
};
