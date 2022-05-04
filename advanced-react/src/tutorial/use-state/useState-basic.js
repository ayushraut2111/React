import React, {useState} from 'react';
// useState is a inbuilt function
const USeStateBaiscs=()=>
{
    const[text,setText]=useState('Hello world');
    const Clicked=()=>{
        if(text==='Hello world')
        setText('I am clicked');
        else
        setText('Hello world');

    }
    return(
        <React.Fragment>
            <h2>UseStateBasic example</h2>
            <br/>
            <h1>{text}</h1>
            <button onClick={Clicked}>Button</button>
        </React.Fragment>
    );
}

export default USeStateBaiscs;