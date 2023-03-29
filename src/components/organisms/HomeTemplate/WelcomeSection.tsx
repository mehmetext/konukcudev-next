//Components
import MehmetKonukcu from "@/components/molecules/WelcomeSection/MehmetKonukcu";
import Saying from "@/components/molecules/WelcomeSection/Saying";
import WelcomeSectionTechStack from "@/components/molecules/WelcomeSection/WelcomeSectionTechStack";

export default function WelcomeSection() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-3 px-4 sm:px-0">
			<Saying />
			<MehmetKonukcu />
			<WelcomeSectionTechStack />
		</div>
	);
}
