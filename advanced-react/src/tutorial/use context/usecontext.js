import React,{useState,useContext} from "react";
import {data} from '../../data';
const PersonContext=React.createContext();  // with the help of usecontext hook we can access anything at any level without passing it
// in usecontext there are two functions provider and consumer,, provider is which is providing the functions so any components comes under provider at any level can access the passed value
const ContextAPI=()=>{
    const [people,setPeople]=useState(data);
    const Removeperson=(id)=>{    
        setPeople((people)=>{
            return people.filter((person)=>person.id!=id);
        });
    }
    return(
        <PersonContext.Provider value={{Removeperson,people}}>
        <h1>prop drilling</h1>
        <List people={people} Removeperson={Removeperson}/>
        </PersonContext.Provider>
    );
}

const List=()=>{
    const MainData=useContext(PersonContext);

    return(
        <>
        {MainData.people.map((person)=>{
            return <Singleperson key={person.id} {...person}/>;
        })}
        </>
    );
}
const Singleperson=({id,name})=>{
    const {Removeperson}=useContext(PersonContext);
    return(
        <>
        <h4 className="user">
            {name}
            <button className="btn" onClick={()=>Removeperson(id)}>Remove</button>
        </h4>
        </>
    );
}

export default ContextAPI;

