import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Button } from "../input";

// images
import closeIcon from "@/assets/icons/close.svg";
import documentIcon from "@/assets/icons/document.svg";

const UploadFile = ({ showUploadFile, setShowUploadFile }) => {
	const handleClose = () => setShowUploadFile(false);
	return (
		<Transition appear show={showUploadFile} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-[999999]"
				onClose={handleClose}
			>
				<div className="min-h-screen text-center">
					<Dialog.Overlay className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-75 z-[999999]" />
					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="inline-block h-screen align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<div className="inline-block w-11/12 text-left align-middle transition-all z-[999999999] relative shadow-xl bg-white max-w-[709px] px-6 py-6 rounded-[10px]">
						<Dialog.Title
							as="div"
							className="flex justify-between items-center"
						>
							<div className="flex-1 text-center">
								<h1 className="text-[#101828] capitalize text-[28px] leading-8 font-bold mb-2">
									Upload file
								</h1>
								<p className="text-[#49497D] text-base leading-[18px]">
									Attach the file below
								</p>
							</div>
							<img src={closeIcon} alt="" onClick={handleClose} />
						</Dialog.Title>
						<div className="mt-6 border border-dashed border-[#EAEAEA] flex items-center text-center flex-col py-[14px] mb-10">
							<img src={documentIcon} alt="" />
							<p className="font-bold text-xl leading-[23px] capitalize mt-[14px] mb-[11px]">
								Drag files(s) here to upload
							</p>
							<p className="font-bold text-sm leading-[16px] text-[#959697]">
								alternatively you can select file by{" "}
								<span className="block text-[#004AB9] cursor-pointer">
									clicking here
								</span>
							</p>
							{/* <p className="text-center text-[#080B17] font-medium text-2xl leading-[30px]">
								Your appointment with Dr Uche michri was successful
							</p>
							<div className="mt-6 mb-8">
								<p className="text-[#082125] capitalize text-sm font-medium mb-2">
									your schedule
								</p>
								<p className="py-[19px] pl-[10px] text-[#595959] text-base leading-[18px] rounded border border-[#EAECF0]">
									02/01/2023, 08:00PM -08:30PM
								</p>
							</div> */}
						</div>
						<div className="flex items-center justify-between">
							<Button
								title="cancel"
								onClick={handleClose}
								className="bg-[#EBEEF2] text-[#49497D] w-[112px] border-0"
							/>
							<Button
								title="proceed"
								// onClick={handleClose}
								className="bg-[#004AB9] text-white w-[112px] border-0"
							/>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default UploadFile;
