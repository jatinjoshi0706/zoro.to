import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdClosedCaption } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import sliderImg from "../../../Assets/onepieceBanner.jpg"
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import "./Banner.scss"

const Banner = () => {
    const style = { color: "black" }

    return (
        <>
            <div className='slider'>
                <div className='sliderImg'></div>
                <img className='slider-img' src={sliderImg} alt=' ' />
                <div className='slider-content'>

                    <div className='sub-text'>#1 Spotlight</div><br/>
                    <div className='head-text'>ONE PIECE</div><br/>
                    <div className='sl-details'>
                        <div className='sl-details-item-icon'>
                            <FaCirclePlay />
                            TV
                        </div>
                        <div className='sl-details-item-icon'>
                            <FaClock />
                            24
                        </div>
                        <div className='sl-details-item-icon'>
                            <SlCalender />
                            Oct 20,1999
                        </div>
                        <div className='sl-details-item-tag'>
                            <span className='hd'>HD</span>
                            <span className='cc'><MdClosedCaption style={style} />
                                11</span>
                            <span className='ex'><FaMicrophone />1036</span>
                        </div>
                    </div><br/>
                    <div className='sl-desc'>
                        "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in batt..."
                    </div><br/>
                    <div className='sl-btn'>
                        <FaCirclePlay />
                        <a>Watch Now</a>
                    </div>
                </div>
                <div className='slider-move-btn'>
                    <span className='movebtn'><FaGreaterThan /></span>
                    <span className='movebtn'><FaLessThan /></span>
                </div>
            </div>
        </>
    );
}
export default Banner;