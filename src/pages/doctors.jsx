import { TextInput } from "@/components/input";
import { doctorsList } from "@/utils/data/dummy-data";

// images
import searchIcon from "@/assets/icons/search.svg";

const Doctors = () => {
	console.log(doctorsList);
	return (
		<main className="mt-8">
			<div className="layout-container">
				{/* search doctors */}
				<div className="flex items-center justify-between">
					<h3 className="text-[#192839] capitalize text-xl leading-[27px] font-bold">
						Doctors ({doctorsList?.length})
					</h3>
					<TextInput
						placeholder="Search for Doctors"
						icon={searchIcon}
						containerClassName="w-[324px]"
					/>
				</div>

				{/* list of doctors */}

				{/* table head  */}
				<div className="bg-[#F9FAFB] grid grid-cols-3 mt-4 text-[14px] leading-[18px] uppercase text-[#19325C] font-medium py-[19px]">
					<div className="pl-6">name</div>
					<div className="pl-6">specialization</div>
					<div className="pl-6">status</div>
				</div>

				{/* table body */}
				<div className="h-[calc(100vh-300px)] overflow-y-auto">
					{doctorsList?.map((doctor, index) => (
						<div
							key={index}
							className="grid grid-cols-3 py-[6px] items-center text-[15px] leading-5 capitalize text-[#3E3E40]"
						>
							<div className="pl-6">{doctor?.name}</div>
							<div className="pl-6">{doctor?.specialization}</div>
							<div className="pl-6">
								<p className="text-xs text-[#101828] mb-2">Available Today</p>

								{doctor?.available?.length ? (
									<div className="flex items-center space-x-2">
										{doctor?.available?.map((item, index) => (
											<div
												key={`availabilit-${index}`}
												className="bg-[rgba(8,132,21,0.15)] rounded-[7px] px-[13px] py-[10px] capitalize text-[#088415]"
											>
												{item}
											</div>
										))}
									</div>
								) : (
									"-"
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Doctors;
