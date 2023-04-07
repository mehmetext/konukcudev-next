//Components
import Container from "@/components/atoms/Container";
import ReferenceItem from "@/components/molecules/ReferencesTemplate/ReferenceItem";

export default function References() {
	return (
		<Container>
			<div className="flex w-full flex-wrap gap-5">
				<ReferenceItem reference={{ image: "fotonot.jpg", name: "Fotonot" }} />
				<ReferenceItem
					reference={{ image: "kendine.jpg", name: "Kendine Tema (MyBB)" }}
				/>
			</div>
		</Container>
	);
}
