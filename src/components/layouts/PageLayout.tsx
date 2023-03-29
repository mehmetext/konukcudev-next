//React
import { ReactNode } from "react";
import ComponentNameContainer from "../atoms/ComponentNameContainer";
import Container from "../atoms/Container";
import MainLayout from "./MainLayout";

//Types
type Props = {
	children?: ReactNode;
	componentName: string;
	title: string;
	subtitle: string;
};

export default function PageLayout({
	children,
	componentName,
	title,
	subtitle,
}: Props) {
	return (
		<MainLayout>
			<div className="flex flex-col gap-y-10">
				<Container>
					<ComponentNameContainer name={componentName}>
						<div className="flex flex-col gap-2">
							<h1 className="text-primary-dark font-black text-3xl sm:text-4xl md:text-5xl">
								{title}
							</h1>
							<p className="text-sm text-[#636363]">{subtitle}</p>
						</div>
					</ComponentNameContainer>
				</Container>
				{children}
			</div>
		</MainLayout>
	);
}
