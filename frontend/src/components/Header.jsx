import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCalendarCheck, faAddressCard, faPhone } from '@fortawesome/fontawesome-free-solid'

export default function Header() {

    // const [isActive,setIsActive]=useState('home')
    const location = useLocation();

    // function handleChangeEvent(name) {
    //     setIsActive(name);
    //     console.log(isActive);
    // }
    return (
        <>
            <div className='header'>
                <div className="l-header">
                    <div className="img-div">
                        &lt;/&gt;
                    </div>
                    <p>Coders Assemble</p>
                </div>
                <div className="r-header">
                    <ul className="nav-bar">
                        <li>
                            <Link to='/'><span>#</span>home</Link>
                        </li>
                        <li>
                            <Link to='/about'><span>#</span>about</Link>
                        </li>
                        <li>
                            <Link to='/events'><span>#</span>events</Link>
                        </li>
                        <li>
                            <Link to='/profile'><span>#</span>profile</Link>
                        </li>
                        <li>
                            <Link to='/contact-us'><span>#</span>contact-us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mobile-nav">
                <ul className="mobile-nav-bar">
                    <li className={location.pathname==='/'?'active':'inactive'}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li className={location.pathname.startsWith('/about')?'active':'inactive'}>
                        <Link to='/about'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </Link>
                    </li>
                    <li className={location.pathname.startsWith('/events')?'active':'inactive'}>
                        <Link to='/events'>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                        </Link>
                    </li>
                    <li className={location.pathname.startsWith('/profile')?'active':'inactive'}>
                        <Link to='/profile'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li className={location.pathname.startsWith('/contact-us')?'active':'inactive'}>
                        <Link to='/contact-us'>
                            <FontAwesomeIcon icon={faPhone} style={{transform : 'rotate(90deg)'}} />
                        </Link>
                    </li>
                </ul>
                {/* <ul className="mobile-nav-bar">
                    <li onClick={()=>handleChangeEvent('home')} className={isActive==='home'?'active':'inactive'}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li onClick={()=>handleChangeEvent('about')} className={isActive==='about'?'active':'inactive'}>
                        <Link to='/about'>
                            <FontAwesomeIcon icon={faAddressCard} />
                        </Link>
                    </li>
                    <li onClick={()=>handleChangeEvent('events')} className={isActive==='events'?'active':'inactive'}>
                        <Link to='/events'>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                        </Link>
                    </li>
                    <li onClick={()=>handleChangeEvent('profile')} className={isActive==='profile'?'active':'inactive'}>
                        <Link to='/profile'>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li onClick={()=>handleChangeEvent('contact-us')} className={isActive==='contact-us'?'active':'inactive'}>
                        <Link to='/contact-us'>
                            <FontAwesomeIcon icon={faPhone} style={{transform : 'rotate(90deg)'}} />
                        </Link>
                    </li>
                </ul> */}
            </div>
        </>
    )
}