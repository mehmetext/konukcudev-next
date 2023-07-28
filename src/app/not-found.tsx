import Container from "@/components/Container";
import PageTitle from "../components/PageTitle";
import Menu from "./components/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oops! - Mehmet Konukçu",
};

export default function NotFound() {
  return (
    <>
      <Menu />
      <main className="flex flex-col gap-20">
        <PageTitle
          componentName="NotFound"
          title="Oops 😳"
          subtitle="404! Böyle bi' sayfa yok..."
          centerHeading
        />
        <Container>
          <div className="flex items-center justify-center">
            <div className="text-custom-gray">
              Kenetlenmişsin kalbime! İlmek ilmek,
              <br />
              İşlenmiş gibisin hasretinle yüreğime.
              <br />
              Nereye böyle? Bileyim söyle...
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
