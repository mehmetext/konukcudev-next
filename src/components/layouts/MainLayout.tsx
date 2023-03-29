//React
import { ReactNode } from "react";

//Components
import Footer from "../organisms/Footer";
import Menu from "../organisms/Menu";

//Types
type Props = {
	children: ReactNode;
	stickyMenu?: boolean;
};

export default function MainLayout({ children, stickyMenu }: Props) {
	return (
		<div className="flex flex-col gap-y-20">
			<Menu sticky={stickyMenu} />
			{children}
			<Footer />
		</div>
	);
}
