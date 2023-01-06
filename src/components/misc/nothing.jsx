import giftBox from "@/assets/icons/gift-box.svg";

const Nothing = () => {
	return (
		<div className="border border-dashed border-[#EAEAEA] h-[208px] flex items-center justify-center">
			<div className="flex flex-col">
				<img src={giftBox} alt="" />
				<p className="mt-[11px] text-[#101828] text-base leading-[18px] capitalize">oops! nothing here</p>
			</div>
		</div>
	);
};

export default Nothing;
