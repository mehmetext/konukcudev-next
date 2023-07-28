//Components
import Container from "@/components/atoms/Container";
import Education from "@/components/molecules/HomeTemplate/ExperiencesEducation/Education";
import Experiences from "@/components/molecules/HomeTemplate/ExperiencesEducation/Experiences";

export default function ExperiencesEducation() {
	return (
		<Container>
			<div className="flex gap-20 flex-col md:flex-row">
				<div className="basis-1/2">
					<Experiences />
				</div>
				<div className="basis-1/2">
					<Education />
				</div>
			</div>
		</Container>
	);
}