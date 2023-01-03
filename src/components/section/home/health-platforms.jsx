import { healthPlatform } from "@/utils/data";
// images
import checkUp from "@/assets/images/checkup.svg";

const HealthPlatform = () => {
	return (
		<section className="layout-container py-20 flex items-center justify-between">
			<div className="w-[561px] h-[509px]">
				<img src={checkUp} alt="" className="w-full h-full" />
			</div>
			<div className="w-[599px]">
				<h1 className="text-[#20484F] text-4xl leading-[41px] font-bold">
					Here's what makes us different from other health platforms
				</h1>
				<div className="mt-[41px] space-y-9">
					{healthPlatform.map((item, index) => (
						<div key={index} className="space-x-5 flex items-center">
							<div className="h-14 w-14">
								<img src={item.icon} alt="" className="w-full h-full" />
							</div>
							<div className="">
								<h2 className="mb-1 text-[#20484F] text-2xl leading-[27px] font-bold">
									{item.heading}
								</h2>
								<p className="text-[#576D71] text-base leading-[18px] w-[337px]">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HealthPlatform;
