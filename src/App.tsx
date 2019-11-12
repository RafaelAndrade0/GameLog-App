import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

const App: React.FC = () => {
	return (
		<Router>
			<Navbar title='GameLog' />
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
