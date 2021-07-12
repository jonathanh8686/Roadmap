import React, { Component, useRef, useState } from 'react';
import UserPrompt from "./UserPrompt"
import User from "./User"

function AddUserButton(props) {
	const [isOpen, setIsOpen] = useState(false);

	const handleAddUser = (name, place, canDrive) => {
		console.log(canDrive);
		let boolDrive = (canDrive === "on") ? true : false;
		props.addUser(new User(name, place, boolDrive));
	}

	return (
		<div>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6 border border-black"
				onClick={() => setIsOpen(true)}>
				Add New User
			</button>

			<UserPrompt isOpen = {isOpen} setIsOpen = {setIsOpen} handleAddUser = {handleAddUser}></UserPrompt>
		</div>

	);
}


export default AddUserButton;