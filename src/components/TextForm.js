import React, {useState} from 'react'

export default function TextForm(props) {


  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('convert to uppercase',"success")
    //document.title = 'Text Utils - uppercase';  to change the tile in top
  }

  const handleLoClick = ()=>{
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert('convert to lowercase',"success")
  }
  const handleClear =()=>{
    let clear = '';
    setText(clear)
    props.showAlert('Clear Text',"success")
  }

  const handleOnchange = (event)=>{
    setText(event.target.value);
  }

  const handleCopy = () =>{
    /*var text = document.getElementById("MyBox");
    text.select();*/
    document.getSelection().removeAllRanges(); //Remove all ranges
    navigator.clipboard.writeText(text);
    props.showAlert('Copy done',"success")
  }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  

  const handleDownload = () =>{
    function downloadTxtFile(text) {
      const element = document.createElement("a");
      const file = new Blob([text], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "file.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    downloadTxtFile(text);
    props.showAlert('Your file are download',"success")
  }
  



  // Declare a new state variable (Hook), which we'll call "count"
  const [text, setText] = useState('');

  let myStyle={
    backgroundColor: 'red'
  }

  return (
    <>
    
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="MyBox" value={text}  onChange={handleOnchange} rows="10"></textarea>
      </div>

      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear} style={myStyle}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra space</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownload}>Download Text</button>

    </div>

    <div className="class container my-3">
      <h2>Your Text Summary is here</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    </div>

    </>
  )
}
