import React from 'react'

import SubHeader from '../../components/SubHeader/Sub_Header'
import { navbarData } from './data'
import { NavbarContainer } from './NavbarStyle'

const Navbar = () => {
  return (
    <NavbarContainer>
        <SubHeader data={navbarData}/>
    </NavbarContainer>
  )
}

export default Navbar