import React from 'react'
import "./Footer.scss"
const Footer = () =>{

    return(<>
    <div className="footer">
            <div className="footer-about">
                <div className="container"> <div className="footer-top">
                    <a href="/home" className="footer-logo">
                        <img src="https://s2.bunnycdn.ru/assets/sites/zoro/logo.png" alt="Zoro" />
                        <div className="clearfix"></div> </a> <div className="footer-joingroup">
                    </div> <div className="clearfix"></div> </div> <div className="footer-az">
                        <div className="block mb-3">
                            <span className="ftaz">A-Z LIST</span>
                            <span className="size-s">Searching anime order by alphabet name A to Z.</span>
                        </div>
                        <ul className="ulclear az-list">
                            <li><a href="/az-list">All</a></li>
                            <li><a href="/az-list/0-9">0-9</a></li>
                            <li><a href="/az-list/A">A</a></li>
                            <li><a href="/az-list/B">B</a></li>
                            <li><a href="/az-list/C">C</a></li>
                            <li><a href="/az-list/D">D</a></li>
                            <li><a href="/az-list/E">E</a></li>
                            <li><a href="/az-list/F">F</a></li>
                            <li><a href="/az-list/G">G</a></li>
                            <li><a href="/az-list/H">H</a></li>
                            <li><a href="/az-list/I">I</a></li>
                            <li><a href="/az-list/J">J</a></li>
                            <li><a href="/az-list/K">K</a></li>
                            <li><a href="/az-list/L">L</a></li>
                            <li><a href="/az-list/M">M</a></li>
                            <li><a href="/az-list/N">N</a></li>
                            <li><a href="/az-list/O">O</a></li>
                            <li><a href="/az-list/P">P</a></li>
                            <li><a href="/az-list/Q">Q</a></li>
                            <li><a href="/az-list/R">R</a></li>
                            <li><a href="/az-list/S">S</a></li>
                            <li><a href="/az-list/T">T</a></li>
                            <li><a href="/az-list/U">U</a></li>
                            <li><a href="/az-list/V">V</a></li>
                            <li><a href="/az-list/W">W</a></li>
                            <li><a href="/az-list/X">X</a></li>
                            <li><a href="/az-list/Y">Y</a></li>
                            <li><a href="/az-list/Z">Z</a></li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="footer-links">
                        <ul className="ulclear">
                            <li><a href="/terms" title="Terms of service">Terms of service</a></li>
                            <li><a href="/dmca" title="DMCA">DMCA</a></li>
                            <li><a href="/contact" title="Contact">Contact</a></li>
                        </ul> <div className="clearfix"></div>
                    </div> <div className="about-text"> Zoro does not store any files on our server, we only linked to the media which is hosted on 3rd party services. </div>
                    <p className="copyright">© Zoro.to</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Footer;