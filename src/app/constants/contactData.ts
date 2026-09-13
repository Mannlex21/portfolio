// app/constants/contactData.ts

export const CONTACT_DATA = {
	email: "tu-email@dominio.com",
	whatsapp: {
		number: "5213111234567", // Número en formato internacional sin espacios ni '+'
		defaultMessage: "Hola Manuel, vi tu portafolio y me gustaría platicar.",
	},
} as const;

// Helper para generar el link de WhatsApp listo para usarse
export const getWhatsappUrl = (): string => {
	const message = encodeURIComponent(CONTACT_DATA.whatsapp.defaultMessage);
	return `https://wa.me/${CONTACT_DATA.whatsapp.number}?text=${message}`;
};
