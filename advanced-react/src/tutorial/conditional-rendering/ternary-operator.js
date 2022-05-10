import React,{useState} from "react";

const TernaryOperator=()=>{
    const[text,setText]=useState('');
    const [isError,setIsError]=useState(false);
    return(
        <>
        <h1>{text||'ayush'}</h1>     
        
        </>
    );
};

export default TernaryOperator;