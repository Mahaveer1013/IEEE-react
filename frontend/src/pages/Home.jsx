import React, { useContext } from 'react'
import { UserContext } from './Main';
import '../css/home.css'
import mahaveer from '../images/MyPicture.jpg'
import pradeep from '../images/pradeep.jpg'
import aashath from '../images/aashath.jpg'
import nagappan from '../images/nagappan.jpg'
import UserCard from '../components/UserCard';

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
            <div className="developers">
                <div className="devs-title"><p><span>//</span>DEVELOPERS</p></div>
                <div className="dev-cards">
                    <UserCard
                        name='Mahaveer'
                        img={mahaveer} 
                        github='myGithub.com'
                        linkedIn='myLinkedin.com'
                        gmail='a.mahaveer5@gmail.com'
                        portfolio='mahaveer-my-portfolio.netlify.app'
                    />
                </div>
            </div> 
            <div className="developers">
                <div className="devs-title"><p><span>//</span>Co-Ordinators</p></div>
                <div className="dev-cards">
                    <UserCard
                        name='Aashath'
                        img={aashath} 
                        github='myGithub.com'
                        linkedIn='myLinkedin.com'
                        gmail='a.mahaveer5@gmail.com'
                        portfolio='mahaveer-my-portfolio.netlify.app'
                    />
                    <UserCard
                        name='Nagappan'
                        img={nagappan} 
                        github='myGithub.com'
                        linkedIn='myLinkedin.com'
                        gmail='a.mahaveer5@gmail.com'
                        portfolio='mahaveer-my-portfolio.netlify.app'
                    />
                    <UserCard
                        name='Mahaveer'
                        img={mahaveer} 
                        github='myGithub.com'
                        linkedIn='myLinkedin.com'
                        gmail='a.mahaveer5@gmail.com'
                        portfolio='mahaveer-my-portfolio.netlify.app'
                    />
                    <UserCard
                        name='Pradeep Krishna'
                        img={pradeep} 
                        github='myGithub.com'
                        linkedIn='myLinkedin.com'
                        gmail='a.mahaveer5@gmail.com'
                        portfolio='mahaveer-my-portfolio.netlify.app'
                    />
                </div>
            </div> 
        </div>
    )
}