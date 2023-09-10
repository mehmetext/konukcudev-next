import ComponentNameContainer from "@/components/ComponentNameContainer";
import Container from "@/components/Container";
import WhileInViewScale from "@/components/motions/WhileInViewScale";

export default function Email() {
  return (
    <WhileInViewScale>
      <Container>
        <ComponentNameContainer name="Email">
          <div className="flex w-full justify-center">
            <img
              src="/images/email.svg"
              alt="Mehmet Konukçu"
              className="max-h-[180px]"
            />
          </div>
        </ComponentNameContainer>
      </Container>
    </WhileInViewScale>
  );
}
