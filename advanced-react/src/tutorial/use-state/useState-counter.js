import React ,{useState} from 'react';
import '../../../src/App.css';
const UseStateCounter=()=>
{
    const [num,setNum]=useState(1);
    return(
        <>
        <h1>Regular counter</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num-1)} className="btn">Decrease</button>
        <button onClick={()=>setNum(1)} className="btn">Reset</button>
        <button onClick={()=>setNum(num+1)} className="btn">increase</button>
        </>
    );
}
export default UseStateCounter;