import React from "react";

export const Product=({login,id})=>{
    return(
        <>
        <h5 style={{margin:'10px',color:'red',backgroundColor:'black',margin:'0px 10cm'}}>
            {login}
            <p style={{color:'blue'}}>${id}</p>
        </h5>
        </>
    );
}