import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

const DashboardLayout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
