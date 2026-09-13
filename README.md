# Portfolio Personal — Manuel Alejandro Murillo Macias

Un portafolio web moderno, de alto rendimiento e interactivo diseñado para presentar proyectos de software, trayectoria profesional y facilitar el contacto directo. Construido con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.

---

## 🚀 Tecnologías Principales

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Lenguaje:** [TypeScript](https://www.typescript.org/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Iconos:** [Lucide React](https://lucide.dev/)
* **Internacionalización (i18n):** Soporte bilingüe (Español / Inglés) vía contexto reactivo

---

## ✨ Características Destacadas

* **Diseño Responsive & UI Moderna:** Interfaz accesible y fluida con esquemas oscuros, efectos de interacción hover en escritorio e indicadores directos en dispositivos móviles.
* **Soporte Multilingüe:** Cambio dinámico de idioma entre español e inglés.
* **Sección de Experiencia Interactiva:** Modales descriptivos por puesto de trabajo con interacción diferenciada según la plataforma (móvil/escritorio).
* **Tarjeta de Contacto Directo:** Accesos integrados a correo electrónico y WhatsApp mediante una configuración centralizada de datos.

---

## 📁 Estructura del Proyecto

```text
.
├── app/
│   ├── components/       # Componentes globales y modales reutilizables
│   ├── constants/        # Archivos de datos estáticos y configuración
│   │   ├── contactData.ts
│   │   ├── projectsData.ts
│   │   └── workData.ts
│   ├── context/          # Proveedor de contexto para i18n
│   ├── messages/         # Archivos JSON de traducción (es.json / en.json)
│   ├── globals.css       # Estilos globales y reglas Tailwind
│   ├── layout.tsx        # Layout principal de la aplicación
│   └── page.tsx          # Página principal del portafolio
├── public/               # Assets estáticos e imágenes
├── package.json
└── README.md
```

## Pasos para ejecutar en local

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
