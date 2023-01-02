// images
import logo from "@/assets/logo/telemed.svg";
import { footerLinks, legalLinks } from "@/utils/data";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-lightGreen pt-[72px] pb-20 text-[#1F494F] text-base leading-[23px]">
			<div className="layout-container">
				<div className="grid grid-cols-[1fr_2fr] ">
					<img src={logo} alt="" />
					<div className="flex space-x-[201px] capitalize ">
						{footerLinks.map((item, index) => (
							<div key={`links-${index}`} className="">
								<h3 className="font-bold mb-4">{item.category}</h3>
								<ul className="space-y-4">
									{item.links.map((link, index) => (
										<li key={index}>
											<a href={link.to} className="font-medium">
												{link.name}
											</a>
											{/* <Link
                                             to={link.to}>{link.name}</Link> */}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="mt-[50px] flex justify-between">
					<div className="space-x-2">
						{legalLinks.map((item, index) => (
							<a href={item.to} key={index}>
								{item.name}
							</a>
						))}
					</div>
					<p>© {currentYear} Scapula Labs | All rights reserved. </p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
