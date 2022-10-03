import React, { useEffect } from 'react';

import CarouselImage1 from './../../Assets/91z-9qgAPtL._SX500_.jpg';
import CarouselImage2 from './../../Assets/istockphoto-934408078-612x612.jpg';
import CarouselImage3 from './../../Assets/istockphoto-979941412-612x612.jpg';
import CarouselImage4 from './../../Assets/istockphoto-1184187157-612x612.jpg';
import { useRef } from 'react';

export default function CollectionSection() {

  const imagesRef = useRef();
  const navigationItems = useRef();


  useEffect(() => {

    for(let i = 0; i < navigationItems.current.children.length; i++) {
      

      navigationItems.current.children[i].addEventListener('click', () => {

        [...navigationItems.current.children]
        .forEach(sib => {
          sib.classList.remove('current-item');
        });

        if (!navigationItems.current.children[i].className.includes('current-item')) {
          navigationItems.current.children[i].className += ' current-item';

        } else {
            return
        }


        [...imagesRef.current.children]
        .forEach(sib => {
          sib.classList.remove('current-image');
        });



        if (!imagesRef.current.children[i].className.includes('current-image')) {
            imagesRef.current.children[i].className += ' current-image';


        } else {
            return
        }


        if (imagesRef.current.children[0].className.includes('current-image')) {
          imagesRef.current.children[0].style.marginLeft = '0';

        } else if (imagesRef.current.children[1].className.includes('current-image')) {
          imagesRef.current.children[0].style.marginLeft = '-410px';

        } else if (imagesRef.current.children[2].className.includes('current-image')) {
          imagesRef.current.children[0].style.marginLeft = '-760px';

        } else if (imagesRef.current.children[3].className.includes('current-image')) {
          imagesRef.current.children[0].style.marginLeft = '-1160px';

        }


      });

    };
  }, []);


  return (
    <div className='collection-section'>
        <div className='collection-titles'>
            <h2>The newest season collection</h2>
            <p>Check our awesome new collection at our store</p>
            <button>Explore Collection</button>
        </div>

        <div className='collection-carousel'>

            <div className='carousel-images' ref={imagesRef}>
              <img src={CarouselImage1} alt="" className='image-1'/>
              <img src={CarouselImage2} alt="" className='image-2'/>
              <img src={CarouselImage3} alt="" className='image-3'/>
              <img src={CarouselImage4} alt="" className='image-4'/>
            </div>
          
            <div className='image-navigation' ref={navigationItems}>
              <div className='image-radio-1'></div>
              <div className='image-radio-2'></div>
              <div className='image-radio-3'></div>
              <div className='image-radio-4'></div>
            </div>
        </div>
    </div>
  )
}
