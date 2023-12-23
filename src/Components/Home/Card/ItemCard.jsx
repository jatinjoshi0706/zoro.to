import React from "react"
import '../Home.scss'
const ItemCard = (props) => {
    return (
        <div className='trendingItem'>
            <div className='inner'>
                <div className='trending-slider'>
                    <div className='sliderItemHeading'>
                        <span className='sliderItemCount'>01</span>
                        <span className='sliderItemHead'>ONE PIECE</span>
                    </div>
                    <a href='#'>
                        <img className="itemImg01" src={props.Item01} alt='' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;

