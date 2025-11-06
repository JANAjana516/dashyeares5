
import '../CSS/Programs.css';
import p from "../image/7.png";
import { useEffect, useState } from 'react';

export default function Profiles(){

  const [product,setProduct] =useState([]);
  const [effectdel,setedl]=useState(0);
  useEffect(()=>{
      fetch('https://time2.onrender.com/professor/')
      .then(res =>res.json())
      .then(data =>setProduct(data));
  },[effectdel]);

    
  const showUsers = product.map((u,index) =>(
             
    <div className="nameProfiles">
    <img src={p} alt='image1' style={{
       width:'70px',
       height:'70px',
       transform:'translateY(-30px)',
       marginLeft:'-30px'
     }}/>
      <div style={{
        height:'20px',
        marginTop:'-40px'

      }}>

      </div>
     <div
      style={{
        width:'90px',
        height:'30px',
        border:'1px solid black',
        borderRadius:'5px',
        backgroundColor:'white',
        transform:'translate(50px)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        color:'#5063DC',
        fontSize:'0.8rem'
    
     }}>
         <span>{u.first_name} {u.last_name}</span>

     </div>
</div>
    
));  

    return(
        <>
        

   

            <div className="part1">
               <h3 className="p">EXPLORE PROFILES</h3>
               <div className="br"> </div>



               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1.2rem',
                fontWeight:'bolder',
               }}>The Latest Profiles</p>



               <div className="continerprograms">
                 
                  {showUsers}
               </div>

            </div>
       
        </>
    )
}