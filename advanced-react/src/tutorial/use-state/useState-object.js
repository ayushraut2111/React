import React from 'react';

const UseStateObject=()=>{
    const [person,setPerson]=React.useState({name:"ayush",age:20,message:"hello world"});
    const Chg=()=>{
        // setPerson({...person,message:"I am ayush"})
        setPerson((oldperson)=>
        {
            return({...oldperson,message:"ayush"})
        })
    }
    return(
        <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button onClick={Chg}>Change</button>
        </>
    );
}

export default UseStateObject;