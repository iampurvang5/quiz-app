import React, {useState} from 'react' 



export default function Text() {
    const uppercase=()=>{
        console.log("btn clicked")
        let upcase = text.toUpperCase();
        setText(upcase)
    }
    const lowrcase=()=>{
        console.log("btn clicked")
        let lcase = text.toLowerCase();
        setText(lcase)
    }
    const clear=()=>{
        console.log("btn clicked")
        setText("")
    }
    
    
    const change=(event)=>{
        console.log("change")
        setText(event.target.value)
    }
    const [text, setText] = useState("")

    let words = text.split(" ").filter((word) => word.trim().length > 0);

    return (
        <>
        <div className="box1">
            <div className="mb-3">
                <label for="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" value={text} onChange={change} rows="6"></textarea>
            </div>
            <div className="butn">
            <button type="button" className="btn btn-primary " onClick={uppercase}>Covert In UpCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={lowrcase}>Covert In LowerCase</button>
            <button type="button" className="btn btn-primary " onClick={clear}>Clear Text</button>
            
            </div>
        </div>
        <div className="box2 my-4">
            <h1>Text Summary:</h1>
            <p>Your text has <strong>{words.length}</strong> words and <strong>{text.length}</strong> characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
            
         
        </div>
        </>
    )
}
