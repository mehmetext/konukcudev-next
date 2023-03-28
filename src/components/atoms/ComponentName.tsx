//React
import { ReactNode } from "react";

//Types
type Props = {
	name: string;
};

export default function ComponentName({ name }: Props) {
	return (
		<div className="font-extralight text-sm bg-bright px-2 py-1 rounded-full">
			{name}.tsx
		</div>
	);
}
