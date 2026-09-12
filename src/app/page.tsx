import HeroSection from "@/app/Sections/HeroSection";
import WorkSection from "@/app/Sections/WorkSection";
import FooterSection from "@/app/Sections/FooterSection";
import AboutSection from "@/app/Sections/AboutSection";
import ProjectsSection from "./Sections/ProjectSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#121212] text-[#F5F5F5]">
			<HeroSection />
			<AboutSection />
			<WorkSection />
			<ProjectsSection />
			<FooterSection />
		</main>
	);
}
