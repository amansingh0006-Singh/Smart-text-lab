import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import React, { useState } from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
// import { BrowserRouter,Route } from "react-router-dom";


// function App() {
//   return (
//     <>
//     <h1> Hey This Me</h1>
//     <div classNameName=Name=Name="App">
//       <header classNameName=Name=Name="App-header">
//         <img src={logo} classNameName=Name=Name="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName=Name=Name="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React With Aman Singh
//         </a>
//      </header>

//</div>
// </>
//let name="Aman6";
function App() {
  const [mode, setMode] = useState("light");//whether dark mode enabled or not
  const [alert, setAlert]= useState(null);
  
  const showAlert = (message, side) => {
   setAlert({
    msg: message,
    type: side
   })
   setTimeout(() => {
    setAlert(null);
  }, 3000);
};
  
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title ="TextUtils -Dark Mode";
      // setInterval( () => {
      //   document.title = "TextUtiles is Amazing Mode";
      // }, 2000);
      // setInterval( () => {
      //   document.title = " Install TextUtiles Now";
      // }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title ="TextUtils -Light Mode";
      }
  }
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
<Router>
      <Navbar tittle ="Textutils"  aboutText="About"   mode={mode} toggle={toggle} />
      <Alert alert={alert}/>
      {/* <Navbar/>  
      <Navbar tittle="Textutils" mode={mode} toggleMode={toggleMode} /> */}
      <div className="container my-3">
      {/* /user --> components 1
      /user/home --> components 2 */}
      <Routes>
          <Route exact path= "/about"
            element ={<About  mode={mode} />} />
          
          <Route exact path="/"
             element ={<TextForm showAlert={showAlert} heading="Enter the value of Analyze below" mode={mode} />}>
            {/* <TextForm showAlert={showAlert} heading="Enter the value of Analyze below" mode={mode} /> */}
          </Route> 
          </Routes> 
         {/* <TextForm/> */}

         
         {/* <About/>  */}
         {/* <About/>  */}
      </div>
      {/* <nav>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        </nav>
        <img src="" alt=""/>
        <div ClasName="container">
          <h1>Hello {name}</h1>
 <p> MY NAME IS AMAN SINGH I AM BASICALLY FROM BOKARO STEEEL CITY BUT CRUNTYLY STAYING IN RANCHI</p>
 </div> */}
 </Router>
      {/* <div classNameName=Name=Name="blank">Lovely</div> */}
    </>
  );
}
export default App;
