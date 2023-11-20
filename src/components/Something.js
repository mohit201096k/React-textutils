// import React from 'react'
import React, {useState} from 'react'
export default function Something(props) {
  const handleUpClick=() =>{
console.log('Change to upercase');
let newtext=text.toUpperCase();
setText(newtext);
// props.showAlert("converted to upper case","success");
  }
  const handleLoClick=() =>{
    console.log('Change to upercase');
    let newtext=text.toLocaleLowerCase();
    setText(newtext);
    // showAlert("converted to lower case","success");
      }
    const clearText=()=>{
      let newtext=""
      setText(newtext);
      // showAlert("cleared the text","success");
    }
  const handleOnChange=(event)=>{
    console.log('onchange handle');
    setText(event.target.value);
  }
  const[text,setText]=useState("");
  return (
    <>
    <div className='container' style ={{color:props.mode==='light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='light'? 'white':'grey',color:props.mode==='light'? 'black':'white'}}id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={clearText}>ClearText</button>
    </div>
    <div className="container my-3" style ={{color:props.mode==='light'? 'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words and {text.length} char. in your text</p>
      <p>{0.008*text.split(" ").length} minutes to read this</p>
      <h3>Preview</h3>
      <p>{text.length>0?text-1
      :"Enter something to text box above to preview it here"}</p>
    </div>
    </>
  )
}
