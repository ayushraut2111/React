import React,{useState,useEffect} from "react";
import {useFetch} from './useFetch'
const url='https://api.github.com/users'
const Example=()=>{        // we can make our custom hooks so that we can reuse it for any component also, so to make it declare it with use... keyword
    // and putting it in another js file so that we can import it and pass the information which it needed and then take the returned object and use it in main file
    const {products,loading}=useFetch(url);
    return(
        <>
        {loading?<h3>loading....</h3>:<h3>Data</h3>}
        </>
    );
}
export default Example;