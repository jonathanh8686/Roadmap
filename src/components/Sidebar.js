import React from 'react';
import Paper from '@material-ui/core/Paper';
import AddUserButton from './AddUserButton';
import SetDestinationButton from './SetDestinationButton'
import UserTable from "./UserTable"
import { Typography } from '@material-ui/core';

function Sidebar(props) {

	return (
		<div>
			<Paper style={{ width: "20vw", height: "100vh", opacity: '0.999', background: "rgba(255, 255, 255, 0.5)", boxShadow: "0 8px 100px 0 rgba( 120, 100, 255, 0.2 )" }} className="bg-clip-padding backdrop-filter backdrop-blur border border-purple-400 border-5" square>
				<div className="grid grid-cols-2  p-2 gap-y-4 place-items-center">
					<AddUserButton className="" addUser={props.addUser}></AddUserButton>

					<div className="">
						<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-black"
							onClick={() => {
								props.setUsers([]);
							}}>
							Clear Users
						</button>
					</div>

					{props.users.length !== 0 &&
						<div className="col-span-2 rounded border border-black">
							<UserTable users={props.users} addUser={props.addUser} queueRemove={props.queueRemove}></UserTable>
						</div>
					}

					<div className="col-span-2">
						<SetDestinationButton setDestination={props.setDestination}></SetDestinationButton>
					</div>

					<div className="col-span-2">
						<Typography align="center">
							{props.destination !== undefined && props.destination.place_name}
						</Typography>
					</div>

				</div>
			</Paper>

		</div >
	);
}

export default Sidebar;
