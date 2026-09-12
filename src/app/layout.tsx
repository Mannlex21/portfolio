import type { Metadata } from "next";
import { Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";

const firaCode = Fira_Code({
	subsets: ["latin"],
	variable: "--font-fira-code",
	display: "swap",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Manuel Murillo | Full-stack Developer",
	description:
		"Portafolio profesional de Manuel Murillo, Full-stack Developer especializado en TypeScript, React, Next.js, C# .NET y UI interactiva.",
	keywords: [
		"Manuel Murillo",
		"Full-stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Portfolio",
	],
	authors: [{ name: "Manuel Murillo" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${firaCode.variable} ${openSans.variable}`}>
			<body className="bg-darkBg text-lightBg font-sans antialiased selection:bg-lightBg selection:text-darkBg">
				<LanguageProvider>
					<Navbar />
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
