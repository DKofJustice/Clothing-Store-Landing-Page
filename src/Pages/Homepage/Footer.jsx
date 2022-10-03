import React from 'react';

import StarrLogoImage from './../../Assets/Starr Logo Image.svg';

import FacebookIcon from './../../Assets/brandico_facebook.svg';
import TwitterIcon from './../../Assets/twitter-icon.svg';
import YoutubeIcon from './../../Assets/youtube-icon.svg';

import MailIcon from './../../Assets/mail_FILL0_wght400_GRAD0_opsz481.svg';
import PhoneIcon from './../../Assets/phone_in_talk_FILL0_wght400_GRAD0_opsz48 1.svg';

export default function Footer() {
  return (
    <footer>
        <div className='footer-column-1'>
            <div className='logo-big'>
                <img src={StarrLogoImage} alt="" />
            </div>

            <div className='social-list'>
                <h3>Social Media</h3>
                <ul>
                    <li><img src={FacebookIcon} alt="Facebook-Icon" /></li>
                    <li><img src={TwitterIcon} alt="Twitter-Icon" /></li>
                    <li><img src={YoutubeIcon} alt="Youtube-Icon" /></li>
                </ul>
            </div>
        </div>

        <div className='contact-info'>
            <h2>You can reach us with the following:</h2>

            <h3>Contact Information</h3>

            <ul>
                <li><img src={MailIcon} alt="Mail-Icon" />+1 454 234 2343</li>
                <li><img src={PhoneIcon} alt="Mail-Icon" />+1 454 234 2343</li>
            </ul>
        </div>

        <div className='other-links'>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund and return</li>
            </ul>

            <p className='copyright'>Copyright © Alex Benta 2022</p>
        </div>
    </footer>
  )
}
