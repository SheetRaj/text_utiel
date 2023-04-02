import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }


  return (
    <>
    <Router> 
    <Navbar title="TextUtils"/>
    <Alerts alert ={alert}/>

    <div className="container my-3">
    
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    
    

    </div>
    </Router>
  
    </>
    
  );
}

export default App;
