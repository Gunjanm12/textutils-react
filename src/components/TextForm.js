import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
    const handleUpClick=()=>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleLowClick=()=>{
        // console.log("Upper case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");

    }
    const handleClearClick=()=>{
        // console.log("Upper case was clicked");
        let newText=("");
        setText(newText);
    }
    const handleClClick=()=>{
        // console.log("Upper case was clicked");
        let newText=text.charAt.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const[text,setText] = useState('');



    return(
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text} style={{backgroundColor: props.mode ==='dark' ? '#042743':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>

        <button className={`btn btn-${props.mode==='light'?'info':'light'} mx-2`} onClick={handleLowClick} style={{color: props.mode==='light'?'white':'black'}} > Convert to lowercase</button>
        <button className={`btn btn-${props.mode==='light'?'info':'light'} mx-2`} onClick={handleClClick} style={{color: props.mode==='light'?'white':'black'}} > Clear</button>
        <button className={`btn btn-${props.mode==='light'?'info':'light'} mx-2`}onClick={handleUpClick} style={{color: props.mode==='light'?'white':'black'}} > Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==='light'?'info':'light'} mx-2`}onClick={handleClearClick} style={{color: props.mode==='light'?'white':'black'}} > Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>You have used {text.split(" ").length-1} words, {text.length} characters until now.</p>
        <p>{0.008 * text.split(" ").length} minutes will be needed to read the above text. </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}