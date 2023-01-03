import DashboardLayout from "@/components/dashboard-layout";
import Layout from "@/components/layout";
import { Doctor, Doctors, Home } from "@/pages";
import { links } from "@/utils/data";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
				<Route element={<DashboardLayout />}>
					<Route path={links.doctors} element={<Doctors />} />
					<Route path={`${links.doctors}/:id`} element={<Doctor />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
