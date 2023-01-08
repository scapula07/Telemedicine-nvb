import { CreateMeeting, Loader } from "@/components/misc";
import { GuestVideoFrame, VideoFrame } from "@/components/section/video";
import { AccountState } from "@/recoil/globalState";
import { huddleClient, randomTextGenerator } from "@/utils/helper";
import { useHuddleStore } from "@huddle01/huddle01-client/store";
import { useRecoilValue } from "recoil";

const Meeting = () => {
	const account = useRecoilValue(AccountState);
	console.log("account =>", typeof account);

	const roomState = useHuddleStore((state) => state.roomState);
	const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
	// const [isJoiningRoom, setIsJoiningRoom] = useState(roomState.roomId);

	// console.log("random text", randomTextGenerator());
	const handleJoin = async () => {
		// if (!account) {
		// 	alert("connect your wallet to create a meeting");
		// 	return;
		// }
		try {
			await huddleClient.join(randomTextGenerator(), {
				address: "0x5c12DB1E016bEa19aeD67C125dc5b036e39320Cb",
				wallet: "",
				ens: "axit.eth"
			});
			console.log("joined");
		} catch (error) {
			console.log({ error });
		}
	};

	console.log("roomie id", { roomState });


	return (
		<main className="layout-container mt-4">
			{roomState?.roomId ? (
				<div className="mb-5 space-y-2">
					<h1>Copy the meeting link below and share</h1>
					<p className="bg-gray-900 text-white p-5 rounded-md w-fit">
						{roomState?.roomId}
					</p>
				</div>
			) : null}
			{/* {isJoiningRoom ? <Loader title="processing..." /> : null} */}
			{roomState?.roomId ? (
				<div className="flex items-center">
					<VideoFrame />
					<div className="peers-grid">
						{peersKeys.map((key) => (
							<GuestVideoFrame key={`peerId-${key}`} peerIdAtIndex={key} />
						))}
					</div>
				</div>
			) : (
				<CreateMeeting {...{ handleJoin }} />
			)}
		</main>
	);
};

export default Meeting;
