import React from "react";
import { twMerge } from "tailwind-merge";

const TextInput = ({
	containerClassName,
	handleTextChange,
	icon,
	label,
	id,
	name,
	labelClassName,
	mainContainerClassName,
	...props
}) => {
	return (
		<div className={`${mainContainerClassName}`}>
			{label ? (
				<label
					htmlFor={id}
					className={`mb-2 text-[#101828] text-base leading-[18px] capitalize font-medium ${labelClassName}`}
				>
					{label}
				</label>
			) : null}
			<div
				className={twMerge(
					`border border-[#E8E8EF] px-3 py-3 flex  rounded-[5px] space-x-3 ${containerClassName}`
				)}
			>
				{icon ? <img src={icon} alt="" className="w-[23px] h-6" /> : null}
				<input
					onChange={handleTextChange}
					{...{ name, id, ...props }}
					className="text-[#656B8A] w-full text-base leading-[18px] focus:outline-none"
				/>
			</div>
		</div>
	);
};

export default TextInput;
