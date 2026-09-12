// lib/i18n.ts
export type Language = "es" | "en";

export const fontTranslations = {
	es: {
		nav: {
			about: "/About",
			projects: "/Projects",
			work: "/Work",
			contacts: "/Contacts",
		},
		hero: {
			role: "Full-stack Developer",
			projectsBtn: "Projects",
			bio: "Desarrollo aplicaciones web y móviles modernas, limpias y escalables. Especializado en el ecosistema JavaScript / TypeScript, C# .NET y UI interactiva.",
			aboutTitle: "... /About me ...",
			frontend: "Front-end",
			backend: "Back-end",
			devops: "DevOps & Tools",
			introTitle: "Hola, soy Manuel Murillo, Full-stack Developer.",
			introBio:
				"Apasionado por escribir código limpio, legible y mantenible, enfocado en experiencia de usuario y arquitectura sólida.",
		},
		projects: {
			tag: "... /Featured Works ...",
			title: "Proyectos Destacados",
			subtitle:
				"Una selección de aplicaciones web y móviles construidas enfocándome en arquitectura limpia, rendimiento y UX.",
		},
		work: {
			tag: "... /Career Path ...",
			title: "Experiencia Laboral",
			subtitle:
				"Trayectoria construyendo software escalable, guiando arquitecturas frontend y colaborando en proyectos complejos.",
			present: "Presente",
		},
		footer: {
			tag: "... /Get in touch ...",
			title: "¿Trabajamos juntos?",
			subtitle:
				"Disponible para proyectos, asesorías frontend o roles full-stack. Envíame un mensaje y platicamos.",
			btn: "Enviar Correo",
			rights: "Todos los derechos reservados.",
		},
	},
	en: {
		nav: {
			about: "/About",
			projects: "/Projects",
			work: "/Work",
			contacts: "/Contacts",
		},
		hero: {
			role: "Full-stack Developer",
			projectsBtn: "Projects",
			bio: "I build modern, clean, and scalable web and mobile applications. Specialized in the JavaScript / TypeScript ecosystem, C# .NET, and interactive UI.",
			aboutTitle: "... /About me ...",
			frontend: "Front-end",
			backend: "Back-end",
			devops: "DevOps & Tools",
			introTitle: "Hi, I'm Manuel Murillo, Full-stack Developer.",
			introBio:
				"Passionate about writing clean, readable, and maintainable code, focused on user experience and solid architecture.",
		},
		projects: {
			tag: "... /Featured Works ...",
			title: "Featured Projects",
			subtitle:
				"A selection of web and mobile applications built focusing on clean architecture, performance, and UX.",
		},
		work: {
			tag: "... /Career Path ...",
			title: "Work Experience",
			subtitle:
				"Track record of building scalable software, guiding frontend architectures, and collaborating on complex projects.",
			present: "Present",
		},
		footer: {
			tag: "... /Get in touch ...",
			title: "Let's work together",
			subtitle:
				"Available for projects, frontend consulting, or full-stack roles. Send me a message and let's talk.",
			btn: "Send Email",
			rights: "All rights reserved.",
		},
	},
};
