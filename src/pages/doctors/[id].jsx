import { useState } from "react";
import { Calendar } from "react-calendar";
import { BookAppointment, BookAppointmentSuccess } from "@/components/modals";
import "react-calendar/dist/Calendar.css";
import { Button } from "@/components/input";
import { scheduleDetails } from "@/utils/data/dummy-data";

// images
import covidDoctor from "@/assets/images/covid-doctor.svg";

const Doctor = () => {
	const [value, onChange] = useState(new Date());
	const [activeIndex, setActiveIndex] = useState(0);
	const [amount, setAmount] = useState(scheduleDetails[activeIndex].amount);
	const [showBookAppointment, setShowBookAppointment] = useState(false);
	const [showBookAppointmentSuccess, setShowBookAppointmentSuccess] =
		useState(false);
	const [formData, setFormData] = useState({
		date: value,
		time: scheduleDetails[activeIndex]?.time,
		bookingFee: scheduleDetails[activeIndex]?.amount,
		conditon: ""
	});

	const handleSelection = (index) => {
		setActiveIndex(index);
		setAmount(scheduleDetails[index].amount);
		setFormData((prev) => ({
			...prev,
			bookingFee: scheduleDetails[index].amount,
			time: scheduleDetails[index].time
		}));
	};

	const handleBooking = () => {
		setShowBookAppointment(true);
	};

	return (
		<main className="mt-[60px] pb-[249px]">
			{/* Modals */}
			<BookAppointment
				{...{
					showBookAppointment,
					setShowBookAppointment,
					formData,
					setFormData
				}}
			/>
			<BookAppointmentSuccess
				{...{ showBookAppointmentSuccess, setShowBookAppointmentSuccess }}
			/>
			{/* end of modals */}

			<div className="layout-container flex justify-between">
				<div className="w-[709px]">
					{/* about of Doctor */}
					<div className="">
						<h1 className="capitalize text-[#1B1C1E] font-bold text-[32px] leading-[37px]">
							dr. Uche mickri
						</h1>
						<h3 className="my-3 text-[#344054] text-base leading-[18px] font-medium">
							Dermatologist
						</h3>
						<p className="text-[#667085] text-sm">
							I am an expert in managing wide range of skin conditions,
							including acne, eczema, psoriasis, skin cancer, and cosmetic
							concerns. I make use of medical and surgical techniques to treat
							skin conditions
						</p>
					</div>

					{/* schedule */}
					<div className="mt-9">
						<h3 className="capitalize text-[18px] leading-[21px] text-[#141414] font-bold mb-[38px]">
							scheduling
						</h3>
						<Calendar onChange={onChange} value={value} />
						<p className="mb-4 mt-[38px] text-[#082125] capitalize text-sm font-medium">
							Available time for {value?.toDateString()}
						</p>

						<div className="flex items-center space-x-4 text-base leading-[18px]">
							{scheduleDetails?.map((item, index) => (
								<p
									key={index}
									onClick={() => handleSelection(index)}
									className={`rounded cursor-pointer px-[10px] py-[13px] ${
										activeIndex === index
											? "bg-[#F3F6FC] text-[#000712]"
											: "text-[#595959] border border-[#EAECF0]"
									}`}
								>
									<span className="font-bold">{item?.amount} </span>
									<span className="">{item?.time}</span>
								</p>
							))}
						</div>

						{/* booking fee */}
						<div className="mt-6">
							<h4 className="text-sm text-[#082125] font-medium capitalize mb-[13px]">
								booking fee
							</h4>
							<p className="text-[#000712] capitalize text-xl leading-[23px] font-bold">
								{amount}
							</p>
						</div>

						<Button
							title="book  appointment"
							className="bg-[#20494F] mt-8"
							onClick={handleBooking}
						/>
					</div>
				</div>

				{/* photo of Doctor */}
				<div className="w-[454px] h-[426px]">
					<img src={covidDoctor} alt="" className="w-full h-full" />
				</div>
			</div>
		</main>
	);
};

export default Doctor;
