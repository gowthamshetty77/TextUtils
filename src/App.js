import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#033853";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils - Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        title="TextUtils"
        aboutText="About"
      />
      {/* <Navbar /> */}

      {/* <Alert alert={alert} /> */}

      {/* <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={ */}
      <TextForm
        showAlert={showAlert}
        mode={mode}
        heading="Enter the text to analyze below"
      />
      {/* } */}
      {/* ></Route>
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
