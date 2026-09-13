// app/constants/contactData.ts

export const CONTACT_DATA = {
	email: "mannlexx21@gmail.com",
	whatsapp: {
		number: "523111263285", // Número en formato internacional sin espacios ni '+'
		defaultMessage: "Hola Manuel, vi tu portafolio y me gustaría platicar.",
	},
} as const;

// Helper para generar el link de WhatsApp listo para usarse
export const getWhatsappUrl = (): string => {
	const message = encodeURIComponent(CONTACT_DATA.whatsapp.defaultMessage);
	return `https://wa.me/${CONTACT_DATA.whatsapp.number}?text=${message}`;
};
