import Container from "@/components/Container";
import Experiences from "./Experiences";
import Education from "./Education";

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
