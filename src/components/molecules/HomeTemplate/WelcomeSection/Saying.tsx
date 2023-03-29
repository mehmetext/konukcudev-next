//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";

export default function Saying() {
	return (
		<ComponentNameContainer name="Saying">
			<div className="bg-gradient-to-r from-primary to-primary-dark text-white  py-2 px-4 rounded-xl sm:rounded-full flex items-center text-center flex-col sm:flex-row gap-2">
				<span>“Her saniye üretken olmak için kendini zorlamayı bırak.”</span>
				<span className="font-black">-İsim Soyisim</span>
			</div>
		</ComponentNameContainer>
	);
}
