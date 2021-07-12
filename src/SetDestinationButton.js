import React, { Component, useRef, useState } from 'react';
import DestinationPrompt from "./DestinationPrompt"
import User from "./User"

function SetDestinationButton(props) {
	const [isOpen, setIsOpen] = useState(false);

	const handleSetDestination = (place) => {
		props.setDestination(place);
	}

	return (
		<div>
			<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-6 border border-black"
				onClick={() => setIsOpen(true)}>
				Set Destination
				
			</button>

			<DestinationPrompt isOpen = {isOpen} setIsOpen = {setIsOpen} handleSetDestination = {handleSetDestination}></DestinationPrompt>
		</div>

	);
}


export default SetDestinationButton;