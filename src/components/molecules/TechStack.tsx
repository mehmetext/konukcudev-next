import Icon from "@/components/atoms/Icon";

//Types
type Props = {
	itemClassName?: string;
	items: string[];
	centered?: boolean;
};

export default function TechStack({
	itemClassName,
	items,
	centered = false,
}: Props) {
	return (
		<div
			className={`flex flex-wrap gap-1 sm:gap-1.5 md:gap-2.5 ${
				centered ? "justify-center" : ""
			}`}
		>
			{items.map((tech, i) => (
				<Icon key={i} name={tech} className={itemClassName} />
			))}
		</div>
	);
}
