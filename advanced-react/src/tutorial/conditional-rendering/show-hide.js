import React,{useEffect,useState} from "react";
import '../../App.css';

const Showhide=()=>{
    const [show,setShow]=useState(false);

    return(
        <>
        <button className="btn" onClick={()=>{setShow(!show)}}>show/hide</button>
        </>
    );
}

export default Showhide;