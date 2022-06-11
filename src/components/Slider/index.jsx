import React, { useState, useEffect, useRef} from 'react'
import { slider } from '../../Utils/variables';
import { Hero } from '../Hero';
import gsap from 'gsap'


function Slider() {

  const [currentSlide, setCurrentSlide] = useState(slider[0]);

  const [slideIndex, setSlideIndex] = useState(0);

  const sliderBtns = [];
  sliderBtns[0] = useRef(null);
  sliderBtns[1] = useRef(null);
  sliderBtns[2] = useRef(null);

  const onSlide = (index, btn) => {
    
    sliderBtns.map((btn) => {
      btn.current.classList.remove("slide-active-btn")
    })

    btn.current.classList.add("slide-active-btn")
    setSlideIndex(index);

  }

  const tl = gsap.timeline();


  useEffect(() => {

    setCurrentSlide(slider[slideIndex]);
    
    tl.to('.overlay', {
        visibility: 'visible',
        right: -10,
        bottom: 0,
        duration: 1,
    })
    .to('.overlay', {
        left: '110%',
        duration: 1,
    })
    .to('.hero-image', {
        backgroundImage: `url(${slider[slideIndex].img})`,
        backgroundColor: slider[slideIndex].color,
        duration: 0,
        delay: -1
    })
    .to('.overlay', {
        visibility: 'hidden',
        left: -100,
        right: '110%',
        duration: 0
    })
    // .to('.hero-image', {
    //     // backgroundImage: currentSlide.img,
    //     backgroundColor: currentSlide.color
    // })
 

  }, [slideIndex]);


    return ( 

        <div className="slider">
            <div className="box"></div>
            <Hero 
                slide={currentSlide} 
            />

            <div className="slider-btns">
                {
                    Array(slider.length).fill(0).map((_, i) => (
                        <button
                            ref={sliderBtns[i]}
                            key={`slider-btn-${i}`}
                            className={
                                `slide-btn 
                                ${i == 0? 
                                    "slide-active-btn" : ""
                                }`
                            }
                            onClick={() => onSlide(i, sliderBtns[i])}
                        />
                    ))
                }
            </div>
        </div>

    );
}

export { Slider };