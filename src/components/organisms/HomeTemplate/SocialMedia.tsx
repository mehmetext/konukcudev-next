//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";
import Icon from "@/components/atoms/Icon";
import SocialMediaButton from "@/components/atoms/SocialMediaButton";
import Link from "next/link";

export default function SocialMedia() {
	return (
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
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
