import React from 'react'
import Header from './header/Header'
import Home from '../components/pages/home/Home'

const Layout = () => {
	return (
		<div className='layout'>
			{/* HEADER start */}
			<Header />
			{/* HEADER end */}

			{/* MAIN start */}
			<main className='main'>
				{/* HOME start */}
				<Home />
				<Home />
				<Home />
				<Home />
				{/* HOME end */}
			</main>
			{/* MAIN end */}
		</div>
	)
}

export default Layout
