import React, {useState} from 'react';
// useState is a inbuilt function
const USeStateBaiscs=()=>
{ 
    console.log(useState('hello world'))    // its output is [hello world, f] that means it is returning array so we can access it like array
    return(
        <React.Fragment>
            <h2>UseStateBasic example</h2>
        </React.Fragment>
    );
}

export default USeStateBaiscs;