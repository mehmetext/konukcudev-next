//Components
import Icon from "@/components/atoms/Icon";

//Next
import Link from "next/link";

//Types
type Props = {
	icon: string;
	href: string;
	title: string;
	date: string;
};

export default function Publication({ icon, href, title, date }: Props) {
	return (
		<div className="flex gap-2.5">
			<div className="flex items-start">
				<Icon name={icon} className="h-12 w-12" />
			</div>
			<div className="min-h-[48px] flex-1 flex items-center text-primary-dark font-black text-2xl">
				<Link target="_blank" href={href}>
					{title}
				</Link>
			</div>
			<div className="min-h-[48px] flex items-center justify-center">
				<div className="text-sm text-[#636363] px-2.5 py-1 bg-bright rounded-full">
					{date}
				</div>
			</div>
		</div>
	);
}
