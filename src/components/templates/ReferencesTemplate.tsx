//Components
import PageLayout from "../layouts/PageLayout";
import References from "../organisms/ReferencesTemplate/References";

export default function ReferencesTemplate() {
	return (
		<PageLayout
			componentName="References"
			title="Referanslar 🛠️"
			subtitle="Bugüne kadar yaptıklarım ama bazıları"
		>
			<References />
		</PageLayout>
	);
}
