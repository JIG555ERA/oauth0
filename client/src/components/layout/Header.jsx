import React from 'react'
import LoginButton from '../ui/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../ui/Profile'

const Header = ({active=''}) => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    const pages = [
        {id:'home', text:'Home', path:'/'},
        {id:'about', text:'About', path:'/about'},
        {id:'events', text:'Events', path:'/events'},
        {id:'contact', text:'Contact', path:'/contact'},
    ]

    return (
        <div
        className='w-[96vw] h-[80px] absolute top-6 bg-gradient-to-br from-white/10 via-white/5 to-white/10 2xl:px-[120px] lg:px-[90px] md:px-[60px] px-[16px] rounded-3xl'>
            <div
            className='w-full h-[100%] flex justify-between items-center'>
                {/* logo section */}
                <a 
                className='text-[36px] font-semibold bg-gradient-to-br from-blue-400 via-blue-600 to-blue-300 bg-clip-text text-transparent'
                href="/">
                    OAuth
                </a>
                <div 
                className='text-[24px] font-normal flex justify-between items-center'>
                    {pages.map((page) => (
                        <div
                        key={page.id}
                        className={`mx-[18px] ${page.id === active ? 'text-blue-500 font-semibold' : ' text-[#F9F9F9]'}`}>
                            <a 
                            href={page.path}>
                                {page.text}
                            </a>
                        </div>
                    ))}
                </div>
                {!isAuthenticated && (
                    <LoginButton />
                )}
                {isAuthenticated && (
                    <Profile />
                )}
            </div>
        </div>
    )
}

export default Header
