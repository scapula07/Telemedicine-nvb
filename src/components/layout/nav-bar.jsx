import { Button } from "../input";

// images
import logo from "@/assets/logo/telemed.svg";

const NavBar = () => {
	return (
		<div className="layout-container py-4 flex items-center justify-between">
			<a href="/">
				<img src={logo} alt="" className="w-[132px] h-[26px]" />
			</a>
			<Button
				title="book  appointment"
				className="bg-[#20494F]"
			/>
		</div>
	);
};

export default NavBar;
