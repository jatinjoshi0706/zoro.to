import React from 'react'
import burger_menu from "../../Assets/icons8-menu-50.png";
import logo from "../../Assets/logo.png";
import reddit from "../../Assets/icons8-reddit-50.png";
import telegram from "../../Assets/icons8-telegram-48.png";
import twitter from "../../Assets/icons8-twitterx-50.png";
import discord from "../../Assets/icons8-discord-50.png";
import arrow from "../../Assets/icons8-fork-arrow-50.png";
import community from "../../Assets/icons8-message-50.png";
import hotspot from "../../Assets/icons8-hotspot-50.png";
import { useEffect } from 'react';
import "../Navbar/Navbar.scss"
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
const Navbar = () => {

    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
    };

    //navbarscroll Effect
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const headerStyle = {
        backgroundColor: scrollPosition > 1 ? 'rgba(32,33,37,.95)' : 'rgba(32,33,37,0.2)'
      };
    return (
        <>
            <div className='nav-container' style={headerStyle}>
                <div className='burger-menu'>
                    <img alt=" " src={burger_menu} />
                </div>
                <img alt=" " className="main-logo" src={logo} />
                <form className='searchbar' action="/search" autocomplete="off">
                    <input type="text" class="form-control search-input" name="keyword" placeholder="Search anime..." required="" />
                    <button type="submit" class="search-icon"><FaSearch /></button>
                    <a href="/filter" class="filter-icon">Filter</a>
                </form>
                <div className='socialLink'>
                    <img alt=" " id='img01' src={discord} />
                    <img alt=" " id='img02' src={telegram} />
                    <img alt=" " src={reddit} id='img03' />
                    <img alt=" " src={twitter} id='img04' />
                </div>
                <div className='setting'>
                    <div className='menu-option'>
                        <img alt=" " src={hotspot} />
                        <span>Watch2gether</span>
                    </div>
                    <div className='menu-option'>
                        <img alt=" " src={arrow} />
                        <span>Random</span>
                    </div>
                    <div className='menu-option'>
                        {/* <input type='radio'/>EN
                    <input type='radio'/>JP */}
                        <div className="langBtn">
                            <span
                                className={`en ${selectedLanguage === 'en' ? 'selected' : ''}`}
                                onClick={() => selectLanguage('en')}
                            >
                                EN
                            </span>
                            <span
                                className={`jp ${selectedLanguage === 'jp' ? 'selected' : ''}`}
                                onClick={() => selectLanguage('jp')}
                            >
                                JP
                            </span>
                        </div>
                        <span className='langHeading'>Anime Name</span>
                    </div>
                    <div className='menu-option'>
                        <img alt=" " src={community} />
                        <span className='commHeading'>Community</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;