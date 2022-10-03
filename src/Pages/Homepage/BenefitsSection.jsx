import React from 'react';

import ShirtIcon from './../../Assets/laundry_FILL0_wght400_GRAD0_opsz48 1.svg';
import TruckIcon from './../../Assets/local_shipping_FILL0_wght400_GRAD0_opsz48 1.svg';
import SellIcon from './../../Assets/sell_FILL0_wght400_GRAD0_opsz48 1.svg';

import ArtLineLeft from './../../Assets/Group 1.svg';

export default function BenefitsSection() {
  return (
    <div className='benefits-section'>
        <div className='benefits-titles'>
            <h2>Benefits for choosing our services</h2>

            <div className='arrow-lines benefits-line-image'>
                <img src={ArtLineLeft} alt="" />
            </div>

            <p className='benefits-titles-subtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        <div className='benefits-list'>
            <ul>
                <li>
                    <div className='benefit-row'>
                        <img src={ShirtIcon} alt="Shirt Icon" />
                        <h3>Thousands of Products</h3>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </li>

                <li>
                    <div className='benefit-row'>
                        <img src={TruckIcon} alt="Shirt Icon" />
                        <h3>Fast Delivery</h3>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </li>

                <li>
                    <div className='benefit-row'>
                        <img src={SellIcon} alt="Shirt Icon" />
                        <h3>Frequent Sales</h3>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
