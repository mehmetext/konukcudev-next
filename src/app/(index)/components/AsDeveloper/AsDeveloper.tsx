//Components

import AsDeveloperItem from "./AsDeveloperItem";

export default function AsDeveloper() {
  return (
    <>
      <AsDeveloperItem
        componentName="FrontendDeveloper"
        image="frontend"
        name="Frontend Developer"
        textColor="text-frontend"
        bgColor="bg-frontend"
        paragraphs={
          <>
            <p>
              Evvel zaman içinde kalbur saman içinde... Şaka şaka. Kodlama
              hayatıma ilk adımı HTML & CSS öğrenerek attım. Yani Frontend
              Developer’lık benim ilk göz ağrım... 2014 yılının Aralık ayında
              “ücretsiz site nasıl açılır” diyerek bir siteye kayıt oldum ve o
              gün bugündür kod benim hayatımın merkezi oldu.
            </p>
            <p>
              Başlarda sadece basit birkaç değişiklik yapabilmek adına{" "}
              <span className="text-frontend font-black">HTML</span> öğrendim.
              Sonrasında -Allah’ın emri tabi-{" "}
              <span className="text-frontend font-black">CSS</span> öğrendim. O
              sıra siteyi dinamikleştirmek istemiştim ve Javascript öğrenmeden{" "}
              <span className="text-frontend font-black">jQuery</span> öğrenmeye
              çalışmıştım. Yapmak istediklerimi zor da olsa yapabiliyordum fakat
              ben kim, Javascript öğrenmeden kütüphanesini kullanmak kim? :D
            </p>
            <p>
              İlerleyen süreçte bir Mobile Application Developer olarak bir
              şeyler yaptım. Bu süreçte Frontend Developer’lıktan koptum, ta ki
              2022 yılının Temmuz ayına kadar...{" "}
              <span className="text-frontend font-black">React</span> (Öncesinde{" "}
              <span className="text-frontend font-black">Javascript</span>)
              öğrenmeye başladım, hemen ardından{" "}
              <span className="text-frontend font-black">Tailwind CSS</span>{" "}
              öğrendim ve GitHub’a birçok repository ekledim. Gelişim sürecimi
              LinkedIn’de paylaşmaya çalıştım. 2023’ün Mart ayında ise ani bir
              kararla{" "}
              <span className="text-frontend font-black">Next.js 💚</span>{" "}
              öğrenmeye başladım.
            </p>
          </>
        }
        technologies={[
          "javascript",
          "typescript",
          "react",
          "redux",
          "react-query",
          "nextjs",
          "tailwind",
          "html",
          "css",
          "firebase",
        ]}
      />
      <AsDeveloperItem
        reversed
        componentName="MobileApplicationDeveloper"
        image="mobile"
        name="Mobile Application Developer"
        textColor="text-mobile"
        bgColor="bg-mobile"
        paragraphs={
          <>
            <p>
              Kodlama dünyası sadece web tasarımdan ibaret olmamalıydı. Bu
              yüzden bir araştırma sürecine girdim. En kısa yoldan nasıl ortaya
              ürün çıkarabilirim sorusunu sordum. Yapay zeka? Robotik kodlama?
              Mobil uygulama? Nedense o günlerde sadece bu üçünü düşünüyordum,
              halbuki daha birçok alan varmış :) Bu seçeneklerden mobil
              uygulamayı seçerek yoluma devam ettim.
            </p>

            <p>
              Java? Kotlin? React Native? Flutter? Swift?.. Kafa karıştırıcı
              birçok soru. Gerçi sonuncusunu MacBook olmadığı için o zamanlarda
              elemiştim :) Önce Java, sonra Kotlin, bir de React Native denedim.
              Hiçbirini sevemedim. Beni kendine bağlamalıydı çünkü...{" "}
              <span className="text-mobile font-black">Dart</span> dilinin
              kütüphanesi olan ilk göz ağrım{" "}
              <span className="text-mobile font-black">Flutter</span> 💜
              Kendisini çok severim, çevremdekiler beni Flutter Mehmet olarak
              bilir :) 2018’de bir hocam sayesinde Flutter’ı keşfettim, henüz o
              günlerde beta versiyonu yayınlanmıştı. Sonrası malum Udemy’den
              kurs, örnek projeler... İlk stajımı Flutter Developer olarak
              yaptım, bana harika tecrübeler kattı.
            </p>
          </>
        }
        technologies={["dart", "flutter", "firebase"]}
      />
    </>
  );
}
