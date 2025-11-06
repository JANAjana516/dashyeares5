
import { useEffect, useState } from 'react';
export default function Auto(){
   
    const [product,setProduct] =useState([]);
    const [effectdel,setedl]=useState(0);
    useEffect(()=>{
        fetch('https://time2.onrender.com/professor/')
        .then(res =>res.json())
        .then(data =>setProduct(data));
    },[effectdel]);
  
      
    const showUsers = product.map((u,index) =>(
        <tr key={index}>    
        <td>{u.first_name} {u.last_name}</td>
        <td>{u.email}</td>
        <td>{u.email_second}</td>
        <td>{u.password}</td>


    </tr>
      
  ));  
  
  
  
    return(
        <>
 
       
        
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>AT-Email</th>
                <th>Password</th>
                
                </tr>
            </thead>
            <tbody>
                    {showUsers}
            </tbody>
        </table>
   

      
      </>
    )
}