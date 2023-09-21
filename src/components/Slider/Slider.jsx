import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material';
import {useState} from 'react';
import './Slider.scss'
//slides
import TTA from '../../assets/TTA.png';
import TY from "../../assets/TY.png";
import Lc300 from "../../assets/lc300.png";

const slides = [
    {
        id: 1,
        img: TTA,
        title: "Toyota Land Cruiser",
        description: "Land Cruiser 2023 Verdict ZX Diesel",
        link: ""
    },
    {
        id: 2,
        img: TY,
        title: "DEVEDITOR",
        description: "A free full-featured online code editor for HTML, CSS and JAVASCRIPT.",
        link: ""
    },
    {
        id: 3,
        img: Lc300,
        title: "Lc300",
        description: "Share Your Files and Images Across Your Browser Safely",
        link: ""
    }
    
]

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="slider">
                
        <div className="arrow"  onClick={() => handleClick("left")}>
           <ArrowLeftOutlined />
        </div>
           
           <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {
                slides && slides.map(slide => {
                    return (
                        <div className="slider">
                            <div className="image-container">
                                <img src={slide.img} alt="" />
                            </div>
                            <div className="info">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                               <button>BUY NOW</button>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        
        <div className="arrow" onClick={() => handleClick("right")}>
           <ArrowRightOutlined />
        </div>
    </div>
    );
}