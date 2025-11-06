import { useState } from "react";
import '../CSS/Login.css';

import a from "../image/avata.svg";



export default function Login(){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

    
 async   function s(e){ 
     
    e.preventDefault();
  
    if( name==='admin' && password==='admin')
    {
        window.location.pathname="/home";
    }else 
    {
        window.location.pathname="/";

    }

 

  }
    
    return(
        <>
        <div className='login'>
            <img className='avatar' src={a} alt='..'/>
            <h2 className='h2login'>Login</h2>
            <div className='input-text'>
                <input  value={name} id="name" type="text"  required placeholder="Username "
                    onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='input-text'>
                <input value={password} id="password" type="password"   placeholder="Enter Password "
                    onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button className='btn' onClick={s} >Login</button>


        </div>
         
        </>
    )
}