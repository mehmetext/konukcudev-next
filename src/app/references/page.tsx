import { Metadata } from "next";
import ReferencesComponent from "./components/ReferencesComponent";
import PageTitle from "@/components/PageTitle";
import OpacityFromTop from "@/components/motions/OpacityFromTop";

export const metadata: Metadata = {
  title: "Referanslar - Mehmet Konukçu",
};

export default function References() {
  return (
    <OpacityFromTop>
      <PageTitle
        componentName="References"
        title="Referanslar 🛠️"
        subtitle="Bugüne kadar yaptıklarım ama bazıları"
      />
      <ReferencesComponent />
    </OpacityFromTop>
  );
}
