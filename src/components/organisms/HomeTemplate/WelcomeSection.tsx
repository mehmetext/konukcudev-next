//Components

import MehmetKonukcu from "@/components/molecules/HomeTemplate/WelcomeSection/MehmetKonukcu";
import Saying from "@/components/molecules/HomeTemplate/WelcomeSection/Saying";
import WelcomeSectionTechStack from "@/components/molecules/HomeTemplate/WelcomeSection/WelcomeSectionTechStack";

export default function WelcomeSection() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-3 px-4 sm:px-0">
			<Saying />
			<MehmetKonukcu />
			<WelcomeSectionTechStack />
		</div>
	);
}
