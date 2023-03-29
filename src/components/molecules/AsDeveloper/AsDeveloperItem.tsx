//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";
import TechStack from "../TechStack";

export default function AsDeveloperItem() {
	return (
		<Container>
			<ComponentNameContainer name="Name">
				<div className="flex gap-5">
					<div className="flex-1 flex flex-col gap-2.5">
						<h1 className="font-black text-2xl">
							Bir{" "}
							<span className="text-4xl text-green-500">
								Frontend Developer
							</span>{" "}
							olarak...
						</h1>
						<div className="flex flex-col gap-4 [&>p>span]:font-black [&>p>span]:text-green-500">
							<p>
								Evvel zaman içinde kalbur saman içinde... Şaka şaka. Kodlama
								hayatıma ilk adımı HTML & CSS öğrenerek attım. Yani Frontend
								Developer’lık benim ilk göz ağrım... 2014 yılının Aralık ayında
								“ücretsiz site nasıl açılır” diyerek bir siteye kayıt oldum ve o
								gün bugündür kod benim hayatımın merkezi oldu.
							</p>
							<p>
								Başlarda sadece basit birkaç değişiklik yapabilmek adına{" "}
								<span>HTML</span> öğrendim. Sonrasında -Allah’ın emri tabi-{" "}
								<span>CSS</span> öğrendim. O sıra siteyi dinamikleştirmek
								istemiştim ve Javascript öğrenmeden jQuery öğrenmeye
								çalışmıştım. Yapmak istediklerimi zor da olsa yapabiliyordum
								fakat ben kim, Javascript öğrenmeden kütüphanesini kullanmak
								kim? :D
							</p>
							<p>
								İlerleyen süreçte bir Mobile Application Developer olarak bir
								şeyler yaptım. Bu süreçte Frontend Developer’lıktan koptum, ta
								ki 2022 yılının Temmuz ayına kadar... <span>React</span>{" "}
								(Öncesinde Javascript) öğrenmeye başladım, hemen ardından{" "}
								<span>Tailwind CSS</span> öğrendim ve GitHub’a birçok repository
								ekledim. Gelişim sürecimi LinkedIn’de paylaşmaya çalıştım.
								2023’ün Mart ayında ise ani bir kararla <span>Next.js 💚</span>{" "}
								öğrenmeye başladım.
							</p>
						</div>
						<div className="flex flex-col p-4 gap-2.5 bg-green-50 rounded-2xl">
							<h2 className="text-2xl font-black">
								Frontend Developer olarak şu teknolojileri kullanıyorum:
							</h2>
							<TechStack
								itemClassName="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
								items={[
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
						</div>
					</div>
					<div className="flex">
						<img
							className="w-[400px] h-[400px]"
							src="/images/frontend.svg"
							alt="Frontend Developer"
						/>
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
