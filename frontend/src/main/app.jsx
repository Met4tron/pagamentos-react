import React from 'react'
import Header from '../common/template/header'
import '../common/template/dependencies'
import SideBar from'../common/template/sidebar'
import Footer from '../common/template/footer'

export default props => (
	<div className='wrapper'>
		<Header />
		<SideBar />
		<div className='content-wrapper'>
			<h1>Conteúdo</h1>
		</div>
		<Footer>

		</Footer>
	</div>
)