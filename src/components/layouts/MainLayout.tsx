//React
import { ReactNode } from "react";

//Components
import Footer from "../organisms/Footer";
import Menu from "../organisms/Menu";

//Types
type Props = {
	children: ReactNode;
};

export default function MainLayout({ children }: Props) {
	return (
		<div className="flex flex-col gap-y-20">
			<Menu />
			{children}
			<Footer />
		</div>
	);
}
