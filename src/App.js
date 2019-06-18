import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Crud from './moduleSimple/Crud';
import  Header from './layout/layout';
const App = () => {
	return (
		<Router>
			<div>
				<Header/>
				<Route exact path="/" component={Crud} />
				<Route exact path="/dynamique" component={Crud} />
			</div>
		</Router>
	);
}

export default App
