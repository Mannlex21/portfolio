// app/components/ProjectCollage.tsx
"use client";

import { SafeImage } from "@/app/components/SafeImage";

export interface ProjectImages {
	main?: string;
	mobile?: string;
	img_1?: string;
	img_2?: string;
	img_3?: string;
	img_4?: string;
}

interface ProjectCollageProps {
	images?: ProjectImages;
	title: string;
}

export function ProjectCollage({ images, title }: ProjectCollageProps) {
	const imageList: string[] = [
		images?.main || images?.img_1,
		images?.mobile || images?.img_2,
		images?.img_3,
		images?.img_4,
	].filter((img): img is string => Boolean(img));

	const count = imageList.length;

	// ESTILO 1: 1 Imagen (Centrada, héroe grande)
	if (count <= 1) {
		return (
			<div className="w-full flex items-center justify-center">
				<div className="w-full aspect-[16/10] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-xl hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[0]}
						alt={`${title} main screenshot`}
						fallbackText="Captura Principal"
					/>
				</div>
			</div>
		);
	}

	// ESTILO 2: 2 Imágenes (Jerarquía Asimétrica: 1 Grande de 8 columnas + 1 Angosta/Vertical de 4 columnas)
	// ESTILO 2: 2 Imágenes (Niveladas, horizontales con anchos asimétricos 7/12 y 5/12)
	if (count === 2) {
		return (
			<div className="w-full grid grid-cols-12 gap-4 items-center">
				{/* Imagen 1: Dominante más ancha */}
				<div className="col-span-7 aspect-[16/10] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-lg hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[0]}
						alt={`${title} screenshot 1`}
						fallbackText="Imagen Principal"
					/>
				</div>

				{/* Imagen 2: Secundaria más angosta pero con el mismo aspect-ratio para mantener el nivel */}
				<div className="col-span-5 aspect-[16/10] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-lg hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[1]}
						alt={`${title} screenshot 2`}
						fallbackText="Imagen Secundaria"
					/>
				</div>
			</div>
		);
	}

	// ESTILO 3: 3 Imágenes (1 Grande dominante + 2 secundarias más pequeñas apiladas)
	if (count === 3) {
		return (
			<div className="w-full grid grid-cols-12 gap-4">
				<div className="col-span-7 aspect-[4/3] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-lg hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[0]}
						alt={`${title} screenshot 1`}
						fallbackText="Imagen 1"
					/>
				</div>
				<div className="col-span-5 flex flex-col gap-4">
					<div className="aspect-[16/9] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-md hover:border-[#555555] transition-colors">
						<SafeImage
							src={imageList[1]}
							alt={`${title} screenshot 2`}
							fallbackText="Imagen 2"
						/>
					</div>
					<div className="aspect-[16/9] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-md hover:border-[#555555] transition-colors">
						<SafeImage
							src={imageList[2]}
							alt={`${title} screenshot 3`}
							fallbackText="Imagen 3"
						/>
					</div>
				</div>
			</div>
		);
	}

	// ESTILO 4: 4 Imágenes (Grid Bento Asimétrico: Columna izquierda 7 cols [Top alta, Bottom baja] + Columna derecha 5 cols [Top baja, Bottom alta])
	return (
		<div className="w-full grid grid-cols-12 gap-4">
			{/* Columna Izquierda */}
			<div className="col-span-7 flex flex-col gap-4">
				<div className="aspect-[16/10] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-md hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[0]}
						alt={`${title} screenshot 1`}
						fallbackText="Imagen 1"
					/>
				</div>
				<div className="aspect-[16/8] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-md hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[2]}
						alt={`${title} screenshot 3`}
						fallbackText="Imagen 3"
					/>
				</div>
			</div>

			{/* Columna Derecha */}
			<div className="col-span-5 flex flex-col gap-4">
				<div className="aspect-[16/8] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-md hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[1]}
						alt={`${title} screenshot 2`}
						fallbackText="Imagen 2"
					/>
				</div>
				<div className="aspect-[16/10] rounded-2xl bg-[#1E1E1E] border border-[#3D3D3D] overflow-hidden shadow-md hover:border-[#555555] transition-colors">
					<SafeImage
						src={imageList[3]}
						alt={`${title} screenshot 4`}
						fallbackText="Imagen 4"
					/>
				</div>
			</div>
		</div>
	);
}
