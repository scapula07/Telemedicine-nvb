import { patientMedicalRecord } from "@/utils/data/dummy-data";

// images
import downloadIcon from "@/assets/icons/download.svg";

const MedicalRecordsList = () => {
	return (
		<div className="grid grid-cols-4 items-center  space-y-[13px]">
			{patientMedicalRecord?.map((item, index) => (
				<div key={index} className="capitalize border-[#F3F3F4] border-b py-3">
					<p className="text-xs leading-[14px] text-[#646464] mb-[6px]">
						{item?.title}
					</p>
					<p className="text-[#323232] text-sm leading-4 font-medium">
						{item?.description}
					</p>
				</div>
			))}
			<button className="ml-auto">
				<img src={downloadIcon} alt="" />
			</button>
		</div>
	);
};

export default MedicalRecordsList;
