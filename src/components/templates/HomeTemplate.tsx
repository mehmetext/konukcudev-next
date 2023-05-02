//Components
import MainLayout from "../layouts/MainLayout";
import AsDeveloper from "../organisms/HomeTemplate/AsDeveloper";
import BiKodist from "../organisms/HomeTemplate/BiKodist";
import DesireToLearn from "../organisms/HomeTemplate/DesireToLearn";
import Email from "../organisms/HomeTemplate/Email";
import ExperiencesEducation from "../organisms/HomeTemplate/ExperiencesEducation";
import Others from "../organisms/HomeTemplate/Others";
import PrideSection from "../organisms/HomeTemplate/PrideSection";
import SocialMedia from "../organisms/HomeTemplate/SocialMedia";
import WelcomeSection from "../organisms/HomeTemplate/WelcomeSection";
import WhatDidIDo from "../organisms/HomeTemplate/WhatDidIDo";
import WhoAmI from "../organisms/HomeTemplate/WhoAmI";

export default function HomeTemplate() {
	return (
		<MainLayout stickyMenu={false}>
			<WelcomeSection />
			<WhoAmI />
			<ExperiencesEducation />
			<AsDeveloper />
			<Others />
			<DesireToLearn />
			<WhatDidIDo />
			<SocialMedia />
			<BiKodist />
			<PrideSection />
			<Email />
		</MainLayout>
	);
}
