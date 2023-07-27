import Icon from "@/components/Icon";
import Link from "next/link";

type Props = {
  icon: string;
  color: string;
  href: string;
  text: string;
};

export default function SocialMediaButton({ icon, color, href, text }: Props) {
  return (
    <Link href={href} target="_blank">
      <div
        className={`flex p-3 gap-2.5 items-center font-black text-xl sm:text-2xl text-primary-dark bg-opacity-5 rounded-2xl ${color}`}
      >
        <Icon name={icon} className="h-6 w-6 sm:h-9 sm:w-9" />
        {text}
      </div>
    </Link>
  );
}
