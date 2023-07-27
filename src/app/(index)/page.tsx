import AsDeveloper from "./components/AsDeveloper/AsDeveloper";
import BiKodist from "./components/BiKodist";
import DesireToLearn from "./components/DesireToLearn";
import Email from "./components/Email";
import ExperiencesEducation from "./components/ExperiencesEducation/ExperiencesEducation";
import Others from "./components/Others";
import PrideSection from "./components/PrideSection";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import WelcomeSection from "./components/WelcomeSection";
import WhatDidIDo from "./components/WhatDidIDo";
import WhoAmI from "./components/WhoAmI";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
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
    </main>
  );
}
