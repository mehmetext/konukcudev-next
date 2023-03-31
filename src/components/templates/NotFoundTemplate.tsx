//Components
import Container from "../atoms/Container";
import PageLayout from "../layouts/PageLayout";

export default function NotFoundTemplate() {
	return (
		<PageLayout componentName="NotFound" title="Oops 😳" centerHeading>
			<Container>
				<div className="flex items-center justify-center">
					<div className="sm:text-lg">
						Kenetlenmişsin kalbime!
						<br />
						İlmek ilmek işlenmiş gibisin hasretinle yüreğime.
						<br />
						Nereye böyle? Bileyim söyle...
					</div>
				</div>
			</Container>
		</PageLayout>
	);
}
