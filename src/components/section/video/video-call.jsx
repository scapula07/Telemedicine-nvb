import { VideoControl, VideoFrame } from ".";
import doctorImage from "@/assets/images/doctor-video.svg";
import patientImage from "@/assets/images/patient-video.svg";
import {
	huddleIframeApp,
	HuddleIframe,
	HuddleAppEvent
} from "@huddle01/huddle01-iframe";
import { useEffect } from "react";
import { Button } from "@/components/input";
import { huddleClient } from "@/utils/helper/huddleClient";

const VideoCallSection = () => {
	const handleJoin = async () => {
		try {
			await huddleClient.join("dev", {
				address: "0x5c12DB1E016bEa19aeD67C125dc5b036e39320Cb",
				wallet: "",
				ens: "axit.eth"
			});

			console.log("joined");
		} catch (error) {
			console.log({ error });
		}
	};

	const iframeConfig = {
		roomUrl: "https://iframe.huddle01.com/1233",
		height: "450px",
		width: "80%"
	};

	useEffect(() => {
		huddleIframeApp.on(HuddleAppEvent.PEER_JOIN, (data) =>
			console.log({ iframeData: data })
		);
		huddleIframeApp.on(HuddleAppEvent.PEER_LEFT, (data) =>
			console.log({ iframeData: data })
		);
	}, []);

	//   useEffect(() => {
	// 	huddleIframeApp.on("peer-join", (data) =>
	// 	  console.log({ iframeData: data })
	// 	);
	// 	huddleIframeApp.on("peer-left", (data) =>
	// 	  console.log({ iframeData: data })
	// 	);
	//   }, []);

	return (
		<div className="w-[730px] px-5 pb-4 pt-6 flex flex-col  ">
			<div className="relative">
				{/* place holder for the video chat */}
				{/* <img src={doctorImage} alt="" />
				<img
					src={patientImage}
					alt=""
					className="absolute bottom-10 right-10"
				/> */}
				<Button className='bg-red-500' title="join room" onClick={handleJoin} />

				<VideoFrame />
				{/* <HuddleIframe config={iframeConfig} /> */}
			</div>

			{/* video controls */}
			<VideoControl />
		</div>
	);
};

export default VideoCallSection;
