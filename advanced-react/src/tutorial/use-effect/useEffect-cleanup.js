import React,{useState,useEffect} from "react";
import '../../App.css'
const UseEffectCleanup=()=>{
    const [size1,setSize1]=useState(window.innerHeight);
    const [size2,setSize2]=useState(window.innerWidth);

    const sizechange=()=>{
        setSize1(window.innerHeight);
        setSize2(window.innerWidth);
    }

    useEffect(()=>{
        console.log('rendered')
        window.addEventListener('resize',sizechange);
        return ()=>{
            console.log('i am a cleanup function');
            window.removeEventListener('resize',sizechange);  // removeevent listener will remove the event which is acting on that variable(window)
            // after adding event we are adding remove eventlistener inside clean function so when cleaup function is called even listener is removed 
        }
    });

return(
    <>
    <h1>
        Window size 
    </h1>
    <h2 className="size" >height is {size1}</h2>
    <h2 className="size" >widht is {size2}</h2>
    </>
);
}

export default UseEffectCleanup;