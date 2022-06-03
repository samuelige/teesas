import React from 'react'
import Ebooks from '../../container/Ebooks/Ebooks'
import LiveClasses from '../../container/LiveClasses/LiveClasses'
import SubcribeNow from '../../container/SubcribeNow/SubcribeNow'
import Subject from '../../container/Subject/Subject'
import { Container } from './UserHomeStyle'

const UserHome = () => {
  return (
    <Container>
      <Subject />
      <SubcribeNow/>
      <LiveClasses/>
      <Ebooks/>
      
    </Container>
  )
}

export default UserHome