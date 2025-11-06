import { Link } from 'react-router-dom';
import '../../CSS/M.css';
import a from "../../image/AT.png";



export default function Thri(){
    return(
        <>
         


       <div className="home">

            </div>
            <div className='image' >
              <img className='center' src={a} alt='image1'/>
            </div>

            <div className='margl'>
              <div className='divM'>
                <p className='text'>Subject</p>

                <input className='in' type='text'></input>
               
              </div>

              <div >
                <p className='text'>Day</p>
               
                <input className='in' type='text'></input>
               
              </div>
              <p className='text'>Time</p>
              <div className='border gridM'>
              <div >
                <p>Start</p>
               
                <input className='i' type='text'></input>
               
              </div>

              <div >
                <p >Finish</p>
               
                <input className='i' type='text'></input>
               
              </div>
              </div>


            </div>


            <div className='image'>
            <Link  to='/M/four'> <button className='bu'>Next</button></Link>
            </div>


            


              
        </>
    )
}