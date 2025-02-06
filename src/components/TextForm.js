import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked -> " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Uppercase", "success");
    document.title = "TextUtils - Uppercase";
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked -> " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowercase", "primary");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("text cleared", "danger");
  };

  const handleCopyClick = () => {
    const textCopy = document.getElementById("myBox");
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "secondary");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    props.showAlert("Change", "warning");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            placeholder="Enter your text..."
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Enter something in textbox to preview it."}
        </p>
      </div>
    </>
  );
}
