import React, {useState,useEffect} from "react";

const MultipleReturn=()=>{
    const [loading,setLoading]=useState(true);
    if(loading)
    {
        
        return <h1>loading....</h1>
    }
    else
    {
        return <h1>not loading.....</h1>
    }
};

export default MultipleReturn;