import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="flex gap-3">
            <button
                onClick={() => loginWithRedirect()}
                className="text-[20px] font-semibold hover:font-bold py-1 px-4 rounded-3xl bg-gradient-to-br from-blue-400 via-blue-600 to-blue-300 text-[#F9F9F9] hover:bg-gradient-to-br hover:from-[#F9F9F9] hover:via-[#F9F9F9] hover:to-[#F9F9F9] hover:text-blue-400 cursor-pointer hover:border-2 border-blue-500 hover:scale-105"
            >
                Log In
            </button>    
        </div>

    )
}

export default LoginButton
