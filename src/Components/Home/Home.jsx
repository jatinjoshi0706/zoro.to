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
import gridItem01 from "../../Assets/onepieceItemImg.jpg"
import Footer from '../Footer/Footer.jsx';
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
                <div className='section04'>
                    <div className='recently-updated'>
                        <div className='recentHeadSection'>
                            <h2 className='heading'>Recently Updated</h2>
                            <span class="tags">
                                <div class="tag" data-id="1">Tag 1</div>
                                <div class="tag" data-id="1">Tag 1</div>
                                <div class="tag" data-id="2">Tag 2</div>
                            </span>
                        </div>
                        <div className='recentgrid'>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <img src={gridItem01} />
                                <div className='itemContent'>
                                    <span className='head'><a href='#'>Cardfight!! Vanguard will+Dress Season 3</a></span>
                                    <span className='tv'>TV</span>
                                    <span className='dot'></span>
                                    <span className='date'>Jul 08,2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='genresSection'>
                        <Genres />
                    </div>

                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;