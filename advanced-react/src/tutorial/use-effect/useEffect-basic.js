import React, {useState,useEffect} from "react";

const UseEffectBasic=()=>
{
    const [value,setValue]=useState(0);
    useEffect(()=>{                       
        console.log("i am rendered");
        if(value%2==0)                      // we can not use useEffect inside a conditional statement but we can use conditional statement in useeffect and usestate
        document.title=`my value is ${value}`;
        else
        document.title='title';
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