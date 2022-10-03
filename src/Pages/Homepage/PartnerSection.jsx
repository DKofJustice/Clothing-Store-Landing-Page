import React from 'react';

import AmazonLogo from './../../Assets/amazon 1.png';
import FacebookIcon from './../../Assets/facebook-fb 1.png';
import MetaIcon from './../../Assets/meta-platforms 1.png';

import ArtLineLeft from './../../Assets/Group 1.svg';
import ArtLineRight from './../../Assets/Group 2.svg';

export default function Partners() {
  return (
    <div className='partner-section'>
      <div className='partner-title'>
        <div className='arrow-lines arrow-lines-left'>
          <img src={ArtLineLeft} alt="" />
        </div>

        <h2>Trusted Partners</h2>

        <div className='arrow-lines arrow-lines-right'>
          <img src={ArtLineRight} alt="" />
        </div>
      </div>

      <div className='partners'>
        <ul>
          <li><img src={AmazonLogo} alt="Amazon Logo" /></li>
          <li><img src={FacebookIcon} alt="Amazon Logo" /></li>
          <li><img src={MetaIcon} alt="Amazon Logo" /></li>
        </ul>
      </div>
    </div>
  )
}
