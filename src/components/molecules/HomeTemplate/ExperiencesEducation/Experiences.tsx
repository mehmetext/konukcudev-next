//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import DateLineBlock from "./DateLineBlock";

export default function Experiences() {
	return (
		<ComponentNameContainer name="Experiences">
			<div className="flex flex-col gap-y-2.5">
				<DateLineBlock
					startingDate={{ month: "03", year: "2023" }}
					title="Frontend Developer"
					location="Remote"
					company={{
						href: "https://komunite.com.tr",
						title: "Komünite",
					}}
					msg="Komünite’de React.js, Next.js ve Tailwind CSS teknolojileriyle Frontend Developer olarak çalışmaktayım. Genellikle Figma’da çizilmiş olan UI’ları koda döküyorum."
				/>
				<DateLineBlock
					endingDate={{ month: "09", year: "2022" }}
					startingDate={{ month: "07", year: "2022" }}
					title="Mobile Application Developer"
					location="Konya, Türkiye"
					company={{
						href: "https://www.abranero.com",
						title: "Abranero",
					}}
					msg="Üniversite staj dönemi kapsamında stajyer olarak çalıştım. Bu süreçte Flutter ile uygulamalar geliştirmeyi deneyimledim."
				/>
				<DateLineBlock
					startingDate={{ month: "09", year: "2019" }}
					title="Freelance Software Developer"
					msg="Vaktim olduğu sürece kendi projelerimi geliştiriyorum. Ayrıca akrabalardan gelen “bana bi site yap” isteklerini de karşılamaya çalışıyorum :)"
					hideLine
				/>
			</div>
		</ComponentNameContainer>
	);
}
