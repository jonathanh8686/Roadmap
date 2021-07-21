import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddUserButton from './AddUserButton';
import SetDestinationButton from './SetDestinationButton'

function Sidebar(props) {

	return (
		<div>
			<Paper style={{ width: "20vw", height: "100vh", backgroundColor: "grey" }} square>
				<div className="grid grid-cols-2 grid-rows-2 bg-red-100 p-2 gap-y-4 place-items-center">
					<AddUserButton className="" addUser={props.addUser}></AddUserButton>

					<div className="">
						<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-black"
							onClick={() => {
								props.setUsers([]);
							}}>
							Clear Users
						</button>
					</div>

					<div className="col-span-2">
						<SetDestinationButton className="col-span-2" setDestination={props.setDestination}></SetDestinationButton>
					</div>

				</div>
			</Paper>

		</div >
	);
}

export default Sidebar;
