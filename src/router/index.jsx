import DashboardLayout from "@/components/dashboard-layout";
import Layout from "@/components/layout";
import {
	Doctor,
	Doctors,
	Home,
	Message,
	Patient,
	Patients,
	VideoCall
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
				<Route element={<DashboardLayout />}>
					<Route path="/doctors" element={<Doctors />} />
					<Route path="doctors/:id" element={<Doctor />} />
					<Route path="/Patients" element={<Patients />} />
					<Route path="Patients/:id" element={<Patient />} />
					<Route path="/message" element={<Message />} />
					<Route path="/video-call" element={<VideoCall />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
