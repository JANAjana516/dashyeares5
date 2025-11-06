
import '../../CSS/Programs.css';
import { Component} from 'react';
import React  from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Fifth1 from './Fifth1';
import Fifth2 from './Fifth2';

class ALLprogram extends  Component{

   state ={
      step :1,
      collage:'',
      acyear:'',
      number:'',
      per:'',
      fstudent:'',
      fcat:'',
      sstudent:'',
      scat:'',

      //step 2
      sfstudent:'',
      sfcat:'',
      ssstudent:'',
      sscat:'',

      //step 3

      tfstudent:'',
      tfcat:'',
      tsstudent:'',
      tscat:'',

    //step 4

      Ffstudent:'',
      Ffcat:'',
      Fsstudent:'',
      Fscat:'',



    
      //step 5
      Fnum:'',
      Fper:'',
      student:'',
      studentS:'',
      cat:'',
      catS:'',
      holiday:'',
      

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
    handleChange = input => e =>{
      this.setState({
       [input]:e.target.value
      });
}
    
    showStep = ()=>
         {
      const {step,collage,acyear,number,per,sstudent,fstudent,scat,fcat,
        ssstudent,sfstudent,sscat,sfcat,
        tsstudent,tfstudent,tscat,tfcat,
        Fsstudent,Ffstudent,Fscat,Ffcat,
        Fnum,Fper,student,studentS,cat,catS,holiday} =this.state;
  
      if (step === 1) 
        
        return (
        <First
          handleChange={this.handleChange}
          nextStep={this.nextStep}
          collage={collage}
          acyear={acyear}
          per={per}
          number={number}
          sstudent={sstudent}
          fstudent={fstudent}
          scat={scat}
          fcat={fcat}

          />);

       if (step === 2 ) 
        
            return (
            <Second
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              ssstudent={ssstudent}
              sfstudent={sfstudent}
              sscat={sscat}
              sfcat={sfcat}
              />);
        
              if (step ===3 ) 
        
                return (
                <Third
                  handleChange={this.handleChange}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  tsstudent={tsstudent}
                  tfstudent={tfstudent}
                  tscat={tscat}
                  tfcat={tfcat}
                  />);


                  if (step ===4 ) 
        
                    return (
                    <Fourth
                      handleChange={this.handleChange}
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      Fsstudent={Fsstudent}
                      Ffstudent={Ffstudent}
                      Fscat={Fscat}
                      Ffcat={Ffcat}
                      />);
                  
                      if (step ===5) 
        
                        return (
                        <Fifth
                          handleChange={this.handleChange}
                          nextStep={this.nextStep}
                          prevStep={this.prevStep}
                          student={student}
                          studentS={studentS}
                          cat={cat}
                          catS={catS}
                          holiday={holiday}
                          Fper={Fper}
                          Fnum={Fnum}
                          />);

                          if (step ===6) 
        
                            return (
                            <Fifth2
                              handleChange={this.handleChange}
                              nextStep={this.nextStep}
                              prevStep={this.prevStep}
                              student={student}
                              studentS={studentS}
                              cat={cat}
                              catS={catS}
                              holiday={holiday}
                              Fper={Fper}
                              Fnum={Fnum}
                              collage={collage}
                              acyear={acyear}
                              // per={per}
                              number={number}
                              sstudent={sstudent}
                              fstudent={fstudent}
                              scat={scat}
                              fcat={fcat}
                              ssstudent={ssstudent}
                              sfstudent={sfstudent}
                              sscat={sscat}
                              sfcat={sfcat}
                              tsstudent={tsstudent}
                              tfstudent={tfstudent}
                              tscat={tscat}
                              tfcat={tfcat}
                              Fsstudent={Fsstudent}
                              Ffstudent={Ffstudent}
                              Fscat={Fscat}
                              Ffcat={Ffcat}
                            
                              />);

                              if (step ===7) 
        
                                return (
                                <Fifth1
                                  handleChange={this.handleChange}
                                  nextStep={this.nextStep}
                                  prevStep={this.prevStep}
                                
                                  />);
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

export default ALLprogram;