import { typeOfCare } from "@/utils/data";

// images
import smilingDoctor from "@/assets/images/smiling-doctor.svg";

const ServiceCare = () => {
	return (
		<section className="py-20 layout-container">
			<div className="text-center">
				<h1 className="text-[#20484F] font-bold text-[42px] leading-[48px] mb-4">
					We provide a modern service care
				</h1>
				<p className="text-[#576D71] text-xl leading-[23px] max-w-[932px] mx-auto">
					We believe in technology and our team to take care of your health
					problems. We guarantee you will get the best service that you have
					never experienced before
				</p>
			</div>
			<div className="mt-20 flex items-center space-x-[96px]">
				<div className="w-[561px] h-[509px]">
					<img src={smilingDoctor} alt="" className="w-full h-full" />
				</div>
				<div className="">
					<h3 className="text-[#20484F] font-bold text-[32px] leading-[37px]">
						We provide a modern service care
					</h3>
					<div className="mt-[41px] space-y-5">
						{typeOfCare.map((item, index) => (
							<div key={index} className="">
								<h4 className="text-[#344054] text-xl leading-[23px] font-medium mb-4">
									{item.heading}
								</h4>
								<p className="text-[#576D71] text-base leading-[18px]">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceCare;
