

import '../../CSS/Programs.css';
import { Component} from 'react';


class Fourth extends Component{



 
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleChange,Fsstudent,Ffstudent,Fscat,Ffcat}=this.props;
   
    return(
        <>
         

            <div className="part1">
              
          
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Fourth Year Information</p>

       

                



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>First Division</p>

                <label className="p label" htmlFor="Ffstudent">Students</label>

                <input value={Ffstudent} id="Ffstudent" required
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' ,marginRight:'50px'  }}
                onChange={handleChange('Ffstudent')}
                ></input>
                
                
                <label className="p label" htmlFor="Ffcat">Number Of Categories</label>

                <input value={Ffcat} id="Ffcat" required
                 onChange={handleChange('Ffcat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Second Division</p>


                <label className="p label" htmlFor="Fsstudent">Students</label>
                <input 
                value={Fsstudent} id="Fsstudent" required
                onChange={handleChange('Fsstudent')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px',marginRight:'50px'  }}></input>


                <label className="p label" htmlFor="Fscat">Number Of Categories</label>

                <input 
                value={Fscat} id="Fscat" required
                onChange={handleChange('Fscat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                
                <button className="bb" 
                style={{marginRight:'18px'}} onClick={this.continue}>NEXT</button>
                
               
                 <button className="bb"  onClick={this.back}>BACK</button>

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}} ></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" ></div>
                </div>

            </div>
        
        </>
    );
}
}
export default Fourth;