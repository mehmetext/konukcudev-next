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
      <PublicationsComponent publications={publications} />
    </PageMotion>
  );
}

const publications: Publication[] = [
  {
    icon: "medium",
    href: "https://medium.com/@mehmetext/react-js-ts-ve-tailwind-css-ile-pagination-componenti-geliştirmek-b25bc4cc1bbc",
    title:
      "React.js (TS) ve Tailwind CSS ile Pagination Componenti Geliştirmek",
    date: "14 Ağustos 2023",
  },
  {
    icon: "medium",
    href: "https://medium.com/@mehmetext/next-js-react-ve-tailwind-css-ile-varyantlara-sahip-componentler-geliştirmek-a13a8d814557",
    title:
      "Next.js (React) ve Tailwind CSS ile Varyantlara Sahip Componentler Geliştirmek",
    date: "7 Mayıs 2023",
  },
  {
    icon: "medium",
    href: "https://medium.com/@mehmetext/react-next-js-ve-tailwind-css-ile-animasyonlu-açılır-kapanır-div-nasıl-yapılır-635f8161b2f4",
    title:
      "React (Next.js) ve Tailwind CSS ile Animasyonlu Açılır Kapanır div Nasıl Yapılır?",
    date: "3 Nisan 2023",
  },
  {
    icon: "medium",
    href: "https://medium.com/@mehmetext/flutterda-klasör-yapısı-f448d31ca43c",
    title: "Flutter’da Klasör Yapısı",
    date: "16 Şubat 2023",
  },
  {
    icon: "instagram",
    href: "https://www.instagram.com/reel/CTCQcS6g47P",
    title: "Flutter’da ücretsiz API ile döviz çevirici uygulaması geliştirmek",
    date: "26 Ağustos 2021",
  },
];
