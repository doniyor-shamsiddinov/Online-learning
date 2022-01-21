import {
	BrowserRouter as Router
  } from 'react-router-dom'

import Routes from './routes/route'

export default function App () {
	return (
		<Router>
			<Routes/>
		</Router>
	)
}