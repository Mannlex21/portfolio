// app/components/ProjectCollage.tsx
"use client";

import { SafeImage } from "@/app/components/SafeImage";

export type ImageType = "desktop" | "mobile";

export interface MediaItem {
	url: string;
	type?: ImageType;
}

export interface ProjectImages {
	img_1?: MediaItem | string;
	img_2?: MediaItem | string;
	img_3?: MediaItem | string;
	img_4?: MediaItem | string;
	main?: string;
	mobile?: string;
}

interface ProjectCollageProps {
	images?: ProjectImages;
	title: string;
}

// Helper para normalizar el objeto de imagen
function normalizeImage(
	raw?: MediaItem | string,
	defaultType: ImageType = "desktop",
): MediaItem | null {
	if (!raw) return null;
	if (typeof raw === "string") {
		return { url: raw, type: defaultType };
	}
	return { url: raw.url, type: raw.type || defaultType };
}

// Componente para Renderizar cada Card con su aspect-ratio correcto
function CollageCard({
	item,
	alt,
	className = "",
}: {
	item: MediaItem;
	alt: string;
	className?: string;
}) {
	const isMobile = item.type === "mobile";

	return (
		<div
			className={`relative rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-xl hover:border-[#555555] transition-all duration-300 ${
				isMobile ? "aspect-[9/19] max-h-[380px]" : "aspect-[16/10]"
			} ${className}`}
		>
			<SafeImage
				src={item.url}
				alt={alt}
				fallbackText={isMobile ? "Vista Móvil" : "Vista Desktop"}
			/>
		</div>
	);
}

export function ProjectCollage({ images, title }: ProjectCollageProps) {
	// Normalizar lista de imágenes
	const rawItems = [
		images?.img_1 || images?.main,
		images?.img_2 || images?.mobile,
		images?.img_3,
		images?.img_4,
	];

	const imageList: MediaItem[] = rawItems
		.map((item, idx) =>
			normalizeImage(
				item,
				idx === 1 && images?.mobile ? "mobile" : "desktop",
			),
		)
		.filter((item): item is MediaItem => Boolean(item));

	const count = imageList.length;

	// ESTILO 1: 1 sola imagen
	if (count <= 1) {
		return (
			<div className="w-full flex items-center justify-center">
				<div className="w-full max-w-xl">
					<CollageCard
						item={imageList[0]}
						alt={`${title} screenshot`}
					/>
				</div>
			</div>
		);
	}

	// ESTILO 2: 2 imágenes (Desfase elegante vertical entre columnas)
	if (count === 2) {
		const isSecondMobile = imageList[1].type === "mobile";
		return (
			<div className="w-full grid grid-cols-12 gap-5 items-end py-4">
				{/* Imagen 1 (Desfasada ligeramente hacia arriba) */}
				<div
					className={`${isSecondMobile ? "col-span-8" : "col-span-7"} -translate-y-3`}
				>
					<CollageCard
						item={imageList[0]}
						alt={`${title} screenshot 1`}
					/>
				</div>

				{/* Imagen 2 (Alineada al fondo con desfase opuesto) */}
				<div
					className={`${isSecondMobile ? "col-span-4" : "col-span-5"} translate-y-3`}
				>
					<CollageCard
						item={imageList[1]}
						alt={`${title} screenshot 2`}
					/>
				</div>
			</div>
		);
	}

	// ESTILO 3: 3 imágenes (Columna principal + 2 apiladas con escalonado)
	if (count === 3) {
		return (
			<div className="w-full grid grid-cols-12 gap-4 items-center py-2">
				<div className="col-span-7 -translate-y-2">
					<CollageCard
						item={imageList[0]}
						alt={`${title} screenshot 1`}
					/>
				</div>
				<div className="col-span-5 flex flex-col gap-4 translate-y-2">
					<CollageCard
						item={imageList[1]}
						alt={`${title} screenshot 2`}
					/>
					<CollageCard
						item={imageList[2]}
						alt={`${title} screenshot 3`}
					/>
				</div>
			</div>
		);
	}

	// ESTILO 4: 4 imágenes (Grid 2x2 desfasado / Asimétrico)
	return (
		<div className="w-full grid grid-cols-12 gap-4 items-center py-2">
			{/* Columna Izquierda (Baja un poco) */}
			<div className="col-span-6 flex flex-col gap-4 translate-y-2">
				<CollageCard
					item={imageList[0]}
					alt={`${title} screenshot 1`}
				/>
				<CollageCard
					item={imageList[2]}
					alt={`${title} screenshot 3`}
				/>
			</div>

			{/* Columna Derecha (Sube un poco) */}
			<div className="col-span-6 flex flex-col gap-4 -translate-y-2">
				<CollageCard
					item={imageList[1]}
					alt={`${title} screenshot 2`}
				/>
				<CollageCard
					item={imageList[3]}
					alt={`${title} screenshot 4`}
				/>
			</div>
		</div>
	);
}
