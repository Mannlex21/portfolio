// constants/projectsData.ts
export interface ProjectMedia {
	images: {
		main: string;
		mobile?: string;
		detail?: string;
	};
	githubUrl?: string;
	liveUrl?: string;
}

export const PROJECTS_MEDIA: Record<string, ProjectMedia> = {
	"recetario-ai": {
		images: {
			main: "/projects/finance-main.png",
			mobile: "/projects/finance-mobile.png",
		},
		githubUrl: "https://github.com/Mannlex21/recetario-de-papa",
		liveUrl: "https://recetario-de-papa.vercel.app/",
	},
	"finance-ai": {
		images: {
			main: "/projects/sat-main.png",
			mobile: "/projects/sat-mobile.png",
		},
		githubUrl: "https://github.com/Mannlex21/agente-finanzas",
		liveUrl: "https://agente-finanzas-vert.vercel.app/",
	},
};
