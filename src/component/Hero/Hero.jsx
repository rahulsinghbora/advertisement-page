import './Hero.css'
import logo from '../../assets/arrow_btn.png'
import pause from '../../assets/pause_icon.png'
import play from '../../assets/play_icon.png'

const Hero=({playvideo,setherocount,heroData,herocount,setplayvideo})=>{
    return(<>
        <div className='hero-section'>
            <div className='hero-text'>
                <h1>{heroData.text1}</h1>
                <h1>{heroData.text2}</h1>
            </div>
            <div className='explore'>
                <p>explore the features</p>
                <img src={logo}/>
            </div>
            <div className='hero-dots'>
            <ul>
                <li onClick={()=>setherocount(0)} className={herocount===0?"link orange":"link "}></li>
                <li onClick={()=>setherocount(1)} className={herocount===1?"link orange":"link "}></li>
                <li onClick={()=>setherocount(2)} className={herocount===2?"link orange":"link "}></li>
            </ul>
            <div className='play'>
                <img onClick={()=>setplayvideo(!playvideo)} src={playvideo?pause:play}/>
                <p>see the video</p>
            </div>
            </div>
        </div>
    </>)
}
export default Hero