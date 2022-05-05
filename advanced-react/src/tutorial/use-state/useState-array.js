import React,{useState} from 'react';
import {data} from '../../../src/data'   // .. means going to the back folder
// instead of importing {useState} we can also use React.useState wherever we want to use useState

const UseStateArray=()=>
{
    console.table(data);
    return(
        <React.Fragment>
            <h3>Hello i am usestate array</h3>
        </React.Fragment>
    );
}

export default UseStateArray;