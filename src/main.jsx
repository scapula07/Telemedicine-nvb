import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { HuddleClientProvider } from "@huddle01/huddle01-client";
import { huddleClient } from "./utils/helper/huddleClient";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HuddleClientProvider client={huddleClient}>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</HuddleClientProvider>
	</React.StrictMode>
);
