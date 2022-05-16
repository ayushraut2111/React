import React ,{useEffect,useRef} from "react";
import '../../App.css';
const UseRefBasics=()=>{
    const refContainer=useRef(null);   // useref variable is defined by this syntax
    const Submit=(e)=>{
        e.preventDefault();
        console.log(refContainer.current.value)
    }
    return(
        <>
        <form className="form" onSubmit={Submit}>
            <input type="text" ref={refContainer}/>  {/*if we want to include the useref then we have to include the ref attribute in any tag to access it */}
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default UseRefBasics;