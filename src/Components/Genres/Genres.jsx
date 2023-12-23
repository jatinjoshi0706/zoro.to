import React from 'react'
import { genres } from "../../data"
import "./Genres.scss"
const Genres = () => {
    return (
        <>
            <div className='genresContainer'>
                <div className='genresHead'>Genres</div>
                <div className='genres'>
                    <div className='genresList'>
                        {genres.map((e) => (
                            <span className='genresName'> <a>{e}</a></span>
                        ))}
                    </div>
                    <div className='showMore'>
                        <a className="more" href='#'>Show More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Genres;