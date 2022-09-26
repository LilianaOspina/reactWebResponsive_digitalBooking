import "./Carousel.css";
import React, {useState, useEffect} from 'react';
import  Flecha from "../../../assets/Flecha.png"
import  FlechaDerecha from "../../../assets/FlechaDerecha.png"

const Carousel = props => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
useEffect(() => {
    setLength(children.length)
}, [children])

const next = () => {
    if (currentIndex === (length - 1) ){
        return setCurrentIndex(0);
    }else
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
}

const prev = () => {
    if (currentIndex === (length - 1) ){
        return setCurrentIndex(0);
    }else if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
}


    return (
        <div>
             <div className="carousel-container">
            <div className="carousel-wrapper">
    <button className="left-arrow" onClick={prev}>
       <img src={Flecha} className="left-arrow" />
    </button>
         <div className="carousel-content-wrapper">
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                       
                    </div>
                    
                 
                </div>
                      
        </div>
        <p className="NumeritosCarousel" > {currentIndex+1} / {length} </p>
    <button className="right-arrow" onClick={next} >
    <img src={FlechaDerecha} className="right-arrow"/>
    </button>
</div>
</div>    
            </div>
    )

  }
  
  export default Carousel;