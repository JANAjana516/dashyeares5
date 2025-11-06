import { Component, } from 'react';
import React  from 'react';

class StepS extends Component{
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    


    render(){
        const {handleChange,cpass,atemail}=this.props;
        return(
         <>
            <div className="part1">
            <h3 className="p">GREATE PROFILE</h3>
               <div className="br"> </div>

               

               <div className="profileGRIDE">
              
                <div>

                

                  <label htmlFor='atemail' className="p label">AT-Email</label>
                  <input className="input"  type='email'
                   id="atemail" required
                   value={atemail}
                   onChange={handleChange('atemail')}
                  ></input>

            <label htmlFor='cpass'  className="p label">Password</label>
                  <input className="input" type='text'
                    id="cpass" required
                    value={cpass}
                    onChange={handleChange('cpass')}
                  ></input>
                </div>

               
                         </div>


               <div className="br" style={{marginTop:'40px'}}> </div>
                  <button   className="bb" onClick={this.back}
                   style={{marginRight:'18px'}}> 
                     BACK                   
                  </button>

                  <button   className="bb" onClick={this.continue}
                   style={{marginRight:'18px'}}> 
                     NEXT                    
                  </button>
               
   
                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"></div>

                </div>
             </div>
         </>
        );
    }
}
export default StepS;