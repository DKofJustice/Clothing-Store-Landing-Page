import React from 'react';

import LandingIllustration from './../../Assets/Bakground-image.svg';
import RedJacketImage from './../../Assets/jacket-transparent-png-image-web-icons-png-890552 1.png';
import RedShirtPerson from './../../Assets/pngwing 1.png';

export default function LandingSection() {
  return (
    <div className='landing-section'>
            <img src={LandingIllustration} alt="Landing-Illsutration" 
            className='landing-section-bkg'/>

        <div className='landing-content'>
        <div className='landing-text'>
            <h1>Awesomeness meets style</h1>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <div className='landing-buttons'>
                <button className='call-to-action'>Explore this Page</button>
                <button className='shop-button'>Let's shop</button>
            </div>
        </div>

        <div className='landing-images'>
            <div className='red-jacket-illustration'>
                <div className='green-square'></div>
                <img src={RedJacketImage} alt="" className='red-jacket-image'/>
            </div>

            <div className='red-shirt-person'>
                <div className='black-box'></div>
                <img src={RedShirtPerson} alt="" className='red-shirt-image'/>
            </div>
        </div>
        </div>
    </div>
  )
}
