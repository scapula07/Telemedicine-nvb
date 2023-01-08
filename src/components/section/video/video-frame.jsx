import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";

const VideoFrame = () => {
	const stream = useHuddleStore((state) => state.stream);

	const isCamPaused = useHuddleStore((state) => state.isCamPaused);

	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.srcObject = stream;
		}
		console;
		console.log({ stream });
	}, [stream]);
	return (
		<div className="error">
			<video
				style={{ width: "500px"}}
				ref={videoRef}
				autoPlay
				muted
				playsInline
			></video>
		</div>
	);
};

export default VideoFrame;
