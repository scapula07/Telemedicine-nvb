import { Link } from "react-router-dom";
import { Button } from "../input";
import { navLinks } from "@/utils/data";
import ConnectBtn from "../ConnectBtn";

// images
import logo from "@/assets/logo/telemed.svg";




const NavBar = () => {
	return (
		<div className="layout-container h-[76px] flex items-center justify-between">
		<Link to="/">
				<img src={logo} alt="" className="w-[132px] h-[26px]" />
			</Link>
			<nav>
				<ul className="flex items-center space-x-8">
					{navLinks.map((item, index) => (
						<li key={index}>
							<Link to={item.to} className='capitalize leading-[18px] text-base text-[#1C3144]'>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<ConnectBtn />
		</div>
	);
};

export default NavBar;
