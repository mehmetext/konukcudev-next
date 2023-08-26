import { Metadata } from "next";
import PublicationsComponent from "./components/PublicationsComponent";
import PageTitle from "@/components/PageTitle";
import PageMotion from "@/components/motions/PageMotion";

export const metadata: Metadata = {
  title: "Yayınlar - Mehmet Konukçu",
};

export default function Publications() {
  return (
    <PageMotion>
      <PageTitle
        componentName="Publications"
        title="Yayınlar ✍️"
        subtitle="Farklı platformlarda paylaştığım içerikleri topladığım bölge"
      />
      <PublicationsComponent />
    </PageMotion>
  );
}
