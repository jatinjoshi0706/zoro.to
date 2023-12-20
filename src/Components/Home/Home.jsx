import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './Home.scss'
// import MainAbout from './MainAbout';
import Banner from "../Home/Banner/Banner";
import Item01 from "../../Assets/onepieceItemImg.jpg"
import "./Home.scss"
const Home = () => {
    return (
        <>
            <Banner />
            <div className='main-home'>
                <div className='trending-content'>
                    <span className='trending-head'>Trending</span>
                    <div className='trendingItem'>
                        <div className='inner'>
                            <div className='trending-slider'>
                                <div className='sliderItemHeading'>
                                    <span className='sliderItemCount'>01</span>
                                    <span className='sliderItemHead'>ONE PIECE</span>
                                </div>
                                <a href='#'>
                                    <img className="itemImg01"src={Item01} alt='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;