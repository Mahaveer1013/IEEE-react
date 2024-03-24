import React, { useContext } from 'react'
import { UserContext } from './Main';
import '../css/home.css'

export default function Home() {

    const value=useContext(UserContext)

    console.log(value);

    return (
        <div className='home'>
            <div className="front">
                <div className="l-front">
                    <div className="l-front-content">
                        <p className='event-name'>Coders Assemble'24</p>
                        <p className='clg-name'>Panimalar Engineering College</p>
                        <span>"Build Your Network By Showcasing Your Skills"</span>
                    </div>
                </div>
                <div className="r-front">
                    <div className="logo">
                        &lt;/&gt;
                    </div>
                </div>
            </div>
            
        </div>
    )
}