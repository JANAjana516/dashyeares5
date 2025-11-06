import { Component,  } from 'react';
import React  from 'react';

class Stepf extends Component{


    
    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const {handleChange,fname,lname,email,fun}=this.props;
        return(
         <>
            <div className="part1">
            <h3 className="p">GREATE PROFILE</h3>
               <div className="br"> </div>

               <form   className="form "   encType='multipart/form-data' >

               <div className="profileGRIDE">
              
                <div>
                  <label htmlFor='fname' className="p label">First Name</label>
                  <input className="input rtl"  type='text' value={fname}
                    id="fname" required
                    onChange={handleChange('fname')}

                  ></input>
                  

                  <label htmlFor='lname'  className="p label">Last Name</label>
                  <input className="input rtl" type='text' value={lname}
                    id="lname" required
                    onChange={handleChange('lname')}
                  ></input>

                  <label htmlFor='email' className="p label">Personal-Email</label>
                  <input className="input"  type='email' value={email}
                   id="email" required
                   onChange={handleChange('email')}
                  ></input>
                </div>

               
          

               </div>

               <label htmlFor='fun'
               style={{color:'#5063DC' , fontSize:'1.5rem'}} >
                Is A Professore </label>
                <br></br>

                <input className="input"   value={fun}
                   id="fun" required
                   onChange={handleChange('fun')}
                  ></input>
                 {/* <input type="radio" name='fun'  value={fun}
                 style={{
                 marginTop:'10px'
                 }}
                  id="fun" required 
                   onChange={handleChange('fun')}/>
                    <span>Professore</span>

                 <input type="radio" name='fun'
                    value={fun}
                    id="fun"
                 onChange={handleChange('fun')}
                   />
                  <span>Assistant</span> */}



               <div className="br"  style={{marginTop:'40px'}}> </div>
                  <button  onClick={this.continue} className="bb" 
                   style={{marginRight:'18px'}}> 
                     NEXT                    
                  </button>
               
               </form>

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" ></div>
                    <div className="circle"></div>

                </div>
             </div>
         </>
        );
    }
}
export default Stepf;