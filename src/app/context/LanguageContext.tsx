// context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import { Language, fontTranslations, TranslationSchema } from "@/app/lib/i18n";

interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
	t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("es");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "es" ? "en" : "es"));
	};

	const t = fontTranslations[language];

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error(
			"useLanguage debe usarse dentro de un LanguageProvider",
		);
	}
	return context;
}
