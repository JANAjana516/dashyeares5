import '../../CSS/foot.css';


import a from "../../image/foot.png";
import m from "../../image/m.png";
import j from "../../image/a.png";
import { Link } from "react-router-dom";

function AppFooter() {
  return (
   
     
    <>
       {/* <Typography.Link href="tel:+123456789">+123456789</Typography.Link> */}
       <div className="conter gr ">
            <div >
               <img className="imgFoot" src={a} alt="..." />
               {/* <h1  className="col">AUTOTASKER</h1> */}
             </div>
             <div className="grfoot">
                <div>
                    <h3>Home</h3>
                    <div>
                         <Link to='/home/contact' className='link ' > <span className="col">Contact</span>  </Link>
                         <img className="iconfoot" src={m} alt="..." />
                    <br></br>
                    <div style={{marginTop:'25px'}}>
                      <Link to="/home/about" className='link '> <span className="col">About Us</span> </Link>
                      <img className="iconfoot" src={j} alt="..." />
                    </div>
                   </div>
                </div>
                <div>
                    <h3 >Services</h3>
                    <div  className='serv'>
                    <div>
                      <Link className="link" to='/home/programs'>  <p className="col">Programs</p>  </Link>
                    
                      <Link className="link" to='/home/classrooms'>  <p className="col">ClassRooms</p> </Link>
                    </div>
                    <div>
                      <Link className="link" to='/home/subjects'>  <p className="col">Subjects</p> </Link>
                      <Link className="link" to='/home/profiles'>  <p className="col">Profiles</p> </Link>
                    </div>
                    </div>
                </div>
             </div>
            </div>
     </>
   
  );
}
export default AppFooter;
