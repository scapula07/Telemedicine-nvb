import { ChatInboxList, MainChat } from "@/components/section/chat";

const Message = () => {
	return (
		<main className="pt-8 bg-[#F5F5F5] h-[calc(100vh-76px)] overflow-hidden">
			<div className="layout-container h-full flex space-x-[9px]">
				{/* chat inbox list */}
				<ChatInboxList />

				{/* main chat */}
        <MainChat />
			</div>
		</main>
	);
};

export default Message;
