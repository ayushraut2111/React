import React,{useEffect,useState} from "react";
import '../../App.css';

const Showhide=()=>{
    const [show,setShow]=useState(false);

    return(
        <>
        <button className="btn" onClick={()=>{setShow(!show)}}>show/hide</button>
        {show&&<Item/>}   {/* if the show is true then it will output the component item*/}
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
            window.removeEventListener('resize',Changesize);  // here we have to use cleanup function because when exiting use effect it will remove the eventlistener when componenet is not showing
        }
    });   // here we will not use [] because this will run everytime we show the component and will remain even after exiting useeffect so we have to clear the eventlistener

    return(
        <>
        <h1>window size:</h1>
        <h2>{size} Px</h2>
        </>
    );
}

export default Showhide;