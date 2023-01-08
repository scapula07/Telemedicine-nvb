import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ href, icon, title, className, ...props }) => {
	return href ? (
		<a className={twMerge(`btn ${className}`)} {...{ href }}>
			{title}
		</a>
	) : (
		<button className={twMerge(`btn ${className}`)} {...props}>
			{icon ? <img src={icon} alt="" className="h-6 w-6 mr-2" /> : null}
			{title}
		</button>
	);
};

export default Button;
