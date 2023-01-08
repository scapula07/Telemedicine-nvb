const DateInput = ({ name, label, handleDateChange }) => {
	return (
		<div>
			<lable
				htmlFor={name}
				className="inline-block mb-2 text-[#101828] font-medium text-base leading-[18px] capitalize"
			>
				{label}
			</lable>
			<input
				type="date"
				name={name}
				onChange={handleDateChange}
				className="inline-block border border-[#E8E8EF] rounded-[5px bg-[#FCFDFD] w-full h-12 px-[15px]"
			/>
		</div>
	);
};

export default DateInput;
