import ComponentNameContainer from "@/components/ComponentNameContainer";
import Container from "@/components/Container";
import WhileInViewScale from "@/components/motions/WhileInViewScale";
import PrideItem from "./PrideItem";

export default function PrideSection() {
  return (
    <WhileInViewScale>
      <Container>
        <ComponentNameContainer name="PrideSection">
          <div className="flex flex-col gap-2.5 w-full">
            <h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
              “Ne mutlu Türk’üm diyene!” ❤️
            </h1>
            <div className="grid md:grid-cols-2 gap-2.5">
              <PrideItem
                icon="/images/gokturkce-turk.svg"
                alt="Göktürkçe Türk"
                className="bg-[#5196D6]"
              />
              <PrideItem
                icon="/images/turk-bayragi.svg"
                alt="Türk Bayrağı"
                className="bg-[#E30A17]"
              />
            </div>
          </div>
        </ComponentNameContainer>
      </Container>
    </WhileInViewScale>
  );
}
