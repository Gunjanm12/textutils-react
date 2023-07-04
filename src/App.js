
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(0);

  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    }) 
    setTimeout(() => {
      setalert(0);
    }, 1500);
  }




  const toggleMode=()=>{
    if (Mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode activated", "success");
      document.title="TextUtils- Dark mode";
      
    }
     else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode activated", "success");
      document.title="TextUtils- light mode";

    }
  }

  return (
    <>
    <Router>
     <Navbar title="TextUtils" aboutus="About" mode={Mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/> 
     < div className="container my-3">

     <Routes>
      
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below-" mode={Mode}/>}/>
           
      </Routes>
  
      </div>  
      </Router>
     
    </>
  );
}

export default App;
