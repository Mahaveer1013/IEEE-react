import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/fontawesome-free-solid';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-content">
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                <p>Copyright PECIT 2024. All Rights Reserved.</p>
            </div>
        </div>
    )
}