import { Component, } from 'react';
import React  from 'react';
import f from "../../image/true.png";
import axios from 'axios';
class Fifth2 extends Component{

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }

     async finish (e) {
        // e.preventDefault();
        console.log(e.collage);
        console.log(e.acyear);
        console.log(e.fstudent);
        console.log(e.sstudent);
        console.log(e.scat);
        console.log(e.fcat);

        console.log(e.sfstudent);
        console.log(e.ssstudent);
        console.log(e.sscat);
        console.log(e.sfcat);

        console.log(e.tfstudent);
        console.log(e.tsstudent);
        console.log(e.tscat);
        console.log(e.tfcat);

        console.log(e.Ffstudent);
        console.log(e.Fsstudent);
        console.log(e.Fscat);
        console.log(e.Ffcat);

        console.log(e.student);
        console.log(e.studentS);
        console.log(e.cat);
        console.log(e.catS);

        console.log(e.Fnumt);
        console.log(e.holiday);
    
        try{
            const formData=new FormData();
                formData.append('name_collage',e.collage);
                formData.append('current_year',e.acyear);
                // formData.append('price',e.number);
                formData.append('number_of_student_of_first_year_first_session',e.fstudent);
                formData.append('number_of_student_of_first_year_second_session',e.sstudent);
                formData.append('number_of_category_of_first_year_second_session',e.scat);
                formData.append('number_of_category_of_first_year_first_session',e.fcat);

                formData.append('number_of_student_of_second_year_second_session',e.ssstudent);
                formData.append('number_of_student_of_second_year_first_session',e.sfstudent);
                formData.append('number_of_category_of_second_year_second_session',e.sscat);
                formData.append('number_of_category_of_second_year_first_session',e.sfcat);

                formData.append('number_of_student_of_third_year_second_session',e.tsstudent);
                formData.append('number_of_student_of_third_year_first_session',e.tfstudent);
                formData.append('number_of_category_of_third_year_second_session',e.tscat);
                formData.append('number_of_category_of_third_year_first_session',e.tfcat);

                formData.append('number_of_student_of_fourth_year_second_session',e.Fsstudent);
                formData.append('number_of_student_of_fourth_year_first_session',e.Ffstudent);
                formData.append('number_of_category_of_fourth_year_second_session',e.Fscat);
                formData.append('number_of_category_of_fourth_year_first_session',e.Ffcat);

                formData.append('number_of_day',e.Fnum);
                // formData.append('price',e.Fper);
                formData.append('number_of_student_of_fith_year_first_session',e.student);
                formData.append('number_of_student_of_fith_year_second_session',e.studentS);
                formData.append('number_of_category_of_fith_year_first_session',e.cat);
                formData.append('number_of_category_of_fith_year_second_session',e.catS);
                formData.append('holiday',e.holiday);

       let res= await axios.post('https://time2.onrender.com/yearstudent/',
                    formData, 
       
            );
                //  console.log(res);
        if(res.status ===200)
               {
                    console.log("yes");
                  window.location.pathname="/home/fifth1";
             }
         else{
            console.log("no");
            window.location.pathname="/home/fifth1";
         }
                  

          }

          catch(error){
                console.log(error);
             }
    
    
    
    }

    


    render(){
        const {collage,acyear,number,per,sstudent,fstudent,scat,fcat,
            ssstudent,sfstudent,sscat,sfcat,
            tsstudent,tfstudent,tscat,tfcat,
            Fsstudent,Ffstudent,Fscat,Ffcat,
            Fnum,Fper,student,studentS,cat,catS,holiday}=this.props;
       
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
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                </div>
             </div>
         </>
        );
    }
}
export default Fifth2;