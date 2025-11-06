import { Route, Routes } from "react-router-dom";

import Profiles from "../../Pages/Profiles";
import Programs from "../../Pages/Programs";
import Subjects from "../../Pages/Subjects";
import Classrooms from "../../Pages/Classrooms";
import Contact from "../../Pages/Contact";
import About from "../../Pages/About";
import Request from "../../Pages/Request";
import CreatClass from "../../Pages/CreatClass";
import AddSubject from "../../Pages/AddSubject";


import First from "../../Pages/Createprogram/First";
import Second from "../../Pages/Createprogram/Second";
import Third from "../../Pages/Createprogram/Third";
import Fourth from "../../Pages/Createprogram/Fourth";
import Fifth from "../../Pages/Createprogram/Fifth";
import Fifth1 from "../../Pages/Createprogram/Fifth1";

import Home from "../../Pages/Home";

import PFirst from "../../Pages/Createprofile/PFirst";
import Auto from "../../Pages/Createprofile/Auto";
import PROGRAMFirst from "../../Pages/Createprogram/PROGRAMFirst";

function AppRoutes() {
  return (
    <Routes>
  
      <Route path="/home/" element={<Home />}> </Route>
      <Route path='/fall' element={<PFirst />}></Route> 
      <Route path='/programfall' element={<PROGRAMFirst />}></Route> 
      <Route path='/auto' element={<Auto />}></Route>
      
       <Route path="/creatclass" element={<CreatClass />}></Route>
     <Route path="/creatsubjects" element={<AddSubject />}></Route>

       <Route path='/programs' element={<Programs />}></Route>
       <Route path='/profiles' element={<Profiles />}></Route>
       <Route path='/subjects' element={<Subjects />}></Route>
      <Route path='/classrooms' element={<Classrooms />}></Route>
       <Route path='/contact' element={<Contact />}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='/request' element={<Request/>}></Route>

   

       <Route path='/first' element={<First />}></Route>
       <Route path='/second' element={<Second />}></Route>
      <Route path='/third' element={<Third />}></Route>
       <Route path='/fourth' element={<Fourth />}></Route>
       <Route path='/fifth' element={<Fifth />}></Route>
      <Route path='/fifth1' element={<Fifth1 />}></Route>
    </Routes>
  );
}
export default AppRoutes;
