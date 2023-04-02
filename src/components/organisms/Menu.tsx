//Icons
import { HiHome, HiTemplate } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";

//Components
import MenuItem from "../molecules/HomeTemplate/Menu/MenuItem";

//Types
type Props = {
	sticky?: boolean;
};

export default function Menu({ sticky = true }: Props) {
	return (
		<div
			className={`w-full flex justify-center z-10 py-8 top-0 ${
				sticky ? "sticky" : "fixed"
			}`}
		>
			<div className="bg-black bg-opacity-5 backdrop-blur-md top-8 flex rounded-full gap-1 p-1 sm:gap-2.5 sm:p-2.5">
				<MenuItem href="/">
					<HiHome className="sm:text-2xl" />
					<span className="hidden sm:flex">Ana Sayfa</span>
				</MenuItem>
				<MenuItem href="/publications">
					<MdMenuBook className="sm:text-2xl" />
					<span className="hidden sm:flex">Yayınlar</span>
				</MenuItem>
				<MenuItem href="/references">
					<HiTemplate className="sm:text-2xl" />
					<span className="hidden sm:flex">Referanslar</span>
				</MenuItem>
			</div>
		</div>
	);
}
