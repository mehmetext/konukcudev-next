import ComponentNameContainer from "@/components/ComponentNameContainer";
import TechStack from "@/components/TechStack";
import Continue from "../Continue";
import MehmetKonukcu from "./MehmetKonukcu";

export default function WelcomeSection() {
  return (
    <div className="relative w-[100dvw] h-[100dvh] flex flex-col items-center justify-center gap-3 px-4 2xl:px-0">
      <MehmetKonukcu />
      <ComponentNameContainer name="TechStack">
        <TechStack
          itemClassName="h-8 w-8 lg:h-12 lg:w-12"
          items={[
            "dart",
            "flutter",
            "javascript",
            "typescript",
            "react",
            "redux",
            "react-query",
            "nextjs",
            "tailwind",
            "c",
            "html",
            "css",
            "firebase",
            "figma",
            "photoshop",
            "xd",
            "git",
            "github",
            "gitlab",
            "postman",
            "sourcetree",
            "slack",
            "linear",
            "supabase",
            "prisma",
          ]}
          centered
        />
      </ComponentNameContainer>
      <Continue />
    </div>
  );
}
