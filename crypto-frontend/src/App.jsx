import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies/Currencies";
import Main from "./pages/Main/Main";
import Price from "./pages/Price/Price";
import Nav from "./components/Nav/Nav";
import './App.css';
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";





function App() {
  

  return (
    <>
        <div className="App">
        
          <Nav/>
          
      <Routes>
      <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/prices" element={<Price/>}/>
        <Route path="/prices/:symbol" element={<Price/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </div>
      
    </>
  )
}

export default App




