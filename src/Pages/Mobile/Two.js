import { Link } from 'react-router-dom';
import '../../CSS/M.css';
import a from "../../image/AT.png";



export default function Two(){
    return(
        <>
         


       <div className="home">

            </div>
            <div className='image'>
              <img className='center' src={a} alt='image1'/>
            </div>

            <div className='margl'>
              <div className='divM'>
                <p className='text'>AT-EMAIL</p>

                <input className='in' type='text'></input>
               
              </div>

              <div >
                <p className='text'>Password</p>
               
                <input className='in' type='text'></input>
               
              </div>


            </div>


            <div className='image'>
            <Link  to='/M/thri'> <button className='bu'>Log in</button></Link>
            </div>


            


              
        </>
    )
}