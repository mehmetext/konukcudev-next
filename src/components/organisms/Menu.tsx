//Icons
import { HiHome } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";

//Components
import MenuItem from "../molecules/Menu/MenuItem";

export default function Menu() {
	return (
		<div className="fixed w-full flex justify-center top-8 z-10">
			<div className="bg-bright top-8 flex rounded-full gap-2.5 p-2.5">
				<MenuItem href="/">
					<HiHome className="text-2xl" /> Ana Sayfa
				</MenuItem>
				<MenuItem href="/yayinlar">
					<MdMenuBook className="text-2xl" /> Yayınlar
				</MenuItem>
				<MenuItem href="/referanslarim">
					<MdMenuBook className="text-2xl" /> Referanslarım
				</MenuItem>
			</div>
		</div>
	);
}
