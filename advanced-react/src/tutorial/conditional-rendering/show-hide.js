import React,{useEffect,useState} from "react";
import '../../App.css';

const Showhide=()=>{
    const [show,setShow]=useState(false);

    return(
        <>
        <button className="btn" onClick={()=>{setShow(!show)}}>show/hide</button>
        {show&&<Item/>}
        </>
    );
}
const Item=()=>{
    const [size,setSize]=useState(window.innerWidth);

    const Changesize=()=>{
        setSize(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize',Changesize);

        return ()=> {
            window.removeEventListener('resize',Changesize);
        }
    });

    return(
        <>
        <h1>window size:</h1>
        <h2>{size} Px</h2>
        </>
    );
}

export default Showhide;