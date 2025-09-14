import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Auth0Provider
    clientId="UtNP3XRtsZ0lRC60JLpQP6qSc6m69bLM"
    domain="jig-era.us.auth0.com"
    authorizationParams={{
    redirect_uri: window.location.origin
                }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>,
)
