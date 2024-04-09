import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faUser } from '@fortawesome/fontawesome-free-solid';

export default function UserCard({img,name,github,linkedIn,gmail,portfolio}) {
    
    return (
        <>
            <div className="dev-card">
                <div className="dev-image">
                    <img src={img} alt={name} />
                </div>
                <div className="dev-details">
                    <p className='dev-name'>{name}</p>
                    <p className="dev-links">
                        {github && <a href={github}><FontAwesomeIcon icon={faGithub} /></a>}
                        {linkedIn && <a href={linkedIn}><FontAwesomeIcon icon={faLinkedin} /></a>}
                        {gmail && <a href={gmail}><FontAwesomeIcon icon={faEnvelope} /></a>}
                        {portfolio && <a href={portfolio}><FontAwesomeIcon icon={faUser} /></a>}
                    </p>
                </div>
            </div>
        </>
    )
}