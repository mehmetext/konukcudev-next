//React
import { ReactNode } from "react";

//Types
type Props = {
	children: ReactNode;
};

export default function Container({ children }: Props) {
	return <div className="max-w-7xl mx-auto">{children}</div>;
}
