import { Link } from "react-router-dom";
import { Button } from "../input";
import ConnectBtn from "../ConnectBtn";

// images
import logo from "@/assets/logo/telemed.svg";

const NavBar = () => {
	return (
		<div className="layout-container py-4 flex items-center justify-between">
			<Link href="/">
				<img src={logo} alt="" className="w-[132px] h-[26px]" />
			</Link>
			<div className="flex space-x-5">
				<Button href="/meeting" className="bg-red-500 w-[152px]" title="create meeting" />
				<ConnectBtn />
			</div>
		</div>
	);
};

export default NavBar;
