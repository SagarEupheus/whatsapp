import { AppBar, Toolbar,styled ,Box} from '@mui/material'
import React, { useState } from 'react'
import LoginDialog from './account/LoginDialog'


const Header = styled(AppBar)`
    height:220px;
    background:#00A884;
    box-shadow:none;
`
const Component = styled(Box)`
    height:100vh;
    background:#dcdcdc
`


const Messenger = () => {
    const [headerState,setHeaderState] = useState(true)

    function headerValue(vals){
        console.log(vals)
        setHeaderState(vals)
    }

  return (
    <>
    <Component >

{
    headerState ?  <Header >
    {/* <Toolbar>

    </Toolbar> */}
</Header> :""
}
       
      <LoginDialog  state={headerValue}/>
    </Component>
    </>
  )
}

export default Messenger
