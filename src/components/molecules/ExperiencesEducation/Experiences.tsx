//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import DateLineBlock from "./DateLineBlock";

export default function Experiences() {
	return (
		<ComponentNameContainer name="Experiences">
			<div className="flex flex-col gap-y-2.5">
				<DateLineBlock
					startingDate={{ month: "07", year: "2023" }}
					title="Frontend Developer"
				/>
				<DateLineBlock
					endingDate={{ month: "09", year: "2022" }}
					startingDate={{ month: "07", year: "2022" }}
					title="Mobile Application Developer"
				/>
			</div>
		</ComponentNameContainer>
	);
}
