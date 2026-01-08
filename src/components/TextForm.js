import React, { useState } from "react";




 function TextForm(props) {
  const [text, setText] = useState("");
  const [isUpper, setIsUpper] = useState(false);

const handleToggleCase = () => {
  if (isUpper) {
    setText(text.toLowerCase());
    setIsUpper(false);
    props.showAlert("Converted to Lowercase", "success");
  } else {
    setText(text.toUpperCase());
    setIsUpper(true);
    props.showAlert("Converted to Uppercase", "success");
  }
};




  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    console.log("");
    let newText = "";
    setText(newText);
    props.showAlert("ClearText!", "success");
  };

  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  // This button dont work
  const handlecopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy To Clipboard!", "success");
  };
  const handleExtraSpace = (event) => {
    let newText = text.split(/[ ]+/);  
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space!", "success");
  
  };

const handleKebabCaseClick = () => {
  let newText = text
    .replace(/[\W_]+/g, ' ')  // Replace non-word characters and underscores with space
    .trim()                   // Trim leading/trailing spaces
    .toLowerCase()            // Convert to lowercase
    .split(/\s+/)             // Split on spaces
    .join('-');               // Join with hyphens

  setText(newText);
  props.showAlert("Converted to kebab-case!", "success");
};
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control"value={text} onChange={handleOnchange}
            style={{
              backgroundcolor: props.mode === "dark" ? "#013466e" : "white",
              color: props.mode === "dark" ? "black" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>  */}

        {/* <button onClick={handleUpClick}>Convert to Uppercase</button>
        <button onClick={handleLoClick}>Convert to Lowercase</button> */}
        <button className="btn btn-primary mx-2" onClick={handleToggleCase}>Toggle Case</button>



        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>


<button className="btn btn-primary mx-1 my-1" onClick={handleKebabCaseClick}>
   Kebab-case
</button>


      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character{" "}</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>

        <h2>Preview</h2>
        <p>
          {text.length >0? text: "Enter Something in the Textbox Above To Preview It Here  "}
        </p>
      </div>
    </>
  );
}
 

export default TextForm;
