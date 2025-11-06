import { Component, } from 'react';
import React  from 'react';
import f from "../../image/true.png";
import axios from 'axios';
import { render } from '@testing-library/react';



class StepT extends Component{

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    async finish (e){
        console.log(e.fname);
        console.log(e.lname);
        console.log(e.email);
        console.log(e.atemail);
        console.log(e.cpass);
        console.log(e.fun);
        try{
            const formData=new FormData();
                formData.append('first_name',e.fname);
                formData.append('last_name',e.lname);
                formData.append('email',e.email);
                formData.append('email_second',e.atemail);
                formData.append('password',e.cpass);
                formData.append('p',e.fun);
                  let res=await axios.post('https://time2.onrender.com/professor/',
                    formData, 
       
            );
          
        if(res.status ===200)
               {
                  console.log("yes");
                //   window.location.pathname="/home/fall";
             }
         else{
            console.log("no");
            // window.location.pathname="/home/fall";
         }
                  

          }

          catch(error){
                console.log(error);
             }
    
    
    
    }

    


    render(){
        const {fname,lname,email,fun,cpass,atemail}=this.props;
       
        return(
         <>
            <div className="part1">
            <h3 className="p">GREATE PROFILE</h3>
               <div className="br"> </div>

               <form   className="form "  onSubmit={this.finish(this.props)}  encType='multipart/form-data' >

               <div className="profileGRIDE">
              
                <div>

                
                <h2 style={{marginTop:'30px',
                    marginLeft:'20px',

                   }} className="h1">The Creation Process Completed Successfully        
                   <img style={{marginLeft:'25px',
                   width:'30px',
                   height:'40px'

                   }} className="icon" src={f} alt='image1'/></h2>
      
                </div>

               
         </div>


               <div className="br" style={{marginTop:'40px'}}> </div>
                  <button   className="bb" onClick={this.back}
                   style={{marginRight:'18px'}}> 
                     BACK                   
                  </button>

                  <button   className="bb" type='submit'
                   style={{marginRight:'18px'}}> 
                     FINISH                   
                  </button>
               
               </form>

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>

                </div>
             </div>
         </>
        );
    }
}
export default StepT;