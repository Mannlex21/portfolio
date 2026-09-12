"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
	src?: string;
	alt: string;
	fallbackText: string;
	priority?: boolean;
}

export function SafeImage({
	src,
	alt,
	fallbackText,
	priority = false,
}: SafeImageProps) {
	const [hasError, setHasError] = useState(false);

	// Fallback si no hay src o si ocurrió un error al cargar
	if (!src || hasError) {
		return (
			<div className="w-full h-full flex items-center justify-center text-[#A6A6A6] font-mono text-xs select-none bg-[#1E1E1E]">
				[{fallbackText}]
			</div>
		);
	}

	return (
		<div className="relative w-full h-full">
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				sizes="(max-width: 1024px) 100vw, 50vw"
				onError={() => setHasError(true)}
				className="object-cover"
			/>
		</div>
	);
}
