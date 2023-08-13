import { Metadata } from "next";
import PublicationsComponent from "./components/PublicationsComponent";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Yayınlar - Mehmet Konukçu",
};

export default function Publications() {
  return (
    <>
      <PageTitle
        componentName="Publications"
        title="Yayınlar ✍️"
        subtitle="Farklı platformlarda paylaştığım içerikleri topladığım bölge"
      />
      <PublicationsComponent />
    </>
  );
}
