


import { Component,  } from 'react';
import '../../CSS/Programs.css';


class First extends Component{



    continue =e =>{
        e.preventDefault();
        this.props.nextStep();
       
    }
    render(){
        const {handleChange,collage,acyear,number,sstudent,fstudent,scat,fcat}=this.props;
    return(
        <>
         

            <div className="part1">
               <h3 className="p">GREATE A NEW PROGRAM</h3>
               <div className="br"> </div>
            
               <label className="p label" htmlFor="collage">Name Of The Collage</label>
               <input className="input" required 
                value={collage} id="collage"
                onChange={handleChange('collage')}
               ></input>
            
               <label className="p label" htmlFor="acyear">Academic Year</label>
               <input className="input" required type='number'
                                value={acyear} id="acyear"
                                onChange={handleChange('acyear')}
               ></input>
               
              

               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                // color:'rgb(31, 119, 182)',
                color:'black',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>First Year Information</p>

       
                <label className="p label" htmlFor="number">Number Of Days</label>

                <input required type='number' value={number} id="number"
                                
                style={{width:'40px' , 
                backgroundColor:'white' ,height:'20px' ,marginRight:'50px' }}
                onChange={handleChange('number')}
                >

                </input>

                {/* <label className="p label" htmlFor="per">Periods Per Day</label>

                <input required value={per} id="per"
                                onChange={handleChange('per')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input> */}
           



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>First Division</p>

                <label className="p label" htmlFor="fstudent">Students</label>

                <input required type='number' value={fstudent} id="fstudent"
                                onChange={handleChange('fstudent')}
                style={{width:'40px' , backgroundColor:'white' ,height:'20px' ,
                marginRight:'50px'  }}></input>
                
                
                <label className="p label" htmlFor="fcat">Number Of Categories</label>

                <input required value={fcat} type='number' id="fcat"
                               onChange={handleChange('fcat')}
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px' }}></input>
               



               <div className="br" style={{marginTop:'20px'}}> </div>
               <p style={{
                color:'#000',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Second Division</p>


                <label className="p label" htmlFor="sstudent">Students</label>

                <input required  value={sstudent} id="sstudent"
                                onChange={handleChange('sstudent')}
                
                style={{width:'40px' , backgroundColor:'white' 
                ,height:'20px',marginRight:'50px'  }}></input>


                <label className="p label" htmlFor="scat">Number Of Categories</label>

                <input required  value={scat} id="scat"
                                onChange={handleChange('scat')}
                style={{width:'40px' , backgroundColor:'white' ,height:'20px'}}></input>

                <div className="br" style={{marginTop:'20px'}}> </div>
                
               <button 
                className="bb" onClick={this.continue} 
                style={{marginRight:'18px'}}> 
                 NEXT
                 </button>
       

                <div className="allcircle">
                    <div className="circle" style={{backgroundColor:'#5063DC'}}></div>
                    <div className="circle" ></div>
                    <div className="circle"></div>
                    <div className="circle" ></div>
                    <div className="circle" ></div>
                </div>

            </div>
      
        </>
    );
}

}
export default First;