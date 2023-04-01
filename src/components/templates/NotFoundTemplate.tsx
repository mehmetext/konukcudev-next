//Components
import Container from "../atoms/Container";
import PageLayout from "../layouts/PageLayout";

export default function NotFoundTemplate() {
	return (
		<PageLayout
			componentName="NotFound"
			title="Oops 😳"
			subtitle="404! Böyle bi' sayfa yok..."
			centerHeading
		>
			<Container>
				<div className="flex items-center justify-center">
					<div className="sm:text-lg">
						Kenetlenmişsin kalbime! İlmek ilmek,
						<br />
						İşlenmiş gibisin hasretinle yüreğime.
						<br />
						Nereye böyle? Bileyim söyle...
					</div>
				</div>
			</Container>
		</PageLayout>
	);
}
