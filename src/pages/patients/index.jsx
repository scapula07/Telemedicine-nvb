import { TextInput } from "@/components/input";
import { patientList } from "@/utils/data/dummy-data";
import { Link } from "react-router-dom";

// images
import searchIcon from "@/assets/icons/search.svg";
import { links } from "@/utils/data";

const Patients = () => {
	return (
		<main className="mt-8">
			<div className="layout-container">
				{/* search patient */}
				<div className="flex items-center justify-between">
					<h3 className="text-[#192839] capitalize text-xl leading-[27px] font-bold">
						Patient ({patientList?.length})
					</h3>
					<TextInput
						placeholder="Search for Patients"
						icon={searchIcon}
						containerClassName="w-[324px]"
					/>
				</div>

				{/* list of patients */}

				{/* table head  */}
				<div className="bg-[#F9FAFB] grid grid-cols-3 mt-4 text-[14px] leading-[18px] uppercase text-[#19325C] font-medium py-[19px]">
					<div className="pl-6">name</div>
					<div className="pl-6">condition</div>
					<div className="pl-6">status</div>
				</div>

				{/* table body */}
				<div className="h-[calc(100vh-300px)] overflow-y-auto">
					{patientList?.map((patient, index) => (
						<Link key={index} to={`${links.patients}/${index}`}>
							<div className="grid grid-cols-3 py-[6px] items-center text-[15px] leading-5 capitalize text-[#3E3E40]">
								<div className="pl-6">{patient?.name}</div>
								<div className="pl-6">{patient?.condition}</div>
								<div className="pl-6">
									<p className="text-xs text-[#101828] mb-2">Available Today</p>

									{patient?.appointment?.length ? (
										<div className="flex items-center space-x-2">
											{patient?.appointment?.map((item, index) => (
												<div
													key={`availability-${index}`}
													className="bg-[#F3F6FC] rounded-[7px] px-[13px] py-[10px] capitalize text-[#000F25]
                                                ]"
												>
													{item.schedule}
												</div>
											))}
										</div>
									) : (
										"-"
									)}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
};

export default Patients;
