import { VideoControl } from ".";
import doctorImage from "@/assets/images/doctor-video.svg";
import patientImage from "@/assets/images/patient-video.svg";
import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";
import { useEffect, useState } from "react";

const VideoCallSection = () => {


	const iframeConfig = {
		roomUrl: "https://iframe.huddle01.com/123",
		height: "600px",
		width: "80%",
	  };

	  useEffect(() => {
		huddleIframeApp.on("peer-join", (data) =>
		  console.log({ iframeData: data })
		);
		huddleIframeApp.on("peer-left", (data) =>
		  console.log({ iframeData: data })
		);
	  }, []);

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

                <HuddleIframe config={iframeConfig} />
			</div>

			{/* video controls */}
			<VideoControl />
		</div>
	);
};

export default VideoCallSection;
