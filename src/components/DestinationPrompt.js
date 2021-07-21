import React, {  useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from "./AutocompletePlace.jsx"

function DestinationPrompt(props) {
	const [destinationLocation, setDestinationLocation] = useState();

	return (
		<div>
			<Dialog open={props.isOpen} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Set Destination</DialogTitle>

				<DialogContent style={{ height: '50vh' }}>
					<DialogContentText>
						Set the location for the final destination of the trip
					</DialogContentText>
					<Autocomplete onSelect={place => {
						setDestinationLocation(place);
					}} />

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
							props.handleSetDestination(destinationLocation);
						}}>
						Confirm
					</button>

				</DialogActions>
			</Dialog>
		</div>
	);
}

export default DestinationPrompt;