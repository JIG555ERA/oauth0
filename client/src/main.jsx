import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="jig-era.us.auth0.com"
                clientId="UtNP3XRtsZ0lRC60JLpQP6qSc6m69bLM"
                authorizationParams={{
                redirect_uri: window.location.origin
                }}
            >
                <App />
            </Auth0Provider>,
        </BrowserRouter>
    </StrictMode>,
)
