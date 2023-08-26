import ComponentNameContainer from "@/components/ComponentNameContainer";
import TechStack from "@/components/TechStack";
import Continue from "./Continue";

export default function WelcomeSection() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center gap-3 px-4 sm:px-0">
      <ComponentNameContainer name="MehmetKonukcu">
        <div className="font-black text-[9vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
          {"<MehmetKonukçu/>"}
        </div>
      </ComponentNameContainer>
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
          ]}
          centered
        />
      </ComponentNameContainer>
      <Continue />
    </div>
  );
}
