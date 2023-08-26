"use client";

import Publication from "./Publication";
import { motion } from "framer-motion";

const publications: {
  icon: string;
  href: string;
  title: string;
  date: string;
}[] = [
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

export default function PublicationsMotion() {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: 0.2, staggerChildren: 0.05 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col gap-5"
    >
      {publications.map((publication, i) => (
        <Publication
          key={i}
          icon={publication.icon}
          href={publication.href}
          title={publication.title}
          date={publication.date}
        />
      ))}
    </motion.div>
  );
}
