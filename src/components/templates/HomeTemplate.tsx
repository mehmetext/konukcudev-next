//Components
import Footer from "../organisms/Footer";
import AsDeveloper from "../organisms/HomeTemplate/AsDeveloper";
import BiKodist from "../organisms/HomeTemplate/BiKodist";
import DesireToLearn from "../organisms/HomeTemplate/DesireToLearn";
import Email from "../organisms/HomeTemplate/Email";
import ExperiencesEducation from "../organisms/HomeTemplate/ExperiencesEducation";
import Others from "../organisms/HomeTemplate/Others";
import SocialMedia from "../organisms/HomeTemplate/SocialMedia";
import WelcomeSection from "../organisms/HomeTemplate/WelcomeSection";
import WhatDidIDo from "../organisms/HomeTemplate/WhatDidIDo";
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
			<WhatDidIDo />
			<SocialMedia />
			<BiKodist />
			<Email />
			<Footer />
		</div>
	);
}
