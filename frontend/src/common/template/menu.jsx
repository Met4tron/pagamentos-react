import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
export default props => (

	<ul className='sidebar-menu'>
		<MenuItem path='#' label='Dashboard' icon='fa-dashboard'/>
		<MenuTree label='Cadastro' icon='fa-edit'>
			<MenuItem path='#billingCycles' label='Cicos de Pagaemntos' icon ='fa-usd'/>
		</MenuTree>
	</ul>
)