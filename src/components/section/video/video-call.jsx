import { VideoControl } from ".";

// images

import doctorImage from "@/assets/images/doctor-video.svg";
import patientImage from "@/assets/images/patient-video.svg";

const VideoCallSection = () => {
	return (
		<div className="w-[730px] px-5 pb-4 pt-6">
			<div className="relative">
				{/* place holder for the video chat */}
				<img src={doctorImage} alt="" />
				<img
					src={patientImage}
					alt=""
					className="absolute bottom-10 right-10"
				/>
			</div>

			{/* video controls */}
			<VideoControl />
		</div>
	);
};

export default VideoCallSection;
