import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";

export default function Email() {
	return (
		<Container>
			<ComponentNameContainer name="Email">
				<div className="flex w-full justify-center">
					<img
						src="/images/email.svg"
						alt="Mehmet Konukçu"
						className="max-h-[180px]"
					/>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
