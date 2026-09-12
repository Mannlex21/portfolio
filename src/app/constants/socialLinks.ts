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
		| "x";
}

export const PERSONAL_SOCIAL_LINKS: SocialLink[] = [
	{
		id: "github",
		label: "Github",
		url: "https://github.com/Mannlex21",
		platform: "github",
	},
	{
		id: "linkedin",
		label: "Linkedin",
		url: "https://linkedin.com/in/tu-usuario",
		platform: "linkedin",
	},
	{
		id: "instagram",
		label: "Instagram",
		url: "https://instagram.com/eldelantaldepapa",
		platform: "instagram",
	},
	// Agrega o remueve las redes que necesites mostrar dinámicamente
];
