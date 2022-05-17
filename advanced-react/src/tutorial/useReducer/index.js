import React,{useState,useReducer} from 'react';
import {data} from '../../data'
import Modal from './Modal';
import '../../App.css'
const Index=()=>{
    const defaultstate={    // this is the default state object 
        people:[],
        isModalOpen:true,
        modalcontent:''
    }
    const reducer=(state,action)=>{   // this is a reducer function where we do all our task
        if(action.type==='ADD_ITEM')   // if the type is this then do this
        {
            return{
                ...state,people:[...state.people,{name:action.payload}],isModalOpen:true,modalcontent:'item added'  // reducer will always return state i.e. an object
            };
        }
        if(action.type==='EMPTY_ITEM')
        {
            return{
                ...state,isModalOpen:true,modalcontent:'please enter item'
            };
        }

    }
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultstate);  // declaration syntax of usereducer
const Submit=(e)=>{
     e.preventDefault();
        if(name)
        {
            dispatch({type:'ADD_ITEM',payload:name})  ;  // in dispatch type should match the type in reducer function then it will do that task
            setName('');
            state.isModalOpen=false;
        }
        else
        {
            dispatch({type:'EMPTY_ITEM'});

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
        {
        state.people.map((person)=>{ 
            a++;
            return <h1>{a}.{person.name}</h1>;
        })}
        </>
    );
}
export default Index;