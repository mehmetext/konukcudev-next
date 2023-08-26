import ComponentNameContainer from "@/components/ComponentNameContainer";
import Container from "@/components/Container";
import WhileInViewScale from "@/components/motions/WhileInViewScale";
import Link from "next/link";

export default function BiKodist() {
  return (
    <WhileInViewScale>
      <Container>
        <ComponentNameContainer name="BiKodist">
          <div className="flex flex-col gap-2.5 w-full">
            <h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
              Bi Kodist Instagram’da! Takip Ediyor Musun? 👀
            </h1>
            <div className="flex p-8 gap-8 bg-[#FB5247] bg-opacity-5 rounded-2xl flex-col md:flex-row">
              <div className="flex justify-center items-start shrink-0">
                <img
                  src="/images/bikodist.png"
                  alt="Bi Kodist"
                  className="w-[200px] h-[200px] rounded-full"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1 sm:gap-y-2.5">
                <h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
                  Bi Kodist
                </h1>
                <h4 className="text-primary-dark text-opacity-40 text-lg">
                  Kişisel Blog
                </h4>
                <ul className="flex flex-col text-sm sm:text-base">
                  <li>• YKS - Bilgisayar Programcılığı (2/2)</li>
                  <li>• DGS - Bilgisayar Mühendisliği (1/4)</li>
                  <li>• React & Next.js ⚛️</li>
                  <li>• Flutter 💙</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="http://instagram.com/bikodist"
                  target="_blank"
                  className="bg-[#FB5247] font-black text-2xl text-white px-6 py-2 rounded-full flex items-center justify-center text-center"
                >
                  Takip Et
                </Link>
                <div className="bg-[#FB5247] bg-opacity-10 font-black text-lg text-darken px-6 py-2 rounded-full flex items-center justify-center text-center">
                  140+ gönderi
                </div>
                <div className="bg-[#FB5247] bg-opacity-10 font-black text-lg text-darken px-6 py-2 rounded-full flex items-center justify-center text-center">
                  3.700+ takipçi
                </div>
              </div>
            </div>
          </div>
        </ComponentNameContainer>
      </Container>
    </WhileInViewScale>
  );
}
