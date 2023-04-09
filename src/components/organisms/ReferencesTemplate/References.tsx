//Components
import Container from "@/components/atoms/Container";
import ReferenceItem from "@/components/molecules/ReferencesTemplate/ReferenceItem";
import Link from "next/link";

//Packages
import Masonry from "react-masonry-css";

export default function References() {
	return (
		<Container>
			<Masonry
				className="flex gap-5"
				columnClassName="flex flex-col gap-5"
				breakpointCols={{
					default: 3,
					1280: 2,
					768: 1,
				}}
			>
				<ReferenceItem
					reference={{
						image: "konukcudev-v2.png",
						name: "konukcu.dev v2",
						technologies: [
							"typescript",
							"react",
							"nextjs",
							"tailwind",
							"figma",
						],
						content: (
							<>
								<p>Anlatmaya gerek yok, görüyorsunuz :P</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "rt-memory-game.png",
						name: "Memory Game",
						technologies: ["react", "redux", "tailwind"],
						repoLink: "https://github.com/mehmetext/memory-game",
						link: "https://rt-memory-game.netlify.app/",
						content: (
							<>
								<p>
									Patika.dev kapsamında geliştirdiğim bir projedir. Projeyi
									geliştirirken zorlanmıştım, gerçekten gelişimim açısından
									harika bir proje oldu.
								</p>
								<p>
									Memory Game, hafıza oyunudur. Açtığımız 2 kart aynıysa puan
									kazanıyoruz, farklıysa puan kaybediyoruz. Eğer yalnızca 1 kart
									açtıysak geri kapatabiliyoruz. Hadi oynayın! :)
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "rt-spendmoney.png",
						name: "Spend Money",
						technologies: ["react", "redux", "tailwind"],
						repoLink: "https://github.com/mehmetext/spend-money",
						link: "https://rt-spendmoney.netlify.app/",
						content: (
							<>
								<p>
									Patika.dev kapsamında geliştirdiğim bir projedir. Projeyi ödev
									olarak aldım ve hünerlerimi göstererek teslim etmek istedim.
									Bence çok güzel oldu, kullanımı eğlenceli :D
								</p>
								<p>
									Bill Gates abimizin bitmek bilmeyen parasını harcamaya
									çalıştığımız bir uygulamadır. Satın alımlarınızı yaptıktan
									sonra aşağıdaki fişten nelerden ne kadar aldığınızı
									görmelisiniz...
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "redux-notes.png",
						name: "Redux Notes",
						technologies: ["react", "redux", "tailwind"],
						repoLink: "https://github.com/mehmetext/redux-notes",
						link: "https://patika-redux-notes.netlify.app",
						content: (
							<>
								<p>
									React ile Redux kullanımını kavradığım ve Tailwind CSS'e giriş
									yaptığım projedir. Bu projede local storage işlemlerini de
									öğrendim.
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "post-desc-generator.png",
						name: "Post Description Generator",
						technologies: ["react"],
						repoLink: "https://github.com/mehmetext/post-desc-generator-react",
						link: "https://mehmetext.github.io/post-desc-generator-react/",
						content: (
							<>
								<p>
									React öğrenim sürecimde geliştirdiğim ilk web uygulamasıdır.{" "}
									<Link
										href="http://instagram.com/bikodist"
										target="_blank"
										className="font-bold"
									>
										Bi Kodist
									</Link>{" "}
									adlı sayfam için geliştirdim, bu proje sayesinde gönderi
									açıklamalarımı oluşturabiliyorum.
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "konukcudev-v1.png",
						name: "konukcu.dev v1",
						link: "https://konukcudev.netlify.app",
						technologies: ["react", "tailwind", "figma"],
						content: (
							<>
								<p>
									Kişisel sitemin ilk versiyonudur. Biraz dark takılırdım, evet.
									Tek sayflık bir React projesiydi. Uzun bir süre bu tasarımı
									kullandım ama yenilik şart! :D
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "sprien.jpg",
						name: "Sprien",
						technologies: ["dart", "flutter", "firebase"],
						link: "https://play.google.com/store/apps/details?id=com.konukcustudio.sprien",
						content: (
							<>
								<p>
									Yabancı dil pratiği yapabildiğimiz bir uygulamadır. Ana
									sayfada kullanıcılar eşleşen dillere ve son aktifliğe göre
									sıralanır. Kullanıcılar birbirlerine mesaj, sesli mesaj,
									fotoğraf, GIF vb. gönderebilir. Ayrıca kullanıcı profiline
									hakkında mesajı ve ses kaydı ekleyebilir!
								</p>
								<p>
									Uygulama sayesinde Flutter ile Firebase arasındaki bağı çok
									iyi kaptım.
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "fotonot.jpg",
						name: "Fotonot",
						technologies: ["dart", "flutter"],
						link: "https://play.google.com/store/apps/details?id=com.mehmetkonukcu.fotonot",
						content: (
							<>
								<p>
									Flutter öğrenim sürecimde Google Play Store’da bir uygulamam
									olması için geliştirdiğim bir projedir.
								</p>
								<p>
									Fotonot sayesinde hızlıca çektiğimiz fotoğrafa not
									alabiliyoruz. Ayrıca yalnızca telefon hafızasını kullanır,
									fotoğraflarınız buluta aktarılmaz!
								</p>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "calcubody.jpg",
						name: "CalcuBody",
						technologies: ["dart", "flutter"],
						content: (
							<>
								<p>
									Kayda değer geliştirdiğim ilk projedir. Çok basit, sadece
									vücut kitle indeksi hesaplayan bir uygulamadır.
								</p>
							</>
						),
					}}
				/>
			</Masonry>
		</Container>
	);
}
