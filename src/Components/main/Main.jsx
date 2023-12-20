import React from 'react'
import imgLogo from "../../Assets/logo.png"
import mainImg from "../../Assets/zoro-min.png"
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './Main.scss'
import MainAbout from './MainAbout';
const Main = () => {
    return (
        <>
            <div className='container'>
                <div className="main-container">
                    <div className='main-nav'>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Movies</a></li>
                            <li><a href='#'>TV Series</a></li>
                            <li><a href='#'>Most Popular</a></li>
                            <li><a href='#'>Top Airing</a></li>
                        </ul>
                    </div>
                    <div className='main-banner'>
                        <div className='main-content'>
                            <div className='heading'>
                                <img className="logo" src={imgLogo} alt="" />
                                {/* <h1 style={{ color: 'white',display:'inline' }}>Zoro</h1> */}
                            </div>
                            <div className='main-input'>
                                <form>
                                    <input placeholder="Search anime..." type="text" />
                                    <button type='submit'><FaSearch /></button>
                                </form>
                            </div>
                            <div className='main-ts'>
                                <span>Top Search : </span>
                                <a href='#'>One Piece,{" "}</a>
                                <a href='#'>Jujutsu Kaisen 2nd Sea...,{" "}</a>
                                <a href='#'>The Eminance in shadow,{" "}</a>
                                <a href='#'>Naruto: shippuden,{" "}</a>
                                <a href='#'>Attack on Titan,{" "}</a>
                                <a href='#'>The 100 Girlfriends Wh...,{" "}</a>
                                <a href='#'>Jujutsu Kaisen (TV),{" "}</a>
                                <a href='#'>Spy x Family Season 2,{" "}</a>
                                <a href='#'>The Apothecary DiariesFri...</a>
                            </div>
                        </div>
                        <div className='main-img'>
                            <img className="zoro" src={mainImg} alt="" />
                        </div>
                    </div>
                    <div className="strip" >
                        <a>View Full Site</a>
                        <FaArrowRightLong />
                    </div>
                </div >
                <div className='socialConnect' >
                    <MainAbout />
                </div>
            </div>
        </>
    );
}

export default Main;