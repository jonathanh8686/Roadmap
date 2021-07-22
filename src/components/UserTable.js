import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import EditUserPrompt from "./EditUserPrompt"
import User from "../User"
var randomColor = require('randomcolor')


const useStyles = makeStyles({
	table: {
	},

});

function UserTable(props) {

	const classes = useStyles();

	const [isOpen, setIsOpen] = useState(false);
	const [openUser, setOpenUser] = useState();

	const handleAddUser = (name, place, canDrive) => {
		props.addUser(new User(name, place, canDrive, randomColor({ luminosity: 'light' })));
	}

	const handleEditUser = (oldUser, newName, newLocation, newCanDrive) => {
		console.log(newCanDrive);
		handleAddUser(newName, newLocation, newCanDrive)
		props.queueRemove(oldUser);
	}

	const handleUserSelected = (user) => {
		setOpenUser(user);
	}

	useEffect(() => {
		console.log("opening")
		setIsOpen(true);
	}, [openUser])




	return (
		<div>
			<Table className={classes.table} size="small" aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">Driver?</TableCell>
						<TableCell align="center">Edit</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.users.map((user, index) => (
						<TableRow key={index}>
							<TableCell style={{
								whiteSpace: "normal",
								wordBreak: "break-word"
							}} component="th" scope="row">
								<Typography style={{ color: user.color, textShadow: "-1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black, 1px 1px 0px black" }}>
									{user.name}
								</Typography>
							</TableCell>
							<TableCell align="right">{(user.canDrive ? "✔️" : "❌")}</TableCell>
							<TableCell align="center">
								<Fab style={{background: 'transparent', boxShadow: "none"}} size="small" aria-label="edit" onClick={() => {
									handleUserSelected(user);
								}}>
									<EditIcon />
								</Fab>

								{openUser !== undefined &&
								 <EditUserPrompt isOpen={isOpen} setIsOpen={setIsOpen} handleEditUser={handleEditUser} existingUser={openUser}></EditUserPrompt>}

							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

		</div>
	);
}

export default UserTable;