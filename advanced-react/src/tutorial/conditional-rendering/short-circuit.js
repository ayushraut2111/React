import React,{useState} from "react";

const ShortCircuit=()=>{
    var text='';
    return(
        <>
        <h1>{text||'ayush'}</h1>      {/* if text is false then return second statement i.e. ayush */}
        <h1>{!text&&"hello"}</h1>     {/* if text is true only then execute the second statement */}
        {!text&&  <div><h1>hello</h1><h2>ayush</h2></div>}    {/* we can use short circuit in both way this is same as above */} 
        {/* if we want to execute more statements in conditional then we can use this in {} like above */}
        </>
    );
};

export default ShortCircuit;