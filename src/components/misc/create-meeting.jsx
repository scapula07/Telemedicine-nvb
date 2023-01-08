import { Button, TextInput } from "../input";
import videoChatIcon from "@/assets/icons/video-call.svg";
import { useState } from "react";
import { huddleClient } from "@/utils/helper";

const CreateMeeting = ({ handleJoin }) => {
	const [meetingId, setMeetingId] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await huddleClient.join(meetingId, {
				address: "0x5c12DB1E016bEa19aeD67C125dc5b036e39320Cb",
				wallet: "",
				ens: "axit.eth"
			});
			console.log("joined");
		} catch (error) {
			console.log({ error });
		}
	};

	return (
		<div className="grid place-items-center h-screen">
			<div className="flex items-center space-x-10">
				<Button
					icon={videoChatIcon}
					title="new meeting"
					onClick={handleJoin}
					className="bg-blue-500 w-[150px]"
				/>
				<form onSubmit={handleSubmit}>
					<TextInput
						placeholder="Enter a meeting code"
						value={meetingId}
						handleTextChange={(e) => setMeetingId(e.target.value)}
						required
					/>
				</form>
			</div>
		</div>

		// <form>CreateMeeting</form>
	);
};

export default CreateMeeting;
