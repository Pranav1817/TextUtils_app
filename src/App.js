import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleModeText, setToggleModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setToggleModeText("Enable Light Mode");
      document.body.style.backgroundColor = "#060e50";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      setToggleModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
        toggleModeText={toggleModeText}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
