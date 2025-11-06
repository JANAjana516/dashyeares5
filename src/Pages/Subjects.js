
import { useEffect, useState } from 'react';

import p from "../image/15.png";

export default function Subjects(){

  const [product,setProduct] =useState([]);
  const [effectdel,setedl]=useState(0);
  useEffect(()=>{
      fetch('https://time2.onrender.com/Course/')
      .then(res =>res.json())
      .then(data =>setProduct(data));
  },[effectdel]);

    
  const showUsers = product.map((u,index) =>(
    
     <div >
          <div className="nameProfiles">
        <img src={p} alt='image1' style={{
           width:'70px',
           height:'70px',
           transform:'translateY(-20px)',
           marginLeft:'-30px'
         }}/>
          <div style={{
            height:'70px'
          }}>

          </div>
         <div
          style={{
            fontSize:'0.8rem',
            width:'90px',
            height:'30px',
            border:'1px solid black',
            borderRadius:'5px',
            backgroundColor:'white',
            transform:'translate(50px)',
            color:'#5063DC',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontWeight:'bold',
            marginTop:'-90px'
          
        
         }}>
             <span>{u.name}</span>

         </div>
    </div>

      </div>

  
));


    return(
        <>
        
          

           


            <div className="part1">
               <h3 className="p">EXPLORE SUBJECTS</h3>
               <div className="br"> </div>
  



               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1.2rem',
                fontWeight:'bolder',
               }}>The Latest Subjects</p>


              {/* <h3 style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
               }}>YEAR 1</h3> */}
               <div className='column'>
                       {showUsers}
               </div>


                

            </div>
       
        </>
    )
}