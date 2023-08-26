import { Metadata } from "next";
import PublicationsComponent from "./components/PublicationsComponent";
import PageTitle from "@/components/PageTitle";
import OpacityFromTop from "@/components/motions/OpacityFromTop";

export const metadata: Metadata = {
  title: "Yayınlar - Mehmet Konukçu",
};

export default function Publications() {
  return (
    <OpacityFromTop>
      <PageTitle
        componentName="Publications"
        title="Yayınlar ✍️"
        subtitle="Farklı platformlarda paylaştığım içerikleri topladığım bölge"
      />
      <PublicationsComponent />
    </OpacityFromTop>
  );
}
