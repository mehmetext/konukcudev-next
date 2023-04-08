//Components
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import ReferenceItem from "@/components/molecules/ReferencesTemplate/ReferenceItem";
import Link from "next/link";

export default function References() {
	return (
		<Container>
			<div className="flex w-full flex-wrap gap-5">
				<ReferenceItem
					reference={{
						image: "post-desc-generator.png",
						name: "Post Description Generator",
						technologies: ["react"],
						repoLink: "https://github.com/mehmetext/post-desc-generator-react",
						link: "https://mehmetext.github.io/post-desc-generator-react/",
						content: (
							<>
								<p className="text-xs text-custom-gray">
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
						image: "sprien.jpg",
						name: "Sprien",
						technologies: ["dart", "flutter", "firebase"],
						link: "https://play.google.com/store/apps/details?id=com.konukcustudio.sprien",
						content: (
							<>
								<p className="text-xs text-custom-gray">
									Yabancı dil pratiği yapabildiğimiz bir uygulamadır.
								</p>
								<p className="text-xs text-custom-gray">
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
								<p className="text-xs text-custom-gray">
									Flutter öğrenim sürecimde Google Play Store’da bir uygulamam
									olması için geliştirdiğim bir projedir.
								</p>
								<p className="text-xs text-custom-gray">
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
								<p className="text-xs text-custom-gray">
									Kayda değer geliştirdiğim ilk projedir. Çok basit, sadece
									vücut kitle indeksi hesaplayan bir uygulamadır.
								</p>
							</>
						),
					}}
				/>
			</div>
		</Container>
	);
}
