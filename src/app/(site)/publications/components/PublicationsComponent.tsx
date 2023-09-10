import Container from "@/components/Container";
import PublicationsMotion from "./PublicationsMotion";

export default function Publications({
  publications,
}: {
  publications: Publication[];
}) {
  return (
    <Container>
      <PublicationsMotion publications={publications} />
    </Container>
  );
}
