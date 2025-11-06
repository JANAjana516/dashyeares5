
import '../CSS/Programs.css';
import p from "../image/p.jpg";



export default function Programs(){
    return(
        <>
        

          


            <div className="part1">
               <h3 className="p">EXPLORE PREVIOUS PROGRAMS</h3>
               <div className="br"> </div>
            

               
               <p style={{
                color:'rgb(31, 119, 182)',
                fontSize:'0.9rem',
                fontWeight:'bolder',
               }}>Explore The Latest Programs</p>

               {/* <h3  className='pyear'
               style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontSize:'0.5',
               }}>YEAR 1</h3> */}

               <div className="continerprograms">
               <div>
                   <img src={p} alt='image1' style={{
                    width:'100px',
                    height:'100px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
                    fontSize:'0.5',
                    marginLeft:'13px',
                    marginTop:'30px'

        
                   }}
                   >2018/2019</p>
                 </div>

                 
                 <div>
                   <img src={p} alt='image1' style={{
                    width:'100px',
                    height:'100px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
                    fontSize:'0.5',
                    marginLeft:'13px',
                    marginTop:'30px'
        
                   }}
                   >2020/2019</p>
                 </div>

                 <div>
                   <img src={p} alt='image1' style={{
                    width:'100px',
                    height:'100px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
                    fontSize:'0.5',
                    marginLeft:'13px',
                    marginTop:'30px'
        
                   }}
                   >2021/2020</p>
                 </div>

                 <div>
                   <img src={p} alt='image1' style={{
                    width:'100px',
                    height:'100px',
                
                   }}/>

                   <p className="yearprogram"
                   style={{
                    width:'80px',
                    height:'25px',
                    backgroundColor:'rgb(31, 119, 182)',
                    color:'white',
                    borderRadius:'7px',
                    fontSize:'0.5',
                    marginLeft:'13px',
                    marginTop:'30px'
        
                   }}
                   >2023/2024</p>
                 </div>



                
               </div>

            </div>
        
        </>
    )
}