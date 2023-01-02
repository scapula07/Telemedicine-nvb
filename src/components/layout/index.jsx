import React from "react";
import Footer from "./footer";
import NavBar from "./nav-bar";

const Layout = ({ children }) => {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
