//Components
import MehmetKonukcu from "@/components/molecules/WelcomeSection/MehmetKonukcu";
import Saying from "@/components/molecules/WelcomeSection/Saying";
import TechStack from "@/components/molecules/WelcomeSection/TechStack";

export default function WelcomeSection() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-1">
			<Saying />
			<MehmetKonukcu />
			<TechStack />
		</div>
	);
}
