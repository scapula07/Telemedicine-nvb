import { useState } from "react";
import { Calendar } from "react-calendar";
import {
	patientDetails,
	patientDocuments,
	patientMedicalRecord
} from "@/utils/data/dummy-data";
import "react-calendar/dist/Calendar.css";
import { Button } from "@/components/input";
import { AddReport, UploadFile } from "@/components/modals";

// images
import avatar from "@/assets/icons/avatar.svg";
import videoCallIcon from "@/assets/icons/video-call.svg";
import phoneCallIcon from "@/assets/icons/phone-call.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import plusIcon from "@/assets/icons/plus.svg";
import documentIcon from "@/assets/icons/document.svg";
import downloadIcon from "@/assets/icons/download.svg";
import { Link } from "react-router-dom";

const Patient = () => {
	const [value, onChange] = useState(new Date());
	const [showUploadFile, setShowUploadFile] = useState(false);
	const [showAddMedicalRecord, setShowAddMedicalRecord] = useState(false);

	const handleShowUploadFileModal = () => setShowUploadFile(true);
	const handleShowAddMedicalRecordModal = () => setShowAddMedicalRecord(true);
	return (
		<main className="layout-container pb-[172px] mt-16 flex justify-between">
			{/* modals */}
			<UploadFile {...{ showUploadFile, setShowUploadFile }} />
			<AddReport {...{ showAddMedicalRecord, setShowAddMedicalRecord }} />
			<div className="w-[709px]">
				{/* patient email and way to start video or phone call */}
				<div className="flex items-center justify-between border border-[#E8E8EF] rounded-lg py-3 px-4">
					<div className="flex items-center space-x-2">
						<img src={avatar} alt="" />
						<div className="">
							<h1 className="text-[#1F1F1F] text-xl leading-[23px] capitalize font-bold">
								Rasiri Ovie
							</h1>
							<p className="text-[#667085] text-xs leading-[18px] pt-[3px]">
								rasiriovie@gmail.com
							</p>
						</div>
					</div>

					<div className="flex items-center space-x-2">
						<img
							src={phoneCallIcon}
							alt=""
							className="cursor-pointer h-8 w-8"
						/>
						<Link to="/video-call">
							<img
								src={videoCallIcon}
								alt=""
								className="cursor-pointer h-8 w-8"
							/>
						</Link>
					</div>
				</div>

				{/* patient details */}
				<div className="grid grid-cols-4 gap-y-6 mt-8 py-[22px] px-5 border border-[#E8E8EF] rounded-[5px]">
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

				{/* Upcoming appointment */}
				<div className="mt-8">
					<h2 className="text-[#141414] font-bold text-[18px] leading-[21px] capitalize mb-8">
						Upcoming appointment
					</h2>
					<Calendar onChange={onChange} value={value} />
					<div className="flex items-center space-x-[9px] bg-[#F3F6FC] rounded-[5px] py-[15px] px-[10px] mt-8 mb-4 w-[461px]">
						<img src={calendarIcon} alt="" />
						<p className="text-[#494949] capitalize text-base leading-[18px]">
							02/01/2023 10:00AM - 11:20PM
						</p>
					</div>
					<Button title="start session" className="bg-[#004AB9] w-[162px]" />
				</div>

				{/* payment history */}
				<div className="mt-8">
					<p className="text-[#141414] text-base leading-[21px] font-bold mb-3">
						Payment history
					</p>
					<div className="text-base leading-4 flex items-center justify-between border-b border-[#EFEFEF] w-[436px] py-5 px-3">
						<p className="text-[#3E3E40]">1hr 20 mins session</p>
						<div className="flex items-center">
							<p className="">$40</p>
							<p className="">paid</p>
						</div>
					</div>
				</div>
			</div>
			{/* patient document and medical record */}
			<div className="border border-[#F0F0F0] rounded px-[18px] pt-[22px] w-[480px]">
				{/* documents */}
				<div className="flex items-center justify-between">
					<h1 className="text-[#1F1F1F] text-xl leading-[23px] capitalize font-bold">
						document
					</h1>
					<div
						onClick={handleShowUploadFileModal}
						className="flex items-center space-x-[11px] cursor-pointer"
					>
						<img src={plusIcon} alt="" className="" />
						<p className="text-[#1F1F1F] text-base leading-[18px] capitalize font-bold">
							add files
						</p>
					</div>
				</div>

				<div className="mt-[50px]">
					{patientDocuments.map((item, index) => (
						<div
							key={index}
							className="flex items-center justify-between border-b border-[#F3F3F4] py-3 px-[11px]"
						>
							<div className="flex items-center space-x-3">
								<img src={documentIcon} alt="" className="" />
								<p className="text-[#475467] text-base leading-[18px]">
									{item}
								</p>
							</div>
							<img src={downloadIcon} className="cursor-pointer" alt="" />
						</div>
					))}
				</div>

				{/* medical record */}
				<div className="flex items-center justify-between mt-[71px]">
					<h1 className="text-[#1F1F1F] text-xl leading-[23px] capitalize font-bold">
						medical record
					</h1>
					<div
						onClick={handleShowAddMedicalRecordModal}
						className="flex items-center space-x-[11px] cursor-pointer"
					>
						<img src={plusIcon} alt="" className="" />
						<p className="text-[#1F1F1F] text-base leading-[18px] capitalize font-bold">
							add report
						</p>
					</div>
				</div>

				<div className="mt-9 grid grid-cols-4 items-center border-b border-[#F3F3F4] py-3">
					<>
						{patientMedicalRecord.map((item, index) => (
							<div key={index} className="flex">
								<div className="capitalize">
									<p className="text-[#646464]  text-xs leading-[14px] mb-[6px]">
										{item.title}
									</p>
									<p className="font-bold text-[#323232] text-sm leading-4">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</>
					<img src={downloadIcon} alt="" className="ml-auto cursor-pointer" />
				</div>
			</div>
		</main>
	);
};

export default Patient;
