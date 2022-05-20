import React,{useState} from "react";
import {data} from '../../data';
const PropDrilling=()=>{
    const [people,setPeople]=useState(data);
    const Removeperson=(id)=>{    // prop drilling means passing function as a prop
        setPeople((people)=>{
            return people.filter((person)=>person.id!=id);
        });
    }
    return(
        <>
        <h1>prop drilling</h1>
        <List people={people} Removeperson={Removeperson}/>
        </>
    );
}

const List=({people,Removeperson})=>{
    return(
        <>
        {people.map((person)=>{
            return <Singleperson key={person.id} {...person} Removeperson={Removeperson}/>;
        })}
        </>
    );
}
const Singleperson=({id,name,Removeperson})=>{
    return(
        <>
        <h4 className="user">
            {name}
            <button className="btn" onClick={()=>Removeperson(id)}>Remove</button>
        </h4>
        </>
    );
}

export default PropDrilling;

