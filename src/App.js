import React from 'react'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainScreen from './components/main-screen/MainScreen'
import Truth from './components/truth/Truth'
import Dare from './components/dare/Dare'

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route path='/' exact>
					<MainScreen />
				</Route>
				<Route path='/truth/:truthId' exact>
					<Truth />
				</Route>
				<Route path='/dare/:dareId' exact>
					<Dare />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
