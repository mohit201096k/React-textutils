
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Something from './components/Something';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg: message,
      type: type,
     })
     setTimeout(() => {
      setAlert(null)
     }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","succes")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","succes")
    }
  }
  return (
    <>
    <Router>
 <Navbar mode={mode} toggleMode={toggleMode}/>
 <Alert alert ={alert}/>
 <div className="container my-3" >
  <Routes>
    <Route path="/" element={<Something showAlert={showAlert} heading="Enter the text Below"mode={mode}/>} />
  <Route path="/about" element={<About />}/>
  {/* <About/> */}
  </Routes>
 </div>
 </Router>
     </>
  );
}
export default App;
