import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./nav-bar";

const Layout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
