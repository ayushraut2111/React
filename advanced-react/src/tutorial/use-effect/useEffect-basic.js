import React, {useState,useEffect} from "react";

const UseEffectBasic=()=>
{
    const [value,setValue]=useState(0);
    useEffect(()=>{
        document.title=`my value is ${value}`
        console.log("i am rendered");
    });
    return(
        <>
        <h1>UseEffectBasics</h1>
        <hr/>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>{setValue(value+1)}}>Click me</button>
        </>
    );
}

export default UseEffectBasic;