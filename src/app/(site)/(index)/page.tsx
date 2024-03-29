import { Metadata } from "next";
import AsDeveloper from "./components/AsDeveloper/AsDeveloper";
import BiKodist from "./components/BiKodist";
import DesireToLearn from "./components/DesireToLearn";
import Email from "./components/Email";
import ExperiencesEducation from "./components/ExperiencesEducation/ExperiencesEducation";
import Others from "./components/Others";
import PrideSection from "./components/PrideSection/PrideSection";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import WhatDidIDo from "./components/WhatDidIDo";
import WhoAmI from "./components/WhoAmI";
import PageMotion from "@/components/motions/PageMotion";

export const metadata: Metadata = {
  title: "Ana Sayfa - Mehmet Konukçu",
};

export default function Home() {
  return (
    <PageMotion>
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
    </PageMotion>
  );
}
