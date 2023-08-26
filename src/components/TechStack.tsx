import Icon from "./Icon";

//Types
type Props = {
  itemClassName?: string;
  gapClassName?: string;
  items: string[];
  centered?: boolean;
};

export default function TechStack({
  itemClassName,
  gapClassName = "gap-1 sm:gap-1.5 md:gap-2.5",
  items,
  centered = false,
}: Props) {
  return (
    <div
      className={`flex flex-wrap ${gapClassName} ${
        centered ? "justify-center" : ""
      }`}
    >
      {items.map((tech, i) => (
        <Icon key={i} name={tech} className={itemClassName} />
      ))}
    </div>
  );
}
