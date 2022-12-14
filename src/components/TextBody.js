import React,{useState} from 'react'

export default function TextBody(props) {
    const [text,setText] = useState("");
    const textChange = (event)=>{
        setText(event.target.value)
    }
    const textToUpperCase = ()=>{
        setText(text.toUpperCase())
        props.displayAlert("Converted to Uppercase","success");
    }
    const textToLowerCase = ()=>{
        setText(text.toLowerCase())
        props.displayAlert("Converted to Lowercase","success");
    }
    const textReplicate = ()=>{
        let newText = text;
        setText(newText + text);
        props.displayAlert("Text Got replicated","success");
    }
    const clearText = ()=>{
        setText('');
        props.displayAlert("Text Cleared!!","success");
    }
    const invertText = ()=>{
        let newText = text;
        let modifiedText = newText.split("").map(i=>{
            if (i === i.toUpperCase()){
                i = i.toLowerCase();
            }
            else{
                i = i.toUpperCase();
            }
            return i;
        })
        setText(modifiedText.join(""));
        props.displayAlert("Text Inverted!!","success");
    }
    const wordCounter = ()=>{
        if (text === ""){
            return 0;
        }
        else {
            let wordCount = 0;
            for (let line of text.split("\n")){
                for(let word of line.split(" ")){
                    if (word !== ""){
                        wordCount++;
                    }
                }
            }
            return wordCount;
        }
    }
    return (
        <>
            <div className="container my-4">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="textbody" value={text} onChange={textChange} rows="10" style={{backgroundColor:props.mode==="light"?"white":props.mode==="green"?"rgb(17 45 17)":"black" , color:props.mode==="light"?"black":props.mode==="green"?"#a7e9a7":"white" }} placeholder="Enter Your Text Here"></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light"?"secondary":(props.mode==="blue"?"primary":"dark")} mx-2 my-1`} onClick={textToUpperCase}>Change to UpperCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light"?"secondary":(props.mode==="blue"?"primary":"dark")} mx-2 my-1`} onClick={textToLowerCase}>Change to LowerCase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light"?"secondary":(props.mode==="blue"?"primary":"dark")} mx-2 my-1`} onClick={textReplicate}>Replicate Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light"?"secondary":(props.mode==="blue"?"primary":"dark")} mx-2 my-1`} onClick={invertText}>Invert Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light"?"secondary":(props.mode==="blue"?"primary":"dark")} mx-2 my-1`} onClick={clearText}>Clear text</button>
            </div>
            <div className="container">
                <h2 className="my-3">
                    Your text
                </h2>
                <p>Words : {wordCounter()} and Characters : {text.length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text to preview"}</p>
            </div>
        </>
    )
}
