import React,{useState} from 'react';
import {data} from '../../../src/data'   
import '../../../src/App.css';

// .. means going to the back folder
// instead of importing {useState} we can also use React.useState wherever we want to use useState

const UseStateArray=()=>
{
    const [people,setPeople]=useState(data);
    const Dlt=(id)=>{
        let ft=people.filter((person)=>person.id!==id);
        setPeople(ft);
    }
    return(
        <React.Fragment>
            {people.map((person)=>
            {
                return(<><Persons key={person.id} {...person}/>
                        <button onClick={()=>Dlt(person.id)}>Delete</button>
                        </>
                );  
            })}
        </React.Fragment>
    );
}

const Persons=(props)=>{
    const {id,name}=props;
    return(
        <div>
            <h4 id='head'>{name}</h4>
        </div>
    );
}

export default UseStateArray;