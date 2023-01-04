import DashboardLayout from "@/components/dashboard-layout";
import Layout from "@/components/layout";
import { Doctor, Doctors, Home, Patient, Patients } from "@/pages";
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
					<Route path="/doctors" element={<Doctors />} />
					<Route path="doctors/:id" element={<Doctor />} />
					<Route path="/Patients" element={<Patients />} />
					<Route path="Patients/:id" element={<Patient />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
