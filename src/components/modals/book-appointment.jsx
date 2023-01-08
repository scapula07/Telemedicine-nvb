import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, TextInput } from "../input";

// images
import closeIcon from "@/assets/icons/close.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import clockIcon from "@/assets/icons/clock.svg";

const BookAppointment = ({
	showBookAppointment,
	setShowBookAppointment,
	formData,
	setFormData
}) => {
	const handleClose = () => setShowBookAppointment(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleTextChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};
	return (
		<Transition appear show={showBookAppointment} as={Fragment}>
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
							<h1 className="capitalize text-center flex-1 text-[28px] leading-[35px] text-[#101828] font-bold">
								book appointment
							</h1>
							<img
								src={closeIcon}
								alt=""
								className="cursor-pointer"
								onClick={handleClose}
							/>
						</Dialog.Title>
						<form onSubmit={handleSubmit} className="my-6 space-y-6">
							<div className="flex space-x-6 items-center">
								<TextInput
									icon={calendarIcon}
									label="date"
									value={formData?.date?.toLocaleDateString()}
									containerClassName="py-2 px-2"
								/>
								<TextInput
									icon={clockIcon}
									label="time"
									disabled
									value={formData?.time}
									containerClassName="py-2 px-2"
								/>
							</div>
							<TextInput
								label="booking fee"
								value={formData?.bookingFee}
								disabled
								containerClassName="py-2 px-2"
							/>
							<TextInput
								label="condition"
								name="condition"
								handleTextChange={handleTextChange}
								value={formData?.condition}
								containerClassName="py-2 px-2"
							/>
							<div className="flex items-center justify-between">
								<Button
									title="cancel"
									className="bg-[#EBEEF2] text-[#49497D] w-[112px]"
									onClick={handleClose}
								/>
								<Button
									title="proceed"
									className="w-[120px] bg-[#004AB9] text-white"
								/>
							</div>
						</form>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default BookAppointment;
