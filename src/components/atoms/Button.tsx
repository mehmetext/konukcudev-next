//React
import { MouseEventHandler, ReactNode } from "react";

//Next
import Link from "next/link";

//Types
type Props = {
	size?: "big" | "regular";
	href?: string;
	onClick?: MouseEventHandler<HTMLDivElement> | undefined;
	children: ReactNode;
};

const sizes = {
	big: "py-4 px-8",
	regular: "py-2 px-4",
};

export default function Button({
	href,
	onClick,
	children,
	size = "regular",
}: Props) {
	const btn = (
		<div
			className={`bg-primary flex items-center text-center justify-center rounded-full font-black sm:text-2xl ${sizes[size]}`}
			onClick={onClick}
		>
			{children}
		</div>
	);

	return href ? <Link href={href}>{btn}</Link> : btn;
}
