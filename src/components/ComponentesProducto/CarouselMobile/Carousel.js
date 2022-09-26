import "../Modal/Carousel.css";
import "../../../screens/Producto/Producto.css";
import { ReactComponent as Share } from "../../../assets/Icons/Share.svg";
import { ReactComponent as Heart } from "../../../assets/Icons/Heart.svg";
import React, {useState, useEffect} from 'react';

const Carousel = props => {
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
        }, [children])


const carouselScroll = () =>{
    if (currentIndex === (length - 1) ){
        return setCurrentIndex(0);
    } return setCurrentIndex(currentIndex + 1)
}

useEffect(()=>{
    const interval = setInterval(() =>{carouselScroll()},3000)
    return () => clearInterval(interval)})


    return (
        <div className="CarouselMobile">
            <div className="BotonesMobile">
              <Share className="BotonBlanco"/>
              <Heart  className="BotonBlanco" style={{ marginLeft: "15px"}} />
          </div>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <div className="carousel-content-wrapper">
                            <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                             {children}
                            </div>
                            <p className="VerMas" style={{textDecoration: 'none'}}> {currentIndex+1} / {length} </p>
                        </div>

                </div>
            </div>    
        </div>  
    )

  }
  
  export default Carousel;