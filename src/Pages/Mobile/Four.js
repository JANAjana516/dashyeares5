import { Link } from 'react-router-dom';
import '../../CSS/M.css';
import a from "../../image/AT.png";
import b from "../../image/ic.png";


export default function Four(){
    return(
        <>
         


       <div className="home">

            </div>
            <div className='image'>
              <img className='center' src={a} alt='image1'/>
            </div>

            <div className='image'>
            <Link className='link ' to='/M/fife'>
             <button className='butlink'> 
                <p >Sent Succesfully</p>
                <img className='ic' src={b} alt='00'></img>
             </button>
          </Link>
            </div>


            


              
        </>
    )
}