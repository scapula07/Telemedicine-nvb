import { getHuddleClient } from "@huddle01/huddle01-client";

export const huddleClient = getHuddleClient(
	import.meta.env.VITE_HUDDLE01_API_KEY
);

export const iframeConfig = {
	roomUrl: "https://iframe.huddle01.com/123",
	height: "600px",
	width: "80%",
	noBorder: false // false by default
};
