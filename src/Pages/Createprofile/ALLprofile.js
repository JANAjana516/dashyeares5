
import '../../CSS/Programs.css';
import { Component, } from 'react';
import React  from 'react';
import Stepf from '../Createprofile/Stepf';
import StepS from '../Createprofile/StepS';

import StepT from './StepT';


class ALLprofile extends  Component{

   state ={
      step :1,
      fname:'',
      lname:'',
      email:'',
      fun:'',
   

      //step 2
      atemail:'',
      cpass:'',
     
      

    }

    nextStep =()=>{
      const {step} =this.state;
      this.setState({
        step : step +1
      });
    }
    prevStep =()=>{
      const {step} =this.state;
      this.setState({
        step : step -1
      });

    }
    
    showStep = ()=>
         {
      const {step,fname,lname,email,atemail,cpass,fun} =this.state;
  
      if (step === 1) 
        
        return (
        <Stepf
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          fname={fname}
          lname={lname}
          email={email}
          fun={fun}
          
          

          />);

       if (step ===2 ) 
        
            return (
            <StepS
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              atemail={atemail}
              cpass={cpass}
          

              />);
        
              if (step ===3 ) 
        
                return (
                <StepT
                  handleChange={this.handleChange}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  fname={fname}
                  lname={lname}
                  email={email}
                  fun={fun}
                  atemail={atemail}
                  cpass={cpass}
                  />);
    }

    handleChange = input => e =>{
             this.setState({
              [input]:e.target.value
             });
    }
     



    render()
    {
        
    return(
        <>
        
         {this.showStep()}
      </>
    );
  }
}

export default ALLprofile;