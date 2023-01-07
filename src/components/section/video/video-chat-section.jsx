import { useState } from "react";
import { TextInput } from "@/components/input";
import { chatMessages } from "@/utils/data/dummy-data";

// images
import avatar from "@/assets/avatar/1.svg";
import threeDotsIcon from "@/assets/icons/three-dot.svg";
import sendIcon from "@/assets/icons/send.svg";



const VideoChatSection = () => {

    const [typedMessage, setTypedMessage] = useState("");

	const handleTextChange = (e) => setTypedMessage(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(typedMessage);
	};
	return (
		<div className="w-[501px] h-[400px]">
			<div className="py-4 px-5 border-b border-[#F0F0F0] bg-white">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-6">
						<img src={avatar} alt="" />
						<p className="text-[#1F1F1F] font-medium text-base leading-[18px]">
							Tatiana Schleifer
						</p>
					</div>
					<img src={threeDotsIcon} alt="" className="cursor-pointer" />
				</div>
			</div>

            <div className="h-full bg-white">
				<div className="h-full py-4 px-6 flex flex-col">
					{/* chat messages appear here */}
					<div className="h-[400px] overflow-y-auto">
						<div className="space-y-8">
							{chatMessages?.map((item, index) => (
								<div
									key={index}
									className={`${
										item?.who === "me"
											? "flex space-x-2"
											: "grid grid-flow-col gap-x-2 justify-end"
									} `}
								>
									<div className={`${item?.who === "me" ? "" : "order-last"}`}>
										<img src={item?.avatar} alt="" />
									</div>
									<div
										className={`text-sm leading-4 p-3 w-[406px] ${
											item?.who === "me"
												? "text-[#595959] bg-[#FCFCFC] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-0"
												: "text-[#101828] bg-[#E6EDF8] rounded-tr-0 rounded-br-lg rounded-bl-lg rounded-tl-lg w-[406px]"
										}`}
									>
										{item?.message}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* typing section */}
					<form
						onSubmit={handleSubmit}
						className="bg-[#F8FAFD] rounded-2xl mt-auto h-14 px-3 flex space-x-4 items-center"
					>
						<TextInput
							placeholder="Type here..."
							mainContainerClassName="w-full"
							containerClassName="py-0 pl-0"
							handleTextChange={handleTextChange}
						/>
						<button>
							<img src={sendIcon} alt="" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default VideoChatSection;
