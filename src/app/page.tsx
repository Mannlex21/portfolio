import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import ProjectsSection from "@/app/components/ProjectsSection";
import WorkSection from "@/app/components/WorkSection";
import FooterSection from "@/app/components/FooterSection";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#121212] text-[#F5F5F5]">
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<WorkSection />
			<FooterSection />
		</main>
	);
}
