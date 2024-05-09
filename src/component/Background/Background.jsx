import './Background.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import video from '../../assets/video1.mp4'

const Background=({herocount,playvideo})=>{

     if(playvideo===true){
        return(
            <video className='background fade-in' loop muted autoPlay>
                <source src={video} type='video/mp4'/>
            </video>
        )
    }
    else if(herocount===0){
        return(
          <img className='background fade-in' src={img1}/>
        )
    }
    else if(herocount===1){
        return(
            <img className='background fade-in' src={img2}/>
        )
    }
    else if(herocount===2){
        return(
            <img className='background fade-in' src={img3}/>
        )
    }
    
}
export default Background