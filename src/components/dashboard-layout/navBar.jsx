import { Link } from "react-router-dom";
import { Button } from "../input";

// images
import logo from "@/assets/logo/telemed.svg";
import { navLinks } from "@/utils/data";

const NavBar = () => {
	return (
		<div className="layout-container py-4 flex items-center justify-between">
			<Link href="/">
				<img src={logo} alt="" className="w-[132px] h-[26px]" />
			</Link>
			<nav>
				<ul className="flex items-center space-x-8">
					{navLinks.map((item, index) => (
						<li key={index}>
							<Link href={item.link} className='capitalize leading-[18px] text-base text-[#1C3144]'>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Button title="book  appointment" className="bg-[#20494F]" />
		</div>
	);
};

export default NavBar;