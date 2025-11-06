
import { Component} from 'react';
import '../../CSS/Programs.css';


class Second extends Component{

    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleChange,ssstudent,sfstudent,sscat,sfcat}=this.props;

    return(
        <>
        
            <div className="part1">
               
          
               <p style={{
                color:'rgb(31, 119, 182)',
                
                fontSize:'1rem',
                fontWeight:'bolder',
               }}>Second Year Information</p>

       
  
           



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>First Division</p>

                <label className="p label" htmlFor="sfstudent">Students</label>

                <input value={sfstudent} id="sfstudent" required
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' ,marginRight:'50px'  }}
                onChange={handleChange('sfstudent')}
                ></input>
                
                
                <label className="p label" htmlFor="sfcat">Number Of Categories</label>

                <input value={sfcat} id="sfcat" required
                 onChange={handleChange('sfcat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Second Division</p>


                <label className="p label" htmlFor="ssstudent">Students</label>
                <input 
                value={ssstudent} id="ssstudent" required
                onChange={handleChange('ssstudent')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px',marginRight:'50px'  }}></input>


                <label className="p label" htmlFor="sscat">Number Of Categories</label>

                <input 
                value={sscat} id="sscat" required
                onChange={handleChange('sscat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                
                <button className="bb" onClick={this.continue}
                 style={{marginRight:'18px'}}>NEXT</button>
               
                 <button className="bb" onClick={this.back} >BACK</button>

          <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}} ></div>
                    <div className="circle"></div>
                    <div className="circle" ></div>
                    <div className="circle" ></div>
                </div>

            </div>
        
        </>
    );
}
}
export default Second;