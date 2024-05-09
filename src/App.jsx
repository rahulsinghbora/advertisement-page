import { useEffect, useState } from "react"
import Navbar from "./component/Navbar/Navbar"
import Background from "./component/Background/Background"
import Hero from "./component/Hero/Hero"


const App=()=>{

  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passion"},
   ]

    const[herocount,setherocount]=useState(0)
    const[playvideo,setplayvideo]=useState(false)



    useEffect(()=>{
      setTimeout(() => {
        setherocount((count)=>count===2?0:count+1)
      }, 3000);
    })

  return(<>
     <Background herocount={herocount} playvideo={playvideo}/>
     <Navbar/>
     <Hero heroData={heroData[herocount]} herocount={herocount} setherocount={setherocount} setplayvideo={setplayvideo} playvideo={playvideo} />
  </>)
}
export default App