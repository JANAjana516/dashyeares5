import '../../CSS/Programs.css';
import { useState } from 'react';
import axios from 'axios';
function CreatClass() {

  const [name,setName]=useState('');
  const [desk,setDesk]=useState('');
  const [student,setStudent]=useState('');

  async   function s(e){ 
    
       e.preventDefault();


           try{
               const formData=new FormData();
                   formData.append('name',name);
                   formData.append('size',desk);
                   formData.append('number_of_student',student);
      let res= await axios.post('https://time2.onrender.com/Room/',
           formData, 
          
      );
   console.log(res);
        if(res.status ===200)
        {
         
           window.location.pathname="/home/creatclass";
           console.log("yes");
           
        }
        else{
          window.location.pathname="/home/creatclass";
          console.log("no"); 
        }
        

    }
  
 catch(error){
  console.log(error);
}
}
  return (
    
        <>
        
            <div className="part1">
              <h3 className="p">CREATE CLASSROOM</h3>
              <div className="br"> </div>
              <form   className="form " onSubmit={s}   encType='multipart/form-data' >

               <label className="na"  htmlFor="name" >Name Of Class</label>

               <input value={name}  id="name" required
                style={{marginBottom:'40px' ,marginTop:'15px'}}
                className='input rtl' type='text' 
                onChange={(e) => setName(e.target.value)}
                ></input>
               <div>
              
                 <label htmlFor="desk"  className='label'> How Many Desk Could it Contain ?</label>

                 <input  value={desk} id="desk" required
                 onChange={(e) => setDesk(e.target.value)}
                  type="number" className="inputNumber"></input>
                 
               </div>

               <div>
                 
                 <label htmlFor="student" className="label"> How Many Student Could it Contain ?</label>

                 <input  value={student} id="student" required
                 onChange={(e) => setStudent(e.target.value)}
                 type="number" className="inputNumber"></input>
               </div>



               <button className="button" type="submit">  CREATE</button>
              
               

           </form>
            </div>

        </>
    


  );
}
export default CreatClass;
