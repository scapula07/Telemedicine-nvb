import { Button } from "@/components/input";

const WeCare = () => {
	return (
		<section className="py-20">
			<div className="layout-container bg-[#20494F] rounded-[7px] h-[328px] flex flex-col items-center justify-center">
				<div className="">
					<h1 className="text-white text-[42px] leading-[48px]">We care whenever you need it</h1>
					<div className="mt-8 flex justify-center space-x-6">
						<Button
							title="book  appointment"
							className="text-[#20494F] w-[196px] bg-[#96DCB2]"
						/>
						<Button
							href="/"
							title="contact us"
							className="text-white bg border border-white"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeCare;
