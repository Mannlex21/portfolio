// constants/projectsData.ts
export type ImageType = "desktop" | "mobile";

export interface MediaItem {
	url: string;
	type?: ImageType;
}

export interface ProjectMedia {
	images: {
		img_1: MediaItem | string;
		img_2?: MediaItem | string;
		img_3?: MediaItem | string;
		img_4?: MediaItem | string;
	};
	githubUrl?: string;
	liveUrl?: string;
}

export const PROJECTS_MEDIA: Record<string, ProjectMedia> = {
	"recetario-ai": {
		images: {
			img_1: {
				url: "/images/projects/recetario-ai/recetario-main.png",
				type: "desktop",
			},
			img_2: {
				url: "/images/projects/recetario-ai/recetario-mobile.png",
				type: "mobile",
			},
		},
		githubUrl: "https://github.com/Mannlex21/recetario-de-papa",
		liveUrl: "https://recetario-de-papa.vercel.app/",
	},
	"finance-ai": {
		images: {
			img_1: {
				url: "/images/projects/finance/img1.png",
				type: "mobile",
			},
			img_2: {
				url: "/images/projects/finance/img2.png",
				type: "desktop",
			},
			img_3: {
				url: "/images/projects/finance/img3.png",
				type: "desktop",
			},
			img_4: {
				url: "/images/projects/finance/img4.png",
				type: "desktop",
			},
		},
		githubUrl: "https://github.com/Mannlex21/agente-finanzas",
		liveUrl: "https://agente-finanzas-vert.vercel.app/",
	},
};
