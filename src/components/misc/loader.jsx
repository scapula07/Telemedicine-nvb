import React from "react";

const Loader = ({title}) => {
	return (
		<div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[999] text-white text-3xl flex items-center justify-center">
			{title}
		</div>
	);
};

export default Loader;
