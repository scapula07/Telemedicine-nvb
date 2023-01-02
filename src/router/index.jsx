import Layout from "@/components/layout";
import { Home } from "@/pages";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<Home />} />
		</Route>
	)
);

const AppRouter = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default AppRouter;
