import React, { createContext, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import About from './About'
import Events from './Events'
import LoginPage from '../components/LoginPage'
import Profile from './Profile'
import ContactUs from './ContactUs'
import Particle from '../components/Particle'


export const UserContext = createContext()

export default function Main() {
    const [isAuth, setIsAuth] = useState(false)

    const value = {
        isAuth,
        setIsAuth,
    }

    return (
        <>
            <Particle />
            <UserContext.Provider value={value}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/events' element={<Events />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/contact-us' element={<ContactUs />}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

