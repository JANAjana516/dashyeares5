import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Request from "./Pages/Request";
import CreatClass from "./Pages/CreatClass";
import AddSubject from "./Pages/AddSubject";
import First from "./Pages/Createprogram/First";
import Login from "./Pages/Login";
import One from "./Pages/Mobile/One";
import Fife from "./Pages/Mobile/Fife";
import Four from "./Pages/Mobile/Four";
import Thri from "./Pages/Mobile/Thri";
import Two from "./Pages/Mobile/Two";
import ALLprofile from "./Pages/Createprofile/ALLprofile";
import PFirst from "./Pages/Createprofile/PFirst";
import Stepf from "./Pages/Createprofile/Stepf";
import Auto from "./Pages/Createprofile/Auto";
import PROGRAMFirst from "./Pages/Createprogram/PROGRAMFirst";

function App() {
  return (
    <Routes>
      {/* Login page at root */}
      <Route path="/" element={<Login />} />

      {/* Home routes */}
      <Route path="/home/*" element={<Home />}>
        <Route path="first" element={<First />} />
        <Route path="creatclass" element={<CreatClass />} />
        <Route path="creatsubjects" element={<AddSubject />} />
        <Route path="request" element={<Request />} />
        <Route path="fall" element={<PFirst />} />
        <Route path="programfall" element={<PROGRAMFirst />} />
        <Route path="auto" element={<Auto />} />
      </Route>

      {/* Profile routes */}
      <Route path="/all" element={<ALLprofile />} />
      <Route path="/stepf" element={<Stepf />} />

      {/* Mobile routes */}
      <Route path="/M/one" element={<One />} />
      <Route path="/M/two" element={<Two />} />
      <Route path="/M/thri" element={<Thri />} />
      <Route path="/M/four" element={<Four />} />
      <Route path="/M/fife" element={<Fife />} />

      {/* Redirect unknown routes to Login */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
