import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Crud from './module1/Crud';
import  Header from './layout/layout';
import CrudComponent from "./module2/CrudComponent";

const App = () => {
	return (
		<Router>
			<div>
				<Header/>
				<Route exact path="/" component={Crud} />
				<Route exact path="/dynamique" component={CrudComponent} />
			</div>
		</Router>
	);
}

export default App
