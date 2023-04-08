//Components
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import ReferenceItem from "@/components/molecules/ReferencesTemplate/ReferenceItem";

export default function References() {
	return (
		<Container>
			<div className="flex w-full flex-wrap gap-5">
				<ReferenceItem
					reference={{
						image: "fotonot.jpg",
						name: "Fotonot",
						technologies: ["dart", "flutter"],
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
								<Button
									target="_blank"
									href="https://play.google.com/store/apps/details?id=com.mehmetkonukcu.fotonot"
								>
									Google Play Store
								</Button>
							</>
						),
					}}
				/>
				<ReferenceItem
					reference={{
						image: "kendine.jpg",
						name: "Kendine Tema (MyBB)",
						technologies: ["html", "css", "javascript"],
						content: (
							<>
								<p className="text-xs text-custom-gray">MyBB falan filan</p>
							</>
						),
					}}
				/>
			</div>
		</Container>
	);
}
