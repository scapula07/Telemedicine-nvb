import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

// images
import successIcon from "@/assets/icons/success.svg";
import { Button } from "../input";

const BookAppointmentSuccess = ({
	showBookAppointmentSuccess,
	setShowBookAppointmentSuccess
}) => {
	const handleClose = () => setShowBookAppointmentSuccess(false);
	return (
		<Transition appear show={showBookAppointmentSuccess} as={Fragment}>
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
							<img src={successIcon} alt="" className="h-16 w-16 mx-auto" />
						</Dialog.Title>
						<div className="mt-6">
							<p className="text-center text-[#080B17] font-medium text-2xl leading-[30px]">
								Your appointment with Dr Uche michri was successful
							</p>
							<div className="mt-6 mb-8">
								<p className="text-[#082125] capitalize text-sm font-medium mb-2">
									your schedule
								</p>
								<p className="py-[19px] pl-[10px] text-[#595959] text-base leading-[18px] rounded border border-[#EAECF0]">
									02/01/2023, 08:00PM -08:30PM
								</p>
							</div>
							<Button
								title="cancel"
								onClick={handleClose}
								className="bg-[#EBEEF2] text-[#49497D] w-[112px]"
							/>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default BookAppointmentSuccess;
