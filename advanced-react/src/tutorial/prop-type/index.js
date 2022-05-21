import React,{useState,useEffect} from "react";
import {useFetch} from '../custom-hooks/useFetch'
import { Product } from "./products";
const url='https://api.github.com/users'
const Index=()=>{
    // const {products}=useFetch(url);
    // console.log(products)
    // return(
    //     <>
    //     <h1>
    //         -----Products-----
    //     </h1>
    //     <div>
    //         {products.map((product)=>{
    //             return <Product key={product.id} {...product}/>
    //         })}
    //     </div>
    //     </>
    const abc={id:1,name:'ayush',class:{k:1}};
    return(
        <>
        <List key={abc.id}abc={abc}/>
        </>
    );}

const List=({abc})=>{
    return(<h1>{abc.class.j}</h1>)  // this will throw an error
}
export default Index;