import React,{useState} from "react";

const Toogle = () =>{
    const [isOn,setIsOn] = useState(false);
    const handleToogle = () =>{
        setIsOn(!isOn)
    }
    
    return(
        <div>
            <h1>Toggle Switch</h1>
            <button onClick={handleToogle}>
            {isOn ? "Hide" : "Show"}
            </button>
            {isOn && <p>this is text</p>}
        </div>
    )
}
export default Toogle;