import { VideoCallSection, VideoChatSection } from "@/components/section/video";



const VideoCall = () => {
	return (
		<main className="bg-[#FCFCFC] pt-8">
			<div className="layout-container flex justify-between">
				<VideoCallSection />
                <VideoChatSection />
			</div>
		</main>
	);
};

export default VideoCall;
//     h-[calc(100vh-76px)] overflow-hidden
