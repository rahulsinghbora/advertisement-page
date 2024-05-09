import './Navbar.css'

const Navbar=()=>{
    return(<>
    <nav className='nav'>
         <div className='logo'> EV-olution</div>
         <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
         </ul>
    </nav> 
   </>)
}
export default Navbar