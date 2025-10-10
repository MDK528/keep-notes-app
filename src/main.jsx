import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Auth0Provider, useAuth0} from '@auth0/auth0-react'
import './index.css'
import App from './App.jsx'

import Auth0 from './Auth0'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-vk73tzinkx82kezq.us.auth0.com"
      clientId="9QXyT9R3K2dZBb0FuTyVMKtWhwlZmbnC"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Auth0/>
    </Auth0Provider>
  </StrictMode>,
)
