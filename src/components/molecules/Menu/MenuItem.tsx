//Next
import Link from "next/link";
import { useRouter } from "next/router";

//React
import { ReactNode } from "react";

type Props = {
	href: string;
	children: ReactNode;
};

export default function MenuItem({ href, children }: Props) {
	const { pathname } = useRouter();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`shrink-0 flex items-center justify-center text-center font-black gap-1 py-3 px-4 rounded-full ${
				isActive
					? "bg-gradient-to-r from-primary-dark to-primary text-white"
					: "bg-white text-primary-dark"
			}`}
		>
			{children}
		</Link>
	);
}
