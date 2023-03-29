//Components
import Container from "../atoms/Container";
import Footer from "../organisms/Footer";
import Experiences from "../molecules/ExperiencesEducation/Experiences";
import ExperiencesEducation from "../organisms/HomeTemplate/ExperiencesEducation";
import WelcomeSection from "../organisms/HomeTemplate/WelcomeSection";
import WhoAmI from "../organisms/HomeTemplate/WhoAmI";

export default function HomeTemplate() {
	return (
		<div className="flex flex-col gap-y-20">
			<WelcomeSection />
			<WhoAmI />
			<ExperiencesEducation />
			<Footer />
		</div>
	);
}
