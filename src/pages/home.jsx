import { HealthPlatform, Hero, NextGeneration, ServiceCare, WeCare } from "@/components/section/home";

const Home = () => {
	return (
		<div className="">
			<Hero />
			<ServiceCare />
			<NextGeneration />
			<HealthPlatform />
			<WeCare />
		</div>
	);
};

export default Home;
