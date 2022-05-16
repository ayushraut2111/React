import React,{useState,useReducer} from 'react';
import {data} from '../../data'
import Modal from './Modal';
import '../../App.css'
//😂😂😂😂😂😂😂
const Index=()=>{
    const defaultstate={
        people:[],
        isModalOpen:true,
        modalcontent:'hello world'
    }
    const reducer=(state,action)=>{

    }
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultstate);
const Submit=(e)=>{
        e.preventDefault();
        if(name)
        {
           
        }
        else
        {
            
        }
    }
    let a=0;
    return(
        <>
        {state.isModalOpen&&<Modal modalcontent={state.modalcontent} />}
        <form className='form' onSubmit={Submit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <br/>
        <button type='submit'>Add</button>
        </form>
        {/* {
        state.people.map((person)=>{ 
            a++;
            return <h1>{a}.{person.name}</h1>;
        })} */}
        </>
    );
}
export default Index;