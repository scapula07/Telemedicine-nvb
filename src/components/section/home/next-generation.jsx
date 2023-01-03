
// images 
import maleDoctor from '@/assets/images/male-doctor.svg'

const NextGeneration = () => {
	return (
		<section className="bg-lightGreen py-6">
			<div className="layout-container flex items-center justify-between">
				<div className="w-[511px]">
					<h1 className="text-[40px] leading-[46px] text-[#20484F] font-bold mb-[17px]">
						The Next Generation Of Clinic & Family Care
					</h1>
					<p className="text-base leading-[18px] text-[#576D71]">
						Ircu magna ipsum dolor, mus. Guctor blandit malesuada quis enim elit
						bibendum eget. Nibh sed nisl in ut consectetur.
					</p>
				</div>
				<div className="w-[480px] h-[609px]">
					<img src={maleDoctor} alt="" className="w-full h-full" />
				</div>
			</div>
		</section>
	);
};

export default NextGeneration;
