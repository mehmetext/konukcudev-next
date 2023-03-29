//Components
import Footer from "../organisms/Footer";
import AsDeveloper from "../organisms/HomeTemplate/AsDeveloper";
import DesireToLearn from "../organisms/HomeTemplate/DesireToLearn";
import ExperiencesEducation from "../organisms/HomeTemplate/ExperiencesEducation";
import Others from "../organisms/HomeTemplate/Others";
import WelcomeSection from "../organisms/HomeTemplate/WelcomeSection";
import WhoAmI from "../organisms/HomeTemplate/WhoAmI";

export default function HomeTemplate() {
	return (
		<div className="flex flex-col gap-y-20">
			<WelcomeSection />
			<WhoAmI />
			<ExperiencesEducation />
			<AsDeveloper />
			<Others />
			<DesireToLearn />
			<Footer />
		</div>
	);
}
