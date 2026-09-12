// constants/socialLinks.ts
export interface SocialLink {
	id: string;
	label: string;
	url: string;
	platform:
		| "github"
		| "linkedin"
		| "telegram"
		| "facebook"
		| "instagram"
		| "x"
		| "cv";
	download?: boolean;
}

export function getSocialLinks(lang: "es" | "en"): SocialLink[] {
	return [
		{
			id: "github",
			label: "Github",
			url: "https://github.com/Mannlex21",
			platform: "github",
		},
		{
			id: "linkedin",
			label: "Linkedin",
			url: "https://www.linkedin.com/in/mannlex21/",
			platform: "linkedin",
		},
		{
			id: "cv",
			label: lang === "es" ? "Descargar CV" : "Download CV",
			url:
				lang === "es"
					? "/CV_Manuel_Murillo_ES.pdf"
					: "/CV_Manuel_Murillo_EN.pdf",
			platform: "cv",
			download: true,
		},
	];
}
