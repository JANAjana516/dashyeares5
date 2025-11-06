

import '../CSS/Programs.css';
import p from "../image/6.png";
import { useEffect, useState } from 'react';
export default function Classrooms(){

    const [product,setProduct] =useState([]);
    const [effectdel,setedl]=useState(0);
    useEffect(()=>{
        fetch('https://time2.onrender.com/Room/')
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
               marginLeft:'-20px'
             }}/>
              <div style={{
                height:'15px',
                marginTop:'-30px'
              }}>

              </div>
             <div
              style={{
                width:'70px',
                height:'30px',
                border:'1px solid black',
                borderRadius:'5px',
                backgroundColor:'white',
                color:'#5063DC',
                transform:'translate(60px)',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                fontWeight:'bold',
                fontSize:'0.7rem'
            
             }}>
                 <span>{u.name}</span>

             </div>
        </div>

   </div>
    
    ));


    return(
        <>
        
            <div className="part1">
               <h3 className="p">EXPLORE CLASSROOMS</h3>
               <div className="br"> </div>
               



               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1.2rem',
                fontWeight:'bolder',
               }}>The Latest Classrooms</p>


             <div className='column'>
                {showUsers}
              </div>

            </div>
    
        </>
    )
}