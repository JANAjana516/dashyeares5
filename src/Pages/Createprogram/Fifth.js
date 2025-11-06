


import '../../CSS/Programs.css';
import { Component } from "react";




class Fifth extends Component{


    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back =e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {handleChange,Fnum,student,studentS,cat,catS,holiday}=this.props;

    return(
        <>

            <div className="part1">
               <h3 className="p">GREATE A NEW PROGRAM</h3>
               <div className="br"> </div>
          
               <p style={{
                // color:'rgb(31, 119, 182)',
                color:'black',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Fifth Year Information</p>

       
                
                <label className="p label" htmlFor="Fnum">Number Of Days</label>
                <input  value={Fnum} id="Fnum" required
                  onChange={handleChange('Fnum')}
                style={{width:'40px' , backgroundColor:'white' ,height:'20px' ,marginRight:'50px' }}></input>
               
                {/* <label className="p label" htmlFor="Fper">Periods Per Day</label>

                <input value={Fper} id="Fper" required
                  onChange={handleChange('Fper')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input> */}
           



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>First Division</p>

                <label className="p label" htmlFor="student">Students</label>

                <input value={student} id="student" required
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' ,marginRight:'50px'  }}
                onChange={handleChange('student')}
                ></input>
                
                
                <label className="p label" htmlFor="cat">Number Of Categories</label>

                <input value={cat} id="cat" required
                 onChange={handleChange('cat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Second Division</p>


                <label className="p label" htmlFor="studentS">Students</label>
                <input 
                value={studentS} id="studentS" required
                onChange={handleChange('studentS')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px',marginRight:'50px'  }}></input>


                <label className="p label" htmlFor="catS">Number Of Categories</label>

                <input 
                value={catS} id="catS" required
                onChange={handleChange('catS')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px'}}></input>
                <br></br>


            <label className="p label" htmlFor="holiday">Holiday Day</label>

               <input type='text'
                    value={holiday} id="holiday" required
                         onChange={handleChange('holiday')}
                       style={{width:'90px' , backgroundColor:'white' 
                     ,height:'20px' , marginTop:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>


               <button className="bb" onClick={this.continue}
               style={{marginRight:'18px'}}>NEXT</button>
               
               
              <button className="bb" onClick={this.back}>BACK</button>


                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}} ></div>
                    <div className="circle"style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                </div>


 

            </div>
         
        </>
    );
}
}
export default Fifth;