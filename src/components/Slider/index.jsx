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

    tl.to('.overlay', {
        visibility: 'visible',
        right: -20,
        bottom: 0,
        duration: 1.5,
    })
    .to('.hero-detail', {
        x: 100,
        color: 'transparent',
        duration: 1,
        delay: -1.4
    })
    .to('.hero-title', {
        x: 50,
        color: 'transparent',
        duration: 1,
        delay: -1.2
    })
   .to('.overlay', {
        left: 'calc(100% + 20px)',
        duration: 1.5,
    })
    // .to('.right-arrow', {
    //     right: -100,
    //     duration: 1,
    // })
    .to('.hero-image', {
        backgroundImage: `url(${slider[slideIndex].img})`,
        backgroundColor: slider[slideIndex].color,
        duration: 0,
        delay: -1.5
    })
    // .to('.right-arrow', {
    //     right: -80,
    //     duration: 1,
    // })
   .to('.hero-detail', {
        x: 0,
        y: 10,
        duration: 0,
        delay: -1,
    })
    .to('.hero-title', {
        x: -50,
        duration: 0,
        delay: -1,
    })
    .to('.hero-detail', {
        color: 'black',
        y: 0,
        duration: 1,
        delay: -1
    })
    .to('.hero-title', {
        color: '#1C1C1C',
        x: 0,
        duration: 1,
        delay: -1
    })
    .to('.overlay', {
        visibility: 'hidden',
        left: -100,
        right: '100%',
        duration: 0
    })
    setTimeout(() => {
        setCurrentSlide(slider[slideIndex]);
    }, 1000)

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