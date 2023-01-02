import { Button } from "@/components/input";

// images
import heroImage from '@/assets/images/hero.svg'

const Hero = () => {
	return (
		<header className="bg-[#082125]">
			<div className="layout-container grid grid-flow-col items-center gap-[105px] py-[39px]">
				<div className="text-white">
					<h1 className="text-[64px] leading-[73px] font-bold mb-4">
          Virtual Healthcare Made Easy
					</h1>
					<p className="text-xl leading-[23px] mb-[44px]">
						Our telemedicine platform lets you meet medical professionals, get
						clinically-backed wellness services, and discover the right
						medicine, all in one place.
					</p>
					<Button title="book  appointment" className="bg-[#1F494F] text-white" />
				</div>
				<div className="w-[614px] h-[623px]">
          <img src={heroImage} alt="" className="w-full h-full" />
        </div>
			</div>
		</header>
	);
};

export default Hero;
