import React, { useState, useEffect, useRef} from 'react'
import { slider } from '../../Utils/variables';
import { Hero } from '../Hero';


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

  useEffect(() => {

    setCurrentSlide(slider[slideIndex]);

  }, [slideIndex]);


    return ( 

        <div className="slider">
            
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