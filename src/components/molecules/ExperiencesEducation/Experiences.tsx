//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import DateLineBlock from "./DateLineBlock";

export default function Experiences() {
	return (
		<ComponentNameContainer name="Experiences">
			<div className="flex flex-col gap-y-2.5">
				<DateLineBlock />
				<DateLineBlock />
			</div>
		</ComponentNameContainer>
	);
}
