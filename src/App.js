import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Crud from './moduleSimple/Crud'
const App = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Crud} />
			</div>
		</Router>
	);
}

export default App
