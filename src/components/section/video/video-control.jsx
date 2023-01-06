// images
import switchCamera from "@/assets/icons/switch-camera.svg";
import offVideo from "@/assets/icons/off-video.svg";
import endCall from "@/assets/icons/end-call.svg";
import offMic from "@/assets/icons/off-mic.svg";
import unknown from "@/assets/icons/unknown.svg";

const VideoControl = () => {
	return (
		<div className="rounded-md h-[68px] flex items-center justify-center mt-8">
			<div className="flex items-center space-x-6">
				<img src={switchCamera} alt="" className="cursor-pointer" />
				<img src={offVideo} alt="" className="cursor-pointer" />
				<img src={endCall} alt="" className="cursor-pointer" />
				<img src={offMic} alt="" className="cursor-pointer" />
				<img src={unknown} alt="" className="cursor-pointer" />
			</div>
		</div>
	);
};

export default VideoControl;
