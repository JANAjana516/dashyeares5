
import Loading from "../../Pages/Loading";
import '../../CSS/Programs.css';

export default function Fifth1(){
    return(
        <>
        


            <div className="part1">
               <h3 className="p">GREATE A NEW PROGRAM</h3>
               <div className="br"> </div>


               <div className="fifth1">
                   <h1 style={{
                    fontSize:'1.2rem',
                    marginLeft:'200px',
                    marginTop:'-90px'
                   }} >Wait,</h1> 
                   <h2 
                    style={{
                        fontSize:'1rem',
                        marginLeft:'140px',
                       }}
                   >The Program Creating</h2>
               </div>

             
               <Loading/>
          



           </div>


          
       
        </>
    )
}