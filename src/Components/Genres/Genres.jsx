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
                            <span className='genresName'> <a href='#'>{e}</a></span>
                        ))}
                    </div>
                        <button clbuttonssName="more" href='#'>Show More</button>
                    {/* <div className='showMore'>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Genres;