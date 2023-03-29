//Components
import PageLayout from "../layouts/PageLayout";
import Publications from "../organisms/PublicationsTemplate/Publications";

export default function PublicationsTemplate() {
	return (
		<PageLayout
			componentName="Publications"
			title="Yayınlar ✍️"
			subtitle="Farklı platformlarda paylaştığım içerikler"
		>
			<Publications />
		</PageLayout>
	);
}
