import { useState } from "react";
import { TextInput } from "@/components/input";
import { chatInbox } from "@/utils/data/dummy-data";

// images
import searchIcon from "@/assets/icons/search.svg";
import onlineIcon from "@/assets/icons/online.svg";

const ChatInboxList = () => {
	const [searchItem, setSearchItem] = useState("");
	const filteredChatInboxList = chatInbox?.filter((item) =>
		item.name.toLowerCase().includes(searchItem.toLowerCase())
	);
	const handleTextChange = (e) => setSearchItem(e.target.value);
	return (
		<div className="bg-white rounded-lg pt-6 pb-4 px-5 w-[341px] h-full">
			<div className="flex items-center space-x-2 mb-[13px]">
				<h3 className="text-[#101828] font-bold text-xl leading-[21px]">
					Inbox
				</h3>
				<div className="bg-[#E6F3FD] rounded-2xl py-1 px-2 text-[#0089ED] text-[13px] leading-[15px] capitalize">
					2 new
				</div>
			</div>

			{/* search for chat */}
			<TextInput
				placeholder="Search for chat"
				icon={searchIcon}
				handleTextChange={handleTextChange}
			/>

			<div className="space-y-[13px] overflow-y-auto pb-4 mt-7 h-4/5">
				{filteredChatInboxList?.map((item, index) => (
					<div
						key={index}
						className="py-2 flex items-center justify-between cursor-pointer"
					>
						<div className="flex items-center space-x-2">
							<img src={item?.avatar} alt="" />
							<div className="font-medium text-[#1F1F1F]">
								<p className="text-base leading-[18px] capitalize">
									{item?.name}
								</p>
								<p className="text-xs leading-[14px] text-ellipsis whitespace-nowrap overflow-x-hidden w-[200px]">
									{item?.lastMessage}
								</p>
							</div>
						</div>
						<div className="text-[10px] leading-[11px]">
							<p className="text-[#8C8C8C] mb-3">{item?.time}</p>
							<div className="flex items-center">
								{item?.isOnline ? <img src={onlineIcon} alt="" /> : null}

								{item?.numberOfMessages === 0 ? null : (
									<p className="bg-[#0089ED] rounded-[32px] text-white py-[1px] px-[5px] font-medium ml-auto">
										{item?.numberOfMessages}
									</p>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChatInboxList;
