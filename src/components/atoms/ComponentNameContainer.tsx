//React
import { ReactNode } from "react";
import ComponentName from "./ComponentName";

//Types
type Props = {
	name: string;
	children: ReactNode;
};

export default function ComponentNameContainer({ name, children }: Props) {
	return (
		<div className="flex flex-col gap-1 items-start">
			<ComponentName name={name} />
			{children}
		</div>
	);
}
