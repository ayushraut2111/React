import React,{useState,useEffect} from "react";
import {useFetch} from '../custom-hooks/useFetch'
import { Product } from "./products";
const url='https://api.github.com/users'
const Index=()=>{
    const {products}=useFetch(url);
    console.log(products)
    return(
        <>
        <h1>
            -----Products-----
        </h1>
        <div>
            {products.map((product)=>{
                return <Product key={product.id} {...product}/>
            })}
        </div>
        </>
    )}
export default Index;