import React from 'react'
import Hero from './Hero'
import App from './App'
import { useAuth0 } from '@auth0/auth0-react'


function Auth0()
{

    const {isAuthenticated} = useAuth0()

    return (
        <>
            {isAuthenticated ? <App/>:<Hero/> }
        </>
    )
}

export default Auth0