import { useState } from 'react';

import '../CSS/Programs.css';

import axios from 'axios';


export default function AddSubject(){

    const [name,setName]=useState('');
    const [assistant,setAssistant]=useState('');
    const [hour,setHour]=useState('');
    const [professor,setProfessor]=useState('');
    const [year,setYear]=useState('');
    const [semester,setSemester]=useState('');

    
    async   function s(e){ 
    
      e.preventDefault();
      
      
      try{
      const formData=new FormData();
      formData.append('name',name);
      formData.append('Mr',assistant);
      formData.append('duration',hour);
      formData.append('professor',professor);
      formData.append('year',year);
      formData.append('session',semester);
            let res= await axios.post('https://time2.onrender.com/Course/',
                 formData, 
                
            );
         console.log(res);
              if(res.status ===200)
              {
               
                 window.location.pathname="/home/creatsubjects";
                 console.log("yes");
              }
              else{
                window.location.pathname="/home/creatsubjects";
                console.log("yes");
              }
             
      
          }
        
       catch(error){
        console.log(error);
      }
      }
    return(
        <>
         


            <div className="part1">
               <h3 className="p">GREATE SUBJECT</h3>
               <div className="br"> </div>

        <form   className="form " onSubmit={s}   encType='multipart/form-data' >

             <p htmlFor="name"
              style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Full Name</p>

               <input className="input rtl" 
               value={name} id="name" required 
               onChange={(e) => setName(e.target.value)}
               ></input>



                <label className="p label" htmlFor='year'>Year</label>

                <input value={year} id="year" required
                style={{width:'40px' , backgroundColor:'white' 
                      ,height:'20px' ,marginRight:'50px'  }}
                     
                 onChange={(e) => setYear(e.target.value)}
                ></input>

                <label className="p label" htmlFor='semester'>Semester</label>

                <input value={semester} id="semester" required
                style={{width:'40px' ,
                 backgroundColor:'white' ,height:'20px' }}

                 onChange={(e) => setSemester(e.target.value)}
                 ></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <label htmlFor='professor'
                style={{
                color:'#000',
                fontSize:'1rem',
                fontWeight:'bolder',
            
               }}>Professor</label>

               <input style={{marginTop:'10px'}}
                className="input rtl"
                 value={professor} id="professor" required
                 onChange={(e) => setProfessor(e.target.value)}
               ></input>


               <label   htmlFor='assistant'
                style={{
                color:'#000',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Assistant</label>

               <input  style={{marginTop:'10px'}}
               className="input rtl"
                 value={assistant} id="assistant" required
                 onChange={(e) => setAssistant(e.target.value)}
               ></input>


               
                <label className="p label" htmlFor='hour'>HoursPerDay</label>

                <input  value={hour} id="hour" required
                 onChange={(e) => setHour(e.target.value)}
                style={{width:'40px' , backgroundColor:'white' ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                
                <button className="button" type="submit"
                style={{marginRight:'30px' ,marginTop:'30px'}} >CREAT</button>
              
                


          </form>
            </div>
     
        </>
    )
}