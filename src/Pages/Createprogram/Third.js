


import { Component } from 'react';
import '../../CSS/Programs.css';



class Third extends Component{


    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleChange,tsstudent,tfstudent,tscat,tfcat,}=this.props;
    
    return(
        <>
        
            <div className="part1">
              
          
               <p style={{
                color:'rgb(31, 119, 182)',
               
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Third Year Information</p>

       

               
           



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>First Division</p>

                <label className="p label" htmlFor="tfstudent">Students</label>

                <input value={tfstudent} id="tfstudent" required
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' ,marginRight:'50px'  }}
                onChange={handleChange('tfstudent')}
                ></input>
                
                
                <label className="p label" htmlFor="tfcat">Number Of Categories</label>

                <input value={tfcat} id="tfcat" required
                   onChange={handleChange('tfcat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Second Division</p>


                <label className="p label" htmlFor="tsstudent">Students</label>
                <input 
                value={tsstudent} id="tsstudent" required
                onChange={handleChange('tsstudent')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px',marginRight:'50px'  }}></input>


                <label className="p label" htmlFor="tscat">Number Of Categories</label>

                <input 
                value={tscat} id="tscat" required
                onChange={handleChange('tscat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                
               <button className="bb" onClick={this.continue}
                style={{marginRight:'18px'}}>NEXT</button>
               
                 <button className="bb" onClick={this.back}>BACK</button>

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}} ></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" ></div>
                    <div className="circle" ></div>
                </div>

            </div>
       
        </>
    );
}
}
export default Third;