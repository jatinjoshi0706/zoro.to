import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './Home.scss'
// import MainAbout from './MainAbout';
import Banner from "../Home/Banner/Banner";
import Item01 from "../../Assets/onepieceItemImg.jpg"
import "./Home.scss"
import ItemCard from './Card/ItemCard';
import SocialConnect from '../main/SocialConnect/SocialConnect';
import AnimeFeatured from './AnimeFeatured/AnimeFeatured';
import Genres from '../Genres/Genres.jsx';
const Home = () => {
    return (
        <>
            <Banner />
            <div className='main-home'>
                <div className='trending-content'>
                    <span className='trending-head'>Trending</span>
                    <div className='itemCard'>
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                        <ItemCard Item01={Item01} />
                    </div>
                </div>
                <div className='socialConnect'>
                    <SocialConnect />
                </div>
                <div className='main-feature'>
                    <div className='Container'>
                        <div className='anif-blocks'>
                            <div className='row'>
                                <AnimeFeatured heading="New Added" />
                                <AnimeFeatured heading="New Release" />
                                <AnimeFeatured heading="Top Airing" />
                                <AnimeFeatured heading="Completed" />
                            </div>
                        </div>
                    </div>
                </div>
                
               <div className='genresSection'>
                <Genres/>
               </div>
            </div>
        </>
    );
}

export default Home;