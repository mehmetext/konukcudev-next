//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import DateLineBlock from "./DateLineBlock";

export default function Educations() {
	return (
		<ComponentNameContainer name="Education">
			<div className="flex flex-col gap-y-2.5">
				<DateLineBlock
					startingDate={{ year: "2022" }}
					title="Bilgisayar Mühendisliği"
					location="Konya, Türkiye"
					company={{
						href: "https://www.ktun.edu.tr",
						title: "Konya Teknik Üniversitesi",
					}}
					msg="Dikey Geçiş Sınavı’nda 781. olarak kayıt olduğum Konya Teknik Üniversitesi’nde hayalim olan Bilgisayar Mühendisliği bölümünü okumaktayım."
				/>
				<DateLineBlock
					endingDate={{ year: "2022" }}
					startingDate={{ year: "2020" }}
					title="Bilgisayar Programcılığı"
					location="Konya, Türkiye"
					company={{
						href: "https://www.ktun.edu.tr",
						title: "Konya Teknik Üniversitesi",
					}}
					msg="Fizik, kimya, biyoloji... Bilgisayar Mühendisliği okumak için neden bu dersleri iyi bilmem gerekiyor ki? Bu derslerin hiçbirine çalışmadan bilgisayar programcılığı kazandım ve DGS ile geçiş yapmayı hedefledim. 3,71 ortalama ile mezun oldum."
					hideLine
				/>
			</div>
		</ComponentNameContainer>
	);
}
