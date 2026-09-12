// lib/i18n.ts
import esTranslations from "./locales/es.json";
import enTranslations from "./locales/en.json";

export type Language = "es" | "en";
export type TranslationSchema = typeof esTranslations;

export const fontTranslations: Record<Language, TranslationSchema> = {
	es: esTranslations,
	en: enTranslations,
};
