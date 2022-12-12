import React, { createContext, useContext, useState } from "react";
import Messages from "./Messages";

export const MessagesContext = createContext();
export default function Chat() {
	//const [ username, setUsername ] = useState("Abhiram__Global");
	return (
		<div>
			<MessagesContext.Provider value={{username:"Abhiram__Global"}}>
				<Messages />
			</MessagesContext.Provider>
		</div>
	);
}
