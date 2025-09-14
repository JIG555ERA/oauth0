import React from 'react'
import Header from '../layout/Header'
import UserInfo from '../ui/UserInfo'

const HomePage = () => {
    return (
        <div
        className='w-full h-screen bg-[#0E0E0E] text-[#F9F9F9] flex justify-center items-center'>
            <Header active='home'/>
            <UserInfo />
        </div>
    )
}

export default HomePage
