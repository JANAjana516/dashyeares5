import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
// import Profiles from "./Pages/Profiles";
// import Programs from "./Pages/Programs";
// import Subjects from "./Pages/Subjects";
// import Classrooms from "./Pages/Classrooms";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
import Request from "./Pages/Request";
import CreatClass from "./Pages/CreatClass";
import AddSubject from "./Pages/AddSubject";


import First from "./Pages/Createprogram/First";
// import Second from "./Pages/Createprogram/Second";
// import Third from "./Pages/Createprogram/Third";
// import Fourth from "./Pages/Createprogram/Fourth";
// import Fifth from "./Pages/Createprogram/Fifth";
// import Fifth1 from "./Pages/Createprogram/Fifth1";
import Login from "./Pages/Login";
import One from "./Pages/Mobile/One";
import Fife from "./Pages/Mobile/Fife";
import Four from "./Pages/Mobile/Four";
import Thri from "./Pages/Mobile/Thri";
import Two from "./Pages/Mobile/Two";
// import Auto from "./Pages/Createprofile/Auto";
import ALLprofile from "./Pages/Createprofile/ALLprofile";
import PFirst from "./Pages/Createprofile/PFirst";
import Stepf from "./Pages/Createprofile/Stepf";
import Auto from "./Pages/Createprofile/Auto";
import PROGRAMFirst from "./Pages/Createprogram/PROGRAMFirst";





function App() {
  
  return (
    <Routes> 
     <Route path='all' element={<ALLprofile />}></Route> 
    
     <Route path='/stepf' element={<Stepf />}></Route> 
    <Route path='/' element={<Login />}></Route>
    <Route path='/home/*' element={<Home/>}>
    <Route path='first' element={<First />}></Route>
    
     <Route path="creatclass" element={<CreatClass />}></Route>
      <Route path="creatsubjects" element={<AddSubject />}></Route>
      <Route path='request' element={<Request/>}></Route>
{/* 
      <Route path='/home/programs' element={<Programs />}></Route>
      <Route path='/home/profiles' element={<Profiles />}></Route>
      <Route path='/home/subjects' element={<Subjects />}></Route>
      <Route path='/home/classrooms' element={<Classrooms />}></Route>
      <Route path='/home/contact' element={<Contact />}></Route>
      <Route path='/home/about' element={<About />}></Route>
      

      <Route path='/home/creatprofile1' element={<CreatProfile1  />}></Route>
    
      <Route path='/home/createprofile2' element={<CreatProfile2 />}></Route>

      <Route path='/home/createprofile3' element={<CreatProfile3 />}></Route> */}
      <Route path='fall' element={<PFirst />}></Route> 
      <Route path='programfall' element={<PROGRAMFirst />}></Route>
      <Route path='auto' element={<Auto />}></Route>
      
      
      

      {/* <Route path='/home/first' element={<First />}></Route>
      <Route path='/home/second' element={<Second />}></Route>
      <Route path='/home/third' element={<Third />}></Route>
      <Route path='/home/fourth' element={<Fourth />}></Route>
      <Route path='/home/fifth' element={<Fifth />}></Route>
      <Route path='/home/fifth1' element={<Fifth1 />}></Route> */}
    
    </Route>
    
 
    <Route path='/M/one' element={<One />}></Route>
    <Route path='/M/two' element={<Two />}></Route>
    <Route path='/M/thri' element={<Thri />}></Route>
    <Route path='/M/four' element={<Four />}></Route>
    <Route path='/M/fife' element={<Fife />}></Route>
 
   </Routes> 

  );
}
export default App;
