import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AppOne from './components/Component1.js';
import AppTwo from './components/Component2.js'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)

class Router extends Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path={"/test"} component={AppTwo} />
						<Route path={"/"} component={AppOne}/>
						<Redirect from='/*' to='/' />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
};

export default Router;