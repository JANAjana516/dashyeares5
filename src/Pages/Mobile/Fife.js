import { Link } from 'react-router-dom';
import '../../CSS/M.css';
import a from "../../image/AT.png";
import b from "../../image/out.png";



export default function Fife(){
    return(
        <>
         


       <div className="home">

            </div>
            <div className='image'>
              <img className='center' src={a} alt='image1'/>
            </div>

            <div className='out'>
            <Link className='link ' to='/M/thri'>
             <button className='butlink'> 
                <p >Enter another Preference</p>
               
             </button>
          </Link>
          <Link className='link ' to='/M/one'>
             <button className='butlink'> 
                <p >Sent Succesfully</p>
                <img className='ic' src={b} alt='00'></img>
             </button>
          </Link>
            </div>


            


              
        </>
    )
}