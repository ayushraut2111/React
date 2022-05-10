import React,{useState} from "react";
import '../../App.css';
const TernaryOperator=()=>{
    const[text,setText]=useState('');
    const [isError,setIsError]=useState(false);
    return(
        <>
        <h1>{text||'ayush'}</h1>     
        <button type="button" className="btn" onClick={()=>setIsError(!isError)}>Toggle Error</button>
        {isError? <h1>There is a Error....</h1>:<h1>no error....</h1>}  
        {/* unlike and /or operator ternary operaor return two value one for false and other for true */}
 
        </>
    );
};

export default TernaryOperator;