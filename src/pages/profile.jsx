import { useState } from "react";
import { patientDetails } from "@/utils/data/dummy-data";
import { MedicalRecordsList } from "@/components/section/profile";
import { Nothing } from "@/components/misc";
import { AddReport, EditProfile } from "@/components/modals";
import LitJsSdk from "@lit-protocol/sdk-browser";

// images
import avatar from "@/assets/avatar/1.svg";
import editIcon from "@/assets/icons/edit-icon.svg";
import plusIcon from "@/assets/icons/plus.svg";
import downloadIcon from "@/assets/icons/download.svg";

const Profile = () => {
	const [showAddMedicalRecord, setShowAddMedicalRecord] = useState(false);
	const [showEditProfile, setShowEditProfile] = useState(false);

	const handleShowAddMedicalRecord = () => setShowAddMedicalRecord(true);
	const handleShowEditProfile = () => setShowEditProfile(true);

	return (
		<main className="bg-[#FCFCFC] pb-16">
			<AddReport {...{ showAddMedicalRecord, setShowAddMedicalRecord }} />
			<EditProfile {...{ showEditProfile, setShowEditProfile }} />
			<div className="w-[950px] mx-auto">
				{/* profile */}
				<div className="bg-[#FFFFFF] mb-6 rounded-lg px-6 py-8">
					{/* bio */}
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<img src={avatar} alt="" />
							<h1 className="text-[#101828] text-2xl leading-[27px] capitalize font-bold">
								balabulu bulublu
							</h1>
						</div>
						<button
							onClick={handleShowEditProfile}
							className="flex justify-center items-center space-x-[7px] capitalize text-[#49497D] text-base leading-[18px] border border-[#E8E8EF] rounded w-[141px] h-[41px]"
						>
							<img src={editIcon} alt="" />
							<p className="">edit profile</p>
						</button>
					</div>

					{/* bio text */}
					<p className="text-[#667085] text-sm leading-[21px] mt-2 mb-8">
						I am looking to refresh the branding and website for a sleep-related
						DTC product in anticipation of a relaunch later this year. This
						project will include providing guidance on branding, new page
						layout/structure, conversion optimization, and more.
					</p>
					{/* more info */}

					{false ? (
						<Nothing />
					) : (
						<div className="grid grid-cols-4 gap-y-6  py-[22px] px-5 border border-[#E8E8EF] rounded-[5px]">
							{patientDetails.map((item, index) => (
								<div key={index} className="capitalize">
									<p className="text-[#646464] text-xs leading-[14px]">
										{item.title}
									</p>
									<p className="text-[#323232] font-medium text-sm leading-4 mt-[6px]">
										{item.description}
									</p>
								</div>
							))}
						</div>
					)}
				</div>

				{/* medical record */}
				<div className="bg-white px-5 py-4 rounded-lg">
					<div className="flex items-center justify-between mb-[29px]">
						<h1 className="font-bold text-[22px] leading-[25px] capitalize text-[#1F1F1F]">
							medical record
						</h1>
						<button
							onClick={handleShowAddMedicalRecord}
							className="flex justify-center items-center space-x-[7px] capitalize text-[#49497D] text-base leading-[18px] border border-[#E8E8EF] rounded w-[141px] h-[41px]"
						>
							<img src={plusIcon} alt="" />
							<p className="capitalize text-base leading-[18px] text-[#49497D]">
								add report
							</p>
						</button>
					</div>

					{true ? <Nothing /> : <MedicalRecordsList />}
				</div>
			</div>
		</main>
	);
};

export default Profile;
