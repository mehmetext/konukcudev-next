//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function WhoAmI() {
	return (
		<Container>
			<ComponentNameContainer name="WhoAmI">
				<div className="bg-bright w-full p-8 rounded-2xl rounded-tr-[96px] flex gap-8">
					<div className="w-[180px] h-[180px] shrink-0 rounded-2xl overflow-hidden">
						<img
							className="w-full h-full"
							src="/images/profile.jpeg"
							alt="Me!"
						/>
					</div>
					<div className="flex flex-col gap-2.5">
						<h1 className="font-black text-4xl text-darken">
							Selam, Ben <span className="text-primary">Mehmet</span>! 💫
						</h1>
						<SyntaxHighlighter
							language="javascript"
							style={darcula}
							customStyle={{
								borderRadius: 4,
								background: "#333",
							}}
							wrapLongLines
						>
							const Mehmet = ["Frontend Developer", "Mobile Application
							Developer"];
						</SyntaxHighlighter>
						<p className="text-darken">
							2001 yılının Temmuz ayının 12. günü, hayalleri peşinde koşmak ve
							hayallerine ulaşmak için dünyaya gelen Mehmet, işte benim.
							Aksaray'da doğdum. Hobilerimden ve yapmaktan hoşlandığım şeylerden
							başlayayım; fotoğraf çekmeyi, yeni teknolojiyi araştırmayı, yeni
							bilgiler öğrenmeyi ve gezip tozmayı ve yeni yerler görmeyi çok
							seviyorum. Kod yazmaya bayılıyorum, tam benlik iş :) Birilerine
							yardım ettikçe mutlu oluyorum. Her an bilgime bilgi, gücüme güç
							katmaya çalışıyorum. Kendimde keşfedebildiğim yönlerimden
							bahseyim. Kararlıyımdır, bir işe başladığımda asla yarım bırakmam,
							bırakırsam kendimi çok rahatsız hissederim. Planlıyımdır ama
							plansız gelişen güzel şeyler beni daha çok mutlu eder.
							Meraklıyımdır, yeni şeyler öğrenmeyi seviyorum. “İCAT ÇIKARMA
							MEHMET” diyenlere inat her zaman en güncel teknolojiyi araştırmayı
							ve hayatımıza entegre etmeyi savunuyorum, savunacağım.
						</p>
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
