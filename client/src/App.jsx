import React from 'react'
import { Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'

const App = () => {
    return (
        <div className='font-[Orbitron] '>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        
        </div>
    )
}

export default App
