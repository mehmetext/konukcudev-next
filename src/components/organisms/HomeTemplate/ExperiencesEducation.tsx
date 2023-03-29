//Components
import Container from "@/components/atoms/Container";
import Experiences from "../../molecules/ExperiencesEducation/Experiences";

export default function ExperiencesEducation() {
	return (
		<Container>
			<div className="flex gap-2.5">
				<div className="basis-1/2">
					<Experiences />
				</div>
				<div className="basis-1/2">
					<Experiences />
				</div>
			</div>
		</Container>
	);
}
