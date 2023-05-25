import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handelUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is Converted to Upper Case", "success");
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const handelLoClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is Converted to Lower Case", "success");
  };

  const handelClearClick = (event) => {
    setText("");
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied successfully", "success");
  };

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All extra spacess are removed", "success");
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handelOnChange}
          placeholder="Your text goes here"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={handelUpClick}>
          Convert to upper Case
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handelLoClick}>
          Convert to lower Case
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handelClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={handelExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes are required to read this
          text
        </p>
      </div>
      <div className="container my-3">
        <h2>Preview</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          value={text.length > 0 ? text : "Enter something to preview it here"}
          placeholder="You can see Preview Here"
          disabled
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        {/* <p>{text}</p> */}
      </div>
    </div>
  );
}
