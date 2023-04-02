//Components
import Container from "@/components/atoms/Container";
import Publication from "@/components/molecules/PublicationsTemplate/Publication";

export default function Publications() {
	return (
		<Container>
			<div className="flex w-full flex-col gap-5">
				<Publication
					icon="medium"
					href="https://medium.com/@mehmetext/flutterda-klasör-yapısı-f448d31ca43c"
					title="Flutter’da Klasör Yapısı"
					date="16 Şubat 2023"
				/>
				<Publication
					icon="instagram"
					href="https://www.instagram.com/reel/CTCQcS6g47P"
					title="Flutter’da ücretsiz API ile döviz çevirici uygulaması geliştirmek"
					date="26 Ağustos 2022"
				/>
			</div>
		</Container>
	);
}
