import { Metadata } from "next";
import PageTitle from "../../../components/PageTitle";
import PublicationsComponent from "./components/PublicationsComponent";

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
