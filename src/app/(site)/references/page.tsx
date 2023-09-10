import { Metadata } from "next";
import ReferencesComponent from "./components/ReferencesComponent";
import PageTitle from "@/components/PageTitle";
import PageMotion from "@/components/motions/PageMotion";

export const metadata: Metadata = {
  title: "Referanslar - Mehmet Konukçu",
};

export default function References() {
  return (
    <PageMotion>
      <PageTitle
        componentName="References"
        title="Referanslar 🛠️"
        subtitle="Bugüne kadar yaptıklarım ama bazıları"
      />
      <ReferencesComponent references={references} />
    </PageMotion>
  );
}

const references: Reference[] = [
  {
    image: "konukcudev-v2.webp",
    name: "konukcu.dev v2",
    technologies: ["typescript", "react", "nextjs", "tailwind", "figma"],
    content: `Anlatmaya gerek yok, görüyorsunuz :P`,
  },
  {
    image: "rt-memory-game.webp",
    name: "Memory Game",
    technologies: ["react", "redux", "tailwind"],
    repoLink: "https://github.com/mehmetext/memory-game",
    link: "https://rt-memory-game.netlify.app/",
    content: `
Patika.dev kapsamında geliştirdiğim bir projedir. Projeyi geliştirirken zorlanmıştım, gerçekten gelişimim açısından harika bir proje oldu. 
    
Memory Game, hafıza oyunudur. Açtığımız 2 kart aynıysa puan kazanıyoruz, farklıysa puan kaybediyoruz. Eğer yalnızca 1 kart açtıysak geri kapatabiliyoruz. Hadi oynayın! :)
`,
  },
  {
    image: "rt-spendmoney.webp",
    name: "Spend Money",
    technologies: ["react", "redux", "tailwind"],
    repoLink: "https://github.com/mehmetext/spend-money",
    link: "https://rt-spendmoney.netlify.app/",
    content: `
Patika.dev kapsamında geliştirdiğim bir projedir. Projeyi ödev olarak aldım ve hünerlerimi göstererek teslim etmek istedim. Bence çok güzel oldu, kullanımı eğlenceli :D

Bill Gates abimizin bitmek bilmeyen parasını harcamaya çalıştığımız bir uygulamadır. Satın alımlarınızı yaptıktan sonra aşağıdaki fişten nelerden ne kadar aldığınızı görmelisiniz...
`,
  },
  {
    image: "redux-notes.webp",
    name: "Redux Notes",
    technologies: ["react", "redux", "tailwind"],
    repoLink: "https://github.com/mehmetext/redux-notes",
    link: "https://patika-redux-notes.netlify.app",
    content: `React ile Redux kullanımını kavradığım ve Tailwind CSS'e giriş yaptığım projedir. Bu projede local storage işlemlerini de öğrendim.`,
  },
  {
    image: "post-desc-generator.webp",
    name: "Post Description Generator",
    technologies: ["react"],
    repoLink: "https://github.com/mehmetext/post-desc-generator-react",
    link: "https://mehmetext.github.io/post-desc-generator-react/",
    content: `
React öğrenim sürecimde geliştirdiğim ilk web uygulamasıdır. [Bi Kodist](http://instagram.com/bikodist) adlı sayfam için geliştirdim, bu proje sayesinde gönderi
açıklamalarımı oluşturabiliyorum.
    `,
  },
  {
    image: "konukcudev-v1.webp",
    name: "konukcu.dev v1",
    link: "https://konukcudev.netlify.app",
    technologies: ["react", "tailwind", "figma"],
    content: `Kişisel sitemin ilk versiyonudur. Biraz dark takılırdım, evet. Tek sayfalık bir React projesiydi. Uzun bir süre bu tasarımı kullandım ama yenilik şart! :D`,
  },
  {
    image: "sprien.webp",
    name: "Sprien",
    technologies: ["dart", "flutter", "firebase"],
    link: "https://play.google.com/store/apps/details?id=com.konukcustudio.sprien",
    content: `
Yabancı dil pratiği yapabildiğimiz bir uygulamadır. Ana sayfada kullanıcılar eşleşen dillere ve son aktifliğe göre sıralanır. Kullanıcılar birbirlerine mesaj, sesli mesaj, fotoğraf, GIF vb. gönderebilir. Ayrıca kullanıcı profiline hakkında mesajı ve ses kaydı ekleyebilir!

Uygulama sayesinde Flutter ile Firebase arasındaki bağı çok iyi kaptım.
`,
  },
  {
    image: "fotonot.webp",
    name: "Fotonot",
    technologies: ["dart", "flutter"],
    link: "https://play.google.com/store/apps/details?id=com.mehmetkonukcu.fotonot",
    content: `
Flutter öğrenim sürecimde Google Play Store’da bir uygulamam olması için geliştirdiğim bir projedir.

Fotonot sayesinde hızlıca çektiğimiz fotoğrafa not alabiliyoruz. Ayrıca yalnızca telefon hafızasını kullanır, fotoğraflarınız buluta aktarılmaz!
`,
  },
  {
    image: "calcubody.webp",
    name: "CalcuBody",
    technologies: ["dart", "flutter"],
    content: `Kayda değer geliştirdiğim ilk projedir. Çok basit, sadece
    vücut kitle indeksi hesaplayan bir uygulamadır.`,
  },
];
