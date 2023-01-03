import React from "react";

const TextInput = ({
	containerClassName,
	handleTextChange,
	icon,
	...props
}) => {
	return (
		<div
			className={`border border-[#E8E8EF] px-3 py-4 rounded-[5px] flex items-center space-x-3 ${containerClassName}`}
		>
			{icon ? <img src={icon} alt="" className="w-[23px] h-6" /> : null}
			<input
				onChange={handleTextChange}
				{...props}
				className="text-[#656B8A] flex-1  focus:outline-none"
			/>
		</div>
	);
};

export default TextInput;
