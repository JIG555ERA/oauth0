import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserInfo = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div
        className='2xl:w-[50vw] lg:[60vw] md:[70vw] w-[80vw] h-auto bg-gradient-to-br from-white/10 via-white/5 to-white/10 border-2 border-[#F9F9F9] rounded-3xl p-3.5 flex flex-col gap-2 justify-center items-center'>
            <img 
            className='h-[100px] w-[100px] rounded-full border-2 border-blue-500'
            src={user.picture} 
            alt={user.name} />
            <h1 className='text-[18px] font-semibold'>Hello {user.name}!</h1>
            <p className='text-[14px]'>{user.email}</p>
            <p className='text-[14px]'>{user.phone_number}</p>
        </div>
    )
}

export default UserInfo
