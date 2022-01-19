import {
	BrowserRouter as Router,
	Routes,
	Route
  } from 'react-router-dom'

import Home from './modules/home/container'
import About from './modules/aboutUs'
import Career from './modules/careers'
import Blog from './modules/blog'
import Auth from './modules/auth'

import Header from './components/header'
import Footer from './components/footer'

export default function App () {
	return (
		<div>
			<Header/>
				<Home/>
	  		<Footer/>
		</div>
	)
}