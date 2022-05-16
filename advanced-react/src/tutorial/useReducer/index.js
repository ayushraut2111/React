import React,{useState,useEffect} from 'react';
import {data} from '../../data'
import Modal from './Modal';
import '../../App.css'
const Index=()=>{
    const [name,setName]=useState('');
    const [people,setPeople]=useState(data);
    const [showModal,SetShowModal]=useState(false);
const Submit=(e)=>{
        e.preventDefault();
        if(name)
        {
            SetShowModal(true);
        setPeople([...people,{id:new Date().getTime().toString(),name}]);  // here we will add our input int the list with new id
        setName('');
        }
        else
        {
            SetShowModal(true);
        }
    }
    let a=0;
    return(
        <>
        {showModal&&<Modal/>}
        <form className='form' onSubmit={Submit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <br/>
        <button type='submit'>Add</button>
        </form>
        {
        people.map((person)=>{ 
            a++;   // here we are printing our list
            return <h1>{a}.{person.name}</h1>;
        })}
        </>
    );
}
export default Index;