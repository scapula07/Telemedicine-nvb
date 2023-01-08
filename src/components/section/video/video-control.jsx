// images
import switchCamera from "@/assets/icons/switch-camera.svg";
import offVideo from "@/assets/icons/off-video.svg";
import endCall from "@/assets/icons/end-call.svg";
import offMic from "@/assets/icons/off-mic.svg";
import unknown from "@/assets/icons/unknown.svg";
import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";


const VideoControl = () => {
	return (
		<div className="rounded-md h-[68px] flex items-center justify-center mt-8 w-full">
			<div className="flex items-center space-x-6 w-full justify-center">
				<h5
				  onClick={	huddleIframeApp.methods.enableWebcam()}
				><img src={switchCamera} alt="" className="cursor-pointer" />
				</h5>
				<h5
				 onClick={	huddleIframeApp.methods.disableWebcam()}
				><img src={offVideo} alt="" className="cursor-pointer" />
				
				</h5>
				<h5
				    onClick={	huddleIframeApp.methods.disableShare()}
				><img src={endCall} alt="" className="cursor-pointer" /></h5>
				<h5 
				    onClick={	huddleIframeApp.methods.muteMic()}
				>
					<img src={offMic} alt="" className="cursor-pointer" /></h5>	
				<h5><img src={unknown} alt="" className="cursor-pointer" /></h5>
			</div>


				{/* {Object.keys(huddleIframeApp.methods)
							.map((key) => (
							<button
								key={key}
								onClick={() => {
								huddleIframeApp.methods[key]();
								}}
							>
								{key}
							</button>
							))} */}

		</div>
	);
};

export default VideoControl;
