const TextArea = ({ name, label, handleTextChange, ...props }) => {
	return (
		<div>
			<label htmlFor={name} className="text-[#101828] text-base leading-[18px] capitalize mb-2 inline-block">{label}</label>
			<textarea
				id={name}
				name={name}
				onChange={handleTextChange}
				className="w-full h-[121px] focus:outline-none border border-[#E8E8EF] rounded-[5px] bg-[#FCFDFD] py-[14px] px-3 text-[#9696B4] text-base leading-[18px]"
				{...props}
			/>
		</div>
	);
};

export default TextArea;
