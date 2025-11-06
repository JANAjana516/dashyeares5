import { Link } from 'react-router-dom';
import '../../CSS/M.css';
import a from "../../image/AT.png";
import b from "../../image/hi.png";


export default function One(){
    return(
        <>
         


       <div className="home">

            </div>
            <div className='image'>
              <img className='center' src={a} alt='image1'/>
            </div>

            <div className='image'>
              <img className=' hi' src={b} alt='image1'/>
            </div>
            <div className='image'>
            <Link  to='/M/two'><button className='bu'>Get Started</button></Link>
            </div>


            


              
        </>
    )
}