import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#090756';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Darkmode";
      // setInterval(() => {
      //   document.title='TextUtils is amazing';
      // },2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      // document.title = "TextUtils - Lightmode";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About us"  /> */}
      
      <Navbar title="TextUtils"   mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />  
      <div className="container my-3">
      <TextForm showAlert={showAlert} mode={mode} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"/>
      {/* <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
          <Route exact path='/About' element={<About mode={mode}/>}/>
        </Routes>   */}
      </div>
      
    </>
  );
}

export default App;
