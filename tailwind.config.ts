import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				darkBg: "#121212", // Fondo negro principal
				cardBg: "#1E1E1E", // Fondo para cards/secciones
				cardBorder: "#3D3D3D", // Bordes sutiles estilo bento
				lightBg: "#F5F5F5", // Blanquecino para destacados
				mutedText: "#A6A6A6", // Gris para subtítulos y metas
			},
			fontFamily: {
				mono: ["var(--font-fira-code)", "monospace"],
				sans: ["var(--font-open-sans)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
