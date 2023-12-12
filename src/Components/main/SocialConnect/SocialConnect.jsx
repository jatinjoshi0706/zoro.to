import React from 'react';
import facebookLogo from '../../../Assets/icons8-facebook-48.png'
import redditLogo from '../../../Assets/icons8-reddit-50.png'
import telegramLogo from '../../../Assets/icons8-telegram-48.png'
import twitterLogo from '../../../Assets/icons8-twitterx-50.png'
import "./SocialConnect.scss"
const SocialConnect= () =>{
    return(
    <>
        <div className='strip'>
            <span className='decor'>|</span>
            <div className='text'>
                <span style={{fontSize:'20px',color:'#cae962',fontWeight:'bold'}}>Share Zoro</span>
                <br/> <span style={{color:'#aaa'}}>to your friend</span>
            </div>
            <div className='count' style={{color:'#aaa'}}>
                <span>400k+</span>
                <br/> <span>shares</span>
            </div>
            <div className='firstContent' style={{border:"1px solid #1e98ec ",borderRadius:'30px',padding:'0 5px',background:"#1e98ec",gap:'2px'}}>
                <img src={facebookLogo}  style={{borderRadius:'0'}}/>
                 <span>Facebook</span>
            </div>
            <div className='firstContent' style={{border:"1px solid black ",borderRadius:'30px',padding:'0 5px',background:"black",gap:'2px'}}>
            <img src={twitterLogo} style={{height:'40px',width:'40px',padding:'5px 0'}}/>
                <span>Twitter</span>
            </div>
            <div className='firstContent' style={{border:"1px solid #0f8bdc ",borderRadius:'30px',padding:'0 5px',background:"#0f8bdc",gap:'2px'}}>
            <img src={telegramLogo} / >
                <span>Telegram</span>
            </div>
            <div className='firstContent'style={{border:"1px solid red ",borderRadius:'30px',padding:'0 5px',background:"red",gap:'2px'}}>
            <img src={redditLogo} />
                <span>Reddit</span>
            </div>
        </div>
    </>
    );
}

export default SocialConnect;