


import '../CSS/Programs.css';

import p from "../image/m.png";



export default function Contact(){
    return(
        <>
        
            <div className="part1">
               <h3 className="p">Contact With Developers</h3>
               <div className="br" style={{marginBottom:'30px'}}> </div>

               <div style={{fontSize:'1.2rem'}} >
                <h5>If You Have Any Question,</h5>
                <h5>You Can Contact With Us Via Email And</h5>
                <h5>We Will Respond To You As Soon As Possible</h5>
               </div>

               <div className="br" style={{marginBottom:'30px'}}> </div>          
            
               <div className="contactName"> 
                <div>
                  <span className="p">Lobana Balloul</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Lobana@gmail.com</h5>

                </div> 

                <div >
                  <span className="p">Jana Aldaboos</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Jana@gmail.com</h5>

                </div> 

                <div>
                  <span className="p">Zain Ibrahim</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Zain@gmail.com</h5>

                </div> 

                <div>
                  <span className="p">Yousef Samha</span> 
                  <img src={p} alt='image1' style={{
                           width:'25px',
                           height:'25px',
                         }}/>
                         <h5>Yousef@gmail.com</h5>

                </div> 
               </div>


            </div>
         
        </>
    )
}