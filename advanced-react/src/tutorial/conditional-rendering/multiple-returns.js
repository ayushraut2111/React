import React, {useState,useEffect} from "react";
const url='https://api.github.com/users/ayushraut2111';
const MultipleReturn=()=>{
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState('default user')

    useEffect(()=>{
        fetch(url)    // at first when it renders first time it starts returning loading and then use effect calls and then as soon as it fetch data it sets the loading as false and then it fall into else condition of the return statement
        .then((resp)=>resp.json())     // to watch the effect slow down the network speed from console
        .then((res)=>{
            const{login}=res;
            setLoading(false);
            console.log("ayush")
            setUser(login);
        })
    },[]);

    if(loading)
    { 
        return <h1>loading....</h1>
    }
    else
    {
        return <h1>{user}</h1>
    }
};

export default MultipleReturn;