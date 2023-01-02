import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ href, title, className, ...props }) => {
	return href ? (
		<a className={twMerge(`${className}`)} {...{ href }}>
			{title}
		</a>
	) : (
		<button className={twMerge(`btn ${className}`)} {...props}>
			{title}
		</button>
	);
};

export default Button;
