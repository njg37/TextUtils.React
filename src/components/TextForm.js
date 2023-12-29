import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to uppercase" , "success");
    }
    const handleLoClick = () =>{
        let newText= text.toLowerCase();       
        setText(newText);
        props.showAlert("text converted to lowercase" , "success");
    }
    const handleClearClick = () =>{
        let newText= '';       
        setText(newText);
        props.showAlert("cleared text","success");
    }
  
    
    const handleOnChange = (Event) =>{
        // console.log("on change");
       setText(Event.target.value)
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied","success");
    }
    const hadleExtraSpace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra space","success");
    }

    const[text,setText]= useState('');
  
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#090756'}}>
            <h1>{props.heading}</h1>    
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#090756'}} id="myBox" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</div>
            <div className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</div>
            <div className="btn btn-primary" onClick={handleClearClick}>Clear text</div>
            <div className="btn btn-primary mx-3"  onClick={handleCopy}>Copy Text</div>
            <div className="btn btn-primary"  onClick={ hadleExtraSpace}>Remove Extra Space</div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#090756'}}>
            <h2>Your text Summary</h2>
            <p> {text.split(" ").length} words {text.length} characters</p>
            <p>{0.08 * text.split(" ").length}minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
