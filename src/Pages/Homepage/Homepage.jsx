import React from 'react';

import LandingSection from './LandingSection';
import PartnerSection from './PartnerSection';
import BenefitsSection from './BenefitsSection';
import CollectionSection from './CollectionSection';
import Footer from './Footer';

export default function Homepage() {
  return (
    <div className='homepage'>
        
        <LandingSection/>
        <PartnerSection/>
        <BenefitsSection/>
        <CollectionSection/>
        <Footer/>
    </div>
  )
}
