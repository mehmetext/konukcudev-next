import { Metadata } from "next";
import ReferencesComponent from "./components/ReferencesComponent";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Referanslar - Mehmet Konukçu",
};

export default function References() {
  return (
    <>
      <PageTitle
        componentName="References"
        title="Referanslar 🛠️"
        subtitle="Bugüne kadar yaptıklarım ama bazıları"
      />
      <ReferencesComponent />
    </>
  );
}
