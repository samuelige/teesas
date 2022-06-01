import React, {FC} from 'react'
import { Container} from './LoaderStyle'

const Loading: FC  = () => {
  return (
    <Container>
      <img src="https://teesas.com/main/images/page-loading.gif" alt=""/> 
    </Container>
  )
}

export default Loading