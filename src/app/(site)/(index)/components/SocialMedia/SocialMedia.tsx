import ComponentNameContainer from "@/components/ComponentNameContainer";
import Container from "@/components/Container";
import SocialMediaButton from "./SocialMediaButton";
import WhileInViewScale from "@/components/motions/WhileInViewScale";

export default function SocialMedia() {
  return (
    <WhileInViewScale>
      <Container>
        <ComponentNameContainer name="SocialMedia">
          <div className="flex flex-col gap-2.5 w-full">
            <h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
              Sosyal Medyada Ben ✨
            </h1>
            <div className="flex gap-2.5 flex-wrap">
              <SocialMediaButton
                icon="instagram"
                color="bg-[#FB5247]"
                href="http://instagram.com/mehmetext"
                text="@mehmetext"
              />
              <SocialMediaButton
                icon="twitter"
                color="bg-[#00ACEE]"
                href="https://twitter.com/konukcudev"
                text="@konukcudev"
              />
              <SocialMediaButton
                icon="github"
                color="bg-[#000000]"
                href="https://github.com/mehmetext"
                text="@mehmetext"
              />
              <SocialMediaButton
                icon="gitlab"
                color="bg-[#E24329]"
                href="https://gitlab.com/mehmetext"
                text="@mehmetext"
              />
              <SocialMediaButton
                icon="linkedin"
                color="bg-[#0A66C2]"
                href="http://linkedin.com/in/mehmetkonukcu"
                text="@mehmetkonukcu"
              />
              <SocialMediaButton
                icon="medium"
                color="bg-[#000000]"
                href="https://medium.com/@mehmetext"
                text="@mehmetext"
              />
            </div>
          </div>
        </ComponentNameContainer>
      </Container>
    </WhileInViewScale>
  );
}
