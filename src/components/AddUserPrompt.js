import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from "./AutocompletePlace.jsx"

function UserPrompt(props) {

	const [userName, setUserName] = useState("");
	const [userLocation, setUserLocation] = useState();
	const [userCanDrive, setUserCanDrive] = useState(false);

	return (
		<div>
			<Dialog open={props.isOpen} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add User</DialogTitle>
				<DialogContent style={{ height: '50vh' }}>
					<DialogContentText>
						To add a new user, enter all the required information to be added onto the map.
					</DialogContentText>

					<input style={{ width: "100%" }}
						className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Name"/>

					<label className="inline-flex items-center mt-4 mb-6">
						<input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" onChange={(e) => { setUserCanDrive(e.target.value); }} /><span className="ml-2 text-gray-700">Can Drive?</span>
					</label>

					<Autocomplete onSelect={place => {
						setUserLocation(place);
					}} width="100%" />

				</DialogContent>
				<DialogActions>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-6"
						onClick={() => {
							props.setIsOpen(false);
						}}>
						Cancel
					</button>

					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-6"
						onClick={() => {
							props.setIsOpen(false);
							props.handleAddUser(userName, userLocation, userCanDrive);
							setUserCanDrive(false);
						}}>
						Confirm
					</button>

				</DialogActions>
			</Dialog>
		</div>
	);
}

export default UserPrompt;