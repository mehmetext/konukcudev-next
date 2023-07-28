//React

//Next
import Link from "next/link";

//Types
type Props = {
  size?: "big" | "regular";
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  children: React.ReactNode;
};

const sizes = {
  big: "py-4 px-8 sm:text-2xl",
  regular: "py-2 px-4",
};

export default function Button({
  href,
  target,
  onClick,
  children,
  size = "regular",
}: Props) {
  const btn = (
    <div
      className={`bg-primary text-white flex items-center text-center justify-center rounded-full font-black cursor-pointer select-none ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  return href ? (
    <Link target={target} href={href}>
      {btn}
    </Link>
  ) : (
    btn
  );
}
