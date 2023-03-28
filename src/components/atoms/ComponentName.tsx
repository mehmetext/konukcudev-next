//React
import { ReactNode } from "react";

//Types
type Props = {
	name: string;
	children: ReactNode;
};

export default function ComponentName({ name, children }: Props) {
	return (
		<div className="flex flex-col gap-1 items-start">
			<div className="font-extralight text-sm bg-bright px-2 py-1 rounded-full">
				{name}.tsx
			</div>
			{children}
		</div>
	);
}
