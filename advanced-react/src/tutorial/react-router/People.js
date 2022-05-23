import React,{useState} from 'react'
import {data} from '../../data';
import '../../App.css';
const People = () => {
    const [people,setPeople]=useState(data);
  return (
    <>
    {people.map((person)=>{
        return <h4 className='user'>{person.name}</h4>
    })}
    </>
  )
}

export default People;