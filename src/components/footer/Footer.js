import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-links">
                <ul>
                    <li><a href="https://www.netflix.com/browse/audio-description">Audio description</a></li>
                    <li><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Gift cards</a></li>
                    <li><a href="https://help.netflix.com/legal/notices">Investor relations</a></li>
                </ul>
                <ul>
                    <li><a href="https://help.netflix.com/ro/">Usage conditions</a></li>
                    <li><a href="https://jobs.netflix.com/">Legal notices</a></li>
                    <li><a href="https://help.netflix.com/legal/privacy#cookies">Company information</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.netflix.com/ro/redeem">Assistance</a></li>
                    <li><a href="https://help.netflix.com/legal/termsofuse">Media center</a></li>
                    <li><a href="https://help.netflix.com/legal/corpinfo">Careers</a></li>
                </ul>
                <ul>
                    <li><a href="https://media.netflix.com/">Privacy statement</a></li>
                    <li><a href="https://help.netflix.com/legal/privacy">Cookie preferences</a></li>
                    <li><a href="https://help.netflix.com/ro/contactus">Contact us</a></li>
                </ul>
            </div>
            <div className="footer-details">
                <h3>&copy; 1997 - 2022 Netflix, Inc.</h3>
            </div>

        </footer>
    )
}

export default Footer